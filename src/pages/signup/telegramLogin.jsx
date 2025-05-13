import { useEffect } from 'react';

const TelegramLogin = () => {
  useEffect(() => {
    // ✅ Define the global handler BEFORE the script is added
    window.onTelegramAuth = function (user) {
      alert(`Logged in as ${user.first_name} (${user.id})`);
      console.log("Telegram User:", user);
    };

    // ✅ Remove previous scripts if any
    const existing = document.getElementById("telegram-login-script");
    if (existing) existing.remove();

    // ✅ Add Telegram script
    const script = document.createElement('script');
    script.id = "telegram-login-script";
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.async = true;
    script.setAttribute("data-telegram-login", "ArcDevV1bot");
    script.setAttribute("data-size", "large");
    script.setAttribute("data-userpic", "false");
    script.setAttribute("data-request-access", "write");
    script.setAttribute("data-onauth", "onTelegramAuth");

    document.getElementById("telegram-login").appendChild(script);
  }, []);

  return <div id="telegram-login"></div>;
};

export default TelegramLogin;
