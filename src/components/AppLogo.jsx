import React from 'react'

const AppLogo = ({ className }) => {

    const LogoSvg = () => (
        <svg width="47" height="43" viewBox="0 0 47 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.1079 19.9878C18.9568 21.308 19.1872 22.6884 20.1954 23.9484C20.7656 24.6592 20.32 26.096 19.5459 26.7204C18.6962 27.4087 17.5105 27.3861 16.6193 26.6677C15.8792 26.0697 15.5129 24.6781 16.1548 23.8732C17.2801 22.4552 17.2424 20.868 17.2348 19.2356C17.2273 18.0057 17.0385 16.8623 16.3172 15.8054C15.6639 14.8463 15.7508 13.5674 16.355 12.928C17.0158 12.2285 18.2016 11.9689 19.1116 12.5331C19.6214 12.8491 20.1501 13.4471 20.2785 14.0075C20.6108 15.4631 21.3207 16.5877 22.4272 17.5694C23.5072 18.5285 24.4701 19.623 25.4859 20.6573C25.739 20.9168 25.9655 21.2365 26.2714 21.3983C26.7019 21.6277 27.1966 21.7368 27.6611 21.8985C27.7253 21.4735 27.8386 21.0485 27.8499 20.6197C27.8688 19.9577 27.899 19.2845 27.7781 18.6413C27.6271 17.8364 27.3476 17.0541 27.0871 16.2755C27.004 16.0273 26.7925 15.8204 26.6641 15.5835C26.0486 14.4626 26.177 13.5148 27.0267 12.819C27.9254 12.0855 29.3226 12.0592 30.1383 12.755C30.9653 13.4621 31.1012 14.5491 30.5121 15.6286C29.0243 18.3442 28.9035 21.0447 30.5537 23.7528C31.2447 24.8849 30.7878 26.4947 29.6738 27.025C28.5145 27.5779 26.7472 26.9498 26.498 25.6522C26.0599 23.4068 24.625 21.9474 23.0503 20.5106C22.1175 19.6568 21.2792 18.6977 20.3465 17.8402C20.101 17.6107 19.6743 17.5769 19.3307 17.4565C19.2287 17.7838 19.0663 18.1035 19.0399 18.4344C19.0021 18.882 19.0701 19.3371 19.1041 19.9878H19.1079ZM13.2131 27.6193C11.8763 27.6419 10.7623 28.6536 10.7963 29.8159C10.8341 31.1022 11.9367 32.1704 13.2093 32.1478C14.497 32.1252 15.3505 31.2037 15.3429 29.846C15.3354 28.3791 14.5801 27.593 13.2169 27.6156L13.2131 27.6193ZM33.5407 27.6381C32.3172 27.6193 31.2712 28.6461 31.2787 29.861C31.2863 31.0872 32.3927 32.1929 33.5973 32.1741C34.8246 32.1591 35.7914 31.1549 35.7951 29.8911C35.8027 28.4844 34.9757 27.6607 33.5407 27.6381ZM21.1735 34.0209C21.147 35.3298 22.1289 36.4055 23.3675 36.4205C24.5457 36.4356 25.6823 35.3223 25.7201 34.1149C25.7616 32.8474 24.7685 31.9033 23.3864 31.8845C22.1289 31.8695 21.1999 32.7646 21.1735 34.0209ZM37.7512 17.3625C36.607 17.3776 35.5686 18.4833 35.5648 19.6945C35.5648 20.9695 36.5239 21.891 37.8343 21.8647C39.2277 21.8383 40.0472 20.9808 40.0472 19.5478C40.0472 18.363 38.9785 17.3437 37.7512 17.3587V17.3625ZM25.7201 5.15739C25.7087 4.09673 24.5759 3.05863 23.4128 3.04359C22.1855 3.02854 21.1923 4.01774 21.1848 5.27022C21.1772 6.68444 22.0156 7.53071 23.4203 7.52695C24.7496 7.52695 25.7352 6.51142 25.7239 5.15739H25.7201ZM15.3694 9.51663C15.3543 8.22277 14.4102 7.26742 13.1602 7.27495C12.0009 7.28247 10.7925 8.39955 10.8076 9.45269C10.8227 10.7052 11.8612 11.7019 13.1527 11.7056C14.4857 11.7132 15.3882 10.818 15.3731 9.51287L15.3694 9.51663ZM33.5407 7.26366C32.3889 7.25238 31.2674 8.38074 31.2901 9.52415C31.3165 10.8105 32.2794 11.747 33.552 11.7282C34.9643 11.7056 35.8367 10.8406 35.8329 9.46773C35.8291 8.24158 34.8246 7.27495 33.5445 7.26366H33.5407ZM11.1588 19.6268C11.1173 18.3968 10.1279 17.3663 9.01015 17.3888C7.67713 17.4152 6.59712 18.5322 6.64243 19.8374C6.68397 20.9808 7.78286 21.8948 9.08945 21.8722C10.3016 21.8534 11.2042 20.8792 11.1588 19.6268ZM16.9516 1.68955C16.9818 0.831997 16.2492 0.0233375 15.426 0.000770224C14.4593 -0.0255582 13.8173 0.625131 13.7984 1.64066C13.7833 2.57344 14.3233 3.09248 15.3354 3.11129C16.3096 3.1301 16.9214 2.59224 16.9516 1.68955ZM43.1022 27.7209C43.1022 26.8558 42.3545 26.0998 41.5086 26.1036C40.5532 26.1073 39.9566 26.7204 39.9566 27.7021C39.9566 28.6198 40.5268 29.1539 41.5162 29.1614C42.4904 29.1689 43.106 28.6123 43.1022 27.7209ZM16.9365 37.7219C16.9441 36.9471 16.2455 36.3039 15.3807 36.2927C14.4933 36.2814 13.8211 36.9321 13.806 37.8084C13.7909 38.6998 14.3611 39.2527 15.2901 39.2527C16.2832 39.2527 16.9252 38.6547 16.9365 37.7219ZM29.9721 1.76478C29.9797 2.59224 30.4933 3.0812 31.3618 3.09248C32.3247 3.10001 32.9743 2.51326 32.9667 1.6369C32.9592 0.775579 32.2643 0.0571883 31.4335 0.0496659C30.565 0.0421435 29.9646 0.749251 29.9721 1.76854V1.76478ZM3.81024 27.8036C3.81402 28.6424 4.36913 29.1614 5.2641 29.1652C6.1704 29.1689 6.79726 28.6123 6.82369 27.7735C6.8539 26.9084 6.11753 26.1148 5.2792 26.1036C4.41822 26.096 3.80647 26.8031 3.81024 27.7999V27.8036ZM43.0946 11.6003C43.072 10.8707 42.3243 10.2463 41.4708 10.2388C40.5683 10.2313 39.9566 10.8519 39.9603 11.7696C39.9603 12.6309 40.5381 13.1387 41.501 13.1349C42.5093 13.1311 43.1248 12.5369 43.0946 11.6003ZM5.18102 10.2877C4.39556 10.3027 3.86689 10.8519 3.848 11.6793C3.82912 12.5519 4.41444 13.1086 5.33585 13.0898C6.18928 13.071 6.75194 12.5068 6.75194 11.6756C6.75194 10.9008 6.04201 10.2726 5.18102 10.2914V10.2877ZM32.8874 37.7257C32.8874 36.9885 32.2039 36.3641 31.3845 36.3491C30.5914 36.334 29.9835 36.9659 29.9835 37.8047C29.9835 38.6058 30.5839 39.1474 31.4789 39.1512C32.3285 39.1549 32.8912 38.587 32.8874 37.7257ZM39.3863 2.95708C39.1182 2.95708 38.8463 3.35953 38.5782 3.5852C38.8388 3.89362 39.0503 4.34496 39.3788 4.45404C39.5865 4.52174 39.9679 4.08544 40.5041 3.70932C39.983 3.33696 39.6884 2.96084 39.3863 2.95708ZM1.72952 19.5327C1.41232 19.3484 1.0649 18.9836 0.781685 19.0287C0.487137 19.0739 0.256785 19.5177 0 19.7847C0.268114 20.0104 0.532452 20.4091 0.804342 20.4128C1.11022 20.4166 1.42742 20.0706 1.73708 19.875C1.73708 19.7622 1.7333 19.6456 1.72952 19.5327ZM7.32216 34.965C7.07293 34.9537 6.79726 35.3674 6.5367 35.5968C6.79348 35.8676 7.01251 36.2776 7.32216 36.3641C7.55251 36.4281 7.89993 36.067 8.44748 35.7473C7.91881 35.3561 7.62804 34.98 7.32216 34.965ZM45.2471 19.7584C45.2282 19.9803 45.6436 20.2361 45.8626 20.4768C46.1421 20.221 46.5575 20.0104 46.6519 19.6982C46.7161 19.4838 46.3309 19.1378 45.9797 18.5924C45.6096 19.1453 45.2698 19.4387 45.2471 19.7584ZM39.4468 34.9085C39.1409 34.995 38.9332 35.4238 38.684 35.7059C38.9483 35.9353 39.2089 36.3378 39.4845 36.3491C39.7489 36.3604 40.0321 35.9654 40.5041 35.5931C40.0094 35.2546 39.662 34.8521 39.4468 34.9123V34.9085ZM23.3486 41.4342C23.0918 41.4493 22.6726 41.8743 22.6651 42.1301C22.6575 42.4084 23.0389 42.9312 23.2466 42.9312C23.5525 42.9312 23.8584 42.5551 24.3682 42.194C23.8886 41.8141 23.6054 41.4192 23.3448 41.4342H23.3486ZM6.59334 3.76198C6.56691 3.92747 7.09936 4.37882 7.29573 4.33368C7.62804 4.2547 7.8886 3.88986 8.17937 3.64162C7.95279 3.38586 7.73 3.12633 7.33726 2.67875C6.97852 3.16018 6.64243 3.43851 6.59334 3.75822V3.76198Z" fill="url(#paint0_linear_151_85)" />
            <defs>
                <linearGradient id="paint0_linear_151_85" x1="46.6589" y1="0" x2="-6.50733" y2="32.1802" gradientUnits="userSpaceOnUse">
                    <stop offset="0.0635146" stopColor="#FAC276" />
                    <stop offset="0.271514" stopColor="#D062B3" />
                    <stop offset="1" stopColor="#4C57CF" />
                </linearGradient>
            </defs>
        </svg>
    )

    return (
        <div className={`flex ${className} items-center gap-1`}>
            <LogoSvg />
            <h1 className='text-2xl text-black font-customFontIBM font-customMedium'>Neuralbay</h1>
        </div>
    )
}

export default AppLogo