# Teneo Test
Ovo je modul za upravljanje odsustvima radnika, što je ključni dio aplikacije za praćenje i administraciju odsutnosti zaposlenika unutar organizacije. Ovaj modul omogućava praćenje i odobravanje različitih vrsta odsustava. Takođe, modul uključuje registraciju službenih putovanja prema zadatim smjernicama.

  

## Funkcionalnosti

### Registracija Službenog Putovanja

- Kalendar za Registraciju: Klikom na dugme „Registruj odsustvo“ otvara se modal u kojem korisnik može unijeti datum ili period za koji želi registrirati službeni put. Nakon toga, korisnik se preusmjerava na formu za popunjavanje dodatnih informacija.

- Podaci za Unos: Mogućnost odabira više odredišnih država, dodavanje iznosa akontacije, obračun putnih troškova (uključuje troškove prevoza, noćenja i ostale moguće troškove) i izjava da li su bi omogućeni obroci tokom službenog puta
-Akcije po zahtjevu: Omogućava pregled zahtjeva na portalu, klikom na kdugme se preuzima Excel dokument sa podacima o putnom nalogu i opcija zaključavanja klikom na katanac dugme nakon čega korisnik više nema pristup drugim aktivnostima.

## Instalacija i pokretanje

- git clone https://github.com/zakiraskaljic/teneo-task.git
-  cd teneo-task
- npm install
- npm run dev 

##  Razvoj i Prilagođavanje

-   **Prikaz Datuma i Highlighting**: Koristi se `v-calendar` biblioteka za prikaz kalendara sa mogućnošću označavanja raspona datuma 
-   **Export u Excel**: Implementirana je funkcionalnost za preuzimanje podataka u Excel fajl koristeći biblioteku `xlsx`.





