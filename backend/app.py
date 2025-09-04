from flask import Flask, render_template, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv
import os

# LangChain & Gemini imports
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_pinecone import PineconeVectorStore
from langchain.chains import create_retrieval_chain
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain_core.prompts import ChatPromptTemplate

# Your helpers and prompts
from src.helper import download_embeddings
from src.prompt import* 

# Load .env
load_dotenv()

# API keys
os.environ["PINECONE_API_KEY"] = os.getenv("PINECONE_API_KEY")
os.environ["GEMINI_API_KEY"]   = os.getenv("GEMINI_API_KEY")

# Initialize Flask
app = Flask(__name__)
CORS(app)

# Build embeddings and vector store once at startup
embeddings = download_embeddings()
index_name = "medical-chatbot"
docsearch = PineconeVectorStore.from_existing_index(
    index_name=index_name,
    embedding=embeddings
)
retriever = docsearch.as_retriever(search_kwargs={"k": 3})

# Initialize Gemini chat model
chatmodel = ChatGoogleGenerativeAI(
    model="gemini-1.5-pro-latest",
    google_api_key=os.environ["GEMINI_API_KEY"]
)

# Prompt & chains
prompt = ChatPromptTemplate.from_messages([
    ("system", system_prompt),
    ("user", "{input}")
])
document_chain  = create_stuff_documents_chain(chatmodel, prompt)
rag_chain       = create_retrieval_chain(retriever, document_chain)

@app.route("/")
def index():
    return render_template("chat.html")  # your existing UI template

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_msg = data.get("message", "")
    if not user_msg:
        return jsonify({"error": "No message provided"}), 400

    result = rag_chain.invoke({"input": user_msg})
    answer = result.get("answer")
    return jsonify({"answer": answer})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080, debug=True)
