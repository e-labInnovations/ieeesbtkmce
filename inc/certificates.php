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

        <h1>PDF.js 'Hello, world!' example</h1>

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
                    defaultState.pdf.getPage(defaultState.currentPage).then((page) => {

                        var canvas = document.getElementById("pdf_renderer");
                        var ctx = canvas.getContext('2d');

                        var viewport = page.getViewport(defaultState.zoom);

                        canvas.width = viewport.width;
                        canvas.height = viewport.height;

                        page.render({
                            canvasContext: ctx,
                            viewport: viewport
                        })

                        ctx.strokeStyle = 'red';
                        ctx.strokeRect(10, 10, 50, 20);
                    });

                    function drawRectangle(x, y, w, h) {
                        ctx.strokeStyle = color;
                        ctx.strokeRect(x, y, w, h);
                    }
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