const path = require('path');

const db_file_path = path.join(__dirname, '../DataBase/VideoJuegos.json');


const ObtenerTodosLosVideoJuegos = () =>
    {
        try
        {
            let infoJuego = require(db_file_path);
            return infoJuego.VideoJuegos;
        }
        catch(error)
        {
            return error;
        }
    
}
module.exports = 
{
    ObtenerTodosLosVideoJuegos
}