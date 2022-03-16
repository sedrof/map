const { json } = require('express');
var express = require('express');

var router = express.Router();


const { MongoClient } = require('mongodb');

async function main() {
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb+srv://Mutlaq:Mutlaq@caliphatemapcluster.wouyb.mongodb.net/test?authSource=admin&replicaSet=atlas-zx85m4-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";

    /**
     * The Mongo Client you will use to interact with your database
     * See https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html for more details
     * In case: '[MONGODB DRIVER] Warning: Current Server Discovery and Monitoring engine is deprecated...'
     * pass option { useUnifiedTopology: true } to the MongoClient constructor.
     * const client =  new MongoClient(uri, {useUnifiedTopology: true})
     */
    const client = new MongoClient(uri, { useUnifiedTopology: true });

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        // await listDatabases(client);
        await fetchBooks(client);


    } catch (e) {
        console.error(e);
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

main().catch(console.error);


/**
 * A function that calls all the fetch functions to fetch all data one after the other with await. 
 */
async function fetchBooks(client) {
    fetchAhsan(client);
    fetchAlbuldan(client);
    fetchAthar(client);
    fetchFutoohAlBuldan(client);
    fetchKitabAlBuldan_AlYaqubi(client);
    fetchRihlatIbnBattuta(client);
    fetchRihlatIbnFadlan(client);
    fetchRihlatIbnYazidAlSirafi(client);
    fetchSuratAlArd(client);
    fetchTahqiqMaLilHind(client);
    //Routes
    fetchibnFaqihRoute(client);
    fetchabualkasimRoute(client);
    fetchibnyahyaRoute(client);
    fetchibnfadlanRoute(client);
    fetchabuarayhanRoute(client);
    fetchhassanRoute(client);
    fetchabuabdullahRoute(client);
    fetchibnAbiRoute(client);
    await fetchzakariyaRoute(client);
    await fetchalmuqaddasiRoute(client);
    // await fetchRoute(client);
}

/**
 * Functions to Fetch the books from MongoDB
 * Each function fetches the data for a specific book from the data base in MongoDB
 * Each function writes the data into json file in the views/data file with the book's name.
 * For example, the book Ahsan Taqasim, will be stored in a json file under the name AhsanTaqasim.json
 */
async function fetchAhsan(client) {
    // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOne for the findOne() docs
    // const result = await client.db("ExportTest").collection("mydb").find({});
    const result = await client.db("CaliphateMap").collection("AhsanTaqasim").find({});
    const results = await result.toArray();
    // console.log(results);

    const fs = require('fs')
    const jsonString = JSON.stringify(results);
    fs.writeFile('views/AhsanTaqasim.json', jsonString, err => {
        if (err) {
            console.log('Error writing AhsanTaqasim', err)
        } else {
            console.log('Successfully wrote AhsanTaqasim')
        }
    })
};

async function fetchAlbuldan(client) {
    // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOne for the findOne() docs
    // const result = await client.db("ExportTest").collection("mydb").find({});
    const result = await client.db("CaliphateMap").collection("AlBuldan_IbnFaqih").find({});
    const results = await result.toArray();
    // console.log(results);

    const fs = require('fs')
    const jsonString = JSON.stringify(results);
    fs.writeFile('views/data/AlBuldan_IbnFaqih.json', jsonString, err => {
        if (err) {
            console.log('Error writing AlBuldan_IbnFaqih ', err)
        } else {
            console.log('Successfully wrote AlBuldan_IbnFaqih')
        }
    })
};

async function fetchAthar(client) {
    // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOne for the findOne() docs
    // const result = await client.db("ExportTest").collection("mydb").find({});
    const result = await client.db("CaliphateMap").collection("AtharBiladZakariyaQazwini").find({});
    const results = await result.toArray();
    // console.log(results);

    const fs = require('fs')
    const jsonString = JSON.stringify(results);
    fs.writeFile('views/data/AtharBiladZakariyaQazwini.json', jsonString, err => {
        if (err) {
            console.log('Error writing AtharBiladZakariyaQazwini ', err)
        } else {
            console.log('Successfully wrote AtharBiladZakariyaQazwini')
        }
    })
};

async function fetchFutoohAlBuldan(client) {
    // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOne for the findOne() docs
    // const result = await client.db("ExportTest").collection("mydb").find({});
    const result = await client.db("CaliphateMap").collection("FutoohAlBuldan").find({});
    const results = await result.toArray();
    // console.log(results);

    const fs = require('fs')
    const jsonString = JSON.stringify(results);
    fs.writeFile('views/data/FutoohAlBuldan.json', jsonString, err => {
        if (err) {
            console.log('Error writing FutoohAlBuldan ', err)
        } else {
            console.log('Successfully wrote FutoohAlBuldan')
        }
    })
};

async function fetchKitabAlBuldan_AlYaqubi(client) {
    // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOne for the findOne() docs
    // const result = await client.db("ExportTest").collection("mydb").find({});
    const result = await client.db("CaliphateMap").collection("KitabAlBuldan_AlYaqubi").find({});
    const results = await result.toArray();
    // console.log(results);

    const fs = require('fs')
    const jsonString = JSON.stringify(results);
    fs.writeFile('views/data/KitabAlBuldan_AlYaqubi.json', jsonString, err => {
        if (err) {
            console.log('Error writing KitabAlBuldan_AlYaqubi ', err)
        } else {
            console.log('Successfully wrote KitabAlBuldan_AlYaqubi')
        }
    })
};

async function fetchRihlatIbnBattuta(client) {
    // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOne for the findOne() docs
    // const result = await client.db("ExportTest").collection("mydb").find({});
    const result = await client.db("CaliphateMap").collection("RihlatIbnBattuta").find({});
    const results = await result.toArray();
    // console.log(results);

    const fs = require('fs')
    const jsonString = JSON.stringify(results);
    fs.writeFile('views/data/RihlatIbnBattuta.json', jsonString, err => {
        if (err) {
            console.log('Error writing RihlatIbnBattuta ', err)
        } else {
            console.log('Successfully wrote RihlatIbnBattuta')
        }
    })
};

async function fetchRihlatIbnFadlan(client) {
    // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOne for the findOne() docs
    // const result = await client.db("ExportTest").collection("mydb").find({});
    const result = await client.db("CaliphateMap").collection("RihlatIbnFadlan").find({});
    const results = await result.toArray();
    // console.log(results);

    const fs = require('fs')
    const jsonString = JSON.stringify(results);
    fs.writeFile('views/data/RihlatIbnFadlan.json', jsonString, err => {
        if (err) {
            console.log('Error writing RihlatIbnFadlan ', err)
        } else {
            console.log('Successfully wrote RihlatIbnFadlan')
        }
    })
};

async function fetchRihlatIbnYazidAlSirafi(client) {
    // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOne for the findOne() docs
    // const result = await client.db("ExportTest").collection("mydb").find({});
    const result = await client.db("CaliphateMap").collection("RihlatIbnYazidAlSirafi").find({});
    const results = await result.toArray();
    // console.log(results);

    const fs = require('fs')
    const jsonString = JSON.stringify(results);
    fs.writeFile('views/data/RihlatIbnYazidAlSirafi.json', jsonString, err => {
        if (err) {
            console.log('Error writing RihlatIbnYazidAlSirafi ', err)
        } else {
            console.log('Successfully wrote RihlatIbnYazidAlSirafi')
        }
    })
};

async function fetchSuratAlArd(client) {
    // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOne for the findOne() docs
    // const result = await client.db("ExportTest").collection("mydb").find({});
    const result = await client.db("CaliphateMap").collection("SuratAlArd").find({});
    const results = await result.toArray();
    // console.log(results);

    const fs = require('fs')
    const jsonString = JSON.stringify(results);
    fs.writeFile('views/data/SuratAlArd.json', jsonString, err => {
        if (err) {
            console.log('Error writing SuratAlArd ', err)
        } else {
            console.log('Successfully wrote SuratAlArd')
        }
    })
};

async function fetchTahqiqMaLilHind(client) {
    // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOne for the findOne() docs
    // const result = await client.db("ExportTest").collection("mydb").find({});
    const result = await client.db("CaliphateMap").collection("TahqiqMaLilHind").find({});
    const results = await result.toArray();
    // console.log(results);

    const fs = require('fs')
    const jsonString = JSON.stringify(results);
    fs.writeFile('views/data/TahqiqMaLilHind.json', jsonString, err => {
        if (err) {
            console.log('Error writing TahqiqMaLilHind ', err)
        } else {
            console.log('Successfully wrote TahqiqMaLilHind')
        }
    })
};

async function fetchAthar(client) {
    // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOne for the findOne() docs
    // const result = await client.db("ExportTest").collection("mydb").find({});
    const result = await client.db("CaliphateMap").collection("AtharAlBiladZakariyaAlQazwini").find({});
    const results = await result.toArray();
    // console.log(results);

    const fs = require('fs')
    const jsonString = JSON.stringify(results);
    fs.writeFile('views/data/athar.json', jsonString, err => {
        if (err) {
            console.log('Error writing Athar Albilad ', err)
        } else {
            console.log('Successfully wrote Athar Albilad')
        }
    })
};




//Author = "Ibn Faqih AlHamadhani"
//ibnFaqihRoute.js
async function fetchibnFaqihRoute(client) {
    // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOne for the findOne() docs
    // const result = await client.db("ExportTest").collection("mydb").find({});
    const result = await client.db("CaliphateMap").collection("Routes").find({ "properties.author": "Ibn Faqih AlHamadhani" });
    const results = await result.toArray();
    // console.log(results);

    const fs = require('fs')
    json0 = JSON.stringify(results);
    //remove [ from the beginning of the json object, to then add order 0.
    jsonfile = json0.substring(1);

    //Just a filler for order 0 (in the view slider), this can be ignored.
    const order0 = '[{"_id": {"$oid": "100ffd2d8f62aef9324366ae"},"type": "Feature","geometry": {"type": "LineString","coordinates": [[0,0],[0,0]]},"properties": {"fromarabic": "الدار البيضاء","fromhebrew": "אלבידאא","fromenglish": "albyDaa","toarabic": "نهر الزاب","tohebrew": "נחל אלזאב","toenglish": "alzab river","order": 0,"Book": "AlBuldan","author": "Ibn Faqih AlHamadhani"}},';
    const jsonString = "var IbnFaqih = " + order0 + jsonfile;

    fs.writeFile('public/js/ibnFaqihRoute.js', jsonString, err => {
        if (err) {
            console.log('Error writing ibnFaqihRoute ', err)
        } else {
            console.log('Successfully wrote ibnFaqihRoute')
        }
    })
};


//Author = "Abu AlKasim Ibn Haukal AlNasibi"
//abuAlKasimRoute.js
async function fetchabualkasimRoute(client) {
    // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOne for the findOne() docs
    // const result = await client.db("ExportTest").collection("mydb").find({});
    const result = await client.db("CaliphateMap").collection("Routes").find({ "properties.author": "Abu AlKasim Ibn Haukal AlNasibi" });
    const results = await result.toArray();
    // console.log(results);

    const fs = require('fs')
    json0 = JSON.stringify(results);
    //remove [ from the beginning of the json object, to then add order 0.
    jsonfile = json0.substring(1);

    //Just a filler for order 0 (in the view slider), this can be ignored.
    const order0 = '[{"_id": {"$oid": "100ffd2d8f62aef9324366ae"},"type": "Feature","geometry": {"type": "LineString","coordinates": [[0,0],[0,0]]},"properties": {"fromarabic": "الدار البيضاء","fromhebrew": "אלבידאא","fromenglish": "albyDaa","toarabic": "نهر الزاب","tohebrew": "נחל אלזאב","toenglish": "alzab river","order": 0,"Book": "AlBuldan","author": "Abu AlKasim Ibn Haukal AlNasibi"}},';
    const jsonString = "var abuAlKasim = " + order0 + jsonfile;

    fs.writeFile('public/js/abuAlKasimRoute.js', jsonString, err => {
        if (err) {
            console.log('Error writing abuAlkasimRoute ', err)
        } else {
            console.log('Successfully wrote abuAlkasimRoute')
        }
    })
};


//Author = "Aḥmad Ibn Yaḥyā Ibn Jabir AlBalādhurī"
//ibnYahyaRoute.js
async function fetchibnyahyaRoute(client) {
    // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOne for the findOne() docs
    // const result = await client.db("ExportTest").collection("mydb").find({});
    const result = await client.db("CaliphateMap").collection("Routes").find({ "properties.author": "Aḥmad Ibn Yaḥyā Ibn Jabir AlBalādhurī" });
    const results = await result.toArray();
    // console.log(results);

    const fs = require('fs')
    json0 = JSON.stringify(results);
    //remove [ from the beginning of the json object, to then add order 0.
    jsonfile = json0.substring(1);

    //Just a filler for order 0 (in the view slider), this can be ignored.
    const order0 = '[{"_id": {"$oid": "100ffd2d8f62aef9324366ae"},"type": "Feature","geometry": {"type": "LineString","coordinates": [[0,0],[0,0]]},"properties": {"fromarabic": "الدار البيضاء","fromhebrew": "אלבידאא","fromenglish": "albyDaa","toarabic": "نهر الزاب","tohebrew": "נחל אלזאב","toenglish": "alzab river","order": 0,"Book": "AlBuldan","author": "Aḥmad Ibn Yaḥyā Ibn Jabir AlBalādhurī"}},';
    const jsonString = "var ibnYahya = " + order0 + jsonfile;

    fs.writeFile('public/js/ibnYahyaRoute.js', jsonString, err => {
        if (err) {
            console.log('Error writing ibnYahyaRoute ', err)
        } else {
            console.log('Successfully wrote ibnYahyaRoute')
        }
    })
};


//Author = "Ahmad Ibn Fadlan"
//ibnFadlanRoute.js
async function fetchibnfadlanRoute(client) {
    // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOne for the findOne() docs
    // const result = await client.db("ExportTest").collection("mydb").find({});
    const result = await client.db("CaliphateMap").collection("Routes").find({ "properties.author": "Ahmad Ibn Fadlan" });
    const results = await result.toArray();
    // console.log(results);

    const fs = require('fs')
    json0 = JSON.stringify(results);
    //remove [ from the beginning of the json object, to then add order 0.
    jsonfile = json0.substring(1);

    //Just a filler for order 0 (in the view slider), this can be ignored.
    const order0 = '[{"_id": {"$oid": "100ffd2d8f62aef9324366ae"},"type": "Feature","geometry": {"type": "LineString","coordinates": [[0,0],[0,0]]},"properties": {"fromarabic": "الدار البيضاء","fromhebrew": "אלבידאא","fromenglish": "albyDaa","toarabic": "نهر الزاب","tohebrew": "נחל אלזאב","toenglish": "alzab river","order": 0,"Book": "AlBuldan","author": "Ahmad Ibn Fadlan"}},';
    const jsonString = "var ibnFadlan = " + order0 + jsonfile;

    fs.writeFile('public/js/ibnFadlanRoute.js', jsonString, err => {
        if (err) {
            console.log('Error writing ibnFadlanRoute ', err)
        } else {
            console.log('Successfully wrote ibnFadlanRoute')
        }
    })
};



//Author = "Abu Rayhan AlBayruni"
//abuRayhanRoute.js
async function fetchabuarayhanRoute(client) {
    // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOne for the findOne() docs
    // const result = await client.db("ExportTest").collection("mydb").find({});
    const result = await client.db("CaliphateMap").collection("Routes").find({ "properties.author": "Abu Rayhan AlBayruni" });
    const results = await result.toArray();
    // console.log(results);

    const fs = require('fs')
    json0 = JSON.stringify(results);
    //remove [ from the beginning of the json object, to then add order 0.
    jsonfile = json0.substring(1);

    //Just a filler for order 0 (in the view slider), this can be ignored.
    const order0 = '[{"_id": {"$oid": "100ffd2d8f62aef9324366ae"},"type": "Feature","geometry": {"type": "LineString","coordinates": [[0,0],[0,0]]},"properties": {"fromarabic": "الدار البيضاء","fromhebrew": "אלבידאא","fromenglish": "albyDaa","toarabic": "نهر الزاب","tohebrew": "נחל אלזאב","toenglish": "alzab river","order": 0,"Book": "AlBuldan","author": "Abu Rayhan AlBayruni"}},';
    const jsonString = "var abuRayhan = " + order0 + jsonfile;

    fs.writeFile('public/js/abuRayhanRoute.js', jsonString, err => {
        if (err) {
            console.log('Error writing abuRayhanRoute ', err)
        } else {
            console.log('Successfully wrote abuRayhanRoute')
        }
    })
};


//Author = "Hassan Ibn Yazid AlSirafi"
//hassanRoute.js
async function fetchhassanRoute(client) {
    // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOne for the findOne() docs
    // const result = await client.db("ExportTest").collection("mydb").find({});
    const result = await client.db("CaliphateMap").collection("Routes").find({ "properties.author": "Hassan Ibn Yazid AlSirafi" });
    const results = await result.toArray();
    // console.log(results);

    const fs = require('fs')
    json0 = JSON.stringify(results);
    //remove [ from the beginning of the json object, to then add order 0.
    jsonfile = json0.substring(1);

    //Just a filler for order 0 (in the view slider), this can be ignored.
    const order0 = '[{"_id": {"$oid": "100ffd2d8f62aef9324366ae"},"type": "Feature","geometry": {"type": "LineString","coordinates": [[0,0],[0,0]]},"properties": {"fromarabic": "الدار البيضاء","fromhebrew": "אלבידאא","fromenglish": "albyDaa","toarabic": "نهر الزاب","tohebrew": "נחל אלזאב","toenglish": "alzab river","order": 0,"Book": "AlBuldan","author": "Hassan Ibn Yazid AlSirafi"}},';
    const jsonString = "var hassan = " + order0 + jsonfile;

    fs.writeFile('public/js/hassanRoute.js', jsonString, err => {
        if (err) {
            console.log('Error writing hassanRoute ', err)
        } else {
            console.log('Successfully wrote hassanRoute')
        }
    })
};


//Author = "Abu Abdullah Muhammad ibn Battuta"
//abuAbdullahRoute.js
async function fetchabuabdullahRoute(client) {
    // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOne for the findOne() docs
    // const result = await client.db("ExportTest").collection("mydb").find({});
    const result = await client.db("CaliphateMap").collection("Routes").find({ "properties.author": "Abu Abdullah Muhammad ibn Battuta" });
    const results = await result.toArray();
    // console.log(results);

    const fs = require('fs')
    json0 = JSON.stringify(results);
    //remove [ from the beginning of the json object, to then add order 0.
    jsonfile = json0.substring(1);

    //Just a filler for order 0 (in the view slider), this can be ignored.
    const order0 = '[{"_id": {"$oid": "100ffd2d8f62aef9324366ae"},"type": "Feature","geometry": {"type": "LineString","coordinates": [[0,0],[0,0]]},"properties": {"fromarabic": "الدار البيضاء","fromhebrew": "אלבידאא","fromenglish": "albyDaa","toarabic": "نهر الزاب","tohebrew": "נחל אלזאב","toenglish": "alzab river","order": 0,"Book": "AlBuldan","author": "Abu Abdullah Muhammad ibn Battuta"}},';
    const jsonString = "var abuAbdullah = " + order0 + jsonfile;

    fs.writeFile('public/js/abuAbdullahRoute.js', jsonString, err => {
        if (err) {
            console.log('Error writing abuAbdullahRoute ', err)
        } else {
            console.log('Successfully wrote abuAbdullahRoute')
        }
    })
};


//Author = "Aḥmad ibn Abī Ya‘qūb al-Ya‘qūbī"
//ibnAbiRoute.js
async function fetchibnAbiRoute(client) {
    // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOne for the findOne() docs
    // const result = await client.db("ExportTest").collection("mydb").find({});
    const result = await client.db("CaliphateMap").collection("Routes").find({ "properties.author": "Aḥmad ibn Abī Ya‘qūb al-Ya‘qūbī" });
    const results = await result.toArray();
    // console.log(results);

    const fs = require('fs')
    json0 = JSON.stringify(results);
    //remove [ from the beginning of the json object, to then add order 0.
    jsonfile = json0.substring(1);

    //Just a filler for order 0 (in the view slider), this can be ignored.
    const order0 = '[{"_id": {"$oid": "100ffd2d8f62aef9324366ae"},"type": "Feature","geometry": {"type": "LineString","coordinates": [[0,0],[0,0]]},"properties": {"fromarabic": "الدار البيضاء","fromhebrew": "אלבידאא","fromenglish": "albyDaa","toarabic": "نهر الزاب","tohebrew": "נחל אלזאב","toenglish": "alzab river","order": 0,"Book": "AlBuldan","author": "Aḥmad ibn Abī Ya‘qūb al-Ya‘qūbī"}},';
    const jsonString = "var ibnAbi = " + order0 + jsonfile;

    fs.writeFile('public/js/ibnAbiRoute.js', jsonString, err => {
        if (err) {
            console.log('Error writing ibnAbiRoute ', err)
        } else {
            console.log('Successfully wrote ibnAbiRoute')
        }
    })
};


//Author = "Zakariya AlQazwini"
//zakariyaRoute.js
async function fetchzakariyaRoute(client) {
    // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOne for the findOne() docs
    // const result = await client.db("ExportTest").collection("mydb").find({});
    const result = await client.db("CaliphateMap").collection("Routes").find({ "properties.author": "Zakariya AlQazwini" });
    const results = await result.toArray();
    // console.log(results);

    const fs = require('fs')
    json0 = JSON.stringify(results);
    //remove [ from the beginning of the json object, to then add order 0.
    jsonfile = json0.substring(1);

    //Just a filler for order 0 (in the view slider), this can be ignored.
    const order0 = '[{"_id": {"$oid": "100ffd2d8f62aef9324366ae"},"type": "Feature","geometry": {"type": "LineString","coordinates": [[0,0],[0,0]]},"properties": {"fromarabic": "الدار البيضاء","fromhebrew": "אלבידאא","fromenglish": "albyDaa","toarabic": "نهر الزاب","tohebrew": "נחל אלזאב","toenglish": "alzab river","order": 0,"Book": "AlBuldan","author": "Zakariya AlQazwini"}},';
    const jsonString = "var zakariya = " + order0 + jsonfile;

    fs.writeFile('public/js/zakariyaRoute.js', jsonString, err => {
        if (err) {
            console.log('Error writing zakariyaRoute ', err)
        } else {
            console.log('Successfully wrote zakariyaRoute')
        }
    })
};



//Author = "alMuqaddasi"
//almuqaddasiRoute.js
async function fetchalmuqaddasiRoute(client) {
    // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOne for the findOne() docs
    // const result = await client.db("ExportTest").collection("mydb").find({});
    const result = await client.db("CaliphateMap").collection("Routes").find({ "properties.author": "alMuqaddasi" });
    const results = await result.toArray();
    // console.log(results);

    const fs = require('fs')
    json0 = JSON.stringify(results);
    //remove [ from the beginning of the json object, to then add order 0.
    jsonfile = json0.substring(1);

    //Just a filler for order 0 (in the view slider), this can be ignored.
    const order0 = '[{"_id": {"$oid": "100ffd2d8f62aef9324366ae"},"type": "Feature","geometry": {"type": "LineString","coordinates": [[0,0],[0,0]]},"properties": {"fromarabic": "الدار البيضاء","fromhebrew": "אלבידאא","fromenglish": "albyDaa","toarabic": "نهر الزاب","tohebrew": "נחל אלזאב","toenglish": "alzab river","order": 0,"Book": "AlBuldan","author": "alMuqaddasi"}},';
    const jsonString = "var almuqaddasi = " + order0 + jsonfile;

    fs.writeFile('public/js/almuqaddasiRoute.js', jsonString, err => {
        if (err) {
            console.log('Error writing almuqaddasiRoute ', err)
        } else {
            console.log('Successfully wrote almuqaddasiRoute')
        }
    })
};


//ALL ROUTES
//ibnFaqihRoute.js
async function fetchRoute(client) {
    // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOne for the findOne() docs
    // const result = await client.db("ExportTest").collection("mydb").find({});
    const result = await client.db("CaliphateMap").collection("Routes").find({});
    const results = await result.toArray();
    // console.log(results);

    const fs = require('fs')
    json0 = JSON.stringify(results);
    //remove [ from the beginning of the json object, to then add order 0.
    jsonfile = json0.substring(1);

    //Just a filler for order 0 (in the view slider), this can be ignored.
    const order0 = '[{"_id": {"$oid": "100ffd2d8f62aef9324366ae"},"type": "Feature","geometry": {"type": "LineString","coordinates": [[0,0],[0,0]]},"properties": {"fromarabic": "الدار البيضاء","fromhebrew": "אלבידאא","fromenglish": "albyDaa","toarabic": "نهر الزاب","tohebrew": "נחל אלזאב","toenglish": "alzab river","order": 0,"Book": "AlBuldan","author": "Ibn Faqih AlHamadhani"}},';
    const jsonString = "var IbnFaqih = " + order0 + jsonfile;

    fs.writeFile('public/js/routes__.js', jsonString, err => {
        if (err) {
            console.log('Error writing js ', err)
        } else {
            console.log('Successfully wrote routes')
        }
    })
};



/**
* The end of the fetch helper methods.
*/


/**
* Print the names of all available databases
* @param {MongoClient} client A MongoClient that is connected to a cluster
*/
async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};



/* GET Index (Map). */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Caliphate Map' });
    main();
});

/* GET Index (Map). */
router.get('/index', function (req, res, next) {
    res.render('index', { title: 'Caliphate Map' });
});


/* GET cluster map. */
router.get('/cluster', function (req, res, next) {
    res.render('cluster', { title: 'Cluster Map' });
});

/* GET cluster map. */
router.get('/tables', function (req, res, next) {
    res.render('tables', { title: 'Tables' });
});


module.exports = router;