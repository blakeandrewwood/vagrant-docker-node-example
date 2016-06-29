# vi: set ft-ruby :

Vagrant.configure(2) do |config|

  # Base Box
  config.vm.box = "ubuntu/trusty64"

  # Network
  config.vm.network "forwarded_port", guest: 49160, host: 8080
  #config.vm.network "private_network", ip: "192.168.33.10"

  # Provision
  config.vm.provision "docker"
  config.vm.provision "shell", inline: "docker network create network"
  config.vm.provision "docker" do |d|
    d.build_image "/vagrant/app", args: "-t node-app"
    d.run "postgres", args: "-it --net network -e POSTGRES_PASSWORD=secret"
    d.run "node-app", args: "-it --net network -p 49160:8080 -v '/vagrant/app:/src/app'"
  end

end
