/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "de",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	dateFormat: "ddd DD-MM-YYYY",
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "Fru´s Google Calendar",
			position: "top_left",
			colored: true,
			config: {
				maximumEntries: "8",
				maximumNumberOfDays: "7",
				calendars: [
					{
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/n29gnrdjrsf5q6etvn6gg5v6dc%40group.calendar.google.com/private-fcec3f14c814c69f5e49c4ac92163a5b/basic.ics"
					},
					{
						symbol: "calendar-check-o",
						url: "https://calendar.google.com/calendar/ical/akumawah%40googlemail.com/public/basic.ics"
					},
					{
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/q51v5pm40vrbvdpllie49d31no%40group.calendar.google.com/private-c3d03f7b57556ebd40180627f8de151f/basic.ics"
					}
				]
			}
		},
		{
			module: "calendar",
			header: "German Holidays",
			position: "top_left",
			config: {
				dateFormat: "ddd DD-MM-YYYY",
				maximumEntries: "5",
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.webcal.fi/cal.php?id=75&format=ics&wrn=1&wp=4&wf=53&color=%23FF3100&cntr=de&lang=de&rid=wc"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Dietzenbach(Hessen)",
				locationID: "2937040", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "5483548ad593740dc7e8dbc6bc42c7cd"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Dietzenbach",
				locationID: "2937040", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "5483548ad593740dc7e8dbc6bc42c7cd"
			}
		},
		{
			module: "MMM-Fuel",
			position: "top_right",
			config: {
				provider: "spritpreisrechner",
				api_key: "0db29330-c9cd-7ef7-9921-e048fb89f930",
				lat: 50.015658,
				lng: 8.774855,
				types: ["diesel","e5"],
				radius: 10,
				showOpenOnly: true,
				// all your config options, which are different than their default values
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					// {
					// 	title: "New York Times",
					// 	url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					// },
					// {
					// 	title: "BBC",
					// 	url: "http://feeds.bbci.co.uk/news/video_and_audio/news_front_page/rss.xml?edition=uk",
					// },
					{
						title: "FAZ Sport",
						url: "https://www.faz.net/rss/aktuell/sport/fussball/",
					},
					{
						title: "FAZ News",
						url: "http://www.faz.net/s/Rub/Tpl~Epartner~SR..",
					},
					{
						title: "Spiegel",
						url: "https://www.spiegel.de/schlagzeilen/tops/index.rss",
					},
					{
						title: "Heise",
						url: "www.heise.de/rss/heise-top-atom.xml",
					},
					{
						title: "Stern",
						url: "http://www.stern.de/feed/standard/alle-nachrichten/",
					},
					{
						title: "FAZ News",
						url: "",
					}

				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
			module: 'MMM-DailyBibleVerse',
			position: 'bottom_bar',	// This can be any of the regions. Best result is in the bottom_bar as verses can take multiple lines in a day.
			config: {
				version: 'NIV', // This can be changed to any version you want that is offered by Bible Gateway. For a list, go here: https://www.biblegateway.com/versions/,
				size: 'small' // default value is medium, but can be changed.
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
