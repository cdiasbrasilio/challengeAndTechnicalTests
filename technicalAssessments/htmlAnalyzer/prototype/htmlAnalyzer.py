import sys
import urllib.request
import urllib.error

def analyze_html(url):
    try:
        # Definindo um User-Agent para evitar bloqueios simples de bots
        headers = {'User-Agent': 'Mozilla/5.0'}
        req = urllib.request.Request(url, headers=headers)
        
        with urllib.request.urlopen(req) as response:
            # Lendo e decodificando como UTF-8 conforme requisito técnico 6
            content = response.read().decode('utf-8')
            lines = content.splitlines()
    except Exception:
        # Requisito técnico 5c: Mensagem específica para erro de conexão 
        return "URL connection error"

    stack = []
    max_depth = -1
    deepest_text = None
    
    for line in lines:
        line = line.strip() # Requisito: espaços de indentação devem ser ignorados [cite: 20]
        
        if not line: # Requisito: linhas em branco devem ser ignoradas [cite: 21]
            continue
            
        # Caso A: Tag de fechamento (ex: </div>) [cite: 15]
        if line.startswith('</') and line.endswith('>'):
            tag_name = line[2:-1]
            if not stack or stack[-1] != tag_name:
                return "malformed HTML" # Bônus: identificação de malformação 
            stack.pop()
            
        # Caso B: Tag de abertura (ex: <div>) [cite: 14]
        elif line.startswith('<') and line.endswith('>'):
            tag_name = line[1:-1]
            stack.append(tag_name)
            
        # Caso C: Trecho de texto [cite: 16]
        else:
            current_depth = len(stack)
            # Regra: se houver empate, o primeiro deve ser retornado [cite: 10]
            if current_depth > max_depth:
                max_depth = current_depth
                deepest_text = line
                
    # Se sobrar algo na pilha, o HTML não fechou todas as tags 
    if stack:
        return "malformed HTML"
        
    return deepest_text if deepest_text is not None else ""

if __name__ == "__main__":
    if len(sys.argv) < 2:
        sys.exit(1)
        
    url_input = sys.argv[1]
    result = analyze_html(url_input)
    if result: # Só imprime se houver resultado, conforme o padrão esperado [cite: 30]
        print(result)