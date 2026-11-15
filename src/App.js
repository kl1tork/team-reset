import { useState, useEffect } from "react";
import "./App.css";

export default function Home() {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [tariff, setTariff] = useState("Диагностика команды");

  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("requests") || "[]");
    setRequests(data);
  }, []);

  const sendRequest = () => {
    if (!name || !phone) return;

    const newReq = {
      name,
      phone,
      tariff,
      date: new Date().toLocaleString(),
    };

    const updated = [newReq, ...requests];
    setRequests(updated);
    localStorage.setItem("requests", JSON.stringify(updated));

    const msg = `Здравствуйте! Хочу записаться.%0AИмя: ${name}%0AТел: ${phone}%0AТариф: ${tariff}`;

    window.open(`https://wa.me/77718675422?text=${msg}`, "_blank");

    setOpen(false);
    setName("");
    setPhone("");
  };

  return (
    <div className="page">
      <div className="goldLight"></div>

      {/* HEADER */}
      <header className="topbar">
        <div className="logo">TEAM RESET</div>
      </header>

      {/* HERO */}
      <section className="section">
        <h1>TEAM RESET</h1>
        <h2 className="goldTitle">
          Система диагностики и трансформации команд
        </h2>
        <p>
          Помогаем собственникам выявлять скрытые процессы внутри команды,
          устранять управленческие барьеры и выстраивать систему,
          в которой каждый сотрудник работает на достижение бизнес-целей.
        </p>
        <p>
          TEAM RESET — это комплексная работа с психологическими,
          организационными и управленческими факторами,
          влияющими на эффективность бизнеса.
        </p>
      </section>

      {/* ABOUT */}
      <section className="section">
        <h2>О нас</h2>
        <p>
          TEAM RESET — система глубокой диагностики и трансформации команд.
          Мы помогаем собственнику получить объективную картину состояния
          бизнеса изнутри: увидеть скрытый саботаж, отсутствие
          ответственности, зависимость от руководителя, конфликты,
          нарушения коммуникации и сопротивление изменениям.
        </p>
        <p>
          Наша задача — не просто выявить проблемы, а определить причины,
          разработать индивидуальные рекомендации и сопровождать команду
          в процессе изменений.
        </p>
      </section>

      {/* PROBLEMS */}
      <section className="section">
        <h2 className="goldTitle">Проблемы бизнеса</h2>

        <div className="grid">
          <div className="card">
            <h3>Зависимость от собственника</h3>
            <p>
              Все решения проходят через руководителя.
              Команда не берёт ответственность на себя.
            </p>
          </div>

          <div className="card">
            <h3>Скрытый саботаж</h3>
            <p>
              Внутреннее сопротивление, невыполнение договорённостей
              и неочевидные конфликты.
            </p>
          </div>

          <div className="card">
            <h3>Отсутствие ответственности</h3>
            <p>
              Сотрудники избегают самостоятельных решений
              и перекладывают ответственность.
            </p>
          </div>

          <div className="card">
            <h3>Нарушение коммуникации</h3>
            <p>
              Конфликты между отделами, недопонимание
              и отсутствие согласованности.
            </p>
          </div>

          <div className="card">
            <h3>Эмоциональное выгорание</h3>
            <p>
              Снижение мотивации, вовлечённости и работоспособности команды.
            </p>
          </div>

          <div className="card">
            <h3>Сопротивление изменениям</h3>
            <p>
              Психологические и командные барьеры,
              мешающие развитию и масштабированию бизнеса.
            </p>
          </div>
        </div>
      </section>

      {/* CASES */}
      <section className="section">
        <h2 className="goldTitle">Кейсы трансформации</h2>

        <div className="card caseCard">
          <div className="bigNumber smallGold">
            1 000 000 000 ₸
          </div>

          <p className="caseDesc">
            Прибыль за 6 месяцев сопровождения
          </p>

          <div className="caseBox">
            <h3>ПРОБЛЕМА</h3>
            <p>Долги, хаос, зависимость от владельца</p>
          </div>

          <div className="caseBox">
            <h3>ПРОЦЕСС</h3>
            <p>Диагностика системы и работа с командой</p>
          </div>

          <div className="caseBox">
            <h3>РЕЗУЛЬТАТ</h3>
            <p>Системный рост и прибыль более 1 млрд ₸</p>
          </div>
        </div>

        <div className="card caseCard">
          <div className="bigNumber smallGold">
            +42% дохода
          </div>

          <p className="caseDesc">
            Рост эффективности команды
          </p>

          <div className="caseBox">
            <h3>ПРОБЛЕМА</h3>
            <p>Нестабильные продажи</p>
          </div>

          <div className="caseBox">
            <h3>РЕШЕНИЕ</h3>
            <p>Перераспределение ответственности</p>
          </div>

          <div className="caseBox">
            <h3>РЕЗУЛЬТАТ</h3>
            <p>Стабильный рост дохода</p>
          </div>
        </div>

        <div className="card caseCard">
          <div className="bigNumber smallGold">
            -70% конфликтов
          </div>

          <p className="caseDesc">
            Снижение напряжения внутри команды
          </p>

          <div className="caseBox">
            <h3>ПРОБЛЕМА</h3>
            <p>Конфликты между отделами</p>
          </div>

          <div className="caseBox">
            <h3>РЕШЕНИЕ</h3>
            <p>Работа с коммуникацией</p>
          </div>

          <div className="caseBox">
            <h3>РЕЗУЛЬТАТ</h3>
            <p>Спокойная и управляемая команда</p>
          </div>
        </div>
      </section>

      {/* DIAGNOSTICS */}
      <section className="section">
        <h2 className="goldTitle">Диагностика команды</h2>

        <p>
          Первый этап комплексной работы — исследование состояния команды,
          выявление скрытых процессов и определение точек роста бизнеса.
        </p>

        <div className="card">
          <h3>Что входит в диагностику</h3>

          <ul>
            <li>Индивидуальная диагностика собственника бизнеса.</li>
            <li>Индивидуальная диагностика ключевых руководителей.</li>
            <li>Психометрическое тестирование стресса и выгорания.</li>
            <li>Оценка ответственности, мотивации и вовлечённости.</li>
            <li>Анализ конфликтности, коммуникации и фрустрации.</li>
            <li>Анализ распределения ролей и командной динамики.</li>
            <li>Стратегическая Т-игра для диагностики команды.</li>
            <li>Выявление скрытых конфликтов и сопротивления изменениям.</li>
            <li>Анализ зависимости команды от собственника.</li>
            <li>Итоговый PDF-отчёт с картой команды и рекомендациями.</li>
          </ul>

          <h3>Результат</h3>
          <p>
            Собственник получает объективную картину состояния команды,
            выявленные риски и сильные стороны, а также рекомендации
            по распределению ролей, коммуникации и управленческим решениям.
          </p>

          <p>
            <strong>Продолжительность: 7–10 дней.</strong>
          </p>
        </div>
      </section>

      {/* TARIFFS */}
      <section className="section">
        <h2>Программы TEAM RESET</h2>

        <div className="grid">

          {/* DIAGNOSTICS */}
          <div className="card">
            <h3>TEAM RESET DIAGNOSTICS</h3>

            <div className="bigNumber smallGold">
              120 000 ₸
            </div>

            <p>За одного участника</p>
            <p>Продолжительность: 7–10 дней</p>

            <ul>
              <li>Диагностика собственника бизнеса.</li>
              <li>Диагностика ключевых руководителей.</li>
              <li>Психометрическое тестирование команды.</li>
              <li>Оценка стресса и выгорания.</li>
              <li>Оценка ответственности и мотивации.</li>
              <li>Анализ конфликтов и коммуникации.</li>
              <li>Стратегическая командная Т-игра.</li>
              <li>Итоговый аналитический PDF-отчёт.</li>
              <li>Рекомендации собственнику.</li>
            </ul>

            <button onClick={() => {
              setTariff("Диагностика команды");
              setOpen(true);
            }}>
              Выбрать диагностику
            </button>
          </div>

          {/* PRO */}
          <div className="card">
            <h3>TEAM RESET PRO</h3>

            <div className="bigNumber smallGold">
              200 000 ₸
            </div>

            <p>За одного участника в месяц</p>
            <p>Продолжительность: 3, 6 или 12 месяцев</p>

            <ul>
              <li>Диагностика собственника и топ-менеджеров.</li>
              <li>Разработка дорожной карты сопровождения бизнеса.</li>
              <li>Еженедельная индивидуальная сессия с собственником.</li>
              <li>Индивидуальная работа с каждым топ-менеджером.</li>
              <li>Работа с психологическими барьерами и сопротивлением.</li>
              <li>Развитие ответственности и личной эффективности.</li>
              <li>Работа с командными конфликтами.</li>
              <li>Улучшение межотдельной коммуникации.</li>
              <li>Групповые тренинги, игры и мастер-классы.</li>
              <li>Ежемесячное тестирование динамики команды.</li>
              <li>Еженедельные аналитические отчёты собственнику.</li>
            </ul>

            <h3>Форматы индивидуальной работы</h3>

            <p>
              <strong>Формат 1:</strong> собственник и каждый ключевой
              топ-менеджер проходят индивидуальную сессию еженедельно.
            </p>

            <p>
              <strong>Формат 2:</strong> собственник проходит сессию
              еженедельно, каждый топ-менеджер — дважды в месяц.
              Между встречами руководители самостоятельно внедряют решения.
            </p>

            <button onClick={() => {
              setTariff("TEAM RESET PRO");
              setOpen(true);
            }}>
              Выбрать PRO
            </button>
          </div>

          {/* VIP */}
          <div className="card vip">
            <h3>TEAM RESET VIP</h3>

            <div className="bigNumber smallGold">
              2 500 000 ₸
            </div>

            <p>В месяц</p>
            <p>Продолжительность: от 6 месяцев</p>

            <ul>
              <li>Полная психодиагностика команды.</li>
              <li>Индивидуальная дорожная карта трансформации.</li>
              <li>Персональная работа с собственником.</li>
              <li>Индивидуальные сессии с каждым топ-менеджером.</li>
              <li>Работа двух психологов.</li>
              <li>Персональный куратор проекта.</li>
              <li>Групповые тренинги и стратегические сессии.</li>
              <li>Работа с командной динамикой и конфликтами.</li>
              <li>Работа с эмоциональным выгоранием.</li>
              <li>Развитие лидерства и ответственности.</li>
              <li>Работа с делегированием.</li>
              <li>Разработка правил и регламентов.</li>
              <li>Создание инструкций и систем оценки.</li>
              <li>Стратегические встречи с собственником.</li>
              <li>Еженедельные и ежемесячные отчёты.</li>
              <li>Сопровождение внедрения изменений.</li>
            </ul>

            <button onClick={() => {
              setTariff("TEAM RESET VIP");
              setOpen(true);
            }}>
              Выбрать VIP
            </button>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section">
        <h2 className="goldTitle">Отзывы клиентов</h2>

        <div className="grid">
          <div className="card">
            <p className="reviewText">
              “После диагностики команда перестала терять деньги.
              Стало понятно, где реальная проблема в системе.”
            </p>
            <div className="reviewAuthor">
              — CEO, строительный бизнес
            </div>
          </div>

          <div className="card">
            <p className="reviewText">
              “Мы убрали хаос в управлении.
              Руководитель перестал тянуть всё на себе.”
            </p>
            <div className="reviewAuthor">
              — Основатель e-commerce проекта
            </div>
          </div>

          <div className="card">
            <p className="reviewText">
              “Рост выручки пошёл уже в первый месяц.
              Команда стала работать как система,
              а не как люди по отдельности.”
            </p>
            <div className="reviewAuthor">
              — Руководитель отдела продаж
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <h2>Готовы начать?</h2>

        <p>
          Начните с диагностики команды или обсудите индивидуальную
          программу сопровождения бизнеса.
        </p>

        <button onClick={() => setOpen(true)}>
          Оставить заявку
        </button>

        <button onClick={() =>
          window.open("https://wa.me/77718675422?text=Здравствуйте!", "_blank")
        }>
          WhatsApp
        </button>
      </section>

      {/* MODAL */}
      {open && (
        <div className="modalOverlay" onClick={() => setOpen(false)}>
          <div className="modalBox" onClick={(e) => e.stopPropagation()}>

            <h2>Заявка</h2>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Имя"
            />

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="WhatsApp"
            />

            <select
              value={tariff}
              onChange={(e) => setTariff(e.target.value)}
            >
              <option>Диагностика команды</option>
              <option>TEAM RESET PRO</option>
              <option>TEAM RESET VIP</option>
              <option>Консультация</option>
            </select>

            <button onClick={sendRequest}>
              Отправить
            </button>

            <button onClick={() => setOpen(false)}>
              Закрыть
            </button>

          </div>
        </div>
      )}
    </div>
  );
}
