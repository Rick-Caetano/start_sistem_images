def handler(request, response):
    response.setHeader("Content-Type", "text/plain")
    response.send("""#!/bin/bash
sudo apt update
sudo apt install -y htop curl neofetch
sudo apt install aircrack-ng
echo "Configuração concluída!"
""")
