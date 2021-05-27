FROM gitpod/workspace-full
RUN sudo apt-get update && sudo apt-get install -y libgtk-3-0 libx11-xcb1 libnss3 libxss1 libasound2 zsh
RUN sudo sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
