// Selecting elements by ID
const pickerchart_modal = document.getElementById('chart_modal');
const pickercal_modal = document.getElementById('cal_modal');
const chart_modal = document.getElementById('chart-modal');
const cal_modal = document.getElementById('cal-modal');
// Click event handling for opening the chart modal
$('#openChartModal').click(function() {
  chart_modal.style.display = 'block';
});

// Click event handling for opening the calendar modal
$('#openCalModal').click(function() {
  cal_modal.style.display = 'block';
});

function openCalAndClose(modal, status){
    $('#'+modal).css('display', status);

}

// Click event handling for closing modals
$('.closeModal').click(function() {
  chart_modal.style.display = 'none';
  cal_modal.style.display = 'none';
});

// Draggable functionality for modals
function makeModalDraggable(modal, picker) {
  let isDragging = false;
  let startX, startY;

  picker.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX - modal.offsetLeft;
    startY = e.clientY - modal.offsetTop;
    modal.style.cursor = 'grabbing';
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const newLeft = e.clientX - startX;
    const newTop = e.clientY - startY;

    modal.style.left = `${newLeft}px`;
    modal.style.top = `${newTop}px`;
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    modal.style.cursor = 'grab';
  });
}

makeModalDraggable(chart_modal, pickerchart_modal);
makeModalDraggable(cal_modal, pickercal_modal);


  // Resizable functionality using CSS "resize" property


  function ShowTap(tabname, to,  active, content){

    $('.'+tabname).removeClass(active);
    $('[data-tab-content="'+to+'"]').addClass(active);
    $('.'+content).removeClass(active);
    $('#'+to).addClass(active);

  }
 var content  = `
 <div class=" updateDiv asinmice-folder-note-supplier-wrapper">
 <div class="asinmice-note-and-supplier">
   <div class="asinmice-folder-note-supplier-dropdown-wrapper"> 	
     <input class="asinmice-dropdown-input-hidden dropdown" type="checkbox" id="dropdown" name="dropdown">
     <label class="asinmice-dropdown-for-label for-dropdown" for="dropdown">Select Supplier <i class="uil uil-arrow-down">&lt;</i></label>
     <div class="section-dropdown"> 
       <ul class="asinmice-dropdown-list">
         
       <li class="asinmice-dropdown-list-item" data-supplier-id="no-suppliers">
         You have no suppliers added. To add a supplier click <a href="https://www.asinmice.com/suppliers" target="_blank">here.</a>
       </li></ul>
     </div>
   </div>
   <textarea rows="3" cols="30" resize="none" placeholder="Enter note here" class="asinmice-note-textarea"></textarea>
 </div>
 <div class="asinmice-folder-select">
   <div class="asinmice-folder-select-actions">
     <input class="asinmice-folder-search-input" type="text" placeholder="Search folder...">
   </div>
   <div class="asinmice-folders-list"><div class="asinmice-folder-wrapper folder-active" data-folderid="650a067af97e6d002106e42f">
         <div class="asinmice-folder" style="background-color:#d89c00" data-folderid="650a067af97e6d002106e42f">
         </div>
         <input type="radio" checked="" class="asinmice-default-folder-input" name="asinmice-folder-radio-group" data-folderid="650a067af97e6d002106e42f/">
       <p class="asinmice-folder-name">Default</p>
       </div><div class="asinmice-folder-wrapper false" data-folderid="650a0700056f130021b45bc9">
         <div class="asinmice-folder" style="background-color:#26a32b" data-folderid="650a0700056f130021b45bc9">
         </div>
         <input type="radio" false="" class="asinmice-default-folder-input" name="asinmice-folder-radio-group" data-folderid="650a0700056f130021b45bc9/">
       <p class="asinmice-folder-name">Groceries</p>
       </div><div class="asinmice-folder-wrapper false" data-folderid="652d8eaa65f55e00210dd3ae">
         <div class="asinmice-folder" style="background-color:#a34f38" data-folderid="652d8eaa65f55e00210dd3ae">
         </div>
         <input type="radio" false="" class="asinmice-default-folder-input" name="asinmice-folder-radio-group" data-folderid="652d8eaa65f55e00210dd3ae/">
       <p class="asinmice-folder-name">Toys</p>
       </div><div class="asinmice-folder-wrapper false" data-folderid="652e2fef65f55e00210dd716">
         <div class="asinmice-folder" style="background-color:#fa7bff" data-folderid="652e2fef65f55e00210dd716">
         </div>
         <input type="radio" false="" class="asinmice-default-folder-input" name="asinmice-folder-radio-group" data-folderid="652e2fef65f55e00210dd716/">
       <p class="asinmice-folder-name">Protein</p>
       </div></div>
 </div>
 <div class="asinmice-folder-select-save-and-close">
   <div onclick='showUPdate()' class="asinmice-folder-select-close">x</div>
   <button class="asinmice-save-profitable-product-button">Save
   
   </button>
 </div>
</div>
 `;
 let control = 'show';

 function showUPdate(){
  console.log('update....')

  if(control == 'show'){
      $('.b170').css('bottom', '170px');
      $('.b170').append(content);
      control = 'hide';

   }else{
     
      $('.b170').css('bottom', '0px');
      $('.b170').remove('.updateDiv');
      control = 'show';
   }
 
 }

 $(document).on('click', '.asinmice-seller-central-popup-close',function(){
   $('.asinmice-seller-central-popup').hide();
 })


 

