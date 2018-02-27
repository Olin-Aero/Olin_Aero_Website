# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/xenial64"
  config.vm.network :forwarded_port, guest: 4000, host: 4567
  config.vm.provider "virtualbox" do |vb|
    vb.name = "iarc-website"
  end
end
