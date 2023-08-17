export const getDeviceType = () =>{
    let isMobile = false;
    if (window.innerWidth >= 992) isMobile = false;
    else if (window.innerWidth <= 991) isMobile = true;
    return isMobile;
}
