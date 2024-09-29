export default function getTotalHeight(){
    const testSection = document.getElementById("test");
    const canvaSection = document.getElementById("canva");
    let totalHeight = 0;
    if (testSection && canvaSection) {
        totalHeight = canvaSection.offsetHeight + testSection.offsetHeight;
        
        const children = document.querySelectorAll('#skills .skill-panel');
        
        if(totalHeight > 0 ){
            children.forEach((child) => {
                child.style.transform = `translateY(${-totalHeight}vh)`
            })
        }
    } else {
        console.error("Element non trouvé");
    }
}