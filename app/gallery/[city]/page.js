"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import MumbaiRegistration from "../../components/Registration";
import BannerSection from "../../components/BannerSection";

const locations = [
  { name: "Hyderabad, 2025", id: "hyderabad" },
  { name: "Ahmedabad, 2024", id: "ahmedabad" },
  { name: "Pune, 2024", id: "pune" },
  { name: "Bangalore, 2024", id: "bangalore" },
];

const images = {
    hyderabad: [
      
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2741.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2742.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2743.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2744.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2745.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2789.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2790.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2791.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2792.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2795.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2796.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2797.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2798.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2799.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2800.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2805.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2806.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2810.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2812.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2816.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2817.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2820.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2821.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2824.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2825.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2828.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2829.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2840.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2841.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2842.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2845.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2846.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2847.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2848.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2849.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2853.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2854.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2855.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2856.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2860.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2861.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2862.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2867.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2869.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2870.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2873.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2874.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2875.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2877.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2878.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2879.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2880.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2883.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2884.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2885.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2886.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2890.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2891.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2892.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2893.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2895.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2896.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2900.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2910.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2911.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2912.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2914.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2916.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2917.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2920.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2921.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2922.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2926.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2927.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2932.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2933.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2934.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2938.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2939.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2940.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2941.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2948.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2949.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2950.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2951.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2952.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2953.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2981.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2982.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2984.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2985.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2986.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2992.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A2993.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A3018.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A3019.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A3020.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A3021.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A3022.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A3025.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A3026.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A3027.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/PHOTOS-HYDERABAD/0E0A3028.JPG"
  ],
  ahmedabad: [

    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7878.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7901.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-visitor.jpg ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-visitors 2.jpg ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7857.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7859.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7862.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7866.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7868.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7870.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7841.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7843.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7846.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7849.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7852.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7854.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7856.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7822.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7823.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7827.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7831.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7834.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7837.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7804.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7806.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7809.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7811.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7812.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7815.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7816.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7820.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7785.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7787.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7790.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7795.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7797.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7800.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7801.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7736.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7739.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7740.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7776.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7779.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7781.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7717.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7719.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7722.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7725.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7727.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7731.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7732.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7735.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-2.jpg ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-3.jpg ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-4.jpg ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-5.jpg ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-6.jpg ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-7.jpg ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-8.jpg ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-9.jpg ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-16.jpg ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-17.jpg ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-18.jpg ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-19.jpg ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-20.jpg ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-21.jpg ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-22.jpg ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-23.jpg ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-1.jpg ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-10.jpg ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-11.jpg ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-12.jpg ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-13.jpg ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-14.jpg ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-15.jpg ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7872.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7874.JPG ",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gallery-amd-photos/PharmmaEx-Ahmedabad-event-IMG_7876.JPG",
  ],
  pune: [
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08009.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08011.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08013.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08015.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08016.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08017.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08019.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08021.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08022.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08024.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08025.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08026.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08028.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08030.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08032.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08034.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08035.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08038.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08039.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08040.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08041.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08043.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08044.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08046.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08047.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08049.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08052.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08054.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08056.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08057.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08058.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08061.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08064.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08066.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08069.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08073.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08074.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08077.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08079.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08081.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08082.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08084.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08085.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08086.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08087.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08088.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08089.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08090.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08092.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08094.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08097.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08099.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08100.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08102.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08105.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08107.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08108.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08110.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08111.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08113.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08116.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08118.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08120.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08123.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08124.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08129.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08131.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08132.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08133.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC07975.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC07984.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC07987.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC07988.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC07991.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC07992.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC07997.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC07999.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08000.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08003.JPG",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/galPuneEvents/DSC08006.JPG"
  ],
  bangalore: [
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-001.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-002.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-003.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-004.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-005.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-007.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-008.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-009.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0010.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0011.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0012.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0013.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0014.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0015.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0016.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0017.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0018.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0019.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0020.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0021.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0022.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0023.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0024.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0025.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0026.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0027.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0028.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0029.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0030.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0031.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0032.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0033.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0034.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0035.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0036.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0037.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0038.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0039.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0040.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0041.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0042.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0043.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0044.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0045.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0046.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0047.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0048.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0049.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0050.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0051.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0052.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0053.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0054.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0055.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0056.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0057.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0058.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0059.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0060.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0061.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0062.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0063.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0064.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0065.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0066.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0067.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0068.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0069.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0070.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0071.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0072.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0073.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0074.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0075.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0076.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0077.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0078.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0079.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0080.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0081.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0082.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0083.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0084.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0085.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0086.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0087.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0088.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0089.jpg",
    "https://pharmmaex.com/assets/img/pharammaxx-new-2025/gal2024/IMG-0090.jpg",
  ]
};

export default function GalleryCityPage() {
  const params = useParams();
  const router = useRouter();
  const activeLocation = params?.city || "hyderabad";

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 28;

  const currentImages = images[activeLocation] || [];
  const totalPages = Math.ceil(currentImages.length / imagesPerPage);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const paginatedImages = currentImages.slice(startIndex, endIndex);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const showPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? currentImages.length - 1 : prev - 1));
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev === currentImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 bg-white">
      <BannerSection
        imageUrl="https://pharmmaex.com/assets/img/pharammaxx-new-2025/galary-bg.jpg"
        title="Gallery"
        breadcrumb="gallery"
      />
      <div className="p-4 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6">
          Our Exhibition Photos Gallery
        </h1>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {locations.map((loc) => (
            <button
              key={loc.id}
              className={`px-4 py-1 rounded-full border ${
                activeLocation === loc.id
                  ? "bg-green-600 text-white"
                  : "bg-white border-gray-300"
              }`}
              onClick={() => {
                router.push(`/gallery/${loc.id}`);
                setCurrentPage(1);
              }}
            >
              {loc.name}
            </button>
          ))}
        </div>

        <div className="py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {paginatedImages.map((src, i) => (
            <img
              key={i}
              src={src.trim()}
              loading="lazy" 
              alt={`${activeLocation} Photo ${startIndex + i + 1}`}
              className="rounded-lg shadow-md object-fill w-full h-64 cursor-pointer"
              onClick={() => openModal(startIndex + i)}
            />
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-50 mx-4"
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-3 py-1 border rounded-full  ${
                currentPage === index + 1 ? "bg-green-600 text-white" : ""
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-50 mx-4"
          >
            Next
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-3xl "
          >
            &times;
          </button>
          <button
            onClick={showPrev}
            className="absolute left-4 text-white text-5xl"
          >
            &#10094;
          </button>
          <img
            src={currentImages[currentIndex].trim()}
            alt={`Image ${currentIndex + 1}`}
            className="max-w-[90vw] max-h-[80vh] rounded-lg shadow-lg"
          />
          <button
            onClick={showNext}
            className="absolute right-4 text-white text-5xl"
          >
            &#10095;
          </button>
        </div>
      )}

      <MumbaiRegistration />
    </section>
  );
}
