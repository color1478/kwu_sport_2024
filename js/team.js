const updateMajorLinks = () => {
    document.querySelectorAll('a.major').forEach(row => {
        const nameElement = row.querySelector('p');
        const majorName = nameElement.textContent.trim();
        const imgElement = row.querySelector('img');
        imgElement.src = `../image/major/${majorName}@4x.png`;
    });

    document.querySelectorAll('.contain').forEach(container => {
        const collegeName = container.querySelector('h1').textContent.trim();
        
        container.querySelectorAll('a.major').forEach(majorLink => {
            const majorName = majorLink.querySelector('p').textContent.trim();
            const imgElement = majorLink.querySelector('img');

            imgElement.src = `../image/major/${majorName}@4x.png`;
            majorLink.href = `./teams/${collegeName}/${majorName}.html`;
        });
    });
};

updateMajorLinks();
