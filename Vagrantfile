# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/xenial64"
  config.vm.network :forwarded_port, guest: 4000, host: 4567, auto_correct: true
  config.vm.provision "shell", path: "bootstrap.sh"
  config.vm.provider "virtualbox" do |vb|
    vb.name = "iarc-website"
    vb.memory = 4096
    vb.cpus = 4
  end
end
