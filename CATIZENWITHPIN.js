const correctPasswordEncoded = "QEFzSGlrNzA1"; 
const userPassword = prompt("Enter Your Passsword, admin: https://www.facebook.com/AsHik705 :");
const userPasswordEncoded = btoa(userPassword);
if (userPasswordEncoded === correctPasswordEncoded) {
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
  const encodedtext = "IEF1dGhvciBMaW5rOiBodHRwczovL3d3dy5mYWNlYm9vay5jb20vQXNIaWs3MDU=";

  const decodedText = decodeBase64(encodedText);
  const decodedtext = decodeBase64(encodedtext)
  console.log(decodedText);
  console.log(decodedtext)
} else {
  console.log("Wrong, Try Again।");
  function decodeBase64(encodedText) {
    const decodedBytes = atob(encodedText);
    return decodeURIComponent(escape(decodedBytes));
  }
  const encodedText = "ICBBdXRob3IgQ2hhbm5lbDog aHR0cHM6Ly90Lm1lL0JhcnRh TmF3T2ZmaWNpYWwg"; 
  const encodedtext = "IEF1dGhvciBMaW5rOiBodHRwczovL3d3dy5mYWNlYm9vay5jb20vQXNIaWs3MDU=";
  const decodedText = decodeBase64(encodedText);
  const decodedtext = decodeBase64(encodedtext)
  console.log(decodedText);
  console.log(decodedtext)
}
