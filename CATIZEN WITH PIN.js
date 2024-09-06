const correctPasswordEncoded = "YmFydGFuYXc="; 
const userPassword = prompt("পাসওয়ার্ড লিখুন:");
const userPasswordEncoded = btoa(userPassword);

if (userPasswordEncoded === correctPasswordEncoded) {
  // আপনার বিদ্যমান কোড এখানে শুরু হবে

  const consoleRed = "font-weight: bold; color: red;";
  const consoleGreen = "font-weight: bold; color: green;";
  const consolePrefix = "%c [AutoBot] ";
  console.clear();
  console.log(`${consolePrefix} inserting... `, consoleGreen);
  try {
    function onClickAuto() {
      P.cat.isAuto = !P.cat.isAuto;
      if (P.cat.isAuto) {
        this.ani8.play(0, true);
        Laya.timer.loop(500, this, this.checkAuto);
        this.checkFreeCat();
        this.m_btn_AutoSetting.visible = true;
      } else {
        Laya.timer.clearAll(this.checkAuto);
        this.ani8.stop();
        Laya.timer.loop(5000, this, this.checkSum);
        this.m_btn_AutoSetting.visible = false;
      }
      this.m_img_StopAuto.visible = !P.cat.isAuto;
      u(
        `AutoBot ${
          P.cat.isAuto ? " activated " : " turned off"
        }!\n\n Cracked by @BartaNawOfficial `
      );
    }
    //Assign the onClickAuto function to N's prototype instead
    N.prototype.onClickAuto = onClickAuto;
    console.log(`${consolePrefix} Script loaded `, consoleGreen);
    console.log(`${consolePrefix} Crack by BartaNawOfficial `, consoleGreen);
  } catch (e) {
    console.log(
      `${consolePrefix}An error occurred, the breakpoint was not set correctly!`,
      consoleRed
    );
    console.log(
      `${consolePrefix}Please follow the instructions, and you will succeed :*`,
      consoleRed
    );
  }
  function decodeBase64(encodedText) {
    const decodedBytes = atob(encodedText);
    return decodeURIComponent(escape(decodedBytes));
  }
  const encodedText = "ICBBdXRob3IgQ2hhbm5lbDog aHR0cHM6Ly90Lm1lL0JhcnRh TmF3T2ZmaWNpYWwg"; 
  const encodedtext = "QXV0aG9yIExpbms6IGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9Bc0hpazc1NSA=";

  const decodedText = decodeBase64(encodedText);
  const decodedtext = decodeBase64(encodedtext)
  console.log(decodedText);
  console.log(decodedtext)

  // আপনার বিদ্যমান কোড এখানে শেষ হবে
} else {
  console.log("ভুল পাসওয়ার্ড। আবার চেষ্টা করুন।");

//এখানে নিচের অংশ ভুল পাসওয়ার্ড দিলে আসবে।
  function decodeBase64(encodedText) {
    const decodedBytes = atob(encodedText);
    return decodeURIComponent(escape(decodedBytes));
  }
  const encodedText = "ICBBdXRob3IgQ2hhbm5lbDog aHR0cHM6Ly90Lm1lL0JhcnRh TmF3T2ZmaWNpYWwg"; 
  const encodedtext = "QXV0aG9yIExpbms6IGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9Bc0hpazc1NSA=";

  const decodedText = decodeBase64(encodedText);
  const decodedtext = decodeBase64(encodedtext)
  console.log(decodedText);
  console.log(decodedtext)
}