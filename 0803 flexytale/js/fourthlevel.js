
    //fourthlevel
    let textarea = document.getElementById('code').value;
    
    $("#code").on("propertychange change keyup paste input", function() {
        let currentVal = $(this).val();
        if((currentVal.includes('flex-direction: row-reverse;'))&&(!document.querySelector('.pond').classList.contains('fourth-flex-direction')))
        {
            document.getElementById('pond').className += ' fourth-flex-direction';
        }
        if((currentVal.includes('justify-content : space-between;'))&&(!document.querySelector('.pond').classList.contains('fourth-justify-content')))
        {
            document.getElementById('pond').className += ' fourth-justify-content';
        }
        //지우면 삭제
        if((!currentVal.includes('flex-direction: row-reverse;'))&&(document.querySelector('.pond').classList.contains('fourth-flex-direction')))
        {
            document.getElementById('pond').className='pond';
        }
        if((!currentVal.includes('justify-content : space-between;'))&&(document.querySelector('.pond').classList.contains('fourth-justify-content')))
        {
            document.getElementById('pond').className='pond';
        }

    });