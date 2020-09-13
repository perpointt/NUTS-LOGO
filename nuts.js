//Author: Maxim Ilyshchenko

class Nuts {
  constructor(options) {
    this.container = options.container || "#nuts";
    this.color = options.color || "#fff";
    this.hover = options.hover || "#ffad00";
    this.transition = options.transition || 1;
    this.lettersAnimation = options.lettersAnimation || false;

    this.render();
  }

  render() {
    const nutsSVG = `
        <a id="${this.container.substr(
          1
        )}" href="https://nuts-agency.ru/" target="_blank">
        <span class="nuts-subtitle">Придумали <br>
        и сделали</span>
        <svg width="123" height="47" viewBox="0 0 123 47" fill="none">
            <g class="${this.container.substr(1)}-border"  stroke="${
      this.color
    }" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19.7452 1C19.7452 1 20.0719 1.24497 20.2352 1.48994C20.3985 1.73491 20.8068 1.89823 20.8068 1.89823C20.8068 1.89823 22.7665 2.46983 25.6245 4.10297C27.3393 5.08285 36.24 10.7172 38.1997 20.2711C38.4447 21.2509 39.6696 25.4155 37.7914 31.8664C35.9133 38.3173 32.6471 41.0936 32.6471 41.0936C32.6471 41.0936 28.3192 45.2581 19.7452 45.4214"  />
                <path d="M19.8269 1C19.8269 1 19.5003 1.24497 19.337 1.48994C19.1737 1.73491 18.7654 1.89823 18.7654 1.89823C18.7654 1.89823 16.8056 2.46983 13.9476 4.10297C12.2328 5.08285 3.00558 10.7172 1.37244 20.2711C-0.0157267 28.0285 2.51564 37.664 8.31329 42.0735C9.6198 43.135 12.7228 45.1765 19.8269 45.3398"  />
            </g>
            <g class="${this.container.substr(1)}-border-mask"  stroke="${
      this.hover
    }" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19.7452 1C19.7452 1 20.0719 1.24497 20.2352 1.48994C20.3985 1.73491 20.8068 1.89823 20.8068 1.89823C20.8068 1.89823 22.7665 2.46983 25.6245 4.10297C27.3393 5.08285 36.24 10.7172 38.1997 20.2711C38.4447 21.2509 39.6696 25.4155 37.7914 31.8664C35.9133 38.3173 32.6471 41.0936 32.6471 41.0936C32.6471 41.0936 28.3192 45.2581 19.7452 45.4214" />
                <path d="M19.8269 1C19.8269 1 19.5003 1.24497 19.337 1.48994C19.1737 1.73491 18.7654 1.89823 18.7654 1.89823C18.7654 1.89823 16.8056 2.46983 13.9476 4.10297C12.2328 5.08285 3.00558 10.7172 1.37244 20.2711C-0.0157267 28.0285 2.51564 37.664 8.31329 42.0735C9.6198 43.135 12.7228 45.1765 19.8269 45.3398"  />
            </g>
            <g class="${this.container.substr(1)}-wrapper" stroke="${
      this.color
    }" stroke-width="2.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19.7452 16.2699C19.7452 16.2699 20.8068 16.2699 21.2967 16.3516C21.46 15.2084 22.195 14.0652 22.2766 13.9835C20.5618 12.2687 21.2967 10.064 22.7665 9.32908C24.2364 8.59416 26.6044 9.24742 26.8494 11.6971C28.3192 11.6155 34.1169 13.5752 32.5654 19.8628C33.382 20.4344 34.7701 21.8226 34.0352 24.5173C35.6684 25.9055 36.8932 30.5599 31.9938 32.2747C32.7287 36.6842 28.4825 37.0925 27.5027 36.7658C26.6044 42.6451 18.4387 39.5422 21.705 34.3978C20.9701 33.4179 19.7452 32.2747 19.7452 32.2747" />
                <path d="M19.7452 16.2699C19.7452 16.2699 18.6837 16.2699 18.1937 16.3516C18.0304 15.2084 17.2955 14.0652 17.2138 13.9835C18.9286 12.2687 18.1937 10.064 16.7239 9.32908C15.2541 8.59416 12.886 9.24742 12.6411 11.6971C11.1712 11.6155 5.37357 13.5752 6.92506 19.8628C6.10849 20.4344 4.72032 21.8226 5.45523 24.5173C3.82209 25.9055 2.59723 30.5599 7.49665 32.2747C6.76174 36.6842 11.0079 37.0925 11.9878 36.7658C12.886 42.6451 21.0517 39.5422 17.7854 34.3978C18.5204 33.4179 19.7452 32.2747 19.7452 32.2747" />
            </g>
            <g class="${this.container.substr(1)}-wrapper-mask" stroke="${
      this.hover
    }" stroke-width="2.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19.7452 16.2699C19.7452 16.2699 20.8068 16.2699 21.2967 16.3516C21.46 15.2084 22.195 14.0652 22.2766 13.9835C20.5618 12.2687 21.2967 10.064 22.7665 9.32908C24.2364 8.59416 26.6044 9.24742 26.8494 11.6971C28.3192 11.6155 34.1169 13.5752 32.5654 19.8628C33.382 20.4344 34.7701 21.8226 34.0352 24.5173C35.6684 25.9055 36.8932 30.5599 31.9938 32.2747C32.7287 36.6842 28.4825 37.0925 27.5027 36.7658C26.6044 42.6451 18.4387 39.5422 21.705 34.3978C20.9701 33.4179 19.7452 32.2747 19.7452 32.2747" />
                <path d="M19.7452 16.2699C19.7452 16.2699 18.6837 16.2699 18.1937 16.3516C18.0304 15.2084 17.2955 14.0652 17.2138 13.9835C18.9286 12.2687 18.1937 10.064 16.7239 9.32908C15.2541 8.59416 12.886 9.24742 12.6411 11.6971C11.1712 11.6155 5.37357 13.5752 6.92506 19.8628C6.10849 20.4344 4.72032 21.8226 5.45523 24.5173C3.82209 25.9055 2.59723 30.5599 7.49665 32.2747C6.76174 36.6842 11.0079 37.0925 11.9878 36.7658C12.886 42.6451 21.0517 39.5422 17.7854 34.3978C18.5204 33.4179 19.7452 32.2747 19.7452 32.2747" />
            </g>
            <g class="${this.container.substr(1)}-inner" stroke="${
      this.color
    }" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.5619 19.8623C20.5619 19.8623 23.5832 19.8623 23.5015 24.1901C25.7879 24.5984 26.4412 26.8032 26.4412 26.8032" />
                <path d="M30.034 22.7202C28.7275 24.0267 28.3192 26.3948 28.3192 26.3948C28.3192 26.3948 24.9713 26.3131 24.3181 29.4161C22.0317 29.8244 21.1334 31.4575 21.1334 31.4575" />
                <path d="M19.9086 28.6819C21.8683 28.3553 22.7666 29.9068 22.7666 29.9068C22.7666 29.9068 25.4613 28.3553 26.9311 31.1316C29.7074 28.8452 31.6672 32.0298 31.6672 32.0298" />
                <path d="M28.8909 24.5168C28.8909 24.5168 27.0128 24.0268 26.9312 22.312" />
                <path d="M30.6057 26.0688C30.6057 26.0688 31.3406 28.4369 33.1371 29.0085" />
                <path d="M33.627 26.9674C33.627 26.9674 32.7288 26.7224 31.5039 27.8656" />
                <path d="M28.5642 33.8258C28.5642 33.8258 25.4613 33.4992 25.1346 36.6021" />
                <path d="M23.4198 34.6428C23.4198 34.6428 24.6447 34.3979 25.5429 35.2144" />
                <path d="M23.0116 21.6592C23.0116 21.6592 26.7678 20.9243 27.5027 18.0663C29.7075 18.3113 30.9323 17.0864 30.9323 17.0864" />
                <path d="M28.6459 13.9839C28.6459 13.9839 27.3394 16.3519 28.9725 18.0667" />
                <path d="M24.4813 12.3506C24.4813 12.3506 26.0328 14.637 24.8896 17.6583" />
                <path d="M23.4198 16.7594C23.4198 16.7594 24.1547 15.9429 25.2979 15.9429" />
                <path d="M20.7251 23.211C17.7038 18.6382 13.9476 20.598 13.2943 21.0063C12.5594 20.5163 10.3547 17.985 7.25171 19.9448" />
                <path d="M7.98669 32.0297C7.98669 32.0297 8.63995 28.5185 12.8861 30.0699C15.2542 24.109 20.0719 27.2936 20.0719 27.2936" />
                <path d="M15.0908 12.105C15.0908 12.105 14.8458 16.2695 12.1511 16.5961" />
                <path d="M15.7441 18.1484C15.7441 18.1484 15.9891 16.4336 14.356 15.0454" />
                <path d="M14.6826 32.8462C14.6826 32.8462 13.7844 35.2142 15.2542 37.174" />
                <path d="M11.8246 34.153C11.8246 34.153 13.2944 33.5814 14.4376 34.5613" />
                <path d="M7.17004 26.5586C7.17004 26.5586 9.86473 27.0485 9.86473 29.8249" />
                <path d="M9.9464 25.1699C9.9464 25.1699 8.63989 26.0681 8.63989 27.1297" />
                <path d="M15.7441 23.3745C15.7441 23.3745 14.6826 24.926 15.4175 26.8858" />
                <path d="M12.9678 23.9453C12.9678 23.9453 13.621 25.4151 15.0909 25.1702" />
                <path d="M16.8057 28.8447C16.8057 28.8447 17.3772 29.6613 16.6423 30.8045" />
                <path d="M19.6636 16.5146C19.6636 16.5146 21.6234 22.4756 20.5618 26.3135C19.7453 29.1715 19.2553 30.3963 19.5003 32.5194" />
            </g>
            <g class="${this.container.substr(1)}-inner-mask" stroke="${
      this.hover
    }" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.5619 19.8623C20.5619 19.8623 23.5832 19.8623 23.5015 24.1901C25.7879 24.5984 26.4412 26.8032 26.4412 26.8032" />
                <path d="M30.034 22.7202C28.7275 24.0267 28.3192 26.3948 28.3192 26.3948C28.3192 26.3948 24.9713 26.3131 24.3181 29.4161C22.0317 29.8244 21.1334 31.4575 21.1334 31.4575" />
                <path d="M19.9086 28.6819C21.8683 28.3553 22.7666 29.9068 22.7666 29.9068C22.7666 29.9068 25.4613 28.3553 26.9311 31.1316C29.7074 28.8452 31.6672 32.0298 31.6672 32.0298" />
                <path d="M28.8909 24.5168C28.8909 24.5168 27.0128 24.0268 26.9312 22.312" />
                <path d="M30.6057 26.0688C30.6057 26.0688 31.3406 28.4369 33.1371 29.0085" />
                <path d="M33.627 26.9674C33.627 26.9674 32.7288 26.7224 31.5039 27.8656" />
                <path d="M28.5642 33.8258C28.5642 33.8258 25.4613 33.4992 25.1346 36.6021" />
                <path d="M23.4198 34.6428C23.4198 34.6428 24.6447 34.3979 25.5429 35.2144" />
                <path d="M23.0116 21.6592C23.0116 21.6592 26.7678 20.9243 27.5027 18.0663C29.7075 18.3113 30.9323 17.0864 30.9323 17.0864" />
                <path d="M28.6459 13.9839C28.6459 13.9839 27.3394 16.3519 28.9725 18.0667" />
                <path d="M24.4813 12.3506C24.4813 12.3506 26.0328 14.637 24.8896 17.6583" />
                <path d="M23.4198 16.7594C23.4198 16.7594 24.1547 15.9429 25.2979 15.9429" />
                <path d="M20.7251 23.211C17.7038 18.6382 13.9476 20.598 13.2943 21.0063C12.5594 20.5163 10.3547 17.985 7.25171 19.9448" />
                <path d="M7.98669 32.0297C7.98669 32.0297 8.63995 28.5185 12.8861 30.0699C15.2542 24.109 20.0719 27.2936 20.0719 27.2936" />
                <path d="M15.0908 12.105C15.0908 12.105 14.8458 16.2695 12.1511 16.5961" />
                <path d="M15.7441 18.1484C15.7441 18.1484 15.9891 16.4336 14.356 15.0454" />
                <path d="M14.6826 32.8462C14.6826 32.8462 13.7844 35.2142 15.2542 37.174" />
                <path d="M11.8246 34.153C11.8246 34.153 13.2944 33.5814 14.4376 34.5613" />
                <path d="M7.17004 26.5586C7.17004 26.5586 9.86473 27.0485 9.86473 29.8249" />
                <path d="M9.9464 25.1699C9.9464 25.1699 8.63989 26.0681 8.63989 27.1297" />
                <path d="M15.7441 23.3745C15.7441 23.3745 14.6826 24.926 15.4175 26.8858" />
                <path d="M12.9678 23.9453C12.9678 23.9453 13.621 25.4151 15.0909 25.1702" />
                <path d="M16.8057 28.8447C16.8057 28.8447 17.3772 29.6613 16.6423 30.8045" />
                <path d="M19.6636 16.5146C19.6636 16.5146 21.6234 22.4756 20.5618 26.3135C19.7453 29.1715 19.2553 30.3963 19.5003 32.5194" />
            </g>
            <path class="${this.container.substr(
              1
            )}-title" d="M91.9301 9.24707H104.505M47.427 29.3347V9.24707L62.5336 29.3347V9.24707M85.9691 9.24707V21.9856C85.9691 26.0684 82.7028 29.3347 78.62 29.3347H78.375C74.2922 29.3347 71.0259 26.0684 71.0259 21.9856V9.24707M98.2177 9.24707V29.3347M119.122 10.3086C109.895 6.38907 107.853 14.6364 111.364 17.0045C112.998 18.066 115.774 18.7193 117.815 19.7808C118.55 20.1075 120.673 21.3323 120.673 24.027C120.673 27.8649 115.039 31.4578 109.568 27.8649" stroke="${
      this.color
    }" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path class="${this.container.substr(
              1
            )}-title-mask" d="M91.9301 9.24707H104.505M47.427 29.3347V9.24707L62.5336 29.3347V9.24707M85.9691 9.24707V21.9856C85.9691 26.0684 82.7028 29.3347 78.62 29.3347H78.375C74.2922 29.3347 71.0259 26.0684 71.0259 21.9856V9.24707M98.2177 9.24707V29.3347M119.122 10.3086C109.895 6.38907 107.853 14.6364 111.364 17.0045C112.998 18.066 115.774 18.7193 117.815 19.7808C118.55 20.1075 120.673 21.3323 120.673 24.027C120.673 27.8649 115.039 31.4578 109.568 27.8649" stroke="${
      this.hover
    }" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <g class="${this.container.substr(1)}-text" stroke="${
      this.color
    }" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round">
                <path d="M68.7395 35.2959H65.9631" />
                <path d="M101.647 35.2959H99.6875" />
                <path d="M52.4897 35.2962V40.1139M63.0235 35.2962V40.1139M77.5584 35.2962V40.1139L79.5182 40.1143M67.3513 35.2962V40.1139M119.448 37.4189V40.1136M117.897 35.2962L119.448 37.6642L121 35.2962M99.6875 35.2962V40.1139L101.647 40.1143M104.914 40.1139V35.2962L108.67 40.1139L108.67 35.2962M101.647 37.5824H99.6875M70.6176 40.1139L72.5773 35.2962L74.6187 40.1139M71.1892 38.7259H74.0472M85.8058 40.1139L87.7655 35.2962L89.7253 40.1139M86.2957 38.7259H89.1537M58.2057 37.5829H59.9205V38.0728C59.9205 39.216 59.0223 40.1959 57.8791 40.1959C56.7359 40.1959 55.8376 39.216 55.8376 38.0728V37.3379C55.8376 36.1947 56.7359 35.2148 57.8791 35.2148C58.4507 35.2148 58.8589 35.4598 59.2672 35.7864M94.7881 37.5829H96.5028V38.0728C96.5028 39.216 95.6046 40.1959 94.4614 40.1959C93.3182 40.1959 92.42 39.216 92.42 38.0728V37.3379C92.42 36.1947 93.3182 35.2148 94.4614 35.2148C95.033 35.2148 95.4413 35.4598 95.8496 35.7864M115.202 39.8687C114.876 40.032 114.467 40.1953 114.059 40.1953C112.834 40.1953 111.854 39.2154 111.854 37.9905V37.5823C111.854 36.3574 112.834 35.3775 114.059 35.3775C114.386 35.3775 114.794 35.4592 115.039 35.6225M47.182 40.1139H45.7938V35.2962H47.182C48.3252 35.2962 49.2234 36.1944 49.2234 37.3376V38.0725C49.1418 39.2157 48.2435 40.1139 47.182 40.1139Z" />
            </g>
            <g class="${this.container.substr(1)}-text-mask" stroke="${
      this.hover
    }" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round">
                <path d="M68.7395 35.2959H65.9631" />
                <path d="M101.647 35.2959H99.6875" />
                <path d="M52.4897 35.2962V40.1139M63.0235 35.2962V40.1139M77.5584 35.2962V40.1139L79.5182 40.1143M67.3513 35.2962V40.1139M119.448 37.4189V40.1136M117.897 35.2962L119.448 37.6642L121 35.2962M99.6875 35.2962V40.1139L101.647 40.1143M104.914 40.1139V35.2962L108.67 40.1139L108.67 35.2962M101.647 37.5824H99.6875M70.6176 40.1139L72.5773 35.2962L74.6187 40.1139M71.1892 38.7259H74.0472M85.8058 40.1139L87.7655 35.2962L89.7253 40.1139M86.2957 38.7259H89.1537M58.2057 37.5829H59.9205V38.0728C59.9205 39.216 59.0223 40.1959 57.8791 40.1959C56.7359 40.1959 55.8376 39.216 55.8376 38.0728V37.3379C55.8376 36.1947 56.7359 35.2148 57.8791 35.2148C58.4507 35.2148 58.8589 35.4598 59.2672 35.7864M94.7881 37.5829H96.5028V38.0728C96.5028 39.216 95.6046 40.1959 94.4614 40.1959C93.3182 40.1959 92.42 39.216 92.42 38.0728V37.3379C92.42 36.1947 93.3182 35.2148 94.4614 35.2148C95.033 35.2148 95.4413 35.4598 95.8496 35.7864M115.202 39.8687C114.876 40.032 114.467 40.1953 114.059 40.1953C112.834 40.1953 111.854 39.2154 111.854 37.9905V37.5823C111.854 36.3574 112.834 35.3775 114.059 35.3775C114.386 35.3775 114.794 35.4592 115.039 35.6225M47.182 40.1139H45.7938V35.2962H47.182C48.3252 35.2962 49.2234 36.1944 49.2234 37.3376V38.0725C49.1418 39.2157 48.2435 40.1139 47.182 40.1139Z" />
            </g>
        </svg>
      
        </a>
       
        <style>
        #${this.container.substr(1)} {
            display: -webkit-inline-box;
            display: -ms-inline-flexbox;
            display: inline-flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            text-decoration: none;
          }
          #${this.container.substr(1)}:hover .nuts-border {
            -webkit-animation: nuts-border  ${
              this.transition
            }s ease-out forwards;
                    animation: nuts-border  ${
                      this.transition
                    }s ease-out forwards;
          }
          
          #${this.container.substr(1)}:hover .nuts-border-mask {
            -webkit-animation: nuts-border-mask ${
              this.transition
            }s ease-out forwards;
                    animation: nuts-border-mask ${
                      this.transition
                    }s ease-out forwards;
          }
          
          #${this.container.substr(1)}:hover .nuts-wrapper {
            -webkit-animation: nuts-wrapper ${
              this.transition
            }s ease-out forwards;
                    animation: nuts-wrapper ${
                      this.transition
                    }s ease-out forwards;
          }
          
          #${this.container.substr(1)}:hover .nuts-wrapper-mask {
            -webkit-animation: nuts-wrapper-mask ${
              this.transition
            }s ease-out forwards;
                    animation: nuts-wrapper-mask ${
                      this.transition
                    }s ease-out forwards;
          }
          
          #${this.container.substr(1)}:hover .nuts-inner {
            -webkit-animation: nuts-inner ${
              this.transition
            }s 0.2s ease-out forwards;
                    animation: nuts-inner ${
                      this.transition
                    }s 0.2s ease-out forwards;
          }
          
          #${this.container.substr(1)}:hover .nuts-inner-mask {
            -webkit-animation: nuts-inner-mask ${
              this.transition
            }s 0.2s ease-out forwards;
                    animation: nuts-inner-mask ${
                      this.transition
                    }s 0.2s ease-out forwards;
          }
          
          .nuts-subtitle{
            color: ${this.color};
            font-size: 14px;
            line-height: 22px;
            font-family: 'Roboto', sans-serif;
            margin-right: 20px;
          }
          
          .nuts-border {
            stroke-dasharray: 65;
            stroke-dashoffset: 0;
          }
          
          .nuts-border-mask {
            stroke-dasharray: 65;
            stroke-dashoffset: 65;
          }
          
          .nuts-wrapper {
            stroke-dasharray: 65;
            stroke-dashoffset: 0;
          }
          
          .nuts-wrapper-mask {
            stroke-dasharray: 65;
            stroke-dashoffset: 65;
          }
          
          .nuts-inner, .nuts-text {
            stroke-dasharray: 35;
            stroke-dashoffset: 0;
          }
          
          .nuts-inner-mask, .nuts-text-mask {
            stroke-dasharray: 35;
            stroke-dashoffset: 35;
          }
          
          .nuts-title {
            stroke-dasharray: 66;
            stroke-dashoffset: 0;
          }
          
          .nuts-title-mask {
            stroke-dasharray: 66;
            stroke-dashoffset: 66;
          }
          
          @-webkit-keyframes nuts-border {
            0% {
              stroke-dashoffset: 0;
            }
            100% {
              stroke-dashoffset: 65;
            }
          }
          
          @keyframes nuts-border {
            0% {
              stroke-dashoffset: 0;
            }
            100% {
              stroke-dashoffset: 65;
            }
          }
          
          @-webkit-keyframes nuts-border-mask {
            0% {
              stroke-dashoffset: 65;
            }
            100% {
              stroke-dashoffset: 130;
            }
          }
          
          @keyframes nuts-border-mask {
            0% {
              stroke-dashoffset: 65;
            }
            100% {
              stroke-dashoffset: 130;
            }
          }
          
          @-webkit-keyframes nuts-wrapper {
            0% {
              stroke-dashoffset: 0;
            }
            100% {
              stroke-dashoffset: -65;
            }
          }
          
          @keyframes nuts-wrapper {
            0% {
              stroke-dashoffset: 0;
            }
            100% {
              stroke-dashoffset: -65;
            }
          }
          
          @-webkit-keyframes nuts-wrapper-mask {
            0% {
              stroke-dashoffset: -65;
            }
            100% {
              stroke-dashoffset: -130;
            }
          }
          
          @keyframes nuts-wrapper-mask {
            0% {
              stroke-dashoffset: -65;
            }
            100% {
              stroke-dashoffset: -130;
            }
          }
          
          @-webkit-keyframes nuts-inner {
            0% {
              stroke-dashoffset: 0;
            }
            100% {
              stroke-dashoffset: 35;
            }
          }
          
          @keyframes nuts-inner {
            0% {
              stroke-dashoffset: 0;
            }
            100% {
              stroke-dashoffset: 35;
            }
          }
          
          @-webkit-keyframes nuts-inner-mask {
            0% {
              stroke-dashoffset: 35;
            }
            100% {
              stroke-dashoffset: 0;
            }
          }
          
          @keyframes nuts-inner-mask {
            0% {
              stroke-dashoffset: 35;
            }
            100% {
              stroke-dashoffset: 0;
            }
          }
          
          @-webkit-keyframes nuts-title {
            0% {
              stroke-dashoffset: 0;
            }
            100% {
              stroke-dashoffset: 66;
            }
          }
          
          @keyframes nuts-title {
            0% {
              stroke-dashoffset: 0;
            }
            100% {
              stroke-dashoffset: 66;
            }
          }
          
          @-webkit-keyframes nuts-title-mask {
            0% {
              stroke-dashoffset: 66;
            }
            100% {
              stroke-dashoffset: 132;
            }
          }
          
          @keyframes nuts-title-mask {
            0% {
              stroke-dashoffset: 66;
            }
            100% {
              stroke-dashoffset: 132;
            }s
          }
        </style>`;
    if (this.lettersAnimation) {
      const lettersStyle = `
            <style>
            #${this.container.substr(1)}:hover .nuts-title {
                -webkit-animation: nuts-title ${
                  this.transition + 0.5
                }s ease-out forwards;
                        animation: nuts-title ${
                          this.transition + 0.5
                        }s ease-out forwards;
              }
              
              #${this.container.substr(1)}:hover .nuts-title-mask {
                -webkit-animation: nuts-title-mask ${
                  this.transition + 0.5
                }s ease-out forwards;
                        animation: nuts-title-mask ${
                          this.transition + 0.5
                        }s ease-out forwards;
              }
              
              #${this.container.substr(1)}:hover .nuts-text {
                -webkit-animation: nuts-inner ${
                  this.transition + 0.5
                }s 0.5s ease-out forwards;
                        animation: nuts-inner ${
                          this.transition + 0.5
                        }s 0.5s ease-out forwards;
              }
              
              #${this.container.substr(1)}:hover .nuts-text-mask {
                -webkit-animation: nuts-inner-mask ${
                  this.transition + 0.5
                }s 0.5s ease-out forwards;
                        animation: nuts-inner-mask ${
                          this.transition + 0.5
                        }s 0.5s ease-out forwards;
              }
            </style>
            `;
      document
        .querySelector(`${this.container}`)
        .insertAdjacentHTML("afterend", lettersStyle);
    }

    document
      .querySelector(`${this.container}`)
      .insertAdjacentHTML("afterend", nutsSVG);
    document.querySelector(`${this.container}`).remove();
  }
}
