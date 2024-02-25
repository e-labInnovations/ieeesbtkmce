import { registerBlockType } from "@wordpress/blocks";
import { select } from "@wordpress/data";
import "./style.scss";
import metadata from "./block.json";
import Edit from "./edit";
import Save from "./save";

const attributes = {
  content: {
    type: "String",
  },
  title: {
    type: "string",
    default: "Trusted Among Global Organizations",
  },
  societies: {
    type: "object",
    default: {
      ras: {
        name: "Robotic Automation Society (RAS)",
        image: {},
        linkObject: {},
        bg_color: "white",
      },
      pes: {
        name: "Power Energy Society (PES)",
        image: {},
        linkObject: {},
        bg_color: "white",
      },
      ias: {
        name: "Industrial Applications Society (IAS)",
        image: {},
        linkObject: {},
        bg_color: "primary-800",
      },
      ies: {
        name: "Industrial Electronics society (IES)",
        image: {},
        linkObject: {},
        bg_color: "white",
      },
      cs: {
        name: "Computer Society (CS)",
        image: {},
        linkObject: {},
        bg_color: "white",
      },
      wie: {
        name: "Women in Engineering (WIE)",
        image: {},
        linkObject: {},
        bg_color: "white",
      },
      cass: {
        name: "Circuits and systems society(CASS)",
        image: {},
        linkObject: {},
        bg_color: "white",
      },
      sight: {
        name: "Special interested group on humanitarian Technology (SIGHT)",
        image: {},
        linkObject: {},
        bg_color: "white",
      },
      sps: {
        name: "Signal Processing Society (SPS)",
        image: {},
        linkObject: {},
        bg_color: "white",
      },
    },
  },
};

