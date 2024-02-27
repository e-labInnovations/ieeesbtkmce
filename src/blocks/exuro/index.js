import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";
import metadata from "./block.json";
import Edit from "./edit";
import Save from "./save";

const attributes = {
  content: {
    type: "String",
  },
  image: {
    type: "object",
  },
  linkObject: {
    type: "object",
  },
};

registerBlockType(metadata, {
  attributes,

  icon: {
    src: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        width="100%"
        viewBox="0 0 300 300"
        enableBackground="new 0 0 300 300"
        xmlSpace="preserve"
      >
        <path
          fill="#FCFEFE"
          opacity={1.0}
          stroke="none"
          d=" M168.000000,1.000002   C212.303345,1.000000 256.606689,1.000000 300.955017,1.000000   C300.955017,100.902336 300.955017,200.804703 300.955017,301.000000   C229.979370,301.000000 158.958344,301.000000 87.561157,300.673035   C89.877991,295.929169 92.570984,291.512268 95.551056,286.925049   C100.315224,280.041199 104.792313,273.327637 109.544983,266.386475   C111.698647,262.635223 114.252281,261.411530 118.221573,263.042633   C120.280144,263.888550 122.697029,263.862457 125.253189,264.446533   C129.371918,265.084564 133.189499,265.506409 137.429016,266.034210   C142.608261,266.223846 147.365570,266.307526 152.578979,266.430359   C157.356979,266.179504 161.678925,265.889496 166.390442,265.556946   C174.186676,263.676727 181.593338,261.839050 189.387772,260.020233   C194.899139,257.867828 200.022751,255.696579 205.514679,253.450821   C211.948898,249.667068 218.014816,245.957794 224.418671,242.159943   C230.150467,237.335037 235.544312,232.598694 241.243271,227.739380   C247.332611,220.686646 253.116852,213.756897 259.384491,206.248047   C252.214645,201.682877 246.118668,197.801437 239.823471,193.656250   C234.414001,189.996506 229.203735,186.600510 223.753876,182.957611   C217.012436,178.464142 210.510590,174.217575 203.818970,169.697723   C198.122604,165.851089 192.616043,162.277756 186.882889,158.453476   C182.276398,155.220993 177.896515,152.239441 173.101471,148.975281   C168.609406,155.998718 164.545135,162.353302 160.220779,168.890625   C155.492340,175.965790 151.023987,182.858215 146.288620,189.925049   C142.185822,195.986374 138.350037,201.873245 134.246002,207.937439   C129.922729,214.385880 125.867729,220.657028 121.534760,227.109451   C116.815498,234.139191 112.374207,240.987656 107.648888,248.021484   C102.206871,256.053162 97.048882,263.899414 91.605896,271.935425   C86.453148,279.354187 81.585388,286.583221 76.553383,294.056183   C79.991547,296.583435 82.995773,298.791718 86.000000,301.000000   C57.690289,301.000000 29.380575,301.000000 1.035432,301.000000   C1.035432,201.106995 1.035432,101.213989 1.035432,1.000000   C47.353733,1.000000 93.708206,1.000000 140.367981,1.329208   C138.780350,2.074604 136.887421,2.490792 134.560669,2.860841   C128.101166,4.256203 122.075523,5.697703 115.668152,7.130282   C109.551079,9.474887 103.815742,11.828412 97.727356,14.212478   C92.917465,16.837944 88.460617,19.432869 83.667633,22.095217   C77.932701,26.465469 72.533905,30.768303 66.819397,35.193863   C61.235710,40.851788 55.967731,46.386982 50.196098,52.451385   C56.385536,56.410938 61.596275,59.744385 67.000595,63.359188   C70.481781,65.724617 73.769379,67.808693 77.254929,70.163620   C81.243591,72.823662 85.034294,75.212837 88.980347,77.876114   C95.313232,82.158386 101.490768,86.166557 107.868652,90.454727   C114.726120,95.112282 121.383240,99.489830 128.243927,104.134933   C135.952011,109.310493 143.456528,114.218498 151.139435,119.405121   C155.078049,122.197868 158.838318,124.712006 163.146088,127.592209   C165.669907,122.948860 167.829880,118.974937 170.185303,114.724380   C177.287735,104.385101 184.194717,94.322456 191.383102,84.059868   C198.143387,73.992142 204.622253,64.124359 211.383942,54.060837   C215.589203,48.103558 219.511658,42.342014 223.536041,36.430733   C226.074112,38.129276 228.085861,39.475597 230.246185,41.121456   C233.344650,44.230820 236.294525,47.040646 239.160843,49.770885   C236.211334,54.575642 233.622772,58.792419 230.761536,63.209145   C222.235001,75.926468 213.981155,88.443840 205.476685,101.176498   C197.440399,112.956718 189.692352,124.547310 181.835434,136.063644   C180.369293,138.212631 180.613098,139.579407 182.762222,140.948013   C190.712021,146.010620 198.618317,151.141495 206.753525,156.523087   C215.236359,162.231461 223.506622,167.663467 231.964752,173.381042   C239.368546,178.334122 246.584488,183.001617 253.933121,187.952454   C257.851410,190.818726 261.636963,193.401688 265.832001,196.264038   C274.128571,182.057220 279.366486,167.444916 282.120697,151.268539   C277.897461,150.587021 274.221893,149.993896 270.790100,149.440109   C267.712189,159.138275 264.762848,168.431320 261.731201,177.983719   C258.653564,176.450653 256.881012,175.567673 254.921173,174.421997   C248.131958,169.817642 241.530014,165.475998 234.729034,160.851013   C232.278656,159.234283 229.966476,157.992767 227.787674,156.549850   C221.871536,152.631775 216.011887,148.628357 209.924835,144.402603   C205.677765,141.335220 201.635727,138.524017 197.403946,135.580856   C201.724091,128.747559 205.775253,122.339722 210.101883,115.737076   C218.488388,103.159813 226.599426,90.777351 234.991852,78.240807   C241.276611,69.140709 247.344482,60.236389 253.192108,51.189705   C253.837814,50.190746 253.831451,47.765381 253.098740,47.038334   C246.889511,40.877071 240.441360,34.956570 233.882629,28.682650   C230.206985,25.875212 226.713760,23.348793 223.220276,20.822706   C221.310760,19.441948 219.707657,19.294191 218.278229,21.614073   C214.893875,27.106661 211.387634,32.524128 207.659409,38.164406   C200.862579,48.201660 194.337006,58.046478 187.515808,68.050407   C180.124466,79.130928 173.028763,90.052330 165.658356,101.160233   C164.440399,102.714127 163.492004,104.078041 162.554703,105.449524   C158.722656,111.056686 158.380447,111.087654 153.420380,106.432793   C153.082031,106.115265 152.535004,106.020096 151.901855,105.544342   C144.475494,100.519157 137.232330,95.771156 129.811554,90.738930   C123.112198,86.236916 116.590462,82.019112 109.886169,77.526474   C103.176208,73.033783 96.648796,68.815918 89.934875,64.339600   C86.574829,62.022491 83.401299,59.963852 80.034195,57.623795   C76.488548,54.536072 73.136482,51.729759 69.857819,48.926796   C69.931213,48.930149 69.911362,48.784542 70.212257,48.659222   C75.390007,44.192963 80.266869,39.852028 85.482620,35.378113   C90.573517,32.250401 95.325523,29.255669 100.448456,26.211481   C106.224762,23.810078 111.630150,21.458130 117.432693,19.096388   C123.556236,17.628471 129.282623,16.170351 135.424286,14.765392   C142.558777,14.235742 149.278000,13.652929 156.415131,13.161499   C160.890884,13.493743 164.948730,13.734602 169.330719,14.185137   C177.527832,16.059696 185.400833,17.724581 193.574158,19.452978   C194.838455,15.943496 196.100800,12.439434 197.877213,7.508360   C188.033691,5.692517 179.010437,4.027991 169.686493,2.244431   C168.923843,1.750266 168.461914,1.375135 168.000000,1.000002  M137.667130,125.326599   C134.155518,123.101982 130.643906,120.877373 126.754517,118.117790   C121.157204,114.448486 115.559891,110.779175 109.570259,106.563507   C101.107567,101.004700 92.644882,95.445892 83.795654,89.328979   C78.361977,85.799561 72.928307,82.270149 67.090530,78.186539   C62.101124,74.984802 57.111717,71.783066 51.755821,68.058563   C48.941784,66.224312 46.127747,64.390060 42.895279,62.283070   C41.300037,65.169777 40.056091,67.420799 38.271126,70.103752   C34.630573,77.991920 30.990021,85.880081 26.903561,94.303185   C20.101604,112.584663 18.244528,131.545105 20.783808,150.698868   C22.140312,160.930984 25.609104,170.883041 28.117523,181.707840   C32.607536,190.520462 37.097546,199.333099 41.867271,208.797928   C46.228951,214.245789 50.590626,219.693665 55.209450,225.746048   C58.448776,228.842728 61.688103,231.939423 65.224724,235.639648   C69.694290,239.228012 74.163864,242.816391 78.919968,246.634811   C80.763000,243.988541 82.033081,241.858170 83.605148,239.980682   C85.873444,237.271637 85.282021,235.577179 82.456131,233.625183   C77.577011,230.254883 72.981743,226.473679 68.119659,222.183044   C65.039581,218.789078 61.959507,215.395126 58.787678,211.330109   C54.753662,205.427505 50.719643,199.524918 46.475796,192.914322   C39.529507,179.717270 35.439465,165.582001 32.814171,150.156525   C32.545818,149.089722 32.277470,148.022919 32.391006,146.516113   C31.943705,145.964874 31.496407,145.413635 31.199787,143.954620   C31.145687,138.670547 31.091587,133.386490 31.552708,127.722534   C31.701309,126.832642 31.849911,125.942749 32.487411,124.403656   C32.509266,123.601181 32.531120,122.798714 32.876129,121.222725   C36.290390,109.494118 39.704655,97.765518 43.635376,85.572441   C45.267208,83.466492 45.222824,79.054611 50.229347,81.616356   C55.134956,84.791290 60.040565,87.966217 65.300117,91.703049   C70.305420,94.931938 75.310730,98.160820 80.775635,101.919456   C89.862991,107.911446 98.950356,113.903435 108.407852,120.459244   C113.912025,124.038322 119.416206,127.617393 125.315102,131.727570   C128.766037,133.891464 132.216965,136.055359 136.067856,138.772491   C139.290665,141.003189 142.513458,143.233887 146.212128,145.793961   C148.683868,142.086166 150.809433,138.897644 153.211197,135.294830   C147.804718,131.934570 142.924545,128.901398 137.667130,125.326599  z"
        />
        <path
          fill="#26CEF5"
          opacity={1.0}
          stroke="none"
          d=" M95.263985,287.095337   C92.570984,291.512268 89.877991,295.929169 87.092499,300.673035   C87.000000,301.000000 86.500000,301.000000 86.250000,301.000000   C82.995773,298.791718 79.991547,296.583435 76.553383,294.056183   C81.585388,286.583221 86.453148,279.354187 91.680992,272.367523   C92.360504,276.044586 92.498466,279.510590 93.083313,282.899445   C93.338737,284.379456 94.509117,285.701538 95.263985,287.095337  z"
        />
        <path
          fill="#23D0C7"
          opacity={1.0}
          stroke="none"
          d=" M134.994507,2.906979   C136.887421,2.490792 138.780350,2.074604 140.836639,1.329208   C142.714355,1.000000 144.428711,1.000000 146.839127,1.311083   C150.691528,1.753374 153.847855,1.884583 157.002808,2.456309   C156.666687,6.287922 156.331955,9.679019 155.997223,13.070116   C149.278000,13.652929 142.558777,14.235742 135.422394,14.325338   C135.001663,10.190408 134.998093,6.548693 134.994507,2.906979  z"
        />
        <path
          fill="#26D1BF"
          opacity={1.0}
          stroke="none"
          d=" M156.415131,13.161499   C156.331955,9.679019 156.666687,6.287922 157.391510,2.450777   C159.187744,1.669819 160.593872,1.334910 162.000000,1.000001   C163.714355,1.000000 165.428711,1.000000 167.571533,1.000002   C168.461914,1.375135 168.923843,1.750266 169.690567,2.671499   C169.665771,6.803555 169.336166,10.389508 169.006561,13.975462   C164.948730,13.734602 160.890884,13.493743 156.415131,13.161499  z"
        />
        <path
          fill="#3BEFC6"
          opacity={1.0}
          stroke="none"
          d=" M161.533875,1.000001   C160.593872,1.334910 159.187744,1.669819 157.392914,2.010260   C153.847855,1.884583 150.691528,1.753374 147.267593,1.311083   C151.689255,1.000000 156.378510,1.000000 161.533875,1.000001  z"
        />
        <path
          fill="#22CDF7"
          opacity={1.0}
          stroke="none"
          d=" M31.037487,128.102417   C31.091587,133.386490 31.145687,138.670547 31.119114,144.668060   C31.362001,145.906372 31.685560,146.431244 32.009117,146.956116   C32.277470,148.022919 32.545818,149.089722 32.425571,150.669983   C31.799858,151.402344 31.358868,151.617783 31.355057,151.840668   C31.211803,160.224716 31.098322,168.609329 31.007977,176.994156   C30.986019,179.031815 31.269464,181.223770 28.124588,180.961502   C25.609104,170.883041 22.140312,160.930984 20.783808,150.698868   C18.244528,131.545105 20.101604,112.584663 27.575855,94.143982   C28.831404,95.194077 29.842325,96.374184 29.927166,97.617493   C30.408089,104.665459 30.607613,111.732430 31.064426,118.782463   C31.135626,119.881256 32.036015,120.926323 32.552971,121.996239   C32.531120,122.798714 32.509266,123.601181 32.021160,124.875259   C31.382435,126.265373 31.209961,127.183899 31.037487,128.102417  z"
        />
        <path
          fill="#2AD8B9"
          opacity={1.0}
          stroke="none"
          d=" M206.540955,156.246735   C198.618317,151.141495 190.712021,146.010620 182.762222,140.948013   C180.613098,139.579407 180.369293,138.212631 181.835434,136.063644   C189.692352,124.547310 197.440399,112.956718 205.873581,101.244263   C207.008987,101.841621 207.795731,102.534935 207.934662,103.340019   C208.656174,107.521622 209.212524,111.731712 209.826416,115.931885   C205.775253,122.339722 201.724091,128.747559 197.403946,135.580856   C201.635727,138.524017 205.677765,141.335220 209.855804,144.815979   C208.841507,149.072601 207.691223,152.659668 206.540955,156.246735  z"
        />
        <path
          fill="#39F0C5"
          opacity={1.0}
          stroke="none"
          d=" M255.108444,174.684708   C256.881012,175.567673 258.653564,176.450653 261.731201,177.983719   C264.762848,168.431320 267.712189,159.138275 270.790100,149.440109   C274.221893,149.993896 277.897461,150.587021 282.120697,151.268539   C279.366486,167.444916 274.128571,182.057220 265.832001,196.264038   C261.636963,193.401688 257.851410,190.818726 254.016205,187.486816   C254.347198,182.720154 254.727829,178.702423 255.108444,174.684708  z"
        />
        <path
          fill="#32E6BF"
          opacity={1.0}
          stroke="none"
          d=" M231.034210,63.009201   C233.622772,58.792419 236.211334,54.575642 239.160843,49.770885   C236.294525,47.040646 233.344650,44.230820 230.466385,40.852310   C231.358902,38.320232 232.316986,36.400440 232.959122,34.380226   C233.514145,32.634007 233.710175,30.773685 234.064911,28.963806   C240.441360,34.956570 246.889511,40.877071 253.098740,47.038334   C253.831451,47.765381 253.837814,50.190746 253.192108,51.189705   C247.344482,60.236389 241.276611,69.140709 234.594406,77.969101   C233.610870,74.335564 233.459366,70.796341 232.929764,67.314644   C232.702133,65.818016 231.689957,64.440712 231.034210,63.009201  z"
        />
        <path
          fill="#2DDFBC"
          opacity={1.0}
          stroke="none"
          d=" M230.761536,63.209145   C231.689957,64.440712 232.702133,65.818016 232.929764,67.314644   C233.459366,70.796341 233.610870,74.335564 234.313019,78.123177   C226.599426,90.777351 218.488388,103.159813 210.101883,115.737076   C209.212524,111.731712 208.656174,107.521622 207.934662,103.340019   C207.795731,102.534935 207.008987,101.841621 206.124207,101.028976   C213.981155,88.443840 222.235001,75.926468 230.761536,63.209145  z"
        />
        <path
          fill="#28D2B7"
          opacity={1.0}
          stroke="none"
          d=" M191.101700,84.259811   C184.194717,94.322456 177.287735,104.385101 169.792664,114.632645   C168.803040,112.040916 168.552521,109.230904 167.948181,106.499146   C167.528397,104.601608 166.622025,102.811722 165.933044,100.973740   C173.028763,90.052330 180.124466,79.130928 187.839111,68.328796   C189.339249,73.718658 190.220474,78.989235 191.101700,84.259811  z"
        />
        <path
          fill="#2AD8BA"
          opacity={1.0}
          stroke="none"
          d=" M191.383102,84.059868   C190.220474,78.989235 189.339249,73.718658 188.134735,68.169693   C194.337006,58.046478 200.862579,48.201660 208.058929,38.257675   C209.153198,39.296280 209.822800,40.406055 209.955994,41.576851   C210.435547,45.792297 210.734161,50.028324 211.101135,54.256577   C204.622253,64.124359 198.143387,73.992142 191.383102,84.059868  z"
        />
        <path
          fill="#27D1B9"
          opacity={1.0}
          stroke="none"
          d=" M160.480865,168.707870   C164.545135,162.353302 168.609406,155.998718 173.101471,148.975281   C177.896515,152.239441 182.276398,155.220993 186.850403,158.915604   C186.261017,163.454559 185.477493,167.280441 184.400177,170.937683   C181.734650,169.425323 179.362885,168.081635 176.695450,166.570404   C172.689117,172.149384 168.793579,177.574066 164.533783,182.919647   C163.446350,180.088516 162.720261,177.337234 162.000977,174.584183   C161.489532,172.626648 160.987244,170.666733 160.480865,168.707870  z"
        />
        <path
          fill="#24CFE0"
          opacity={1.0}
          stroke="none"
          d=" M124.952042,264.230316   C122.697029,263.862457 120.280144,263.888550 118.221573,263.042633   C114.252281,261.411530 111.698647,262.635223 109.469452,265.903412   C108.723206,259.710663 108.328056,253.773392 107.932915,247.836105   C112.374207,240.987656 116.815498,234.139191 121.931808,227.197983   C123.780418,231.834396 124.954010,236.563553 126.063034,241.622955   C124.292534,244.706497 122.586594,247.459808 120.709686,250.489044   C122.345512,251.171661 123.664589,251.722107 124.988739,252.718430   C124.979897,256.852966 124.965965,260.541656 124.952042,264.230316  z"
        />
        <path
          fill="#25CFEC"
          opacity={1.0}
          stroke="none"
          d=" M28.121056,181.334671   C31.269464,181.223770 30.986019,179.031815 31.007977,176.994156   C31.098322,168.609329 31.211803,160.224716 31.355057,151.840668   C31.358868,151.617783 31.799858,151.402344 32.372437,151.091980   C35.439465,165.582001 39.529507,179.717270 46.186348,193.521667   C45.596699,196.356766 45.593613,198.679428 44.919933,200.787827   C44.105957,203.335297 42.723808,205.701218 41.587559,208.145721   C37.097546,199.333099 32.607536,190.520462 28.121056,181.334671  z"
        />
        <path
          fill="#2FDFBD"
          opacity={1.0}
          stroke="none"
          d=" M211.383942,54.060837   C210.734161,50.028324 210.435547,45.792297 209.955994,41.576851   C209.822800,40.406055 209.153198,39.296280 208.330185,38.065239   C211.387634,32.524128 214.893875,27.106661 218.278229,21.614073   C219.707657,19.294191 221.310760,19.441948 223.220276,20.822706   C226.713760,23.348793 230.206985,25.875212 233.882614,28.682648   C233.710175,30.773685 233.514145,32.634007 232.959122,34.380226   C232.316986,36.400440 231.358902,38.320232 230.317810,40.552773   C228.085861,39.475597 226.074112,38.129276 223.536041,36.430733   C219.511658,42.342014 215.589203,48.103558 211.383942,54.060837  z"
        />
        <path
          fill="#2AD4BA"
          opacity={1.0}
          stroke="none"
          d=" M108.037712,119.895424   C98.950356,113.903435 89.862991,107.911446 80.952499,101.448532   C81.752586,99.259331 82.490135,97.572159 82.968430,95.814445   C83.496895,93.872368 83.787811,91.865646 84.182190,89.887085   C92.644882,95.445892 101.107567,101.004700 109.775444,107.250053   C109.332993,111.922874 108.685349,115.909149 108.037712,119.895424  z"
        />
        <path
          fill="#3BEFC6"
          opacity={1.0}
          stroke="none"
          d=" M240.022675,193.919998   C246.118668,197.801437 252.214645,201.682877 259.384491,206.248047   C253.116852,213.756897 247.332611,220.686646 241.084229,227.382919   C240.409927,225.568649 240.424957,223.914505 239.939285,222.423431   C239.114395,219.890930 237.974014,217.461212 237.083923,214.656433   C238.317474,212.766037 239.433304,211.207520 241.034271,208.971390   C239.783951,208.036896 238.626083,207.171509 237.852554,206.108124   C238.832153,201.913422 239.427414,197.916702 240.022675,193.919998  z"
        />
        <path
          fill="#25CFEE"
          opacity={1.0}
          stroke="none"
          d=" M32.714550,121.609482   C32.036015,120.926323 31.135626,119.881256 31.064426,118.782463   C30.607613,111.732430 30.408089,104.665459 29.927166,97.617493   C29.842325,96.374184 28.831404,95.194077 27.798809,93.876511   C30.990021,85.880081 34.630573,77.991920 38.715767,70.263611   C39.773754,74.061981 40.257977,77.729225 41.058372,81.326118   C41.423714,82.967926 42.412750,84.470947 43.118912,86.036911   C39.704655,97.765518 36.290390,109.494118 32.714550,121.609482  z"
        />
        <path
          fill="#2DDFBC"
          opacity={1.0}
          stroke="none"
          d=" M206.753525,156.523102   C207.691223,152.659668 208.841507,149.072601 210.060822,145.072159   C216.011887,148.628357 221.871536,152.631775 227.787674,156.549850   C229.966476,157.992767 232.278656,159.234283 234.568970,161.219406   C234.405029,164.418594 234.408981,167.007172 233.914047,169.496567   C233.657516,170.786835 232.517670,171.901489 231.776886,173.095490   C223.506622,167.663467 215.236359,162.231461 206.753525,156.523102  z"
        />
        <path
          fill="#23CEEC"
          opacity={1.0}
          stroke="none"
          d=" M107.648888,248.021484   C108.328056,253.773392 108.723206,259.710663 109.193878,266.131012   C104.792313,273.327637 100.315224,280.041199 95.551056,286.925049   C94.509117,285.701538 93.338737,284.379456 93.083313,282.899445   C92.498466,279.510590 92.360504,276.044586 91.965988,272.177795   C97.048882,263.899414 102.206871,256.053162 107.648888,248.021484  z"
        />
        <path
          fill="#26D1CB"
          opacity={1.0}
          stroke="none"
          d=" M150.961060,119.126495   C143.456528,114.218498 135.952011,109.310493 128.231171,103.690475   C128.672928,98.993362 129.331039,95.008255 129.989151,91.023148   C137.232330,95.771156 144.475494,100.519157 151.730988,105.938080   C151.482559,110.781494 151.221802,114.953995 150.961060,119.126495  z"
        />
        <path
          fill="#2BD4B8"
          opacity={1.0}
          stroke="none"
          d=" M169.330704,14.185136   C169.336166,10.389508 169.665771,6.803555 169.991272,2.790534   C179.010437,4.027991 188.033691,5.692517 197.877213,7.508360   C196.100800,12.439434 194.838455,15.943496 193.574158,19.452978   C185.400833,17.724581 177.527832,16.059696 169.330704,14.185136  z"
        />
        <path
          fill="#25D0C5"
          opacity={1.0}
          stroke="none"
          d=" M160.220779,168.890625   C160.987244,170.666733 161.489532,172.626648 162.000977,174.584183   C162.720261,177.337234 163.446350,180.088516 164.524353,183.265625   C160.052795,190.509735 155.226410,197.328796 150.018097,203.970245   C149.090576,201.705093 148.473709,199.632950 148.017609,197.526016   C147.459854,194.949463 147.036880,192.343735 146.555634,189.750626   C151.023987,182.858215 155.492340,175.965790 160.220779,168.890625  z"
        />
        <path
          fill="#32E7C0"
          opacity={1.0}
          stroke="none"
          d=" M231.964737,173.381042   C232.517670,171.901489 233.657516,170.786835 233.914047,169.496567   C234.408981,167.007172 234.405029,164.418594 234.768005,161.502747   C241.530014,165.475998 248.131958,169.817642 254.921173,174.421997   C254.727829,178.702423 254.347198,182.720154 253.883499,187.203491   C246.584488,183.001617 239.368546,178.334122 231.964737,173.381042  z"
        />
        <path
          fill="#23CEF6"
          opacity={1.0}
          stroke="none"
          d=" M66.807014,63.077835   C61.596275,59.744385 56.385536,56.410938 50.196098,52.451385   C55.967731,46.386982 61.235710,40.851788 67.147537,35.388397   C68.498039,39.901653 69.204697,44.343098 69.911362,48.784542   C69.911362,48.784542 69.931213,48.930149 69.525703,49.032482   C69.080460,52.406101 69.253433,55.700363 68.903770,58.938175   C68.748413,60.376762 67.538338,61.701447 66.807014,63.077835  z"
        />
        <path
          fill="#26D1BF"
          opacity={1.0}
          stroke="none"
          d=" M151.139435,119.405121   C151.221802,114.953995 151.482559,110.781494 151.914169,106.215256   C152.535004,106.020096 153.082031,106.115265 153.420380,106.432793   C158.380447,111.087654 158.722656,111.056686 162.554703,105.449524   C163.492004,104.078041 164.440399,102.714127 165.658356,101.160233   C166.622025,102.811722 167.528397,104.601608 167.948181,106.499146   C168.552521,109.230904 168.803040,112.040916 169.597198,114.909271   C167.829880,118.974937 165.669907,122.948860 163.146088,127.592209   C158.838318,124.712006 155.078049,122.197868 151.139435,119.405121  z"
        />
        <path
          fill="#2FE1BD"
          opacity={1.0}
          stroke="none"
          d=" M204.008759,169.971008   C210.510590,174.217575 217.012436,178.464142 223.755066,183.396545   C223.291977,188.067902 222.588089,192.053436 221.556427,195.951294   C215.373978,191.822021 209.519287,187.780380 203.751724,183.235596   C203.895477,178.478638 203.952118,174.224823 204.008759,169.971008  z"
        />
        <path
          fill="#26CFE2"
          opacity={1.0}
          stroke="none"
          d=" M90.121384,64.598061   C96.648796,68.815918 103.176208,73.033783 109.865479,77.969696   C109.240990,82.516754 108.454643,86.345741 107.668304,90.174736   C101.490768,86.166557 95.313232,82.158386 89.032005,77.408371   C89.326012,72.643707 89.723694,68.620888 90.121384,64.598061  z"
        />
        <path
          fill="#28D2B7"
          opacity={1.0}
          stroke="none"
          d=" M189.000000,260.001373   C181.593338,261.839050 174.186676,263.676727 166.389648,265.127716   C165.999283,260.981598 165.999283,257.222198 166.384506,253.307648   C173.851303,251.460785 180.932892,249.769028 188.051712,248.438324   C188.392639,252.533371 188.696320,256.267365 189.000000,260.001373  z"
        />
        <path
          fill="#26D0D7"
          opacity={1.0}
          stroke="none"
          d=" M107.868652,90.454727   C108.454643,86.345741 109.240990,82.516754 110.048027,78.244537   C116.590462,82.019112 123.112198,86.236916 129.811554,90.738937   C129.331039,95.008255 128.672928,98.993362 128.027588,103.422920   C121.383240,99.489830 114.726120,95.112282 107.868652,90.454727  z"
        />
        <path
          fill="#26D0D7"
          opacity={1.0}
          stroke="none"
          d=" M126.127602,241.292725   C124.954010,236.563553 123.780418,231.834396 122.209778,227.016693   C125.867729,220.657028 129.922729,214.385880 134.611679,208.189819   C136.200958,213.284912 137.156296,218.304901 138.017426,223.642776   C133.991333,229.738007 130.059479,235.515366 126.127602,241.292725  z"
        />
        <path
          fill="#31E8C0"
          opacity={1.0}
          stroke="none"
          d=" M236.966232,214.988312   C237.974014,217.461212 239.114395,219.890930 239.939285,222.423431   C240.424957,223.914505 240.409927,225.568649 240.779144,227.505920   C235.544312,232.598694 230.150467,237.335037 224.353119,241.729462   C223.637177,237.037994 223.324722,232.688461 223.228210,228.062500   C227.951523,223.520157 232.458878,219.254227 236.966232,214.988312  z"
        />
        <path
          fill="#30E1BE"
          opacity={1.0}
          stroke="none"
          d=" M223.012268,228.338913   C223.324722,232.688461 223.637177,237.037994 224.015182,241.818024   C218.014816,245.957794 211.948898,249.667068 205.475189,252.938507   C204.999695,248.513184 204.931992,244.525681 205.076874,240.299500   C211.197052,236.153534 217.104660,232.246216 223.012268,228.338913  z"
        />
        <path
          fill="#26D0CE"
          opacity={1.0}
          stroke="none"
          d=" M138.111633,223.324890   C137.156296,218.304901 136.200958,213.284912 134.879944,208.012512   C138.350037,201.873245 142.185822,195.986374 146.288620,189.925049   C147.036880,192.343735 147.459854,194.949463 148.017609,197.526016   C148.473709,199.632950 149.090576,201.705093 149.964111,204.333572   C146.231903,211.024628 142.171768,217.174759 138.111633,223.324890  z"
        />
        <path
          fill="#27CFEF"
          opacity={1.0}
          stroke="none"
          d=" M70.212257,48.659222   C69.204697,44.343098 68.498039,39.901653 67.463242,35.265671   C72.533905,30.768303 77.932701,26.465469 83.677055,22.514252   C84.396317,27.080944 84.770020,31.296019 85.143723,35.511093   C80.266869,39.852028 75.390007,44.192963 70.212257,48.659222  z"
        />
        <path
          fill="#2AD8BA"
          opacity={1.0}
          stroke="none"
          d=" M203.818970,169.697723   C203.952118,174.224823 203.895477,178.478638 203.419357,183.090134   C196.897903,179.333984 190.795929,175.220154 184.693954,171.106323   C185.477493,167.280441 186.261017,163.454559 187.077026,159.166550   C192.616043,162.277756 198.122604,165.851089 203.818970,169.697723  z"
        />
        <path
          fill="#27D1C8"
          opacity={1.0}
          stroke="none"
          d=" M83.988922,89.608032   C83.787811,91.865646 83.496895,93.872368 82.968430,95.814445   C82.490135,97.572159 81.752586,99.259331 80.722694,101.183655   C75.310730,98.160820 70.305420,94.931938 65.148056,90.994278   C65.828880,86.437248 66.661751,82.588989 67.494629,78.740730   C72.928307,82.270149 78.361977,85.799561 83.988922,89.608032  z"
        />
        <path
          fill="#2FDFBD"
          opacity={1.0}
          stroke="none"
          d=" M108.222778,120.177338   C108.685349,115.909149 109.332993,111.922874 109.971603,107.523232   C115.559891,110.779175 121.157204,114.448486 126.868858,118.816940   C126.295593,123.409554 125.607986,127.303017 124.920380,131.196472   C119.416206,127.617393 113.912025,124.038322 108.222778,120.177338  z"
        />
        <path
          fill="#26D0DF"
          opacity={1.0}
          stroke="none"
          d=" M41.727417,208.471832   C42.723808,205.701218 44.105957,203.335297 44.919933,200.787827   C45.593613,198.679428 45.596699,196.356766 46.291260,193.875671   C50.719643,199.524918 54.753662,205.427505 58.430408,211.684052   C57.381905,213.293533 56.326591,214.480087 56.072975,215.818527   C55.491577,218.886826 55.301350,222.029221 54.952301,225.141541   C50.590626,219.693665 46.228951,214.245789 41.727417,208.471832  z"
        />
        <path
          fill="#27D1C8"
          opacity={1.0}
          stroke="none"
          d=" M68.267380,222.864883   C72.981743,226.473679 77.577011,230.254883 82.456131,233.625183   C85.282021,235.577179 85.873444,237.271637 83.605148,239.980682   C82.033081,241.858170 80.763000,243.988541 78.919968,246.634811   C74.163864,242.816391 69.694290,239.228012 65.385803,235.104492   C66.031425,232.683609 66.551147,230.806061 66.990883,228.909943   C67.456062,226.904114 67.845093,224.880646 68.267380,222.864883  z"
        />
        <path
          fill="#25D0DD"
          opacity={1.0}
          stroke="none"
          d=" M117.035538,19.106182   C111.630150,21.458130 106.224762,23.810078 100.386719,25.787453   C99.329514,21.669231 98.704956,17.925583 98.080399,14.181937   C103.815742,11.828412 109.551079,9.474887 115.834824,7.497235   C116.600655,11.617466 116.818092,15.361823 117.035538,19.106182  z"
        />
        <path
          fill="#33E9C0"
          opacity={1.0}
          stroke="none"
          d=" M221.884216,196.038956   C222.588089,192.053436 223.291977,188.067902 223.994659,183.643448   C229.203735,186.600510 234.414001,189.996506 239.823471,193.656250   C239.427414,197.916702 238.832153,201.913422 237.534393,206.033539   C231.849319,202.784286 226.866760,199.411621 221.884216,196.038956  z"
        />
        <path
          fill="#27D0D2"
          opacity={1.0}
          stroke="none"
          d=" M117.432693,19.096386   C116.818092,15.361823 116.600655,11.617466 116.216553,7.506156   C122.075523,5.697703 128.101166,4.256203 134.560669,2.860841   C134.998093,6.548693 135.001663,10.190408 135.007141,14.272177   C129.282623,16.170351 123.556236,17.628471 117.432693,19.096386  z"
        />
        <path
          fill="#2AD8BA"
          opacity={1.0}
          stroke="none"
          d=" M204.864288,240.538162   C204.931992,244.525681 204.999695,248.513184 205.106873,253.013000   C200.022751,255.696579 194.899139,257.867828 189.387772,260.020233   C188.696320,256.267365 188.392639,252.533371 188.314117,248.198517   C193.980957,245.244492 199.422623,242.891327 204.864288,240.538162  z"
        />
        <path
          fill="#26D0D7"
          opacity={1.0}
          stroke="none"
          d=" M67.292572,78.463638   C66.661751,82.588989 65.828880,86.437248 64.971085,90.713326   C60.040565,87.966217 55.134956,84.791290 50.443115,81.243820   C51.145355,76.774635 51.633835,72.677979 52.122314,68.581329   C57.111717,71.783066 62.101124,74.984802 67.292572,78.463638  z"
        />
        <path
          fill="#25CFE6"
          opacity={1.0}
          stroke="none"
          d=" M97.727356,14.212478   C98.704956,17.925583 99.329514,21.669231 100.015793,25.836906   C95.325523,29.255669 90.573517,32.250401 85.482620,35.378113   C84.770020,31.296019 84.396317,27.080944 84.013199,22.446831   C88.460617,19.432869 92.917465,16.837944 97.727356,14.212478  z"
        />
        <path
          fill="#26CFE4"
          opacity={1.0}
          stroke="none"
          d=" M51.939068,68.319946   C51.633835,72.677979 51.145355,76.774635 50.250031,80.965591   C45.222824,79.054611 45.267208,83.466492 43.377144,85.804672   C42.412750,84.470947 41.423714,82.967926 41.058372,81.326118   C40.257977,77.729225 39.773754,74.061981 38.986275,70.047638   C40.056091,67.420799 41.300037,65.169777 42.895279,62.283070   C46.127747,64.390060 48.941784,66.224312 51.939068,68.319946  z"
        />
        <path
          fill="#23D0CB"
          opacity={1.0}
          stroke="none"
          d=" M152.122894,266.391205   C147.365570,266.307526 142.608261,266.223846 137.426392,265.581299   C137.003433,261.393829 137.005020,257.765228 137.470367,254.081909   C142.956848,254.191330 147.979584,254.355499 153.001999,254.937759   C152.708740,259.034302 152.415817,262.712769 152.122894,266.391205  z"
        />
        <path
          fill="#24CFD4"
          opacity={1.0}
          stroke="none"
          d=" M68.193520,222.523956   C67.845093,224.880646 67.456062,226.904114 66.990883,228.909943   C66.551147,230.806061 66.031425,232.683609 65.237152,234.802719   C61.688103,231.939423 58.448776,228.842728 55.080875,225.443787   C55.301350,222.029221 55.491577,218.886826 56.072975,215.818527   C56.326591,214.480087 57.381905,213.293533 58.476284,212.019592   C61.959507,215.395126 65.039581,218.789078 68.193520,222.523956  z"
        />
        <path
          fill="#3BEFC6"
          opacity={1.0}
          stroke="none"
          d=" M138.044357,125.868240   C142.924545,128.901398 147.804718,131.934570 153.211197,135.294830   C150.809433,138.897644 148.683868,142.086166 146.212128,145.793961   C142.513458,143.233887 139.290665,141.003189 136.240021,138.288620   C136.956253,133.825912 137.500305,129.847076 138.044357,125.868240  z"
        />
        <path
          fill="#31E8C0"
          opacity={1.0}
          stroke="none"
          d=" M137.855743,125.597420   C137.500305,129.847076 136.956253,133.825912 136.040039,138.011993   C132.216965,136.055359 128.766037,133.891464 125.117737,131.462021   C125.607986,127.303017 126.295593,123.409554 127.057747,119.084427   C130.643906,120.877373 134.155518,123.101982 137.855743,125.597420  z"
        />
        <path
          fill="#23CEEC"
          opacity={1.0}
          stroke="none"
          d=" M89.934868,64.339600   C89.723694,68.620888 89.326012,72.643707 88.876663,77.134277   C85.034294,75.212837 81.243591,72.823662 77.476028,69.883057   C77.776993,67.732391 78.178444,66.142746 78.303368,64.531654   C78.486488,62.170162 76.364616,59.190910 80.227768,57.905209   C83.401299,59.963852 86.574829,62.022491 89.934868,64.339600  z"
        />
        <path
          fill="#23D0C1"
          opacity={1.0}
          stroke="none"
          d=" M152.578979,266.430359   C152.415817,262.712769 152.708740,259.034302 153.391479,254.847946   C157.853958,254.047607 161.926620,253.755188 165.999298,253.462769   C165.999283,257.222198 165.999283,260.981598 166.000061,265.170258   C161.678925,265.889496 157.356979,266.179504 152.578979,266.430359  z"
        />
        <path
          fill="#2FD2D8"
          opacity={1.0}
          stroke="none"
          d=" M137.006607,254.136642   C137.005020,257.765228 137.003433,261.393829 137.004456,265.475342   C133.189499,265.506409 129.371918,265.084564 125.253189,264.446533   C124.965965,260.541656 124.979897,256.852966 125.395004,252.684708   C129.533005,252.848953 133.269806,253.492798 137.006607,254.136642  z"
        />
        <path
          fill="#27CFEF"
          opacity={1.0}
          stroke="none"
          d=" M80.034195,57.623795   C76.364616,59.190910 78.486488,62.170162 78.303368,64.531654   C78.178444,66.142746 77.776993,67.732391 77.278076,69.612198   C73.769379,67.808693 70.481781,65.724617 67.000595,63.359188   C67.538338,61.701447 68.748413,60.376762 68.903770,58.938175   C69.253433,55.700363 69.080460,52.406101 69.452301,49.029129   C73.136482,51.729759 76.488548,54.536072 80.034195,57.623795  z"
        />
        <path
          fill="#25CFEE"
          opacity={1.0}
          stroke="none"
          d=" M31.295097,127.912476   C31.209961,127.183899 31.382435,126.265373 31.776711,125.199860   C31.849911,125.942749 31.701309,126.832642 31.295097,127.912476  z"
        />
        <path
          fill="#25CFEC"
          opacity={1.0}
          stroke="none"
          d=" M32.200062,146.736115   C31.685560,146.431244 31.362001,145.906372 31.043774,145.121948   C31.496407,145.413635 31.943705,145.964874 32.200062,146.736115  z"
        />
        <path
          fill="#FBFDFD"
          opacity={1.0}
          stroke="none"
          d=" M137.470367,254.081909   C133.269806,253.492798 129.533005,252.848953 125.389931,252.238831   C123.664589,251.722107 122.345512,251.171661 120.709686,250.489044   C122.586594,247.459808 124.292534,244.706497 126.063049,241.622955   C130.059479,235.515366 133.991333,229.738007 138.017410,223.642761   C142.171768,217.174759 146.231903,211.024628 150.346039,204.511169   C155.226410,197.328796 160.052795,190.509735 164.888611,183.344727   C168.793579,177.574066 172.689117,172.149384 176.695450,166.570404   C179.362885,168.081635 181.734650,169.425323 184.400177,170.937683   C190.795929,175.220154 196.897903,179.333984 203.332245,183.593292   C209.519287,187.780380 215.373978,191.822021 221.556427,195.951294   C226.866760,199.411621 231.849319,202.784286 237.150055,206.231537   C238.626083,207.171509 239.783951,208.036896 241.034271,208.971390   C239.433304,211.207520 238.317474,212.766037 237.083923,214.656433   C232.458878,219.254227 227.951523,223.520157 223.228210,228.062500   C217.104660,232.246216 211.197052,236.153534 205.076874,240.299500   C199.422623,242.891327 193.980957,245.244492 188.276886,247.837463   C180.932892,249.769028 173.851303,251.460785 166.384506,253.307648   C161.926620,253.755188 157.853958,254.047607 153.391800,254.429840   C147.979584,254.355499 142.956848,254.191330 137.470367,254.081909  z"
        />
      </svg>
    ),
  },
  edit: Edit,
  save: Save,
});
