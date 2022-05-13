import requests

r = requests.post(url="https://discordapp.com/api/v9/webhooks/974677464813035520/Kl6iAN9QTQGWpB_7vzYLNgti3XPJo7K-dkau_rKKxFSgwSVuVLHVUoOT87AHruVqlycK",
                  data={
			"content":"@everyone",
			"username":"Mon pseudo",
    	"embeds": [{
    		"title": "Mon titre",
    		"description": "Ma description",
				"fields":[
					{
						"name":"Coordonnées",
						"value":"_ _",
						"inline":False
					},
					{
						"name":"téléphone",
						"value":"+33 7 69 49 17 95",
						"inline":True
					},
					{
						"name":"mail",
						"value":"murierromain@gmail.com",
						"inline":True
					},
					{
						"name":"site",
						"value":"http://romain.murier.free.fr",
						"inline":True
					}
				]
    	}]
    })
try:
    print(r.text)
except:
    print(r.json())