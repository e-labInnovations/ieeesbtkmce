<?php

// require('./fpdf/fpdf.php');
require_once IEEESBTKMCE_THEME_PATH . '/inc/fpdf/fpdf.php';

// Add a menu page for Certificates
function certificates_menu_page() {
    add_menu_page(
        'Certificates Page',   // Page title
        'Certificates',         // Menu title
        'manage_options',       // Capability
        'certificates_page',    // Menu slug
        'certificates_page_callback', // Callback function to display content
        'dashicons-awards',     // Icon (you can choose an icon from Dashicons)
        20                      // Menu position
    );
}

add_action('admin_menu', 'certificates_menu_page');

// Callback function to display content on Certificates page
function certificates_page_callback() {

    ?>
    <div class="wrap">
        <h1>Certificates Page</h1>
        <p>This is the content of the Certificates page.</p>
        <form method="post" action="">
            <button type="submit" name="generate_certificate">Generate Certificate</button>
        </form>

        <h1>Certificate</h1>
        <pre id="text-size"></pre>

        <div id = "canvas_container">
            <canvas id = "pdf_renderer"> </canvas>
        </div>

        <!-- <script src="https://www.jsdelivr.com/package/npm/pdfjs-dist" type="module"></script> -->
        <script type="module">
            window.addEventListener("load", function(event) {
                var url = 'http://ieeesbtkmce.localhost/wp-content/uploads/2024/01/template_1.pdf';

                var defaultState = {
                    pdf: null,
                    currentPage: 1,
                    zoom: 1
                }

                // GET OUR PDF FILE
                pdfjsLib.getDocument(url).then((pdf) => {
                    defaultState.pdf = pdf;
                    render();
                });

                // RENDER PDF DOCUMENT
                function render() {
                    var clicks = []
                    var canvas = document.getElementById("pdf_renderer");
                    let pdfPage = null

                    defaultState.pdf.getPage(defaultState.currentPage).then((page) => {
                        var ctx = canvas.getContext('2d');

                        var viewport = page.getViewport(defaultState.zoom);

                        canvas.width = viewport.width;
                        canvas.height = viewport.height;

                        var renderTask = page.render({
                            canvasContext: ctx,
                            viewport: viewport
                        })

                        renderTask.promise.then(function () {
                            // console.log('Page rendered');
                            // ctx.strokeStyle = 'red';
                            // ctx.strokeRect(10, 10, 50, 20);
                            pdfPage = ctx.getImageData(0, 0, canvas.width, canvas.height);

                            var mousedown = false;
                            canvas.addEventListener('mousedown', function (e) {
                                clicks[0] = {
                                x: e.offsetX,
                                y: e.offsetY
                                };
                                mousedown = true;
                            })
                            canvas.addEventListener('mousemove', function (e) {
                                if (mousedown) {
                                clicks[1] = {
                                    x: e.offsetX,
                                    y: e.offsetY
                                };
                                redraw(ctx);
                                }
                            })
                            canvas.addEventListener('mouseup', function (e) {
                                mousedown = false;
                                clicks[1] = {
                                x: e.offsetX,
                                y: e.offsetY
                                };
                            })
                            canvas.addEventListener('mouseleave', function (event) {
                                mousedown = false;
                            });
                        });

                    });

                    function drawRectangle(ctx){
                        ctx.beginPath();
                        ctx.rect(clicks[0].x, clicks[0].y, clicks[1].x-clicks[0].x, clicks[1].y-clicks[0].y);
                        ctx.fillStyle = 'rgba(100,100,100,0.5)';
                        ctx.fill();
                        ctx.strokeStyle = "#df4b26";
                        ctx.lineWidth = 1;
                        ctx.stroke();

                        var recData = {
                            x: clicks[0].x,
                            y: clicks[0].y,
                            w: clicks[1].x-clicks[0].x,
                            h: clicks[1].y-clicks[0].y,
                        }

                        recData.x = recData.w<0 ? recData.x + recData.w : recData.x
                        recData.w = recData.w<0 ? - recData.w : recData.w
                        recData.y = recData.h<0 ? recData.y + recData.h : recData.y
                        recData.h = recData.h<0 ? - recData.h : recData.h

                        document.getElementById('text-size').innerHTML = `
                        x: ${recData.x}
                        y: ${recData.y}
                        w: ${recData.w}
                        h: ${recData.h}
                        
                        x: ${recData.x/canvas.width}
                        y: ${recData.x/canvas.height}
                        $pdf->Text($templateSize["width"]*${recData.x/canvas.width}, $templateSize["height"]*${recData.x/canvas.height}, 'Muhammed Risal');
                        `
                    };

                    function drawPoints(ctx){
                        ctx.strokeStyle = "#df4b26"; 
                        ctx.lineJoin = "round"; 
                        ctx.lineWidth = 5; 
                                    
                        for(var i=0; i < clicks.length; i++){ 
                            ctx.beginPath(); 
                            ctx.arc(clicks[i].x, clicks[i].y, 3, 0, 2 * Math.PI, false); 
                            ctx.fillStyle = '#ffffff'; 
                            ctx.fill(); 
                            ctx.lineWidth = 5; 
                            ctx.stroke(); 
                        }
                    };
                        
                    function redraw(ctx){ 
                        canvas.width = canvas.width; // Clears the canvas 
                        ctx.putImageData(pdfPage,0,0); 

                            
                        drawRectangle(ctx);
                        drawPoints(ctx);
                    };
                }
            })
        </script>
    </div>
    <?php
}

add_action('init', function() {
    add_rewrite_rule('certificate-download/([a-z0-9-]+)[/]?$', 'index.php?certificate-download=$matches[1]', 'top' );
} );

add_filter('query_vars', function( $query_vars ) {
    $query_vars[] = 'certificate-download';
    return $query_vars;
} );

add_action('template_include', function( $template ) {
    if ( ! get_query_var('certificate-download') ) {
        return $template;
    }
    return IEEESBTKMCE_THEME_PATH . '/inc/certificate-download.php';

} );

function enqueue_pdfjs_script() {
    // Check if it's the specific admin page you want to load the script on
    if (is_admin() && isset($_GET['page']) && $_GET['page'] === 'certificates_page') {
        // Enqueue the PDF.js script
        wp_enqueue_script('pdfjs', 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.0.943/pdf.min.js', array(), null, true);
    }
}

add_action('admin_enqueue_scripts', 'enqueue_pdfjs_script');