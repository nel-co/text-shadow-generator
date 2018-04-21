const TextShadow = (function() {

  const inputs = Array.from(document.querySelectorAll('input[type=range]'));
  const codeText = Array.from(document.querySelectorAll('.code-full span'));  
  const headline = document.querySelector('h1.headline');
  const copyBtn = document.querySelector('.code-copy');
  const hShadowInput = inputs[0];
  const vShadowInput = inputs[1];
  const blurInput = inputs[2];
  let slideTarget;  
  let newHeadlineStyle = newHeadlineStyle || '-3px -3px 0px rgba(0, 0, 0, 0.3)';
  let hShadowText = document.querySelector('.code-hShad').textContent;
  let vShadowText = document.querySelector('.code-vShad').textContent;
  let blurRadiusText = document.querySelector('.code-blurRadius').textContent;

  function handleSliderShadow(slider) {
    if(slider === hShadowInput) {
      handleHShadow();
    } else if(slider === vShadowInput) {
      handleVShadow();
    } else if(slider === blurInput) {
      handleBlurShadow();
    }
  }

  function handleHShadow() {
    let horizontalShadow = `${hShadowInput.value}px`;
    hShadowText = horizontalShadow;
    setNewHeadlineStyle();
    document.querySelector('.code-hShad').textContent = horizontalShadow;
  }

  function handleVShadow() {
    let verticalShadow = `${vShadowInput.value}px`;
    vShadowText = verticalShadow;
    setNewHeadlineStyle();    
    document.querySelector('.code-vShad').textContent = verticalShadow;
  }

  function handleBlurShadow() {
    let blurRadius = `${blurInput.value}px`;
    blurRadiusText = blurRadius;
    setNewHeadlineStyle();
    document.querySelector('.code-blurRadius').textContent = blurRadius;
  }

  function setNewHeadlineStyle() {
    newHeadlineStyle = `${hShadowText} ${vShadowText} ${blurRadiusText} rgba(0, 0, 0, 0.3)`;
    headline.style.textShadow = newHeadlineStyle;
  }

  function mouseUp() {
    codeText.slice(1,4).map(text => text.style.color = '#ffffff');
  }

  function handleCodeHighLight(inputId) {
    let inputName = inputId.name;
    switch (inputName) {
      case 'hShad':
        document.querySelector('.code-hShad').style.color = '#ff9f59';        
        break;
      case 'vShad':
        document.querySelector('.code-vShad').style.color = '#ff9f59';
        break;
      case 'blurRadius':
        document.querySelector('.code-blurRadius').style.color = '#ff9f59';        
        break      
      default:
        break;
    }
  }

  function showCopy() {
    const copyBlock = document.querySelector('.code-copied');
    copyBlock.classList.add('sliding');
    setTimeout(() => {
      copyBlock.classList.remove('sliding');
    }, 2000);
  }

  function setOnClick() {
    copyBtn.onclick = function() {
      document.execCommand('copy');
    }
  }

  function registerEvents() {

    inputs.map(input => {
      input.addEventListener('input', (e) => {
        slideTarget = e.target;        
        handleSliderShadow(slideTarget);
        handleCodeHighLight(slideTarget);
      })
    })

    document.addEventListener('mouseup', () => {
      mouseUp();
    }, false);

    document.addEventListener('copy', function(e) {
      e.preventDefault();
      if(e.clipboardData) {
        e.clipboardData.setData("text/plain", `text-shadow: ${newHeadlineStyle};`);
        showCopy();
      }
    })

  }

  return {
    init: function() {
      setOnClick();      
      registerEvents();
    }
  }

})();

TextShadow.init();