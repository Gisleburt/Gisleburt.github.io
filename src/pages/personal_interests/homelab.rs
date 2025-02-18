use crate::components::Page;
use dioxus::prelude::*;

#[component]
pub fn Homelab() -> Element {
    rsx! {
        Page {
            title: "Homelab",
            section {
                h2 { "A what now?" }
                p { "You could think of a homelab as your own personal, at-home data centre, but the possibilities of what you can do with it extend far beyond what you might want to run on AWS or GCP or the like." }
                p { "As a software engineer its a great place for me to learn new technologies and techniques, but I also use it to run useful home services like home automation software, backup data, extend my computers storage, etc" }
            }
            section {
                h2 { "Hardware" }
                p { "Currently, my lab contains:" }
                ul {
                    li { "3x Raspberry Pi 4s, used to control the cluster and for smaller tasks on arm64 architecture" }
                    li { "2x Intel NUCs, specifically NUC8v5PN, used for more more demanding or specifically amd64 (x86/64) tasks" }
                    li { "1x  QNAP TS-435xeu, providing storage" }
                    li { "Ubiquiti Unifi networking gear to provide a VLAN" }
                }
                p { "I have more hardware on the way, specifically I aim to replace the Raspberry Pi 4s with CM4s with NVMEs as SD cards are not stable enough to run the cluster reliably (I also ought to move control of the cluster to the NUCs to mitigate this)." }
            }
            section {
                h2 { "Software" }
                p { "The key to the system is " a { href: "https://k3s.io/", "K3s" } " which is a slimmed down version of Kubernetes, originally created by Rancher, but now owned by SUSE. Kubernetes is a system that allows you to run arbitrary workloads across any number of compute nodes. You ask it to run a service, tell it how many copies of that service to run, and it will decide which machines will actually host the software. In my case, one of my Raspberry Pis acts as the controller, while the other two, and the two NUCs all act as workers." }
                p { "The QNAP NAS provides its own software but is configured to provide storage to the cluster, workloads can request disk access from the NAS and if the workload moves from one node to another, can maintain its storage despite the relocation." }
                p { "Within the cluster I run a variety of services, though a lot of it is simple logging, monitoring, and alerting software so that I know if anything is wrong. In addition though, some of my favourite services include:" }
                ul {
                    li { "Gitlab CI Runners, these allow me to run my CI/CD pipelines on my own hardware decreasing cost and increasing efficiency, as well as being able to decide if I wasn't to run them on ARM64 or AMD64 processors" }
                    li { "Plex, this allowed me to copy my DVD collection to my NAS and create an in-house streaming service of things I own the physical media for" }
                    li { "Factorio, my NUCs are powerful enough to run dedicated game servers, currently the only one I'm running is Factorio but I would like to try others" }
                }
            }
            section {
                h2 { "What's next?" }
                p { "I'm currently waiting on new hardware arriving but anticipate a full redesign and rebuild in the near future!" }
                p { "The main things I want to achieve are further improving the Infrastructure as Code approach, and building out more services, particularly I'd like to move away from my personal dependency on Google Apps. To do this though I'll need to be more confident in my approach to backups, and this might involve setting up an off-site, cut down mirror of the cluster." }
                p { "I also want to do more things with web servers. Most of my projects (including the site you're looking at now) are currently built with Static Site Generators (SSGs) which means I'm not doing much with server side technologies, essentially the backbone of my career. Opening ports into my homelab is a " em { "touch" } " scary though!" }
            }
            section {
                h2 { "Learn more" }
                p { "You can find the " a { href: "https://github.com/Gisleburt/homelab", "Infrastructure as Code configuration with instructions" } " on my GitHub" }
            }
        }
    }
}
