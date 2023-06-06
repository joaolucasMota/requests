import requests

url = "https://cosmic-backbone-386318.rj.r.appspot.com/hashCodeServer"
params = {
    "nome": "Joao Lucas Mota",
    "email": "joaolucasmmd@gmail.com",
    "cpf": "701.400.561-81"
}

response = requests.post(url, data=params)
data = response.json()

print("Resposta:", data["resposta"])
print("Código hash:", data["hash"])
print("Pergunta:", data["pergunta"])
