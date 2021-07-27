let journalHidden = false

$(document).ready(function(){

    // $('h1').hover(function(){
    //     alert("Why did you hover over that?")
    // })

    $('#writeEntry').click(function(event){
        event.preventDefault()
        $('#journal').prepend(`
            <div class='journalEntry'>
                <h2 class='goodDay'>Good Day</h2>
                <p>
                    ${$('#myDay').val()}
                </p>
            </div>
        `)
        $('#myDay').val("")
    })
            // <div class='journalEntry'>
    $(document).on('mouseenter', '.journalEntry', function(){
        $(this).css('background-color', 'lightgrey')
    })

    $(document).on('mouseleave', '.journalEntry', function(){
        $(this).css('background-color', 'white')
    })

    $(document).on('click', '.goodDay', function(){
        $(this).addClass('badDay')
        $(this).removeClass('goodDay')
        $(this).text('Bad Day')
    })

    $(document).on('click', '.badDay', function(){
        $(this).addClass('goodDay')
        $(this).removeClass('badDay')
        $(this).text('Good Day')
    })
// Option One
    // $('#hideJournal').click(function(){
    //     if(journalHidden){
    //         $('#journal').show()
    //         journalHidden = false
    //         $('#hideJournal').text('Hide Journal')
    //     } else {
    //         $('#journal').hide()
    //         journalHidden = true
    //         $('#hideJournal').text(`I'm just thinking about what to write.`)
    //     }
    // })

// Option Two
    $('#hideJournal').click(function(){
        $('#journal').toggle()
        if(journalHidden){
            journalHidden = false
            $('#hideJournal').text('Hide Journal')
        } else {
            journalHidden = true
            $('#hideJournal').text(`I'm just thinking about what to write.`)
        }
    })
})
