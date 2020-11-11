function change_location(newLocation) {

	window.location = newLocation

}

function clear_cache() {

	if ('serviceWorker' in navigator) {

		caches.keys().then(function (cacheNames) {

			cacheNames.forEach(function (cacheName) {

				caches.delete(cacheName)
				console.log('Cache Name: ' + cacheName + ' Deleted!')

			})

		})

	}

}

function force_update_service_worker() {

	if ('serviceWorker' in navigator) {

		navigator.serviceWorker.getRegistrations().then(function (registrations) {

			for (let registration of registrations) {

				registration.update()
				console.log('Registration: ' + ' Updated!')

			}

		})
	}

}
