import type { Language } from '../i18n/LanguageContext';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  title: string;
  items: FAQItem[];
}

export const faqCategories: Record<Language, FAQCategory[]> = {
  de: [
    {
      title: 'Investment-Strategie & Regionaler Fokus',
      items: [
        {
          question: 'Auf welche Regionen und Städte konzentrieren Sie sich?',
          answer: `<p>Wir konzentrieren uns primär auf die <strong>Top 7 deutschen Städte</strong>, die sich durch besonders stabile Märkte und hohes Wertsteigerungspotenzial auszeichnen:</p>
<ul>
<li><strong>Berlin</strong> – Hauptstadt mit starkem Bevölkerungswachstum</li>
<li><strong>Hamburg</strong> – Wirtschaftsstarke Hansestadt</li>
<li><strong>München</strong> – Premium-Markt mit höchster Stabilität</li>
<li><strong>Frankfurt</strong> – Finanzmetropole mit internationaler Nachfrage</li>
<li><strong>Düsseldorf</strong> – Wohlhabende Rheinmetropole</li>
<li><strong>Köln</strong> – Grösste Stadt in NRW</li>
<li><strong>Stuttgart</strong> – Wirtschaftsstarkes Baden-Württemberg</li>
</ul>
<p>Zusätzlich berücksichtigen wir ausgewählte <strong>Wachstumsmärkte</strong> wie Regensburg und Freiburg, die ebenfalls hervorragende Fundamentaldaten aufweisen.</p>
<p><strong>Warum diese Städte?</strong> Sie bieten strukturellen Wohnungsmangel (über 1 Million Wohnungen fehlen bis 2025), starke Arbeitsmärkte, kontinuierliches Bevölkerungswachstum und nachgewiesene Wertsteigerungen von durchschnittlich 5,2% p.a. über die letzten 20 Jahre.</p>`,
        },
        {
          question: 'Warum in Deutschland statt in der Schweiz investieren?',
          answer: `<p>Deutschland bietet für Schweizer Investoren <strong>deutlich attraktivere Konditionen</strong>:</p>
<table><tr><th>Kriterium</th><th>Deutschland</th><th>Schweiz</th></tr><tr><td>Eigenkapital</td><td><strong>Ab 10-15%</strong></td><td>25-35%</td></tr><tr><td>Rendite p.a.</td><td><strong>3-8%</strong></td><td>1-3%</td></tr><tr><td>Wertsteigerung</td><td><strong>5,2% p.a.</strong></td><td>3,8% p.a.</td></tr><tr><td>Finanzierung</td><td><strong>Bis 100%</strong></td><td>Max. 80%</td></tr><tr><td>20-Jahre-Ergebnis</td><td><strong>14x Kapital</strong></td><td>5x Kapital</td></tr></table>
<p><strong>Fazit:</strong> Mit gleichem Kapital erreichen Sie in Deutschland fast dreimal so hohe Vermögenswerte wie in der Schweiz.</p>`,
        },
      ],
    },
    {
      title: 'Renditen & Performance',
      items: [
        {
          question: 'Welche Renditen kann ich erwarten?',
          answer: `<p>Ihre <strong>Gesamtrendite</strong> setzt sich aus mehreren Komponenten zusammen:</p>
<ul>
<li><strong>Mietrendite:</strong> 3-8% p.a. (abhängig von Lage und Objekt)</li>
<li><strong>Wertsteigerung:</strong> Durchschnittlich 5,2% p.a. (basierend auf 20-Jahres-Daten der Top 7 Städte)</li>
<li><strong>Tilgungseffekt:</strong> Ihre Mieter tilgen automatisch Ihren Kredit</li>
<li><strong>Hebeleffekt:</strong> Durch Fremdkapital vervielfachen Sie Ihre Eigenkapitalrendite</li>
</ul>
<p><strong>Gesamtrendite:</strong> Typischerweise 8-13% p.a. auf Ihr eingesetztes Eigenkapital.</p>
<p><strong>Beispielrechnung:</strong><br>Kaufpreis \u20AC250.000, Eigenkapital \u20AC40.000<br>\u2192 Nach 20 Jahren: \u20AC560.000 Netto-Vermögen<br>\u2192 <strong>14-fache Kapitalvervielfachung</strong></p>`,
        },
        {
          question: 'Wie wird die 14-fache Kapitalvervielfachung berechnet?',
          answer: `<p>Die Berechnung basiert auf <strong>drei Effekten</strong>, die zusammenwirken:</p>
<ol>
<li><strong>Wertsteigerung (5,2% p.a.):</strong><br>\u20AC250.000 Kaufpreis \u2192 \u20AC750.000 Wert nach 20 Jahren</li>
<li><strong>Tilgung durch Mieteinnahmen:</strong><br>Restschuld sinkt von \u20AC225.000 \u2192 \u20AC190.000 (durch Mietzahlungen)</li>
<li><strong>Leverage-Effekt:</strong><br>Sie investieren nur \u20AC40.000, profitieren aber von der Wertsteigerung der gesamten \u20AC250.000</li>
</ol>
<p><strong>Endrechnung:</strong><br>Immobilienwert: \u20AC750.000<br>Minus Restschuld: -\u20AC190.000<br>= Netto-Vermögen: <strong>\u20AC560.000</strong></p>
<p>\u20AC560.000 \u00F7 \u20AC40.000 Eigenkapital = <strong>14x Vervielfachung</strong></p>
<p><em>Zum Vergleich Schweiz:</em> CHF 370.000 \u00F7 CHF 73.750 = nur 5x Vervielfachung</p>`,
        },
      ],
    },
    {
      title: 'Kosten & Gebühren',
      items: [
        {
          question: 'Welche Erwerbsnebenkosten fallen an?',
          answer: `<p>Die <strong>Erwerbsnebenkosten</strong> in Deutschland betragen typischerweise <strong>5-8%</strong> des Kaufpreises:</p>
<ul>
<li><strong>Grunderwerbsteuer:</strong> 3-6,5% (je nach Bundesland)<br><em>Beispiel: Berlin 6%, Bayern 3,5%, NRW 6,5%</em></li>
<li><strong>Notar & Grundbuch:</strong> ca. 1,5-2%</li>
</ul>
<p><strong>Beispiel bei \u20AC250.000 Kaufpreis:</strong><br>Grunderwerbsteuer (6%): \u20AC15.000<br>Notar & Grundbuch: \u20AC3.750<br><strong>Gesamt:</strong> ca. \u20AC18.750</p>
<p><strong>Wichtig:</strong> Maklerkosten fallen NICHT an – der Verkäufer zahlt die Provision!</p>`,
        },
        {
          question: 'Welche laufenden Kosten habe ich?',
          answer: `<p>Die <strong>monatlichen Kosten</strong> sind überschaubar und steuerlich absetzbar:</p>
<ul>
<li><strong>Steuerberatung (FLS Tax):</strong> ca. \u20AC30/Monat</li>
<li><strong>Hausverwaltung:</strong> ca. \u20AC30/Monat<br><em>Inkl. Sondereigentumsverwaltung, Instandhaltungsrücklage</em></li>
<li><strong>Mieterakquise:</strong> 1,5x Monatskaltmiete (nur bei Mieterwechsel)</li>
</ul>
<p><strong>Gesamtkosten:</strong> ca. \u20AC60-80/Monat für professionelle Rundumbetreuung</p>
<p><strong>KEINE Kosten für:</strong></p>
<ul>
<li>Maklergebühren (Verkäufer zahlt)</li>
<li>Finanzierungsgebühren (Banken übernehmen)</li>
<li>Versteckte Zusatzkosten</li>
</ul>`,
        },
        {
          question: 'Gibt es versteckte Gebühren?',
          answer: `<p><strong>Nein, wir garantieren 100% Transparenz.</strong> Alle Kosten werden im Vorfeld offen kommuniziert.</p>
<p><strong>Was Sie NICHT zahlen:</strong></p>
<ul>
<li>Keine Beratungsgebühren (kostenlose Erstberatung)</li>
<li>Keine Maklercourtage (zahlt der Verkäufer)</li>
<li>Keine Finanzierungsvermittlungsgebühren</li>
<li>Keine versteckten Aufschläge</li>
</ul>
<p><strong>Unser Geschäftsmodell:</strong> Wir verdienen ausschliesslich durch die professionelle Vermittlung von Objekten und langfristige Betreuung unserer Mandanten. Ihre Zufriedenheit und Ihr Erfolg sind unser Erfolg.</p>`,
        },
      ],
    },
    {
      title: 'Finanzierung',
      items: [
        {
          question: 'Wie viel Eigenkapital benötige ich?',
          answer: `<p>In Deutschland benötigen Sie typischerweise <strong>16% Eigenkapital</strong> plus Erwerbsnebenkosten:</p>
<p><strong>Beispielrechnung \u20AC250.000 Kaufpreis:</strong></p>
<ul>
<li>Eigenkapital (10%): \u20AC25.000</li>
<li>Erwerbsnebenkosten (6%): \u20AC15.000</li>
<li><strong>Gesamt benötigt:</strong> \u20AC40.000</li>
</ul>
<p><strong>Höherer Kaufpreis? Beispiel \u20AC500.000:</strong></p>
<ul>
<li>Eigenkapital (10%): \u20AC50.000</li>
<li>Erwerbsnebenkosten (6%): \u20AC30.000</li>
<li><strong>Gesamt benötigt:</strong> \u20AC80.000</li>
</ul>
<p><strong>Vorteil gegenüber Schweiz:</strong> In der Schweiz müssten Sie 20-30% Eigenkapital aufbringen – fast doppelt so viel!</p>
<p><em>Hinweis: In Einzelfällen ist auch 100% Finanzierung möglich, abhängig von Bonität und Objekt.</em></p>`,
        },
        {
          question: 'Welche Finanzierungsoptionen gibt es?',
          answer: `<p>Wir arbeiten mit <strong>spezialisierten Banken</strong> zusammen und bieten massgeschneiderte Lösungen:</p>
<ul>
<li><strong>Standard-Finanzierung:</strong> 90% des Kaufpreises<br><em>Beste Konditionen für die meisten Investoren</em></li>
<li><strong>KfW-Förderung:</strong> Für energieeffiziente Immobilien (KfW 40)<br><em>Zinsvergünstigungen und Tilgungszuschüsse</em></li>
<li><strong>100% Finanzierung:</strong> Bei sehr guter Bonität möglich<br><em>Kein Eigenkapital für Kaufpreis notwendig</em></li>
<li><strong>Portfolio-Finanzierung:</strong> Für mehrere Objekte gleichzeitig<br><em>Bessere Konditionen bei grösserem Volumen</em></li>
</ul>
<p><strong>Besonderheit für Schweizer Investoren:</strong> Deutsche Banken akzeptieren CHF-Einkommen und bieten attraktive Konditionen für Grenzgänger und Auslandsinvestoren.</p>`,
        },
      ],
    },
    {
      title: 'Eigentum & Struktur',
      items: [
        {
          question: 'Kann ich einzeln oder mit einem Partner kaufen?',
          answer: `<p>Sie haben <strong>vollständige Flexibilität</strong>:</p>
<p><strong>1. Einzelkauf:</strong></p>
<ul>
<li>Sie sind alleiniger Eigentümer</li>
<li>Volle Kontrolle über alle Entscheidungen</li>
<li>Gesamte Steuervorteile für Sie</li>
</ul>
<p><strong>2. Gemeinsamer Kauf:</strong></p>
<ul>
<li><strong>Ehepaare:</strong> Gütergemeinschaft oder Miteigentum möglich</li>
<li><strong>Geschäftspartner:</strong> Aufteilung nach Vereinbarung (z.B. 50:50, 60:40)</li>
<li><strong>Familiengemeinschaft:</strong> Generationenübergreifende Strukturen</li>
</ul>
<p><strong>3. vvGmbH-Struktur:</strong></p>
<ul>
<li>Gesellschaft als Eigentümer</li>
<li>Maximale steuerliche Vorteile</li>
<li>Ideal für Portfolio-Aufbau</li>
</ul>
<p>Wir beraten Sie individuell zur <strong>optimalen Struktur</strong> für Ihre Situation.</p>`,
        },
        {
          question: 'Was ist eine vvGmbH und warum sollte ich sie nutzen?',
          answer: `<p>Eine <strong>vermögensverwaltende GmbH (vvGmbH)</strong> ist eine deutsche Gesellschaft, die ausschliesslich Vermögen verwaltet – ideal für Immobilien-Investments.</p>
<p><strong>Hauptvorteile:</strong></p>
<ul>
<li><strong>Steuerfreie Reinvestition:</strong> Veräusserungsgewinne können steuerfrei in neue Immobilien reinvestiert werden (nach Haltefrist)</li>
<li><strong>Vermeidung Doppelbesteuerung:</strong> Optimale Gestaltung zwischen Schweiz und Deutschland möglich</li>
<li><strong>Haftungsbeschränkung:</strong> Ihr Privatvermögen ist geschützt</li>
<li><strong>Nachfolgeplanung:</strong> Einfache Übertragung durch Anteilsverkauf</li>
<li><strong>Portfolio-Ausbau:</strong> Schnellerer Vermögensaufbau durch Reinvestition ohne Steuerlast</li>
</ul>
<p><strong>Beispiel:</strong> Sie verkaufen eine Immobilie mit \u20AC200.000 Gewinn. In der vvGmbH können Sie die gesamten \u20AC200.000 steuerfrei auch vor der Spekulationsfrist von 10 Jahren in neue Objekte reinvestieren. Als Privatperson müssten Sie erst Steuern zahlen.</p>
<p><strong>Wichtig:</strong> Die Einrichtung und Beratung übernimmt unser Partner FLS Tax. Alle Kosten sind transparent und überschaubar.</p>`,
        },
      ],
    },
    {
      title: 'Objektauswahl',
      items: [
        {
          question: 'Woher kommen die Objekte?',
          answer: `<p>Wir haben <strong>exklusiven Zugang zu Off-Market-Objekten</strong> durch unser Partnernetzwerk:</p>
<ul>
<li><strong>Confluentes Real Estate:</strong> Direkter Zugang zu nicht öffentlich verfügbaren Objekten</li>
<li><strong>Entwickler-Beziehungen:</strong> Vorabzugang zu Neubauprojekten</li>
<li><strong>Eigentümer-Netzwerk:</strong> Verkäufe vor öffentlicher Vermarktung</li>
<li><strong>Zwangsversteigerungen:</strong> Selektive Teilnahme bei attraktiven Objekten</li>
</ul>
<p><strong>Vorteil für Sie:</strong> Sie erhalten Zugang zu Objekten, bevor sie auf Immobilienportalen erscheinen – weniger Wettbewerb, bessere Konditionen.</p>
<p><strong>Qualitätssicherung:</strong> Jedes Objekt durchläuft unsere professionelle Due Diligence mit Bewertung nach Investment- und Nachhaltigkeitskriterien.</p>`,
        },
        {
          question: 'Kann ich spezifische Objekte auswählen?',
          answer: `<p><strong>Ja, absolut!</strong> Ihre Präferenzen stehen im Mittelpunkt.</p>
<p><strong>Unser Auswahlprozess:</strong></p>
<ol>
<li><strong>Bedarfsanalyse:</strong> Wir besprechen Ihre Ziele, Budget, Risikobereitschaft</li>
<li><strong>Kriterien-Definition:</strong> Stadt, Objekttyp (Neubau/Bestand), Grösse, Rendite-Ziel</li>
<li><strong>Objektvorschläge:</strong> Wir präsentieren passende Objekte mit detaillierten Unterlagen</li>
<li><strong>Besichtigungen:</strong> Gemeinsame Vor-Ort-Termine (oder virtuelle Besichtigungen)</li>
<li><strong>Ihre Entscheidung:</strong> Sie wählen das Objekt, das am besten passt</li>
</ol>
<p><strong>Sie haben immer die volle Kontrolle</strong> und kaufen nur Objekte, die Sie selbst auswählen und für richtig befinden.</p>`,
        },
      ],
    },
    {
      title: 'Risiken & Absicherung',
      items: [
        {
          question: 'Welche Risiken gibt es bei Immobilien-Investments?',
          answer: `<p>Wie bei jeder Investition gibt es Risiken, die wir jedoch <strong>professionell minimieren</strong>:</p>
<p><strong>1. Marktrisiko (Wertverlust):</strong></p>
<ul>
<li><em>Risiko:</em> Immobilienpreise könnten fallen</li>
<li><strong>Mitigation:</strong> Fokus auf Top 7 Städte mit strukturellem Wohnungsmangel, langfristige Perspektive (10-20 Jahre), historisch 5,2% Wertsteigerung p.a.</li>
</ul>
<p><strong>2. Leerstandsrisiko:</strong></p>
<ul>
<li><em>Risiko:</em> Keine Mieter gefunden</li>
<li><strong>Mitigation:</strong> Professionelle Mieterakquise, starke Nachfrage in Top-Städten, durchschnittliche Leerstandsquote unter 2%</li>
</ul>
<p><strong>3. Finanzierungsrisiko:</strong></p>
<ul>
<li><em>Risiko:</em> Zinsen steigen bei Anschlussfinanzierung</li>
<li><strong>Mitigation:</strong> Lange Zinsbindung (10-20 Jahre), kalkulierte Zinspuffer, Tilgung reduziert Restschuld</li>
</ul>
<p><strong>4. Instandhaltungsrisiko:</strong></p>
<ul>
<li><em>Risiko:</em> Unerwartete Reparaturen</li>
<li><strong>Mitigation:</strong> Instandhaltungsrücklage, professionelle Verwaltung, Neubauten mit Gewährleistung</li>
</ul>
<p><strong>Fazit:</strong> Immobilien gelten als <strong>risikoarm</strong> verglichen mit Aktien oder Krypto, besonders bei langfristiger Perspektive und professioneller Betreuung.</p>`,
        },
        {
          question: 'Was passiert, wenn ich keine Mieter finde?',
          answer: `<p>Leerstand ist in den Top 7 deutschen Städten <strong>extrem selten</strong> – die durchschnittliche Leerstandsquote liegt unter 2%.</p>
<p><strong>Unsere Absicherung:</strong></p>
<ul>
<li><strong>Professionelle Mieterakquise:</strong> Unser Verwaltungspartner kennt den lokalen Markt und findet schnell Mieter</li>
<li><strong>Marktgerechte Mieten:</strong> Wir setzen realistische Mieten, nicht überhöhte Fantasiepreise</li>
<li><strong>Attraktive Objekte:</strong> Nur Objekte in gefragten Lagen mit hoher Nachfrage</li>
<li><strong>Marketing:</strong> Professionelle Inserate auf allen relevanten Portalen</li>
<li><strong>Bonitätsprüfung:</strong> Seriöse, zahlungsfähige Mieter werden ausgewählt</li>
</ul>
<p><strong>Statistik:</strong> Die durchschnittliche Vermietungszeit in den Top 7 Städten liegt bei unter 4 Wochen. Struktureller Wohnungsmangel garantiert konstante Nachfrage.</p>
<p><strong>Notfall-Puffer:</strong> Wir empfehlen immer, eine Liquiditätsreserve für 3-6 Monate zu halten – so sind Sie selbst im unwahrscheinlichen Fall abgesichert.</p>`,
        },
      ],
    },
    {
      title: 'Exit-Strategien',
      items: [
        {
          question: 'Welche Optionen habe ich nach 10-20 Jahren?',
          answer: `<p>Sie haben <strong>maximale Flexibilität</strong> für Ihre Vermögensplanung:</p>
<p><strong>Option 1: Refinanzierung & Kapitalauszahlung</strong></p>
<ul>
<li>Immobilie ist deutlich mehr wert (z.B. \u20AC750.000 statt \u20AC250.000)</li>
<li>Neue Finanzierung zu 70% = \u20AC525.000</li>
<li>Alter Kredit ablösen (\u20AC190.000) + Differenz auszahlen lassen (\u20AC335.000)</li>
<li>Sie behalten die Immobilie + haben \u20AC335.000 Cash</li>
</ul>
<p><strong>Option 2: Verkauf mit Steuervorteilen</strong></p>
<ul>
<li>Nach 10 Jahren Haltedauer: <strong>Steuerfrei</strong> als Privatperson</li>
<li>Mit vvGmbH: Reinvestition ohne Steuerlast</li>
<li>Verkauf zum Marktwert, voller Gewinn für Sie</li>
</ul>
<p><strong>Option 3: Reinvestition in grösseres Portfolio</strong></p>
<ul>
<li>Mehrere kleinere Objekte gegen grössere tauschen</li>
<li>Diversifikation ausbauen</li>
<li>Steuerfreier Tausch über vvGmbH möglich</li>
</ul>
<p><strong>Option 4: Halten für passives Einkommen</strong></p>
<ul>
<li>Kredit ist fast abbezahlt</li>
<li>Volle Mieteinnahmen fliessen Ihnen zu</li>
<li>Ideale Altersvorsorge</li>
</ul>
<p><strong>Sie entscheiden</strong> basierend auf Ihrer Lebenssituation und finanziellen Zielen.</p>`,
        },
      ],
    },
    {
      title: 'Verwaltung & Prozess',
      items: [
        {
          question: 'Wie läuft die Immobilienverwaltung ab?',
          answer: `<p>Sie erhalten eine <strong>100% Hands-off-Verwaltung</strong> – wir kümmern uns um alles:</p>
<p><strong>Was die Verwaltung umfasst:</strong></p>
<ul>
<li><strong>Mieterakquise:</strong> Inserate, Besichtigungen, Bonitätsprüfung</li>
<li><strong>Vertragsmanagement:</strong> Mietverträge, Übergabeprotokolle, Kautionsverwaltung</li>
<li><strong>Mietinkasso:</strong> Einzug der Mieten, Mahnwesen bei Zahlungsverzug</li>
<li><strong>Instandhaltung:</strong> Koordination von Reparaturen, Handwerkern</li>
<li><strong>Nebenkostenabrechnung:</strong> Jährliche Abrechnung für Mieter</li>
<li><strong>Kommunikation:</strong> Ansprechpartner für Mieter bei allen Fragen</li>
<li><strong>Reporting:</strong> Regelmässige Berichte über Zustand und Finanzen</li>
</ul>
<p><strong>Ihr Aufwand:</strong> Minimal! Einmal jährlich Steuererklärung mit Ihrem Steuerberater besprechen.</p>
<p><strong>Kosten:</strong> ca. \u20AC30/Monat für professionelle Rundumbetreuung</p>`,
        },
        {
          question: 'Wie lange dauert der Prozess vom Erstkontakt bis zum Kauf?',
          answer: `<p>Der <strong>typische Zeitrahmen</strong> beträgt 2-4 Monate:</p>
<p><strong>Phase 1: Beratung & Planung (2-3 Wochen)</strong></p>
<ul>
<li>Erstgespräch und Bedarfsanalyse</li>
<li>Finanzierungsklärung mit Bank</li>
<li>Strategieentwicklung</li>
</ul>
<p><strong>Phase 2: Objektauswahl (2-4 Wochen)</strong></p>
<ul>
<li>Vorstellung passender Objekte</li>
<li>Besichtigungstermine</li>
<li>Due Diligence & Bewertung</li>
</ul>
<p><strong>Phase 3: Kaufabwicklung (4-6 Wochen)</strong></p>
<ul>
<li>Kaufvertragsentwurf vom Notar</li>
<li>Finanzierungszusage Bank</li>
<li>Notartermin & Vertragsunterzeichnung</li>
<li>Eintragung Grundbuch</li>
</ul>
<p><strong>Phase 4: Übergabe & Vermietung (2-4 Wochen)</strong></p>
<ul>
<li>Objektübergabe</li>
<li>Mieterakquise (falls noch nicht vermietet)</li>
<li>Start der Verwaltung</li>
</ul>
<p><strong>Schneller geht's auch:</strong> Bei verfügbarer Finanzierung und sofort verfügbaren Objekten kann der Prozess auf 4-6 Wochen verkürzt werden.</p>`,
        },
      ],
    },
    {
      title: 'Investitionsvoraussetzungen',
      items: [
        {
          question: 'Was ist die Mindestinvestition?',
          answer: `<p>Die <strong>Mindestinvestition</strong> hängt vom Objektpreis ab. Typischerweise:</p>
<ul>
<li><strong>Kleinstes Apartment:</strong> ca. \u20AC200.000 Kaufpreis<br>\u2192 Benötigtes Kapital: ca. \u20AC32.000</li>
<li><strong>Durchschnittliches Objekt:</strong> ca. \u20AC250.000 Kaufpreis<br>\u2192 Benötigtes Kapital: ca. \u20AC40.000</li>
<li><strong>Grössere Wohnung:</strong> ca. \u20AC400.000 Kaufpreis<br>\u2192 Benötigtes Kapital: ca. \u20AC64.000</li>
</ul>
<p><strong>Faustregel:</strong> Planen Sie 16% des Kaufpreises als Gesamtkapital ein (10% Eigenkapital + 6% Erwerbsnebenkosten).</p>
<p><strong>Empfehlung:</strong> Zusätzlich 3-6 Monatsraten als Liquiditätsreserve halten (ca. \u20AC3.000-\u20AC6.000).</p>`,
        },
        {
          question: 'Kann ich mit nur einem Objekt starten?',
          answer: `<p><strong>Ja, absolut!</strong> Die meisten unserer Mandanten starten mit einem einzelnen Objekt.</p>
<p><strong>Skalierbarer Ansatz:</strong></p>
<ul>
<li><strong>Jahr 1:</strong> Erstes Objekt kaufen, Erfahrungen sammeln</li>
<li><strong>Jahr 3-5:</strong> Zweites Objekt durch Wertsteigerung des ersten finanzieren</li>
<li><strong>Jahr 7-10:</strong> Drittes Objekt, Portfolio wächst</li>
<li><strong>Jahr 10-20:</strong> Kontinuierlicher Ausbau auf 5-10 Objekte möglich</li>
</ul>
<p><strong>Beispiel:</strong> Mit \u20AC400.000 Startkapital können Sie in 20 Jahren ein Portfolio von 10 Objekten im Wert von \u20AC3.000.000 (nach Schulden) aufbauen.</p>
<p><strong>Vorteil Schritt-für-Schritt:</strong> Sie lernen den Prozess kennen, sammeln Erfahrung und skalieren in Ihrem eigenen Tempo.</p>`,
        },
      ],
    },
  ],
  en: [
    {
      title: 'Investment Strategy & Regional Focus',
      items: [
        {
          question: 'Which regions and cities do you focus on?',
          answer: `<p>We primarily focus on the <strong>Top 7 German cities</strong>, which are characterised by particularly stable markets and high appreciation potential:</p>
<ul>
<li><strong>Berlin</strong> – Capital with strong population growth</li>
<li><strong>Hamburg</strong> – Economically powerful Hanseatic city</li>
<li><strong>Munich</strong> – Premium market with the highest stability</li>
<li><strong>Frankfurt</strong> – Financial metropolis with international demand</li>
<li><strong>D\u00FCsseldorf</strong> – Affluent Rhine metropolis</li>
<li><strong>Cologne</strong> – Largest city in NRW</li>
<li><strong>Stuttgart</strong> – Economically strong Baden-W\u00FCrttemberg</li>
</ul>
<p>Additionally, we consider selected <strong>growth markets</strong> such as Regensburg and Freiburg, which also show excellent fundamentals.</p>
<p><strong>Why these cities?</strong> They offer structural housing shortages (over 1 million apartments missing by 2025), strong labour markets, continuous population growth and proven appreciation of an average 5.2% p.a. over the last 20 years.</p>`,
        },
        {
          question: 'Why invest in Germany instead of Switzerland?',
          answer: `<p>Germany offers Swiss investors <strong>significantly more attractive conditions</strong>:</p>
<table><tr><th>Criterion</th><th>Germany</th><th>Switzerland</th></tr><tr><td>Equity</td><td><strong>From 10-15%</strong></td><td>25-35%</td></tr><tr><td>Return p.a.</td><td><strong>3-8%</strong></td><td>1-3%</td></tr><tr><td>Appreciation</td><td><strong>5.2% p.a.</strong></td><td>3.8% p.a.</td></tr><tr><td>Financing</td><td><strong>Up to 100%</strong></td><td>Max. 80%</td></tr><tr><td>20-year result</td><td><strong>14x capital</strong></td><td>5x capital</td></tr></table>
<p><strong>Conclusion:</strong> With the same capital, you can achieve almost three times the asset value in Germany compared to Switzerland.</p>`,
        },
      ],
    },
    {
      title: 'Returns & Performance',
      items: [
        {
          question: 'What returns can I expect?',
          answer: `<p>Your <strong>total return</strong> consists of several components:</p>
<ul>
<li><strong>Rental yield:</strong> 3-8% p.a. (depending on location and property)</li>
<li><strong>Appreciation:</strong> Average 5.2% p.a. (based on 20-year data from the Top 7 cities)</li>
<li><strong>Amortisation effect:</strong> Your tenants automatically pay down your loan</li>
<li><strong>Leverage effect:</strong> Through debt capital, you multiply your equity return</li>
</ul>
<p><strong>Total return:</strong> Typically 8-13% p.a. on your invested equity.</p>
<p><strong>Example calculation:</strong><br>Purchase price \u20AC250,000, equity \u20AC40,000<br>\u2192 After 20 years: \u20AC560,000 net wealth<br>\u2192 <strong>14x capital multiplication</strong></p>`,
        },
        {
          question: 'How is the 14x capital multiplication calculated?',
          answer: `<p>The calculation is based on <strong>three effects</strong> working together:</p>
<ol>
<li><strong>Appreciation (5.2% p.a.):</strong><br>\u20AC250,000 purchase price \u2192 \u20AC750,000 value after 20 years</li>
<li><strong>Amortisation through rental income:</strong><br>Remaining debt decreases from \u20AC225,000 \u2192 \u20AC190,000 (through rent payments)</li>
<li><strong>Leverage effect:</strong><br>You invest only \u20AC40,000 but benefit from the appreciation of the entire \u20AC250,000</li>
</ol>
<p><strong>Final calculation:</strong><br>Property value: \u20AC750,000<br>Minus remaining debt: -\u20AC190,000<br>= Net wealth: <strong>\u20AC560,000</strong></p>
<p>\u20AC560,000 \u00F7 \u20AC40,000 equity = <strong>14x multiplication</strong></p>
<p><em>For comparison Switzerland:</em> CHF 370,000 \u00F7 CHF 73,750 = only 5x multiplication</p>`,
        },
      ],
    },
    {
      title: 'Costs & Fees',
      items: [
        {
          question: 'What are the acquisition costs?',
          answer: `<p>The <strong>acquisition costs</strong> in Germany typically amount to <strong>5-8%</strong> of the purchase price:</p>
<ul>
<li><strong>Property transfer tax:</strong> 3-6.5% (depending on federal state)<br><em>Example: Berlin 6%, Bavaria 3.5%, NRW 6.5%</em></li>
<li><strong>Notary & land registry:</strong> approx. 1.5-2%</li>
</ul>
<p><strong>Example at \u20AC250,000 purchase price:</strong><br>Property transfer tax (6%): \u20AC15,000<br>Notary & land registry: \u20AC3,750<br><strong>Total:</strong> approx. \u20AC18,750</p>
<p><strong>Important:</strong> No agent fees apply – the seller pays the commission!</p>`,
        },
        {
          question: 'What are the ongoing costs?',
          answer: `<p>The <strong>monthly costs</strong> are manageable and tax-deductible:</p>
<ul>
<li><strong>Tax advisory (FLS Tax):</strong> approx. \u20AC30/month</li>
<li><strong>Property management:</strong> approx. \u20AC30/month<br><em>Incl. individual property management, maintenance reserve</em></li>
<li><strong>Tenant acquisition:</strong> 1.5x monthly base rent (only when tenants change)</li>
</ul>
<p><strong>Total costs:</strong> approx. \u20AC60-80/month for professional all-round support</p>
<p><strong>NO costs for:</strong></p>
<ul>
<li>Agent fees (seller pays)</li>
<li>Financing fees (banks cover these)</li>
<li>Hidden additional costs</li>
</ul>`,
        },
        {
          question: 'Are there hidden fees?',
          answer: `<p><strong>No, we guarantee 100% transparency.</strong> All costs are openly communicated in advance.</p>
<p><strong>What you do NOT pay:</strong></p>
<ul>
<li>No advisory fees (free initial consultation)</li>
<li>No agent commission (seller pays)</li>
<li>No financing brokerage fees</li>
<li>No hidden surcharges</li>
</ul>
<p><strong>Our business model:</strong> We earn exclusively through the professional brokerage of properties and long-term support of our clients. Your satisfaction and success is our success.</p>`,
        },
      ],
    },
    {
      title: 'Financing',
      items: [
        {
          question: 'How much equity do I need?',
          answer: `<p>In Germany, you typically need <strong>16% equity</strong> plus acquisition costs:</p>
<p><strong>Example calculation \u20AC250,000 purchase price:</strong></p>
<ul>
<li>Equity (10%): \u20AC25,000</li>
<li>Acquisition costs (6%): \u20AC15,000</li>
<li><strong>Total required:</strong> \u20AC40,000</li>
</ul>
<p><strong>Higher purchase price? Example \u20AC500,000:</strong></p>
<ul>
<li>Equity (10%): \u20AC50,000</li>
<li>Acquisition costs (6%): \u20AC30,000</li>
<li><strong>Total required:</strong> \u20AC80,000</li>
</ul>
<p><strong>Advantage over Switzerland:</strong> In Switzerland, you would need 20-30% equity – almost twice as much!</p>
<p><em>Note: In individual cases, 100% financing is also possible, depending on creditworthiness and property.</em></p>`,
        },
        {
          question: 'What financing options are available?',
          answer: `<p>We work with <strong>specialised banks</strong> and offer tailored solutions:</p>
<ul>
<li><strong>Standard financing:</strong> 90% of purchase price<br><em>Best conditions for most investors</em></li>
<li><strong>KfW subsidy:</strong> For energy-efficient properties (KfW 40)<br><em>Interest rate reductions and repayment grants</em></li>
<li><strong>100% financing:</strong> Possible with very good creditworthiness<br><em>No equity required for purchase price</em></li>
<li><strong>Portfolio financing:</strong> For multiple properties simultaneously<br><em>Better conditions with larger volume</em></li>
</ul>
<p><strong>Special feature for Swiss investors:</strong> German banks accept CHF income and offer attractive conditions for cross-border commuters and foreign investors.</p>`,
        },
      ],
    },
    {
      title: 'Ownership & Structure',
      items: [
        {
          question: 'Can I buy individually or with a partner?',
          answer: `<p>You have <strong>complete flexibility</strong>:</p>
<p><strong>1. Individual purchase:</strong></p>
<ul>
<li>You are the sole owner</li>
<li>Full control over all decisions</li>
<li>All tax advantages for you</li>
</ul>
<p><strong>2. Joint purchase:</strong></p>
<ul>
<li><strong>Married couples:</strong> Community of property or co-ownership possible</li>
<li><strong>Business partners:</strong> Split by agreement (e.g. 50:50, 60:40)</li>
<li><strong>Family community:</strong> Cross-generational structures</li>
</ul>
<p><strong>3. vvGmbH structure:</strong></p>
<ul>
<li>Company as owner</li>
<li>Maximum tax advantages</li>
<li>Ideal for portfolio building</li>
</ul>
<p>We advise you individually on the <strong>optimal structure</strong> for your situation.</p>`,
        },
        {
          question: 'What is a vvGmbH and why should I use it?',
          answer: `<p>A <strong>vermögensverwaltende GmbH (vvGmbH)</strong> is a German company that exclusively manages assets – ideal for real estate investments.</p>
<p><strong>Key advantages:</strong></p>
<ul>
<li><strong>Tax-free reinvestment:</strong> Capital gains can be reinvested tax-free into new properties (after holding period)</li>
<li><strong>Avoidance of double taxation:</strong> Optimal structuring between Switzerland and Germany possible</li>
<li><strong>Limited liability:</strong> Your private assets are protected</li>
<li><strong>Succession planning:</strong> Simple transfer through share sale</li>
<li><strong>Portfolio expansion:</strong> Faster wealth building through reinvestment without tax burden</li>
</ul>
<p><strong>Example:</strong> You sell a property with \u20AC200,000 profit. In the vvGmbH, you can reinvest the entire \u20AC200,000 tax-free into new properties even before the 10-year speculation period. As a private individual, you would have to pay taxes first.</p>
<p><strong>Important:</strong> Setup and advisory is handled by our partner FLS Tax. All costs are transparent and manageable.</p>`,
        },
      ],
    },
    {
      title: 'Property Selection',
      items: [
        {
          question: 'Where do the properties come from?',
          answer: `<p>We have <strong>exclusive access to off-market properties</strong> through our partner network:</p>
<ul>
<li><strong>Confluentes Real Estate:</strong> Direct access to privately available properties</li>
<li><strong>Developer relationships:</strong> Early access to new build projects</li>
<li><strong>Owner network:</strong> Sales before public marketing</li>
<li><strong>Foreclosure auctions:</strong> Selective participation for attractive properties</li>
</ul>
<p><strong>Your advantage:</strong> You gain access to properties before they appear on real estate portals – less competition, better conditions.</p>
<p><strong>Quality assurance:</strong> Every property undergoes our professional due diligence with assessment based on investment and sustainability criteria.</p>`,
        },
        {
          question: 'Can I select specific properties?',
          answer: `<p><strong>Yes, absolutely!</strong> Your preferences are at the centre of our process.</p>
<p><strong>Our selection process:</strong></p>
<ol>
<li><strong>Needs analysis:</strong> We discuss your goals, budget, risk appetite</li>
<li><strong>Criteria definition:</strong> City, property type (new build/existing), size, return target</li>
<li><strong>Property proposals:</strong> We present suitable properties with detailed documentation</li>
<li><strong>Viewings:</strong> Joint on-site visits (or virtual viewings)</li>
<li><strong>Your decision:</strong> You choose the property that fits best</li>
</ol>
<p><strong>You always have full control</strong> and only buy properties that you personally select and approve.</p>`,
        },
      ],
    },
    {
      title: 'Risks & Protection',
      items: [
        {
          question: 'What risks are involved in real estate investments?',
          answer: `<p>As with any investment, there are risks, which we <strong>professionally minimise</strong>:</p>
<p><strong>1. Market risk (loss of value):</strong></p>
<ul>
<li><em>Risk:</em> Property prices could fall</li>
<li><strong>Mitigation:</strong> Focus on Top 7 cities with structural housing shortage, long-term perspective (10-20 years), historically 5.2% appreciation p.a.</li>
</ul>
<p><strong>2. Vacancy risk:</strong></p>
<ul>
<li><em>Risk:</em> No tenants found</li>
<li><strong>Mitigation:</strong> Professional tenant acquisition, strong demand in top cities, average vacancy rate below 2%</li>
</ul>
<p><strong>3. Financing risk:</strong></p>
<ul>
<li><em>Risk:</em> Interest rates rise at refinancing</li>
<li><strong>Mitigation:</strong> Long fixed interest periods (10-20 years), calculated interest buffers, amortisation reduces remaining debt</li>
</ul>
<p><strong>4. Maintenance risk:</strong></p>
<ul>
<li><em>Risk:</em> Unexpected repairs</li>
<li><strong>Mitigation:</strong> Maintenance reserve, professional management, new builds with warranty</li>
</ul>
<p><strong>Conclusion:</strong> Real estate is considered <strong>low-risk</strong> compared to stocks or crypto, especially with a long-term perspective and professional management.</p>`,
        },
        {
          question: 'What happens if I can\'t find tenants?',
          answer: `<p>Vacancy in the Top 7 German cities is <strong>extremely rare</strong> – the average vacancy rate is below 2%.</p>
<p><strong>Our safeguards:</strong></p>
<ul>
<li><strong>Professional tenant acquisition:</strong> Our management partner knows the local market and finds tenants quickly</li>
<li><strong>Market-appropriate rents:</strong> We set realistic rents, not inflated fantasy prices</li>
<li><strong>Attractive properties:</strong> Only properties in sought-after locations with high demand</li>
<li><strong>Marketing:</strong> Professional listings on all relevant portals</li>
<li><strong>Credit check:</strong> Serious, solvent tenants are selected</li>
</ul>
<p><strong>Statistics:</strong> The average rental time in the Top 7 cities is under 4 weeks. Structural housing shortage guarantees constant demand.</p>
<p><strong>Emergency buffer:</strong> We always recommend maintaining a liquidity reserve for 3-6 months – so you are protected even in the unlikely event.</p>`,
        },
      ],
    },
    {
      title: 'Exit Strategies',
      items: [
        {
          question: 'What options do I have after 10-20 years?',
          answer: `<p>You have <strong>maximum flexibility</strong> for your wealth planning:</p>
<p><strong>Option 1: Refinancing & capital payout</strong></p>
<ul>
<li>Property is worth significantly more (e.g. \u20AC750,000 instead of \u20AC250,000)</li>
<li>New financing at 70% = \u20AC525,000</li>
<li>Pay off old loan (\u20AC190,000) + receive the difference (\u20AC335,000)</li>
<li>You keep the property + have \u20AC335,000 cash</li>
</ul>
<p><strong>Option 2: Sale with tax advantages</strong></p>
<ul>
<li>After 10 years holding period: <strong>Tax-free</strong> as a private individual</li>
<li>With vvGmbH: Reinvestment without tax burden</li>
<li>Sale at market value, full profit for you</li>
</ul>
<p><strong>Option 3: Reinvestment into a larger portfolio</strong></p>
<ul>
<li>Exchange several smaller properties for larger ones</li>
<li>Expand diversification</li>
<li>Tax-free exchange via vvGmbH possible</li>
</ul>
<p><strong>Option 4: Hold for passive income</strong></p>
<ul>
<li>Loan is almost paid off</li>
<li>Full rental income flows to you</li>
<li>Ideal retirement provision</li>
</ul>
<p><strong>You decide</strong> based on your life situation and financial goals.</p>`,
        },
      ],
    },
    {
      title: 'Management & Process',
      items: [
        {
          question: 'How does property management work?',
          answer: `<p>You receive <strong>100% hands-off management</strong> – we take care of everything:</p>
<p><strong>What management includes:</strong></p>
<ul>
<li><strong>Tenant acquisition:</strong> Listings, viewings, credit checks</li>
<li><strong>Contract management:</strong> Rental agreements, handover protocols, deposit management</li>
<li><strong>Rent collection:</strong> Collection of rents, dunning procedures for late payments</li>
<li><strong>Maintenance:</strong> Coordination of repairs, contractors</li>
<li><strong>Service charge accounting:</strong> Annual statement for tenants</li>
<li><strong>Communication:</strong> Point of contact for tenants for all questions</li>
<li><strong>Reporting:</strong> Regular reports on condition and finances</li>
</ul>
<p><strong>Your effort:</strong> Minimal! Discuss the tax return with your tax advisor once a year.</p>
<p><strong>Costs:</strong> approx. \u20AC30/month for professional all-round support</p>`,
        },
        {
          question: 'How long does the process take from initial contact to purchase?',
          answer: `<p>The <strong>typical timeframe</strong> is 2-4 months:</p>
<p><strong>Phase 1: Consultation & planning (2-3 weeks)</strong></p>
<ul>
<li>Initial meeting and needs analysis</li>
<li>Financing clarification with bank</li>
<li>Strategy development</li>
</ul>
<p><strong>Phase 2: Property selection (2-4 weeks)</strong></p>
<ul>
<li>Presentation of suitable properties</li>
<li>Viewing appointments</li>
<li>Due diligence & valuation</li>
</ul>
<p><strong>Phase 3: Purchase execution (4-6 weeks)</strong></p>
<ul>
<li>Purchase contract draft from notary</li>
<li>Financing approval from bank</li>
<li>Notary appointment & contract signing</li>
<li>Land registry entry</li>
</ul>
<p><strong>Phase 4: Handover & rental (2-4 weeks)</strong></p>
<ul>
<li>Property handover</li>
<li>Tenant acquisition (if not yet rented)</li>
<li>Start of management</li>
</ul>
<p><strong>It can be faster too:</strong> With available financing and immediately available properties, the process can be shortened to 4-6 weeks.</p>`,
        },
      ],
    },
    {
      title: 'Investment Requirements',
      items: [
        {
          question: 'What is the minimum investment?',
          answer: `<p>The <strong>minimum investment</strong> depends on the property price. Typically:</p>
<ul>
<li><strong>Smallest apartment:</strong> approx. \u20AC200,000 purchase price<br>\u2192 Required capital: approx. \u20AC32,000</li>
<li><strong>Average property:</strong> approx. \u20AC250,000 purchase price<br>\u2192 Required capital: approx. \u20AC40,000</li>
<li><strong>Larger apartment:</strong> approx. \u20AC400,000 purchase price<br>\u2192 Required capital: approx. \u20AC64,000</li>
</ul>
<p><strong>Rule of thumb:</strong> Plan 16% of the purchase price as total capital (10% equity + 6% acquisition costs).</p>
<p><strong>Recommendation:</strong> Additionally maintain 3-6 monthly instalments as a liquidity reserve (approx. \u20AC3,000-\u20AC6,000).</p>`,
        },
        {
          question: 'Can I start with just one property?',
          answer: `<p><strong>Yes, absolutely!</strong> Most of our clients start with a single property.</p>
<p><strong>Scalable approach:</strong></p>
<ul>
<li><strong>Year 1:</strong> Buy first property, gain experience</li>
<li><strong>Year 3-5:</strong> Finance second property through appreciation of the first</li>
<li><strong>Year 7-10:</strong> Third property, portfolio grows</li>
<li><strong>Year 10-20:</strong> Continuous expansion to 5-10 properties possible</li>
</ul>
<p><strong>Example:</strong> With \u20AC400,000 starting capital, you can build a portfolio of 10 properties worth \u20AC3,000,000 (after debt) in 20 years.</p>
<p><strong>Step-by-step advantage:</strong> You learn the process, gain experience and scale at your own pace.</p>`,
        },
      ],
    },
  ],
};
