export default function handler(req, res) {
  const script = `#!/bin/bash
sudo apt update
sudo apt install -y htop curl neofetch
sudo apt install aircrack-ng
echo "Configuração concluída!"`;

  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(script);
}