registerBlockType(metadata, {
  attributes,
  icon: {
    src: (
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 13.230115 13.048"
      >
        <path
          d="M 6.6274765,2.6598975e-5 C 6.5152114,3.6886897e-4 6.4030118,0.05940465 6.3153902,0.13059718 L 5.4247931,1.2913923 A 24.09596,24.09596 0 0 1 0.42310934,5.9938203 C 0.27707337,6.1106491 0.05784927,6.2202145 0.01403848,6.4100612 -0.03707411,6.5780026 0.05785612,6.724077 0.1600813,6.8263022 a 24.351523,24.351523 0 0 1 4.1620319,3.6216358 c 0.2263557,0.233657 0.4088924,0.467253 0.6279464,0.693609 0.3723917,0.48922 0.8032705,0.986021 1.146455,1.511751 0.109527,0.116829 0.1241443,0.291786 0.2920857,0.350201 0.1314323,0.04381 0.2921103,0.07302 0.4162409,0 l 0.1241553,-0.124156 a 24.753122,24.753122 0 0 1 5.6586875,-5.71001 c 0.219054,-0.1971486 0.635362,-0.2628564 0.642664,-0.6279464 a 0.56954087,0.56954087 0 0 0 -0.255481,-0.423411 h -0.0366 A 22.000341,22.000341 0 0 1 9.790983,3.5110923 L 8.7105676,2.3869022 C 8.27246,1.8976817 7.8416885,1.3573514 7.4327874,0.83892373 h -0.00755 L 6.9433366,0.13776724 C 6.8776204,0.10125825 6.8048947,0.0503666 6.7391785,0.0211594 6.7026696,0.00655581 6.6648983,-8.7491025e-5 6.6274765,2.6598975e-5 Z M 6.5886072,1.6831041 c 0.3286523,-0.00631 0.6660139,0.195853 0.9170135,0.4117125 0.386995,0.2920719 0.788798,0.6277926 1.1392847,0.9709772 l 0.065662,0.036605 a 18.933583,18.933583 0 0 1 2.6283936,2.9646316 c 0.116829,0.1898468 0.219306,0.4013272 0.153591,0.6422866 -0.248262,0.6206529 -0.752123,1.1174605 -1.19023,1.6577934 A 20.079966,20.079966 0 0 1 7.2135347,11.178152 C 6.9798771,11.338791 6.673107,11.484931 6.4029404,11.3608 5.5778372,10.922692 4.8697591,10.214371 4.1541828,9.5645109 A 15.582054,15.582054 0 0 1 1.8322151,6.9285699 C 1.7372917,6.7971375 1.7080598,6.6363814 1.7080598,6.4538364 1.7956814,6.1252555 2.0146846,5.8550477 2.2337385,5.5775794 A 21.613346,21.613346 0 0 1 4.8330743,2.8759758 l 0.1022678,-0.08038 C 5.3296392,2.4451093 5.7312573,2.1387097 6.1474598,1.8393359 h 0.00755 c 0.1369088,-0.1072452 0.2842127,-0.1533618 0.4336,-0.1562318 z m 0.052455,0.318879 C 6.535414,2.0015267 6.4267426,2.0324878 6.3153902,2.1091567 4.9353502,3.0583905 3.5918868,4.3653916 2.5258241,5.6870172 2.3067702,6.0155981 1.9197543,6.3224177 2.0876957,6.745922 2.2191281,7.0598993 2.4966238,7.2864636 2.671867,7.571234 a 20.547282,20.547282 0 0 0 3.599748,3.395213 c 0.5695404,0.365089 0.9785454,-0.226455 1.4166531,-0.496622 A 23.993734,23.993734 0 0 0 10.236659,8.0384196 v -0.021887 c 0.321278,-0.3796939 0.649751,-0.7668575 0.905314,-1.1830602 0.102225,-0.2044503 0.0513,-0.4817608 -0.07283,-0.657004 A 18.006254,18.006254 0 0 0 7.5056207,2.4744524 C 7.248232,2.2882565 6.9580056,2.0033522 6.6410622,2.0019831 Z m -0.026039,0.9762604 c 0.2482611,0.7155763 0.5038226,1.4238753 0.773989,2.1321498 l -0.5332259,0.00717 -0.014717,0.065663 0.08038,1.9061042 v 0.036228 c -0.1971485,0.029207 -0.4379679,0.021905 -0.6351164,0 l -0.014718,-0.01434 0.08755,-1.9717667 v -0.01434 C 6.2131293,5.1105072 6.0161276,5.1249969 5.8700916,5.1103933 L 6.4761505,3.3650495 6.6003058,2.9854136 Z M 5.154595,5.4971992 C 5.3663471,5.650537 5.5779593,5.7748378 5.7897115,5.9062701 5.3808108,6.0230989 4.8844258,6.1178644 4.6945789,6.5632741 4.7237862,6.9064587 5.1181533,7.0160488 5.381018,7.1036704 A 5.0017371,5.0017371 0 0 0 8.3452722,6.9870625 C 8.5205155,6.8848373 8.8054378,6.7607218 8.7762306,6.5051589 8.7470234,6.2349923 8.4330012,6.1107452 8.213947,6.0304254 8.0825145,6.045029 7.9585736,6.0741648 7.8271411,6.1179756 7.7614249,5.920827 7.7027935,5.7382368 7.6297755,5.5556919 8.0386766,5.6652188 8.4549942,5.7747595 8.8784982,5.8477775 v 0.014717 c -0.087622,0 -0.1825765,0.036324 -0.2701982,0.072833 v 0.014717 C 8.8565614,6.0741758 9.1924715,6.2711844 9.1924715,6.5851617 9.134057,6.9794588 8.7104406,7.1474701 8.4037647,7.2716007 7.1259501,7.6658975 5.5197399,7.6514188 4.3149431,7.1183878 4.0958891,7.0161627 3.8181299,6.8482721 3.7451119,6.5927091 3.6939993,6.1326958 4.1906341,5.8698078 4.5338187,5.6945646 4.7309672,5.606943 4.935541,5.5118028 5.154595,5.4971992 Z m 1.1023026,2.1615849 c 0.2482611,0.021905 0.4600832,0.014471 0.686439,0.00717 l 0.014717,0.095098 0.08038,1.9495019 C 6.7463616,9.754365 6.439645,9.725289 6.1621766,9.703384 6.2132896,9.0024114 6.2203876,8.3597576 6.2568966,7.6587849 Z m 2.6019777,4.0008939 a 0.43810836,0.43810836 0 0 0 -0.024152,3.78e-4 c -0.2409596,0 -0.460016,0.167944 -0.460016,0.460016 0,0.292072 0.2190564,0.460016 0.460016,0.460016 A 0.43810836,0.43810836 0 0 0 9.2947391,12.120072 0.43810836,0.43810836 0 0 0 8.8588753,11.659678 Z m -0.024152,0.109816 c 0.1825451,0 0.3283133,0.146127 0.3283133,0.350578 0,0.211752 -0.1457682,0.350578 -0.3283133,0.350578 -0.1825452,0 -0.3286908,-0.138826 -0.3286908,-0.350578 0,-0.211753 0.1461456,-0.350578 0.3286908,-0.350578 z m -0.1826481,0.109814 v 0.489074 h 0.109438 v -0.211705 h 0.051323 l 0.1094373,0.211705 H 9.0464288 L 8.9222733,12.149129 c 0.073018,0 0.1166084,-0.03616 0.1166084,-0.123778 0,-0.116828 -0.072857,-0.146043 -0.1969882,-0.146043 z m 0.109438,0.07283 h 0.07321 c 0.036509,0 0.09472,0.0074 0.09472,0.05849 0,0.05841 -0.029022,0.06566 -0.072833,0.06566 h -0.095098 z"
          fill="#0a70a3"
        />
      </svg>
    ),
  },
  edit: Edit,
  save: Save,
});
