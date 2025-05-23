        $(document).ready(function(){
            $('.burguer').click(function(){
                $('.navbar_bestiario').slideToggle();
            })
            
            $('.menu-item-toggle').click(function(e){
                e.preventDefault();
                
            var selectSubmenu = $(this).data('target-submenu');
            var $targetSubmenu = $(selectSubmenu);

            $('.submenu').not($targetSubmenu).slideUp();

            $targetSubmenu.slideToggle();
            })


        })