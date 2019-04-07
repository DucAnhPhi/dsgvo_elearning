const questions = {
    "gebot1_allgemein": [
        {
            "id": "gebot1_allgemein_1",
            "question": "Ist eine Datenverarbeitung immer erlaubt?",
            "possibleAnswers": [
                "Ja, immer.",
                "Nein, nur wenn eine Einwilligung vom Betroffenen gegeben wurde.",
                "Grundsätzlich ist sie verboten, unter bestimmten Bedingungen ist sie jedoch erlaubt.",
                "Das hängt von der Kategorie der erhobenen Daten ab."
            ],
            "explanations": [
                "Falsch: Das war nicht richtig. Grundsätzlich ist jede Datenverarbeitung erstmal verboten, unter bestimmten Bedingungen ist sie jedoch erlaubt.",
                "Falsch: Das war nicht ganz richtig. Eine Einwilligung ist nur eine von sechs Bedingungen auf deren Grundlage eine Datenverarbeitung erlaubt ist.",
                "Richtig: Das war korrekt. Weiter so!",
                "Falsch: Das war nicht ganz richtig. Die Kategorie der Daten ist nicht relevant bei der Frage ob überhaupt eine Datenverarbeitung durchgeführt werden darf. Es kommt darauf an in welchen Rahmenbedingungen die Datenverarbeitung statt findet. Die Kategorie der Daten kann im nächsten Schritt jedoch besondere Anforderungen an die Art der Verarbeitung und an Informationspflichten stellen."
            ],
            "rightAnswer": 3,
            "tag": "all"
        },
        {
            "id": "gebot1_allgemein_2",
            "question": "Muss eine betroffene Person immer eine Einwilligung geben, damit personenbezogene Daten von ihr verarbeitet werden dürfen?",
            "possibleAnswers": [
                "Ja, immer",
                "Nein, eine Einwilligung ist nur eine von mehreren Möglichkeiten auf deren Basis personenbezogene Daten verarbeitet werden dürfen."
            ],
            "explanations": [
                "Falsch: Das war nicht ganz richtig. Eine Einwilligung ist nur eine von sechs Bedingungen auf deren Grundlage eine Datenverarbeitung erlaubt ist.",
                "Richtig: Das war korrekt. Weiter so!"
            ],
            "rightAnswer": 2,
            "tag": "all"
        },
        {
            "id": "gebot1_allgemein_3",
            "question": "Welche Bedingungen zur rechtmäßigen Datenverarbeitung sind in der IT am relevantesten?",
            "possibleAnswers": [
                "Das hängt vom jeweiligen Projekt ab. Es kann jede Bedingung relevant sein.",
                "Die Einwilligung der betroffenen Person.",
                "Lebenswichtige Interessen und das öffentliches Interesse.",
                "Die Erfüllung eines Vertrages"
            ],
            "explanations": [
                "Richtig: Das war korrekt. Weiter so!",
                "Falsch: Das war nicht ganz richtig. Eine Einwilligung ist nur eine von sechs Bedingungen auf deren Grundlage eine Datenverarbeitung erlaubt ist. Je nach Projekt kann eine andere Bedingung relevant sein.",
                "Falsch: Das war nicht ganz richtig. Lebenswichtige Interessen und das öffentliches Interesse sind nur eine von sechs Bedingungen auf deren Grundlage eine Datenverarbeitung erlaubt ist. Je nach Projekt kann eine andere Bedingung relevant sein.",
                "Falsch: Das war nicht ganz richtig. Die Erfüllung eines Vertrages ist nur eine von sechs Bedingungen auf deren Grundlage eine Datenverarbeitung erlaubt ist. Je nach Projekt kann eine andere Bedingung relevant sein."
            ],
            "rightAnswer": 1,
            "tag": "it"
        },
        {
            "id": "gebot1_allgemein_4",
            "question": "Welche Bedingungen zur rechtmäßigen Datenverarbeitung sind im Marketing am relevantesten?",
            "possibleAnswers": [
                "Einwilligung, vorvertragliche Maßnahmen, berechtigtes Interesse des Unternehmens",
                "Lebenswichtige Interessen, Erfüllung eines Vertrages, öffentliches Interesse"
            ],
            "explanations": [
                "Richtig: Das war korrekt. Weiter so!",
                "Falsch: Das passt nicht. Auf diese Bedingungen werden Sie im Marketing wohl nicht zurückgreifen können."
            ],
            "rightAnswer": 1,
            "tag": "marketing"
        }
    ],
    "gebot1_einwilligung": [
        {
            "id": "gebot1_einwilligung_1",
            "question": "In welcher Form kann eine Einwilligung erfolgen?",
            "possibleAnswers": [
                "mündlich, schriftlich, elektronisch, in Textform",
                "mündlich, schriftlich, elektronisch, zunicken",
                "mündlich, schriftlich, elektronisch, nichts tun",
                "mündlich, schriftlich, elektronisch, ein bereits ausgefülltes Häkchen"
            ],
            "explanations": [
                "Richtig: Das war korrekt! Weiter so.",
                "Falsch: Das war falsch. Mündlich, schriftlich, elektronisch sind korrekt, aber ein Zunicken reicht natürlich nicht aus. Ein Zunicken könnte man auch nicht vernüftig protokollieren.",
                "Falsch: Das war falsch. Mündlich, schriftlich, elektronisch sind korrekt, aber ein Nichts zu tun reicht natürlich nicht aus. Es sind eindeutig bestätigende Handlungen nötig.",
                "Falsch: Das war falsch. Mündlich, schriftlich, elektronisch sind korrekt, aber ein bereits ausgefülltes Häkchen reicht nicht aus. Die betroffene Person muss das Häkchen selber setzen."
            ],
            "rightAnswer": 1,
            "tag": "all"
        },
        {
            "id": "gebot1_einwilligung_2",
            "question": "Wie muss die Einwilligung in einem Webformular bestätigt werden?",
            "possibleAnswers": [
                "Mit einer Formulierung wie “Ich gebe meine Einwilligung zur Datenverarbeitung.”",
                "Ein Kästchen zur Bestätigung der Einwilligung ist standardmäßig ausgefüllt.",
                "Der Haken in einem Kästchen muss vom Benutzer gesetzt werden. Ein Link zur Datenschutzerklärung ist vorhanden.",
                "Ein Hinweis auf die Datenschutzerklärung reicht aus."
            ],
            "explanations": [
                "Falsch: Das ist zu wenig. Zum einen muss auf die umfangreichen Datenschutz-Informationen verwiesen werden, zum anderen muss die betroffene Person die Einwilligung mit einer eindeutigen Handlung bestätigen.",
                "Falsch: Das war falsch. Ein bereits ausgefülltes Häkchen reicht nicht aus. Die betroffene Person muss das Häkchen selber setzen.",
                "Richtig: Das war korrekt! Weiter so.",
                "Falsch: Das reicht nicht aus. Die betroffene Person muss die Einwilligung auch noch mit einer eindeutigen Handlung bestätigen."
            ],
            "rightAnswer": 3,
            "tag": "it"
        },
        {
            "id": "gebot1_einwilligung_3",
            "question": "Darf die Zusendung einer kostenlosen Produktprobe von einer Einwilligung zur Nutzung der personenbezogenen Daten zu Werbezwecken abhängig gemacht werden?",
            "possibleAnswers": [
                "Nein, die kostenlose Produktprobe muss auch ohne die Einwilligung zugesendet werden können.",
                "Ja. Außerdem ist die Einwilligung ist auch nötig um die Adressdaten zum Versand der Produktprobe zu verarbeiten."
            ],
            "explanations": [
                "Richtig: Das war korrekt! Weiter so.",
                "Falsch: Das war nicht richtig. Die Einwilligung darf nicht von der Erfüllung eines Vertrages oder der Erbringung einer Dienstleistung abhängig gemacht werden. Auch eine Einwilligung ist nicht nötig, weil auch der Versand der einer kostenlose Produktprobe die Erfüllung eines Vertrages ist. Die dafür nötigen Daten dürfen auch ohne Einwilligung verarbeitet werden."
            ],
            "rightAnswer": 1,
            "tag": "marketing"
        }
    ],
    "gebot1_vertrag": [
        {
            "id": "gebot1_vertrag_1",
            "question": "Muss eine Einwilligung der betroffenen Person eingeholt werden, wenn ihre personenbezogenen Daten für die Erfüllung eines Vertrages benötigt werden?",
            "possibleAnswers": [
                "Ja, ohne Einwilligung dürfen keine Daten verarbeitet werden.",
                "Nein, in diesem Fall ist die Erfüllung eines Vertrages selbst eine Bedingung zur rechtmäßigen Datenverarbeitung.",
            ],
            "explanations": [
                "Falsch: Das war nicht richtig. Eine Einwilligung ist nur eine von sechs Bedingungen auf deren Grundlage eine Datenverarbeitung erlaubt ist.",
                "Richtig: Das war korrekt. Weiter so!"
            ],
            "rightAnswer": 2,
            "tag": "all"
        },
        {
            "id": "gebot1_vertrag_2",
            "question": "Sie programmieren ein Formular über welches Interessenten an Ihrem Unternehmen Kontakt mit Ihnen aufnehmen können. Welche Felder muss dieses Formular enthalten?",
            "possibleAnswers": [
                "Persönliche Nachricht, Name, E-Mail, Unternehmen",
                "E-Mail, Name, Telefonnummer, Geburtsdatum",
                "Vor- und Nachname, E-Mail",
                "Das kommt auf den Einzelfall an. In jedem Fall nur die Daten, die zur Bearbeitung der Anfragen benötigt werden."
            ],
            "explanations": [
                "Falsch: Das war nicht ganz richtig. Es kommt immer auf den Einzelfall an welche Daten verarbeitet werden dürfen. In jedem Fall dürfen nur die Daten verarbeitet werden, die zur Bearbeitung der Anfragen benötigt werden.",
                "Falsch: Das war nicht ganz richtig. Es kommt immer auf den Einzelfall an welche Daten verarbeitet werden dürfen. In jedem Fall dürfen nur die Daten verarbeitet werden, die zur Bearbeitung der Anfragen benötigt werden.",
                "Falsch: Das war nicht ganz richtig. Es kommt immer auf den Einzelfall an welche Daten verarbeitet werden dürfen. In jedem Fall dürfen nur die Daten verarbeitet werden, die zur Bearbeitung der Anfragen benötigt werden.",
                "Richtig: Das ist korrekt. Prüfen Sie in jedem Einzelfall, welche Daten tatsächlich nötig sind und fordern Sie nicht mehr Daten an."
            ],
            "rightAnswer": 4,
            "tag": "it"
        },
        {
            "id": "gebot1_vertrag_3",
            "question": "Sie stehen in Kontakt mit einem potentiellen Kunden. Welche Daten müssen Sie vor Abschluss des Vertrages verarbeiten?",
            "possibleAnswers": [
                "Name, E-Mail, Unternehmen",
                "E-Mail, Name, Telefonnummer, Geburtsdatum, Anschrift",
                "Vor- und Nachname, E-Mail",
                "Das kommt auf den Einzelfall an. In jedem Fall nur die Daten, die zur Vorbereitung des Vertrages benötigt werden."
            ],
            "explanations": [
                "Falsch: Das war nicht ganz richtig. Es kommt immer auf den Einzelfall an welche Daten verarbeitet werden dürfen. In jedem Fall dürfen nur die Daten verarbeitet werden, die auch wirklich zur Bearbeitung der Anfragen benötigt werden.",
                "Falsch: Das war nicht ganz richtig. Es kommt immer auf den Einzelfall an welche Daten verarbeitet werden dürfen. In jedem Fall dürfen nur die Daten verarbeitet werden, die auch wirklich zur Bearbeitung der Anfragen benötigt werden.",
                "Falsch: Das war nicht ganz richtig. Es kommt immer auf den Einzelfall an welche Daten verarbeitet werden dürfen. In jedem Fall dürfen nur die Daten verarbeitet werden, die auch wirklich zur Bearbeitung der Anfragen benötigt werden.",
                "Richtig: Das ist korrekt. Prüfen Sie in jedem Einzelfall, welche Daten tatsächlich nötig sind und fordern Sie nicht mehr Daten an."
            ],
            "rightAnswer": 4,
            "tag": "marketing"
        }
    ],
    "gebot1_interesse": [
        {
            "id": "gebot1_interesse_1",
            "question": "Was sind berechtigte Interessen eines Unternehmens?",
            "possibleAnswers": [
                "Jedes gesetzeskonforme Anliegen",
                "Kunden gewinnen und Umsätze steigern",
                "Sicherheit und Überwachung"
            ],
            "explanations": [
                "Richtig: Das ist richtig. Erstmal ist jedes jedes gesetzeskonforme Anliegen ein berechtigtes Interesse eines Unternehmens. Ob um dieses Interesse zu erreichen auch eine Datenverarbeitung durchgeführt werden darf, ist aber eine andere Frage.",
                "Falsch: Das ist zu wenig. Natürlich sind Kunden gewinnen und Umsätze steigern Interessen eines Unternehmens, aber berechtigte Interessen können jedes gesetzeskonforme Anliegen sein.",
                "Falsch: Das ist zu wenig. Natürlich sind Sicherheit und Überwachung Interessen eines Unternehmens, aber berechtigte Interessen können jedes gesetzeskonforme Anliegen sein."
            ],
            "rightAnswer": 1,
            "tag": "all"
        },
        {
            "id": "gebot1_interesse_2",
            "question": "Was muss getan werden, wenn Sie eine Datenverarbeitung aufgrund eines berechtigten Interesses durchführen wollen?",
            "possibleAnswers": [
                "Einwilligungen von den betroffenen Personen einholen",
                "Eine Interessenabwägung durchführen"
            ],
            "explanations": [
                "Falsch: Das ist falsch. Wenn man eine Datenverarbeitung aufgrund eines berechtigten Interesses durchführen will, ist dies ja gerade der Ersatz für eine Einwilligung, die sonst nötig wäre.",
                "Richtig: Das war richtig. Holen Sie sich hierzu am besten professionellen Rat bei einem Datenschutzexperten oder Juristen."
            ],
            "rightAnswer": 2,
            "tag": "all"
        },
        {
            "id": "gebot1_interesse_3",
            "question": "Welches dieser Beispiele ist ein berechtigtes Interesse eines Unternehmens?",
            "possibleAnswers": [
                "Eine strategische Analyse von Kundendaten",
                "Das Sammeln von privaten Daten von Mitarbeitern der Konkurrenz",
                "Das abgreifen von personenbezogenen Daten durch eine Schwachstelle eines Servers"
            ],
            "explanations": [
                "Richtig: Eine strategische Analyse von Kundendaten ist prinzipiell ein gesetzeskonformes Anliegen. ",
                "Falsch: Das war falsch. Die privaten Daten von Mitarbeitern der Konkurrenz sind tabu.",
                "Falsch: Das war falsch. Dies ist sogar die Straftat “Ausspähen von Daten” gemäß § 202a Strafgesetzbuch."
            ],
            "rightAnswer": 1,
            "tag": "it"
        },
        {
            "id": "gebot1_interesse_4",
            "question": "Welches dieser Beispiele ist ein berechtigtes Interesse eines Unternehmens?",
            "possibleAnswers": [
                "Ankauf und Nutzung von E-Mailadressen",
                "Das Vervollständigen von Datensätzen in einem CRM durch Daten aus einem öffentlich einsehbaren Telefonbuch.",
                "Das Sammeln von personenbezogenen Daten für Werbezwecke durch ein Gewinnspiel, bei dem die Preise aber gar nicht ausgegeben werden.",
                ""
            ],
            "explanations": [
                "Falsch: Das war falsch. Die Nutzung von gekauften von E-Mailadressen ist in der Regel illegal. Um Werbe E-Mails zu versenden ist bei Nicht-Bestandskunden eine Einwilligung nötig. Diese kann bei angekauften E-Mailadressen gar nicht rechtmäßig eingeholt werden.",
                "Richtig:  Das ist korrekt. Das ist prinzipiell ein berechtigtes Interesse. ",
                "Falsch: Irreführende Gewinnspiele sind illegal gem. § 5 a Abs. 2 - 4 UWG. Illegale Tätigkeiten sind kein gesetzeskonformes Anliegen."
            ],
            "rightAnswer": 2,
            "tag": "marketing"
        }
    ],
    "gebot2_allgemein": [
        {
            "id": "gebot2_allgemein_1",
            "question": "Welche Mengen von Daten dürfen sie erheben?",
            "possibleAnswers": [
                "Zur Sicherheit vor Rechtsstreitigkeiten müssen so viele Daten wie möglich erhoben werden.",
                "Es dürfen nur die Daten erhoben werden, die für den geplannten Zweck angemessen sind.",
                "Es dürfen so viele Daten erhoben werden, wie man sicher speichern kann.",
                "Es dürfen nur Daten für die geplante Datenverarbeitung erhoben werden und solche Daten, die man vermutlich auch in Zukunft benötigt."
            ],
            "explanations": [
                "Falsch: Das ist falsch. Es geht gerade darum, so wenig Daten wie möglich zu erheben. Es gilt genau zu ermitteln welche Daten benötigt werden, auch für mögliche Rechtsstreitigkeiten in der Zukunft. Hierzu berät sie idealerweise ein Jurist.",
                "Richtig: Das ist richtig. Weiter so!",
                "Falsch: Das ist falsch. Heutzutage kann man fast unbegrenzt viele Daten speichern. Diese Daten-Sammelwut soll diese Regelung der DSGVO eindämmen. Es dürfen nur die Daten erhoben werden, die für ihren Zweck angemessen werden.",
                "Falsch: Nur der erste Teil ist richtig. Daten für Zwecke in der Zukunft dürfen nicht heute schon auf Vorrat gespeichert werden."
            ],
            "rightAnswer": 2,
            "tag": "all"
        },
        {
            "id": "gebot2_allgemein_2",
            "question": "Sie erstellen ein Formular über welches Kunden Fragen zu Ihren Produkten stellen können. Welche Felder im Formular müssen Pflichtfelder sein?",
            "possibleAnswers": [
                "Name, Nachricht, E-Mail Adresse",
                "Name, Nachricht, E-Mail Adresse, Telefonnummer",
                "Name, Nachricht, E-Mail Adresse, Telefonnummer, Wohnort",
                "Name, Nachricht, E-Mail Adresse, Telefonnummer, Wohnort, Geschlecht"
            ],
            "explanations": [
                "Richtig: Richtig! Diese Daten sollten in der Regel ausreichen. Im Einzelfall können aber noch andere Pflichtfelder wie die Kundennummer hinzukommen.",
                "Falsch: Das ist nicht ganz richtig. Die Telefonnummer sollte freiwillig vom Kunden angeben werden können, falls er einen Rückruf zur Beantwortung der Frage wünscht.",
                "Falsch: Das ist nicht ganz richtig. Die Telefonnummer sollte freiwillig vom Kunden angegeben werden können, falls er einen Rückruf zur Beantwortung der Frage wünscht. Der Wohnort ist in der Regel gar nicht nötig um Kundenfragen zu beantworten.",
                "Falsch: Das ist nicht ganz richtig. Die Telefonnummer sollte freiwillig vom Kunden angegeben werden können, falls er einen Rückruf zur Beantwortung der Frage wünscht. Der Wohnort ist in der Regel gar nicht nötig um Kundenfragen zu beantworten. Das Geschlecht könnte für die Anrede nützlich sein, sollte aber besser als freiwilliges Feld als “Anrede” im Formular sein."
            ],
            "rightAnswer": 1,
            "tag": "it"
        },
        {
            "id": "gebot2_allgemein_3",
            "question": "Sie wollen Bestandskunden regelmäßig per E-Mail Empfehlungen zu ähnlichen Produkten, die sie bereits bei Ihnen gekauft haben, zukommen lassen. Welche Daten dürfen Sie für diese Maßnahme erheben?",
            "possibleAnswers": [
                "Name, E-Mail Adresse, gekaufte Produkte",
                "Name, Nachricht, E-Mail Adresse, gekaufte Produkte, Telefonnummer",
                "Name, E-Mail Adresse,  gekaufte Produkte, Telefonnummer, Wohnort, Geschlecht",
            ],
            "explanations": [
                "Richtig: Richtig! Diese Daten sollten in der Regel ausreichen. Im Einzelfall können aber noch andere Pflichtfelder wie die Kundennummer hinzukommen.",
                "Falsch: Das ist nicht ganz richtig. Die Telefonnummer benötigen Sie nicht für Empfehlungen per E-Mail.  Erheben Sie nur Daten, die ihrem Zweck angemessen sind!",
                "Falsch: Das ist nicht ganz richtig. Die Telefonnummer sollte freiwillig vom Kunden angegeben werden können, falls er einen Rückruf zur Beantwortung der Frage wünscht. Der Wohnort ist in der Regel gar nicht nötig um Kundenfragen zu beantworten. Das Geschlecht könnte für die Anrede nützlich sein, sollte aber besser als freiwilliges Feld als “Anrede” im Formular sein.",
            ],
            "rightAnswer": 1,
            "tag": "marketing"
        }
    ],
    "gebot2_vergessen": [
        {
            "id": "gebot2_vergessen_1",
            "question": "Wann müssen Daten in der Regel gelöscht werden?",
            "possibleAnswers": [
                "Wenn die betroffene Person dies wünscht oder wenn der Zweck für die Datenverarbeitung nicht mehr besteht.",
                "Nach 2 Jahren.",
                "Nach 10 Jahren.",
                "Daten dürfen nie gelöscht werden, weil man sie immer noch gebrauchen könnte!"
            ],
            "explanations": [
                "Richtig: Das ist richtig, dies ist die Regel. Bedenken Sie allerdings, dass es auch Ausnahmen geben kann, bei denen die Daten trotzdem nicht gelöscht werden müssen. Dazu mehr in der folgenden Frage.",
                "Falsch: Das war falsch. Starre Fristen für die Löschung für jede Art von Daten gibt es nicht.",
                "Falsch: Das war falsch. Starre Fristen für die Löschung für jede Art von Daten gibt es nicht.",
                "Falsch: Das war falsch. Das Gegenteil ist der Fall. Sobald Daten nicht mehr gebraucht werden müssen sie gelöscht werden."
            ],
            "rightAnswer": 1,
            "tag": "all"
        },
        {
            "id": "gebot2_vergessen_2",
            "question": "Bei welchem dieser Fälle müssen Daten nicht gelöscht werden, auch wenn die betroffene Person die Löschung verlangt?",
            "possibleAnswers": [
                "Die Person ist noch nicht volljährig",
                "Die Daten liegen in Back-Ups",
                "Das wirtschaftliche Interesse des Unternehmens überwiegt dem Interesse der betroffenen Person seine Persönlichkeitsrechte wahr zu nehmen.",
                "Man benötigt die Daten zur Erfüllung eines Vertrags"
            ],
            "explanations": [
                "Falsch: Das ist Falsch. Das Alter einer Person ist hier nicht relevant.",
                "Falsch: Das ist Falsch. Auch aus Back-Ups müssen Daten gelöscht werden.",
                "Falsch: Das ist Falsch. Das wäre ja verrückt!",
                "Richtig: Korrekt! Dies ist eine von mehreren Ausnahmen, die hier greifen."
            ],
            "rightAnswer": 4,
            "tag": "all"
        }
    ]
};
export default questions;
