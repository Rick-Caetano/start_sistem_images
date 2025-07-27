export default function handler(req, res) {
  const script = `#!/bin/bash
sudo apt update
sudo apt upgrade
sudo apt install aircrack-ng
sudo apt install -y htop curl neofetch
echo "Configuração concluída!"`;

  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(script);
}
