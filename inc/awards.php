<?php
// Register Custom Post Type 'awards'
function custom_post_type_awards() {
    $labels = array(
        'name'                  => _x('Awards', 'Post Type General Name', DOMAIN),
        'singular_name'         => _x('Award', 'Post Type Singular Name', DOMAIN),
        'menu_name'             => __('Awards', DOMAIN),
        'name_admin_bar'        => __('Award', DOMAIN),
        'archives'              => __('Award Archives', DOMAIN),
        'attributes'            => __('Award Attributes', DOMAIN),
        'parent_item_colon'     => __('Parent Award:', DOMAIN),
        'all_items'             => __('All Awards', DOMAIN),
        'add_new_item'          => __('Add New Award', DOMAIN),
        'add_new'               => __('Add New', DOMAIN),
        'new_item'              => __('New Award', DOMAIN),
        'edit_item'             => __('Edit Award', DOMAIN),
        'update_item'           => __('Update Award', DOMAIN),
        'view_item'             => __('View Award', DOMAIN),
        'view_items'            => __('View Awards', DOMAIN),
        'search_items'          => __('Search Award', DOMAIN),
        'not_found'             => __('Not found', DOMAIN),
        'not_found_in_trash'    => __('Not found in Trash', DOMAIN),
        'featured_image'        => __('Featured Image', DOMAIN),
        'set_featured_image'    => __('Set featured image', DOMAIN),
        'remove_featured_image' => __('Remove featured image', DOMAIN),
        'use_featured_image'    => __('Use as featured image', DOMAIN),
        'insert_into_item'      => __('Insert into Award', DOMAIN),
        'uploaded_to_this_item' => __('Uploaded to this Award', DOMAIN),
        'items_list'            => __('Awards list', DOMAIN),
        'items_list_navigation' => __('Awards list navigation', DOMAIN),
        'filter_items_list'     => __('Filter Awards list', DOMAIN),
    );
    $args = array(
        'label'                 => __('Award', DOMAIN),
        'description'           => __('Custom post type for Awards', DOMAIN),
        'labels'                => $labels,
        'supports'              => array('title', 'editor', 'revisions', 'excerpt'),
        'hierarchical'          => false,
        'public'                => true,
        'show_ui'               => true,
        'show_in_menu'          => true,
        'show_in_rest'          => true,
        'menu_position'         => 5,
        'menu_icon'             => 'data:image/svg+xml;base64,' . base64_encode('<svg viewBox="0 0 18 14.934" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"> <path d="M 5.6534773,8.6953685e-4 C 5.6338149,-0.00312321 5.6014654,0.00552743 5.5418602,0.0291458 5.4696511,0.05689218 5.3971922,0.08383775 5.3225952,0.11149422 5.1727666,0.16703219 5.0177655,0.22421182 4.8681908,0.28908899 4.6182646,0.39772816 4.4184914,0.56265314 4.2748852,0.77871484 4.1655427,0.94311753 4.1225848,1.1082179 4.1429294,1.2827268 c -1.27e-4,0.00194 -0.00173,0.0064 -0.00198,0.00695 C 3.880021,1.5149357 3.6305822,1.7686671 3.3745094,2.0704936 3.5452671,1.8094071 3.6564841,1.5086733 3.7123363,1.1601964 c 0.05631,-0.35132161 0.059807,-0.66403457 0.010914,-0.95593619 -0.00312,-0.018272 -0.00751,-0.0361591 -0.012898,-0.0590329 l -0.00794,-0.0352213 c -0.00361,-0.0151139 -0.01483,-0.0275527 -0.029765,-0.0322449 -0.014935,-0.004421 -0.031537,-6.8082e-4 -0.042662,0.009921 -0.017881,0.0168284 -0.035491,0.0326896 -0.052584,0.0481193 l -0.011906,0.0109137 C 3.5217359,0.18614724 3.4803551,0.22368073 3.4429677,0.2657735 3.0795589,0.67574392 2.8676845,1.1084522 2.795094,1.5893011 2.762025,1.8066251 2.775451,1.991686 2.836764,2.1548264 c 0.020294,0.054049 0.052291,0.1023954 0.083837,0.1503106 0.014427,0.021881 0.028437,0.043915 0.04167,0.066474 0.00975,0.016197 0.010965,0.02061 0.010914,0.019843 -0.00599,0.06429 -0.014659,0.1357697 -0.026292,0.2217454 -5.08e-4,0.00109 -0.00223,0.00356 -0.00744,0.010417 l -0.00446,0.00595 C 2.7362399,2.905835 2.5533047,3.196787 2.3883128,3.498197 2.4531817,3.2730602 2.5045792,2.9884517 2.5009217,2.6573502 2.4965023,2.2601935 2.4049304,1.9055728 2.2211355,1.5739228 c -0.00726,-0.012903 -0.020241,-0.021061 -0.038694,-0.022323 -0.0134,0 -0.026288,0.00654 -0.034725,0.017859 -0.0055,0.00767 -0.011047,0.01497 -0.01637,0.021827 -0.011866,0.015341 -0.022815,0.030118 -0.032741,0.045639 C 1.9522484,1.8664297 1.8734104,2.1192103 1.8212993,2.3140664 1.7260606,2.6714278 1.6826242,2.9697592 1.6838865,3.253136 c 7.213e-4,0.2408587 0.044339,0.4262015 0.1379088,0.5828879 0.0291,0.048766 0.065874,0.091487 0.1026875,0.1344363 0.019537,0.022783 0.039362,0.045945 0.057545,0.069947 0.012722,0.016687 0.018986,0.033684 0.019347,0.043158 0.00239,0.057097 0.00122,0.1155357 0,0.1716421 l -9.921e-4,0.038694 c -1.372e-4,0.00668 -0.00167,0.014472 -0.00397,0.020339 -0.1174821,0.2846209 -0.2204916,0.5802074 -0.3085576,0.884005 0.012948,-0.10345 0.019978,-0.203382 0.021827,-0.3011175 0.010647,-0.5546632 -0.1591873,-1.049939 -0.5055002,-1.47235 l -0.072427,-0.088301 c -0.00835,-0.010337 -0.020559,-0.015874 -0.033733,-0.015874 l -0.00744,4.96e-4 c -0.01543,0.00257 -0.028366,0.013201 -0.033733,0.02778 -0.00659,0.017551 -0.013076,0.034077 -0.019347,0.050104 -0.01209,0.030936 -0.02358,0.060467 -0.033237,0.090286 -0.074306,0.232756 -0.1106682,0.486681 -0.118067,0.8239796 v 0.00695 c -0.00555,0.2453798 -0.012983,0.5811778 0.087805,0.9028563 0.099211,0.3166746 0.2741344,0.4767738 0.3080624,0.5055002 l 0.00347,0.00347 c 0.092353,0.08242 0.1522462,0.1579192 0.1646968,0.2068632 0.00501,0.01976 0.010414,0.03945 0.01637,0.059033 0.026349,0.087118 0.00984,0.1702848 -0.00794,0.2599431 -0.00884,0.045236 -0.018128,0.091914 -0.021331,0.1398933 -0.012722,0.1919148 -0.02854,0.3872026 -0.043655,0.5759428 l -9.922e-4,0.017362 c -0.00388,0.048131 -0.00807,0.096227 -0.011906,0.1443577 C 1.3422571,6.7035582 1.1992314,6.3108678 0.9531683,5.9636887 0.8024786,5.7512769 0.623135,5.5695837 0.4193918,5.4234633 c -0.0088,-0.00632 -0.018395,-0.012007 -0.030757,-0.019347 -0.006,-0.00348 -0.012896,-0.00764 -0.021331,-0.012898 -0.012725,-0.00765 -0.029038,-0.00839 -0.042166,-0.00198 -0.013444,0.00655 -0.022776,0.02016 -0.024308,0.035221 -0.00275,0.027279 -0.00555,0.053429 -0.00893,0.08086 -0.00681,0.056183 -0.013621,0.1091984 -0.01389,0.1637047 -0.00302,0.5649247 0.116841,1.0945747 0.3556856,1.5735492 0.066546,0.1336243 0.154461,0.2493209 0.2614315,0.3437799 0.1060688,0.093189 0.2205661,0.1479128 0.3497327,0.1676732 0.00284,5.08e-4 0.00938,0.00464 0.010418,0.00546 0.00699,0.014046 0.01407,0.028044 0.021331,0.042166 0.025808,0.049858 0.052715,0.1015748 0.065978,0.1532872 0.011054,0.043712 0.010914,0.091257 0.010914,0.1418775 0,0.018541 -9.06e-5,0.037222 4.961e-4,0.05556 0.012407,0.4376248 0.028699,0.5902181 0.098719,0.981236 C 1.409992,9.0173555 1.3567782,8.9005007 1.2875228,8.7883388 1.0070822,8.3344078 0.650613,8.0265629 0.1981425,7.8467889 0.1693603,7.8351815 0.1403406,7.8267521 0.1068647,7.8170242 l -0.00645,-0.00198 c -0.013578,-0.00399 -0.02827,-0.00822 -0.043655,-0.012898 -0.013896,-0.00457 -0.029355,-0.00143 -0.0406781,0.00794 -0.0112797,0.00935 -0.017363,0.02381 -0.0158743953,0.038694 0.003338995,0.031038 0.005818995,0.060823 0.007936995,0.090286 0.004648,0.06459 0.008652,0.12568 0.0243077,0.1860281 0.145996,0.5639088 0.3876056,1.0130787 0.7386554,1.3731351 0.150103,0.1539432 0.3083969,0.2422051 0.4836729,0.2698647 0.044215,0.00691 0.098502,0.00767 0.1899967,0.00198 l 0.026292,-0.00149 c 0.00401,-2.286e-4 0.00721,-4.96e-4 0.010418,-4.96e-4 0.00722,0 0.00789,5e-5 0.012898,0.00744 l 0.1225305,0.1686653 c 0.00158,0.00221 0.00388,0.00987 0.00546,0.015378 l 0.00198,0.006 C 1.7515816,10.396872 1.9094772,10.812482 2.0956265,11.20675 2.0118475,11.091087 1.9201517,10.985524 1.8178267,10.886239 1.3472645,10.429641 0.5428182,10.416456 0.4526288,10.416456 h -0.01141 l -0.00694,0.0015 c -0.022107,0.0078 -0.034096,0.03133 -0.027284,0.05358 0.00627,0.02098 0.012128,0.04205 0.018851,0.06697 0.012857,0.04678 0.025923,0.09512 0.044647,0.141877 0.089148,0.222775 0.2336956,0.437105 0.4549006,0.674662 0.1519953,0.162883 0.3233479,0.328136 0.5461784,0.432577 0.2440337,0.1146 0.4644612,0.142449 0.6835911,0.08632 0.037265,-0.0098 0.080215,-0.02224 0.1170737,-0.04614 0.02625,-0.01684 0.033227,-0.01625 0.059033,0.003 0.03058,0.02273 0.063179,0.04203 0.09475,0.06052 0.017475,0.01026 0.035159,0.02037 0.051592,0.03076 0.00262,0.0022 0.00833,0.0115 0.010418,0.01488 0.1966137,0.320688 0.4130076,0.618584 0.6468816,0.890455 -0.1264872,-0.09205 -0.2564121,-0.158523 -0.3943794,-0.202895 -0.4216236,-0.135834 -0.8635312,-0.118634 -1.3012044,0.0506 -0.065329,0.02532 -0.1365986,0.06378 -0.1413813,0.06647 -0.010017,0.0066 -0.01718,0.01705 -0.019347,0.02927 -0.00189,0.01201 0.00112,0.02436 0.00843,0.03373 0.01367,0.01778 0.027099,0.03582 0.040182,0.05358 l 0.00298,0.004 c 0.029552,0.04026 0.06267,0.08567 0.1002071,0.126003 0.1690507,0.181222 0.3777906,0.302468 0.5779272,0.406781 0.2752083,0.142793 0.5564851,0.220145 0.8363822,0.229187 0.013182,4.32e-4 0.026555,4.96e-4 0.039686,4.96e-4 0.2574698,0 0.4582145,-0.08488 0.6131484,-0.258455 0.0019,-0.0013 0.00869,-0.0039 0.012402,-0.004 0.059205,0.0042 0.1157165,0.01283 0.1577519,0.01984 0.00663,0.0012 0.014763,0.0053 0.019843,0.0099 0.2588412,0.22915 0.5326712,0.430079 0.8190194,0.601242 -0.043407,-0.01285 -0.0877,-0.02378 -0.133444,-0.03274 -0.3060326,-0.05882 -0.6184557,-0.02214 -0.9613929,0.114097 -0.2313595,0.09222 -0.4465264,0.227743 -0.6577953,0.414222 -0.017424,0.01529 -0.019807,0.04129 -0.00546,0.05953 0.074749,0.09514 0.1716515,0.148492 0.2569666,0.188013 0.2080686,0.09669 0.4429911,0.158742 0.7183163,0.1895 8.128e-4,5.1e-5 0.089263,0.0079 0.2133122,0.0079 0.089557,0 0.1733644,-0.004 0.2480376,-0.01191 0.071371,-0.0075 0.1422424,-0.0201 0.2113278,-0.03671 0.317259,-0.07724 0.5321549,-0.235636 0.6553148,-0.482185 0.00221,-0.0021 0.011823,-0.008 0.023811,-0.01091 0.057275,-0.0142 0.1087572,-0.02423 0.1577519,-0.03076 0.011557,-0.0019 0.026016,0.0016 0.044151,0.0089 0.2190664,0.08443 0.4508425,0.154621 0.6885517,0.208848 0.00333,8.13e-4 0.00694,9.92e-4 0.010418,9.92e-4 0.015976,0 0.030451,-0.0085 0.038198,-0.02282 0.022707,-0.04224 0.050549,-0.08288 0.082349,-0.120547 0.00998,-0.01186 0.012865,-0.02756 0.00794,-0.04217 -0.0047,-0.01417 -0.016484,-0.02522 -0.031749,-0.02877 -0.2919428,-0.06443 -0.5824559,-0.158367 -0.8879803,-0.287166 -0.00363,-0.0017 -0.012559,-0.01164 -0.015378,-0.02084 -0.030453,-0.103806 -0.04065,-0.208619 -0.031253,-0.319968 0.059815,-0.710893 -0.3635854,-1.459789 -1.0065359,-1.780909 -0.013665,-0.007 -0.027743,-0.01311 -0.044151,-0.01984 l -0.015378,-0.0064 c -0.014477,-0.0062 -0.031971,-0.0034 -0.043655,0.006 -0.012649,0.0097 -0.018961,0.02575 -0.01637,0.04167 l 0.017362,0.10864 c 0.01562,0.09647 0.030984,0.191255 0.045639,0.285739 l 0.00347,0.02431 c 0.041273,0.268493 0.084046,0.546326 0.1671772,0.813066 0.075029,0.240631 0.1906872,0.430458 0.3517171,0.575943 -0.340166,-0.200671 -0.657122,-0.441677 -0.9450197,-0.718907 -0.00604,-0.0058 -0.012874,-0.0215 -0.01389,-0.03423 l -0.00794,-0.189997 c -5.08e-5,-0.0068 1.333e-4,-0.02484 0.00397,-0.03373 0.1417771,-0.33034 0.178098,-0.701981 0.1111208,-1.136507 -0.064615,-0.419084 -0.2439587,-0.804405 -0.5322883,-1.145437 -0.033755,-0.03993 -0.063309,-0.06052 -0.088302,-0.06052 -0.0061,0 -0.011557,0.0012 -0.015874,0.0035 -0.013283,0.0066 -0.022059,0.01947 -0.023812,0.03423 l -0.00794,0.06647 c -0.00597,0.04927 -0.01171,0.09788 -0.016866,0.146342 -0.00889,0.08534 -0.018472,0.170215 -0.028276,0.255479 l -0.00149,0.0124 c -0.024358,0.212894 -0.049667,0.432892 -0.063002,0.65333 -0.015544,0.257165 -0.011102,0.557551 0.1408852,0.83539 8.127e-4,0.0014 0.00167,0.003 0.00248,0.0045 -0.2112688,-0.2642 -0.4043607,-0.548493 -0.5764388,-0.849776 -0.015189,-0.0268 -0.016239,-0.05022 -0.013394,-0.08433 0.012242,-0.144241 0.079205,-0.261473 0.1498146,-0.366599 C 2.8079577,10.973951 2.8906793,10.733202 2.9394455,10.397173 3.0076165,9.927241 2.9388895,9.4556617 2.7350625,8.995762 2.7294525,8.983088 2.7227005,8.971192 2.7157155,8.95806 L 2.6998415,8.927799 C 2.6921915,8.913144 2.6758625,8.903721 2.6586675,8.904483 2.6415235,8.9053974 2.6261965,8.915994 2.6199735,8.931767 2.5705215,9.0564762 2.5231125,9.1766375 2.4756158,9.295886 L 2.4448588,9.372281 C 2.3435232,9.6267168 2.2301371,9.9238621 2.1640869,10.230428 2.1175255,10.446751 2.1148222,10.655221 2.1556537,10.853994 1.9972045,10.47687 1.8669792,10.078615 1.7672271,9.6653991 c -0.00113,-0.0046 -0.00194,-0.016669 0.00794,-0.044151 C 1.8218147,9.4935675 1.9071198,9.3778231 2.0147684,9.2953273 2.2504102,9.1145878 2.3838934,8.8633863 2.4835592,8.6415006 2.6876147,8.1877221 2.7429633,7.7056894 2.6527205,7.1676625 c -9.397e-4,-0.00564 -0.00243,-0.011267 -0.00446,-0.017363 l -0.00198,-0.00496 c -0.00394,-0.012039 -0.012497,-0.021708 -0.024308,-0.026788 -0.011557,-0.00483 -0.026255,-0.00392 -0.035221,4.961e-4 -0.00902,0.0033 -0.022859,0.0083 -0.031749,0.021331 -0.051052,0.068222 -0.1028852,0.1370651 -0.1547754,0.2058709 l -0.00843,0.011906 C 2.2609525,7.5319097 2.1254466,7.711062 1.9954215,7.8899474 1.8447775,8.0966445 1.7382563,8.2974416 1.6699964,8.5040878 1.6370615,8.6038806 1.6156587,8.7000088 1.6055067,8.7932995 1.5621506,8.4580579 1.537457,8.1160364 1.5320876,7.7708894 1.5308253,7.6885204 1.5413082,7.6228042 1.5975695,7.5511281 1.6571226,7.4747025 1.7128506,7.4319361 1.7895505,7.403794 2.1046861,7.2886602 2.306928,7.0453087 2.4478418,6.8462057 2.6754423,6.5241211 2.8090978,6.1496965 2.8561114,5.7007692 c 0.005,-0.046201 0.00747,-0.092922 0.010417,-0.1423735 l 9.924e-4,-0.01141 c 0.0014,-0.024053 0.00308,-0.048887 0.00496,-0.075403 0.00117,-0.017601 -0.00856,-0.034191 -0.024308,-0.042166 -0.015239,-0.00767 -0.034861,-0.00527 -0.04812,0.00595 l -0.037205,0.031749 c -0.014071,0.012014 -0.026198,0.022238 -0.038694,0.032245 -0.060068,0.048233 -0.1201722,0.095985 -0.1805711,0.1438617 l -0.00645,0.00496 C 2.4045271,5.75321 2.2672793,5.8619443 2.1363067,5.9741064 1.8821669,6.1908361 1.7186085,6.4066593 1.6213811,6.6532328 c -0.01606,0.040639 -0.030074,0.080746 -0.042166,0.1205461 0.039973,-0.3918049 0.1048148,-0.777555 0.1939653,-1.1518857 0.010828,-0.045794 0.016948,-0.059159 0.03919,-0.066474 0.013987,-0.00472 0.02719,-0.014023 0.036709,-0.0253 0.064653,-0.073505 0.1496899,-0.085137 0.2321631,-0.086813 0.2752006,-0.00645 0.4935096,-0.1438592 0.670693,-0.2773057 0.4344248,-0.3271901 0.7331986,-1.1569807 0.7331986,-1.1851229 0,-0.01468 -0.00693,-0.028455 -0.019347,-0.036709 -0.012217,-0.00808 -0.028703,-0.00951 -0.041174,-0.00397 -0.090497,0.038403 -0.1811286,0.07586 -0.2748254,0.1145933 C 2.9435984,4.140286 2.730467,4.228536 2.5257254,4.3251536 2.3196887,4.4226351 2.1569629,4.5531602 2.0405643,4.7135802 2.1515046,4.3983531 2.2800254,4.0893599 2.4240302,3.7923693 c 0.01656,-0.032028 0.094344,-0.065978 0.2058711,-0.065978 0.036295,0 0.071318,0.00409 0.1016952,0.01141 0.2620415,0.062812 0.5220265,0.024624 0.8095941,-0.1190579 0.2942221,-0.1470859 0.5381803,-0.3878651 0.7460965,-0.7356792 0.00396,-0.00673 0.011684,-0.027188 0.015874,-0.038694 0.00528,-0.014071 0.00331,-0.029389 -0.00546,-0.041174 -0.00813,-0.011176 -0.021142,-0.017859 -0.037702,-0.017859 h -4.96e-4 l -0.1036796,0.00645 c -0.063675,0.00401 -0.125695,0.00774 -0.1875162,0.010914 l -0.065978,0.00347 C 3.7052622,2.8161035 3.5014901,2.8261173 3.3020826,2.8736389 3.0746599,2.9283228 2.9077522,3.0125231 2.7797157,3.1370545 2.9312463,2.8847916 3.0934455,2.6445546 3.264381,2.4197303 c 0.0046,-0.00596 0.026563,-0.014836 0.044647,-0.017859 0.00902,-0.00212 0.042135,-0.00893 0.085821,-0.00893 0.057935,0 0.1083024,0.011582 0.1513027,0.035221 0.2731664,0.1335963 0.580166,0.143696 0.913274,0.029268 0.2732171,-0.093344 0.5045662,-0.2666437 0.7074026,-0.5298079 0.00658,-0.00848 0.012449,-0.018037 0.017859,-0.02778 0.00617,-0.011234 0.0069,-0.023448 0.00149,-0.034725 C 5.1704782,1.8321838 5.1021649,1.8166859 5.0735656,1.8115426 5.003363,1.7992698 4.9242353,1.7855261 4.8453713,1.7748331 4.8092285,1.7697812 4.7730006,1.7643255 4.7367308,1.7589587 l -0.00496,-9.922e-4 C 4.6088645,1.7398316 4.4817466,1.7212594 4.3537612,1.714808 4.1198617,1.7028527 3.9125417,1.7505269 3.742597,1.8561893 3.8568672,1.734556 3.973271,1.6193344 4.0918337,1.5109213 c 0.037489,-0.034197 0.080126,-0.068846 0.1379088,-0.1121129 0.00447,-0.00343 0.01582,-0.00762 0.029764,-0.00843 0.4096103,-0.01602 0.750304,-0.196755 1.0417576,-0.55263065 C 5.4600078,0.64401939 5.5821004,0.39961409 5.6738163,0.09065908 l 0.00298,-0.0104176 c 0.0098,-0.0324838 0.015062,-0.05050076 -0.00744,-0.07143477 -0.00434,-0.0040379 -0.00932,-0.0066063 -0.015874,-0.007937203 z m 6.6930407,0 c -0.0066,0.001304803 -0.0115,0.004395403 -0.01587,0.008433303 -0.02245,0.02093386 -0.01722,0.03845515 -0.0074,0.0709387 l 0.003,0.0109136 c 0.09172,0.3089568 0.213783,0.55340347 0.372553,0.74708866 0.291453,0.3559214 0.632057,0.5366565 1.041261,0.5526274 0.01435,8.559e-4 0.02561,0.00482 0.03026,0.00843 0.05763,0.04313 0.09992,0.07742 0.137413,0.1116169 0.118588,0.1083699 0.235513,0.2236805 0.349733,0.345268 -0.169894,-0.1055709 -0.37729,-0.153202 -0.611164,-0.1413813 -0.127986,0.00645 -0.255155,0.025517 -0.37801,0.043655 l -0.005,4.961e-4 c -0.03632,0.00532 -0.0721,0.010777 -0.108145,0.015874 -0.07897,0.010693 -0.158907,0.024439 -0.229186,0.03671 -0.02847,0.0051 -0.09647,0.020595 -0.112113,0.053576 -0.0054,0.011277 -0.0047,0.023987 0.0015,0.035221 0.0054,0.00979 0.01136,0.018892 0.01786,0.027284 0.202887,0.2632531 0.434185,0.436464 0.707403,0.5298079 0.333133,0.114425 0.639321,0.1053032 0.914265,-0.029268 0.04204,-0.023144 0.0924,-0.035221 0.150311,-0.035221 0.04374,0 0.07644,0.00694 0.08731,0.00943 0.01628,0.00271 0.03866,0.011994 0.04316,0.017859 0.171011,0.2248217 0.333109,0.4650867 0.484665,0.7173242 C 15.092218,3.0130445 14.925387,2.9288188 14.697913,2.8741349 14.498556,2.8266388 14.294708,2.8165744 14.097662,2.8066688 l -0.06598,-0.00347 c -0.06182,-0.00315 -0.123841,-0.0069 -0.187517,-0.010914 l -0.106656,-0.00695 c -0.01382,0 -0.0267,0.00676 -0.03472,0.017859 -0.0089,0.011938 -0.01118,0.027726 -0.006,0.04167 0.0043,0.011658 0.01236,0.031836 0.01637,0.038694 0.207841,0.3476616 0.451926,0.5881226 0.746097,0.7351828 0.287568,0.1436569 0.547006,0.1817173 0.809098,0.1190579 0.03033,-0.00731 0.06537,-0.010914 0.101695,-0.010914 0.111477,0 0.18954,0.033987 0.205872,0.065482 0.14419,0.2974478 0.272968,0.6064291 0.383961,0.921707 C 15.843479,4.5535772 15.680313,4.4231537 15.474225,4.3256469 15.269484,4.2290039 15.056435,4.1407389 14.84669,4.053798 14.75655,4.016538 14.665949,3.978944 14.575834,3.9406928 c -0.01339,-0.00587 -0.02917,-0.00429 -0.04167,0.00397 -0.01227,0.00818 -0.01935,0.021558 -0.01935,0.036213 0,0.028168 0.298774,0.8585053 0.733199,1.1856189 0.177234,0.1334719 0.395915,0.2708545 0.671189,0.2773058 0.08237,0.00168 0.167332,0.013193 0.231667,0.086317 0.0098,0.011658 0.02298,0.020474 0.03721,0.0253 0.02197,0.00721 0.02787,0.020629 0.03869,0.066474 0.08915,0.3742799 0.153987,0.7601315 0.193965,1.1518857 -0.01209,-0.03975 -0.02604,-0.079908 -0.04217,-0.1205461 C 16.281412,6.4066593 16.11778,6.1913067 15.863689,5.9746025 15.732706,5.8624657 15.595494,5.7537569 15.46286,5.6486813 l -0.0064,-0.00496 c -0.0604,-0.047877 -0.120478,-0.095604 -0.180572,-0.1438619 -0.01242,-0.00998 -0.02467,-0.020256 -0.03869,-0.032245 l -0.03721,-0.032245 c -0.01313,-0.011099 -0.03278,-0.013623 -0.04812,-0.00595 -0.01575,0.008 -0.02503,0.024539 -0.02381,0.042166 0.0019,0.026491 0.0031,0.051847 0.0045,0.0759 l 9.92e-4,0.010914 c 0.003,0.049503 0.0059,0.096274 0.01091,0.1423735 0.04701,0.4489527 0.180173,0.823848 0.407774,1.1459328 0.140914,0.1991028 0.34309,0.4425053 0.658291,0.557588 0.07668,0.028168 0.132395,0.070807 0.191981,0.1473342 0.05621,0.071651 0.06673,0.1368708 0.06548,0.2192652 -0.0054,0.3450962 -0.03006,0.6876394 -0.07342,1.0229061 -0.01021,-0.093319 -0.0316,-0.1894225 -0.06457,-0.2892153 C 16.261727,8.2979376 16.155216,8.0970643 16.004574,7.8904434 15.874557,7.7115073 15.739041,7.5318843 15.60821,7.3581552 l -0.0084,-0.01141 c -0.05189,-0.068806 -0.103786,-0.1379661 -0.154279,-0.2053751 -0.0095,-0.013842 -0.02335,-0.018563 -0.03125,-0.021331 -0.01118,-0.00546 -0.02435,-0.00605 -0.03621,-9.923e-4 -0.01163,0.00495 -0.02037,0.0148 -0.02431,0.026788 l -0.0015,0.00446 c -0.0022,0.00632 -0.0041,0.012271 -0.005,0.017859 -0.09024,0.5380526 -0.03489,1.0200596 0.169162,1.4738382 0.09966,0.2218857 0.233113,0.4730872 0.46879,0.6538267 0.107616,0.082521 0.192946,0.1982909 0.239604,0.3259211 0.0099,0.027482 0.0096,0.039057 0.0084,0.043655 -0.09977,0.4131652 -0.230038,0.8119162 -0.388426,1.1890912 0.04077,-0.198773 0.03763,-0.407739 -0.0089,-0.624062 -0.06609,-0.306617 -0.179462,-0.6037623 -0.280779,-0.8582095 l -0.03026,-0.075899 c -0.0475,-0.1192484 -0.09545,-0.2395621 -0.144854,-0.364119 -0.0063,-0.015925 -0.0215,-0.02679 -0.04167,-0.02778 -0.01587,0 -0.03063,0.00911 -0.0382,0.023812 l -0.01588,0.029765 c -0.007,0.013131 -0.01324,0.025549 -0.01885,0.038198 -0.203827,0.4598998 -0.27305,0.931479 -0.204879,1.4014105 0.04874,0.336029 0.131462,0.576282 0.26788,0.77983 0.07061,0.105228 0.137623,0.222434 0.149815,0.366599 0.0029,0.03409 0.0018,0.05759 -0.01339,0.08433 -0.172079,0.301334 -0.36517,0.586072 -0.576439,0.850272 8.12e-4,-0.0014 0.0017,-0.003 0.0025,-0.0045 0.151988,-0.277789 0.156404,-0.5782 0.140885,-0.835391 -0.01341,-0.220487 -0.03869,-0.440486 -0.063,-0.65333 l -0.0015,-0.0124 c -0.0098,-0.08526 -0.01939,-0.170583 -0.02828,-0.255974 -0.0052,-0.04841 -0.01095,-0.0967 -0.01687,-0.145847 l -0.0079,-0.06647 c -0.0017,-0.01471 -0.01041,-0.02783 -0.02332,-0.03423 -0.024,-0.01255 -0.06271,0.0069 -0.104672,0.05655 -0.288329,0.341032 -0.467202,0.726353 -0.531792,1.145437 -0.067,0.434526 -0.03071,0.806562 0.111121,1.137003 0.0038,0.0088 0.0035,0.02675 0.0035,0.03274 l -0.0074,0.189997 c -0.0011,0.01366 -0.0084,0.02899 -0.01439,0.03472 -0.287923,0.277281 -0.604853,0.518682 -0.945022,0.719308 0.161029,-0.145536 0.276688,-0.335783 0.351717,-0.576439 0.08313,-0.266715 0.125802,-0.543913 0.167177,-0.813066 l 0.0035,-0.02431 c 0.01465,-0.09456 0.03002,-0.188777 0.04564,-0.285243 l 0.01786,-0.109136 c 0.0025,-0.0159 -0.0041,-0.03165 -0.01637,-0.04117 -0.01222,-0.0097 -0.03008,-0.012 -0.04415,-0.006 l -0.01538,0.0064 c -0.01641,0.0067 -0.03066,0.01246 -0.04415,0.01935 -0.643103,0.321196 -1.066376,1.070563 -1.006536,1.781405 0.0094,0.111349 -8.25e-4,0.21587 -0.03125,0.319472 -0.0028,0.0094 -0.01167,0.0196 -0.01538,0.02133 -0.305448,0.128799 -0.595758,0.222714 -0.887974,0.287228 -0.01501,0.0035 -0.02737,0.0143 -0.03224,0.02877 -0.0049,0.01458 -0.0016,0.03025 0.0084,0.04217 0.03177,0.03762 0.05909,0.07818 0.08185,0.120547 0.0093,0.01732 0.03198,0.02617 0.04862,0.02183 0.23809,-0.0543 0.469626,-0.124816 0.689048,-0.209344 0.01773,-0.0071 0.03145,-0.01049 0.04415,-0.0084 0.04882,0.0065 0.100006,0.01653 0.157256,0.03076 0.01181,0.0029 0.02165,0.0084 0.02183,0.0079 0.125065,0.249317 0.339989,0.408393 0.657299,0.485657 0.06903,0.01656 0.140453,0.02875 0.211824,0.03621 0.0747,0.0079 0.157984,0.0119 0.247541,0.0119 0.124074,0 0.212716,-0.0079 0.213808,-0.0079 0.275021,-0.03078 0.509803,-0.09241 0.717821,-0.189005 0.08537,-0.03957 0.182713,-0.09284 0.257463,-0.188012 0.0143,-0.01821 0.01192,-0.04474 -0.0055,-0.06003 -0.21132,-0.186454 -0.426385,-0.322024 -0.657795,-0.414222 -0.342836,-0.136266 -0.655285,-0.172972 -0.961393,-0.114097 -0.04574,0.0089 -0.09056,0.01989 -0.133941,0.03274 0.286349,-0.171164 0.560573,-0.372068 0.819516,-0.601243 0.005,-0.0045 0.01297,-0.0088 0.01935,-0.0099 0.04237,-0.007 0.09871,-0.0157 0.156263,-0.01984 0.0053,0 0.01211,0.0027 0.0129,0.003 0.156001,0.174593 0.357167,0.259447 0.614637,0.259447 0.01313,0 0.02606,-5.6e-4 0.03919,-9.92e-4 0.279948,-0.009 0.561629,-0.0859 0.836878,-0.228691 0.200043,-0.104364 0.408325,-0.225584 0.577431,-0.406781 0.03749,-0.04028 0.07116,-0.0858 0.100703,-0.126003 l 0.003,-0.004 c 0.01308,-0.01775 0.02612,-0.03595 0.03969,-0.05358 0.0074,-0.0095 0.01036,-0.02136 0.0084,-0.03373 -0.0021,-0.01191 -0.0086,-0.02259 -0.02034,-0.03026 -0.003,-0.0016 -0.07501,-0.04016 -0.140389,-0.06548 -0.437727,-0.169132 -0.879632,-0.186434 -1.301204,-0.0506 -0.137993,0.04437 -0.267918,0.110849 -0.39438,0.202895 0.233874,-0.271871 0.450764,-0.569767 0.647378,-0.890454 0.0021,-0.0034 0.0076,-0.01271 0.0094,-0.01439 0.01719,-0.01095 0.03454,-0.02102 0.05209,-0.03125 0.03144,-0.01847 0.06414,-0.03779 0.09475,-0.06052 0.02581,-0.01928 0.03297,-0.01977 0.05903,-0.003 0.03691,0.02395 0.08018,0.03636 0.11757,0.04614 0.218813,0.05606 0.439112,0.02823 0.683095,-0.08632 0.222876,-0.104492 0.39414,-0.269719 0.546178,-0.432577 0.221175,-0.237582 0.36575,-0.451964 0.454901,-0.674662 0.01872,-0.04676 0.03224,-0.09483 0.04614,-0.14535 0.0057,-0.02121 0.01164,-0.04264 0.01786,-0.0635 0.0068,-0.02238 -0.0052,-0.04575 -0.02728,-0.05358 l -0.01836,-0.0015 c -0.09017,0 -0.894631,0.01321 -1.365198,0.469783 -0.102383,0.09933 -0.194011,0.204874 -0.277802,0.320464 0.186149,-0.394243 0.344048,-0.809929 0.471271,-1.2411788 l 0.0015,-0.006 c 0.0015,-0.0053 0.0039,-0.013715 0.0055,-0.015873 l 0.123027,-0.1686668 c 0.0046,-0.00678 0.0052,-0.00695 0.0124,-0.00695 0.0032,0 0.0069,2.675e-4 0.01091,4.961e-4 l 0.02629,0.00149 c 0.09159,0.00569 0.14565,0.00498 0.189997,-0.00198 0.175228,-0.027634 0.333069,-0.1159214 0.483177,-0.2698647 0.351039,-0.360031 0.592662,-0.8092517 0.738655,-1.3731351 0.01565,-0.060399 0.02013,-0.1213367 0.0248,-0.186028 0.0021,-0.029311 0.0046,-0.059541 0.0079,-0.090782 0.0014,-0.01496 -0.0046,-0.029347 -0.01587,-0.038694 -0.01135,-0.0094 -0.02783,-0.01228 -0.04068,-0.00794 -0.0157,0.00483 -0.03009,0.00894 -0.04365,0.012898 l -0.0064,0.00198 c -0.03348,0.00978 -0.06263,0.018259 -0.09128,0.029765 -0.45261,0.1798502 -0.808924,0.4881404 -1.08938,0.9420459 -0.06924,0.1121622 -0.122968,0.2284953 -0.165689,0.3447721 0.07005,-0.3910687 0.08632,-0.5431659 0.09872,-0.9807399 5.84e-4,-0.018363 4.96e-4,-0.037515 4.96e-4,-0.056056 0,-0.05062 3.36e-4,-0.098242 0.01141,-0.1418775 0.01326,-0.051712 0.03968,-0.1033781 0.06548,-0.1532872 0.0073,-0.014122 0.01434,-0.028283 0.02034,-0.040678 0.0021,-0.00244 0.0088,-0.00654 0.01141,-0.00695 0.129433,-0.01976 0.244112,-0.074408 0.350229,-0.1676732 0.10693,-0.094434 0.194886,-0.2101303 0.261431,-0.3437799 0.238827,-0.4789491 0.358212,-1.0081031 0.35519,-1.5730532 -2.79e-4,-0.054506 -0.0064,-0.1080078 -0.01339,-0.165689 -0.0032,-0.025856 -0.0067,-0.051992 -0.0094,-0.079372 -0.0015,-0.015036 -0.0109,-0.028719 -0.02431,-0.035221 -0.01321,-0.0064 -0.02881,-0.0056 -0.04217,0.00248 -0.0081,0.00505 -0.01506,0.00927 -0.02133,0.012898 -0.01212,0.00724 -0.02152,0.012552 -0.03026,0.018851 -0.203751,0.1460442 -0.38353,0.3278136 -0.534273,0.5402254 -0.245964,0.3471537 -0.389111,0.7398949 -0.427616,1.1717287 -0.0038,-0.048131 -0.0075,-0.096227 -0.01141,-0.1443577 l -0.0015,-0.017362 c -0.01511,-0.1887148 -0.03043,-0.3840026 -0.04316,-0.5759428 -0.0032,-0.048588 -0.01281,-0.096108 -0.02183,-0.1418775 -0.01742,-0.087931 -0.03378,-0.1709421 -0.0074,-0.2579589 0.006,-0.019684 0.01082,-0.039247 0.01587,-0.059033 0.01245,-0.048944 0.07284,-0.1244436 0.165193,-0.2068632 l 0.0035,-0.00298 c 0.03409,-0.028879 0.208803,-0.1888763 0.308062,-0.5055001 0.100733,-0.3216785 0.09334,-0.6579218 0.0878,-0.9033524 v -0.00645 c -0.0074,-0.3373749 -0.04419,-0.5916435 -0.118562,-0.8244762 -0.0096,-0.029793 -0.02065,-0.059426 -0.03274,-0.090286 -0.0063,-0.016052 -0.01274,-0.032235 -0.01935,-0.049608 -0.0054,-0.014706 -0.01854,-0.025762 -0.03373,-0.028276 l -0.0074,-4.96e-4 c -0.01318,0 -0.0254,0.00569 -0.03373,0.015874 l -0.07243,0.088301 c -0.346315,0.4223602 -0.516167,0.9176868 -0.5055,1.47235 0.0018,0.097685 0.0089,0.1976675 0.02183,0.3011175 -0.08803,-0.3037722 -0.191164,-0.5990656 -0.308558,-0.8835091 -0.0024,-0.00625 -0.0038,-0.014282 -0.004,-0.020835 l -9.92e-4,-0.038694 c -0.0012,-0.056132 -0.0024,-0.1145196 0,-0.1716421 3.56e-4,-0.00947 0.0066,-0.02642 0.01935,-0.043158 0.01814,-0.023951 0.03818,-0.047052 0.05903,-0.071435 0.03551,-0.041324 0.07214,-0.084233 0.101199,-0.1329482 0.09357,-0.1567372 0.137172,-0.3420038 0.137909,-0.5828879 0.0012,-0.2835545 -0.04214,-0.5818758 -0.137413,-0.9390696 -0.05207,-0.1948586 -0.130956,-0.4476367 -0.277305,-0.6771421 -0.0099,-0.01543 -0.02093,-0.030255 -0.03274,-0.045639 -0.0053,-0.00681 -0.01068,-0.014022 -0.01637,-0.021827 -0.0083,-0.011145 -0.01971,-0.017859 -0.0382,-0.017859 -0.01476,0.00108 -0.02838,0.00978 -0.03572,0.022819 -0.183711,0.3315586 -0.274972,0.6858154 -0.27929,1.0829314 -0.0037,0.3311015 0.04776,0.6156592 0.112609,0.8408468 -0.164992,-0.3014354 -0.347927,-0.5923874 -0.546675,-0.868627 l -0.005,-0.00645 c -0.0045,-0.00599 -0.0063,-0.009 -0.006,-0.00694 -0.0125,-0.089379 -0.02129,-0.160477 -0.02728,-0.2227376 1.27e-4,-9.474e-4 0.0016,-0.00631 0.01091,-0.021827 0.01313,-0.022377 0.02737,-0.044277 0.04266,-0.067466 0.03068,-0.04665 0.06255,-0.094773 0.08284,-0.1488225 0.06126,-0.1631429 0.07474,-0.3482469 0.04167,-0.5655252 -0.07259,-0.4808946 -0.284515,-0.91405328 -0.647873,-1.3240237 -0.03741,-0.042094 -0.07882,-0.0792206 -0.122531,-0.11856189 l -0.01191,-0.0109136 c -0.01712,-0.0154749 -0.03485,-0.0313811 -0.05258,-0.0481193 -0.01128,-0.0107377 -0.02751,-0.0150194 -0.04316,-0.0104176 -0.01481,0.004692 -0.02623,0.0169955 -0.02976,0.0322449 l -0.0074,0.0352213 c -0.0054,0.0230994 -0.0098,0.041212 -0.0129,0.059529 -0.04892,0.29190087 -0.0454,0.60457142 0.01091,0.95593619 0.05585,0.3484768 0.16707,0.6487121 0.337827,0.9098011 -0.256073,-0.3017376 -0.505129,-0.554791 -0.765443,-0.7793335 -0.0012,-0.00153 -0.0029,-0.00627 -0.003,-0.00744 0.02034,-0.175276 -0.02308,-0.34059891 -0.132452,-0.50500414 C 13.581008,0.56265314 13.381757,0.39822423 13.131805,0.28958509 12.982255,0.22470815 12.82715,0.16725821 12.675416,0.11099815 12.602749,0.08401856 12.53001,0.05698305 12.455159,0.02815365 12.398754,0.00571971 12.366459,-0.003045 12.346518,8.6953685e-4 Z M 8.9999979,3.6321373 c -0.085849,0 -0.1644524,0.048573 -0.2023985,0.1255067 L 7.6779586,6.0276824 5.1722845,6.3918013 c -0.08496,0.012319 -0.1555429,0.071629 -0.1820594,0.1532873 -0.026567,0.081632 -0.00444,0.1712544 0.057049,0.2311708 L 6.8599312,8.5432778 6.4323147,11.038534 c -0.014528,0.0846 0.020323,0.169815 0.089789,0.220257 0.06939,0.05049 0.1615246,0.05734 0.2376198,0.01736 l 2.240274,-1.177682 2.2407705,1.177682 c 0.03299,0.01737 0.06881,0.0258 0.104672,0.0258 0.04678,0 0.09316,-0.01459 0.132451,-0.04316 0.06947,-0.05039 0.104369,-0.135653 0.08979,-0.220257 L 11.140064,8.5432778 12.952722,6.7762594 c 0.06144,-0.059916 0.08362,-0.1495386 0.05705,-0.2311708 -0.02654,-0.081683 -0.09707,-0.1409687 -0.182059,-0.1532873 L 10.322533,6.0276824 9.2023961,3.757644 c -0.038,-0.07701 -0.11655,-0.1255067 -0.2023982,-0.1255067 z" fill="currentColor" /> </svg>'),
        'show_in_admin_bar'     => true,
        'show_in_nav_menus'     => true,
        'can_export'            => true,
        'has_archive'           => true,
        'rewrite'               => array('slug' => 'awards'),
        'exclude_from_search'   => false,
        'publicly_queryable'    => true,
        'capability_type'       => 'page',
    );
    register_post_type('awards', $args);
}
add_action('init', 'custom_post_type_awards', 0);


function awards_register_post_meta() {
    register_post_meta('awards', 'awards_metadata', array(
        'show_in_rest' => true,
        'single' => true,
        'type' => 'object',
    ));
}
add_action('init', 'awards_register_post_meta');