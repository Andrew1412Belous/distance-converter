export const template = `
  <h5 id="converter-title">Converter</h5>
  <div id="wrapper">
    <div class="convert-block">
    <p>I want to convert:</p>
     <select id="select-from" class="select">
        <option value="mm">millimeters</option>
        <option selected="selected" value="cm">centimeters</option>
        <option value="m">meters</option>
        <option value="km">kilometers</option>
        <option value="ft">feet</option>
        <option value="yd">yards</option>
        <option value="in">inches</option>
     </select>
     <input type="text" id="input-from">
    </div>
    <div class="convert-block">
    <p>to:</p>
     <select id="select-to" class="select">
        <option value="mm">millimeters</option>
        <option selected="selected" value="cm">centimeters</option>
        <option value="m">meters</option>
        <option value="km">kilometers</option>
        <option value="ft">feet</option>
        <option value="yd">yards</option>
        <option value="in">inches</option>
     </select>
     <input type="text" id="input-to" disabled>
    </div>
  </div>
`
