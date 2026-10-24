# CNE---Cloud-Native-Engineering---Honeypot-Projekt
CNE Hochschul-Projekt -  Honeypot Projekt


Beginner Project - plz dont judge me to hard (,,>﹏<,,)👉👈


## Kurzbeschreibung

Wir entwickeln einen cloudbasierten Honeypot, der einen absichtlich verwundbar bzw. attraktiv wirkenden Dienst simuliert und eingehende Zugriffsversuche erfasst. Ziel ist es, Angriffsversuche zu erkennen, strukturiert zu protokollieren und über ein Web-Dashboard auszuwerten. Der Honeypot soll als containerisierte Anwendung umgesetzt und automatisiert über eine CI/CD-Pipeline gebaut und in der Cloud bereitgestellt werden. Dabei sollen verschiedene Cloud-Native-Konzepte wie Containerisierung, Infrastructure/Configuration as Code, automatisierte Deployments, Health Checks, Logging und Monitoring eingesetzt werden. Das Projekt wird als lauffähiger MVP umgesetzt und lokal mit derselben Umgebung wie in der Cloud ausführbar sein.

## Geplante Features

1. **Honeypot-Service**

   * Simulation eines typischen Netzwerkdienstes, z. B. SSH oder einer einfachen Web-Anwendung
   * Erfassung von Verbindungsversuchen und verdächtigen Requests
   * Strukturierte Speicherung der Events

2. **Monitoring & Dashboard**

   * Weboberfläche zur Darstellung der erkannten Zugriffsversuche
   * Informationen wie Zeitpunkt, Quelle, Request/Command und Art des Zugriffs
   * Einfache Statistiken, z. B. Anzahl der Angriffe und häufigste Quellen

3. **Cloud-Native Deployment**

   * Containerisierung mit Docker
   * Automatisierter Build und Deployment über GitHub Actions
   * Deployment in eine Cloud-Umgebung mit Health Checks und zentralisiertem Logging

## Geplanter Techstack

* **Backend:** Python / FastAPI
* **Frontend:** React oder einfache serverseitige Weboberfläche
* **Honeypot:** eigener HTTP-/SSH-Honeypot
* **Containerisierung:** Docker
* **Persistenz:** PostgreSQL


* **Monitoring:** Prometheus und Grafana
* **Logging:** strukturierte JSON-Logs
* **Infrastructure as Code:** Terraform
* * **Cloud:** z. B. Kubernetes / Managed Kubernetes
