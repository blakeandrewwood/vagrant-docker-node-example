# vi: set ft-ruby :

Vagrant.configure(2) do |config|

  # Base Box
  config.vm.box = "ubuntu/trusty64"

  # Network
  config.vm.network "forwarded_port", guest: 49160, host: 8080
  #config.vm.network "private_network", ip: "192.168.33.10"
  #config.vm.network "public_network", ip: "192.168.2.20"

  # Files
  #config.vm.synced_folder "../data", "/vagrant_data"

  # Provision
  config.vm.provision "docker" do |d|
    d.build_image "/vagrant/app", args: "-t node-app"
    d.run "node-app", args: "-p 49160:8080"
  end

end
