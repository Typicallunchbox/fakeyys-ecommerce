export const getDeviceType = () =>{
    let isMobile = false;
    if (window.innerWidth >= 992) isMobile = false;
    else if (window.innerWidth <= 991) isMobile = true;
    return isMobile;
}

export const getDeviceTypeEventListner = () => {

    return window.addEventListener("resize", function(){
        let isMobile = false;
        if (window.innerWidth >= 992) isMobile = false;
        else if (window.innerWidth <= 991) isMobile = true;
        return isMobile;

	});

}