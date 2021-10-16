FROM fnndsc/ubuntu-python3:ubuntu20.04-python3.8.5 

COPY ./src /app
COPY ./_files /tmp

RUN mv /tmp/sources.list /etc/apt/sources.list \
    && mv /tmp/docker-python-entrypoint /usr/local/bin/docker-python-entrypoint \
    && chmod +x /usr/local/bin/docker-python-entrypoint \
    && rm -rf /tmp/* \
    && pip install -r app/requirements.txt \
    && apt update \
    && apt install -y openssh-server \
    && sed -ri 's/^#?PermitRootLogin\s+.*/PermitRootLogin yes/' /etc/ssh/sshd_config \
    && useradd -g www-data vaala -m && \
    password=$(openssl passwd -1 -salt 'abcdefg' '123456') && \
    sed -i 's/^vaala:!/vaala:'$password'/g' /etc/shadow \
    && echo "root:vaalacatkawai" | chpasswd
EXPOSE 22

EXPOSE 80

WORKDIR /app

#不用cmd，因为用的镜像有一个entrypoint['python3']。故下面这样写用来覆盖原来的entrypoint
ENTRYPOINT ["/bin/bash", "-c", "docker-python-entrypoint"]