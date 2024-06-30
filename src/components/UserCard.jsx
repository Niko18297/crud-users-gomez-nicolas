import React from 'react';
import './styles/userCard.css';

const UserCard = ({user, deleteUser, setUpdate, setIsShow}) => {
 
 const handleDelete = () => {
    deleteUser('/users', user.id);
 }
     
 const handleEdit = () => {
     setUpdate(user);
     setIsShow(true);
 }
 
    return (
    <article className='usercard'>
        <h2 className='usercard__name'>{user.first_name} {user.last_name}</h2>
        <hr />
        <ul className='usercard__list'>
            <li className='usercard__item'><span>Email: </span><span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAUlJREFUSEvd1T8ohWEUx/GPJIPBZJBSMmCwW2xGpbBSNmVSBhbJRCmTsilWfxaZbBYzA5OQMpgMBsmfe/S8um73ute93eWe5an3vM/5nt/vvM/zNqlzNNW5vsYCjGEN/TXadoUFnESdfIse0FVj8Wz7DXoLAZ8pO4DrKkGhPhT81M5XkAFeMI3Df0LGsYu2coCs7gYW8V4G1JxmF77nx3fzxRTMYButOMMEnkpAOnCAYbxiFjvlFAR0EMfoxiNC/nkBZCjZ2Il7jOaauURmdUkFmap27GMEb5jHVoLMYRMtOMVkLv+cchUDMgtXsJw276V1Kq2RW83rOh7/C5C5EipCTaiKiG6j6+i+MKoCRJEeHOXUfKSZ3JYYfNWASo9FAwPu0ndfqRV/vRfziZn9OslxXa+jr0bCRe5ULxW7rmusW3x7Y/0y62LRF2qEQhkl8rgIAAAAAElFTkSuQmCC"/>{user.email}</span></li>
        <li className='usercard__item'><span>Birthday: </span><span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAT9JREFUSEvt1r0uBFEcBfDfVhKiUEuIKOgVVAoRDYmGF1AqVApqBR5AKZ5AIpFIFKKg0BEF0QihVVD4qNgrd2V2dnZidrIVt5q5d845/69zMxVtXpU288sTmMcqhnCORVzGgPqxjTHcYA17WcE2E5jBfgrwXN0bwRMuEESSaxJHaZFmAmcYxQq2qmQ7mEPYv8ICTjGNpZjBCcZ/K/CODnTiDT24R3ck+MAw7uLeC17R9VuBR/RiAscRtB4zCq+7MaPwPIVDPKAvT2AWGzGyMsN1jWUcBJJkD2pRlyGvYW8xmBb4jKd5o1v4myRZYXCTVOt4kgJhShqa1GK9wnQNpEsUmrwZndsi7zcsuD3cAA1NrpHmlarwWVZDC5PEyDJx/wLJYfhDJSpjuB+D1WqXNUWtGq7OYHkCZVzcgG37X8UXUBtKGclaL+gAAAAASUVORK5CYII="/>{user.birthday}</span></li>
        </ul>
        <hr />
        <div className='usercard__buttons'>
            <button className='usercard__delete' onClick={handleDelete}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALFJREFUSEvtlVEKAjEMRGfuIgjudTyOn4KX8ToueJosFQt1t83U1uLP7l9JkzeT0A0x+OPg+nABZnYGcAVwLAh5AriQvJeEKsADwEm4nElOrQALiSSzQszMjb9yPXWqgIpvADGhd/Cp4w8HwwFReY311KV3v3l4PwWsFapzCq9yoAp2t2gHbN7Vty3ZZyB/Td0tUoQWQM2iWXOzi6f0ksOqvAE4KPXveHF1/nfpV6p3ry3epM4ZCBVpxgAAAABJRU5ErkJggg=="/></button>
            <button className='usercard__edit' onClick={handleEdit}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAYxJREFUSEvVlbtKBEEQRc9VTI0EQcUXiA/YwMRAxcdXbOIP+ANmgrm5fyD4GSpqriAivgMVcSMxL6eWHtHZmd3pXTewk4EOzq17q7pGdPmoy3w6FjCz/qTIHaAX2Jb08bPojgTMbAA4AaYD9AZYk/SSirQtEOBHwBzwEIATwD0wnzppSyBTeb3qIHAITAFbknb9LlqgKJY/EQjwY2AWeAQMSGPpAcbDfUXSZ5SDTOVPwFIQSGNxXv1e0nNUk/PgDim6jxpTMxsEfFp8FH1CVsrCW0YU4GfAZIAvSnrLiDbEUspBC3gq2hRe6CADvwZWQ+XDgE+RO2oJzxXIgS9LqpmZw0+BsbLwIoELoAJcJs1dl/RuZiOh0V75XXD0PYrNNvKvl2xmM8AVUPPHFCr3x+NTNArchmVWCt7gwMw2gb1kn+xL2jAzj8Nj8Xh8ROtTFPMPyTo4SBxUQyN9vy8AfYAvNG/0aww8z4FbH8pAvHJvdDQ8T8Dj8EXmmfuO8e+5JF9qbZ3odR2r8v8FvgB7ELIZb7DLQwAAAABJRU5ErkJggg=="/></button>
        </div>
    </article>
  )
}

export default UserCard;
