export default function handler(req, res) {
  const script = `#!/bin/bash
sudo apt update
sudo apt install -y htop curl neofetch
echo "Configuração concluída!"`;

  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(script);
}