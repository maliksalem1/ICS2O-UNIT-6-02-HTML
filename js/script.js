/* Created by: Curtis Edwards
   Created on: April 2022
   This file contains the JS functions for index.html*/

'use strict'

/**
 * Check service worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-UNIT-6-02-HTML/sw.js", {
    scope: "/ICS2O-UNIT-6-02-HTML/",
  })
}

/**
 * Input
 */

 function updateCount() {
  if (localStorage.clicks) {
    document.getElementById("output").innerHTML = "Cookies: " + localStorage.clicks
  } else {
    localStorage.clicks = 0
  }
}
/**
 * Resets the click counter
 */
function resetProgress() {
  localStorage.clicks = 0
  updateCount()
}

/**
 * Adds 1 to the counter
 */
function onClick() {
  localStorage.clicks++
  updateCount()
}
