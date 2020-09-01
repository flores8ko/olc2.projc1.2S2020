(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ast"] = factory();
	else
		root["ast"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = this["webpackHotUpdateast"];
/******/ 	this["webpackHotUpdateast"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		document.head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "1b976220e88407884ad1";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_selfInvalidated: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 			invalidate: function() {
/******/ 				this._selfInvalidated = true;
/******/ 				switch (hotStatus) {
/******/ 					case "idle":
/******/ 						hotUpdate = {};
/******/ 						hotUpdate[moduleId] = modules[moduleId];
/******/ 						hotSetStatus("ready");
/******/ 						break;
/******/ 					case "ready":
/******/ 						hotApplyInvalidatedModule(moduleId);
/******/ 						break;
/******/ 					case "prepare":
/******/ 					case "check":
/******/ 					case "dispose":
/******/ 					case "apply":
/******/ 						(hotQueuedInvalidatedModules =
/******/ 							hotQueuedInvalidatedModules || []).push(moduleId);
/******/ 						break;
/******/ 					default:
/******/ 						// ignore requests in error states
/******/ 						break;
/******/ 				}
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash, hotQueuedInvalidatedModules;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus(hotApplyInvalidatedModules() ? "ready" : "idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "main";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 		return hotApplyInternal(options);
/******/ 	}
/******/
/******/ 	function hotApplyInternal(options) {
/******/ 		hotApplyInvalidatedModules();
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (
/******/ 					!module ||
/******/ 					(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 				)
/******/ 					continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire &&
/******/ 				// when called invalidate self-accepting is not possible
/******/ 				!installedModules[moduleId].hot._selfInvalidated
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					parents: installedModules[moduleId].parents.slice(),
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		if (hotUpdateNewHash !== undefined) {
/******/ 			hotCurrentHash = hotUpdateNewHash;
/******/ 			hotUpdateNewHash = undefined;
/******/ 		}
/******/ 		hotUpdate = undefined;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = item.parents;
/******/ 			hotCurrentChildModule = moduleId;
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			return hotApplyInternal(options).then(function(list) {
/******/ 				outdatedModules.forEach(function(moduleId) {
/******/ 					if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 				});
/******/ 				return list;
/******/ 			});
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModules() {
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			if (!hotUpdate) hotUpdate = {};
/******/ 			hotQueuedInvalidatedModules.forEach(hotApplyInvalidatedModule);
/******/ 			hotQueuedInvalidatedModules = undefined;
/******/ 			return true;
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModule(moduleId) {
/******/ 		if (!Object.prototype.hasOwnProperty.call(hotUpdate, moduleId))
/******/ 			hotUpdate[moduleId] = modules[moduleId];
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire("./src/index.ts")(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: Console, Cntnr, Envmnt, Op, NULL, UNDEFINED, Reference, ConsoleLogNode, NumberNode, StringNode, BooleanNode, NullNode, UndefinedNode, DeclareVarNode, DeclareVarListNode, CreateIdVarNode, AsignNode, SumNode, SubNode, MulNode, DivNode, ModNode, ExpNode, EqNode, DifNode, HigherNode, MinorNode, HigherEqNode, MinorEqNode, OrNode, AndNode, NotNode, ReAsignAddNode, ReAsignSubNode, ReAsignMulNode, ReAsignDivNode, ReAsignModNode, ReAddNode, ReSubNode, CreateArrayNode, CreateArrVarNode, ReturnObj, CreateObjVarNode, CreateObjFunNode, ExecuteAST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecuteAST", function() { return ExecuteAST; });
/* harmony import */ var _utils_Reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/Reference */ "./src/utils/Reference.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Reference", function() { return _utils_Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"]; });

/* harmony import */ var _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NULL", function() { return _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__["NULL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UNDEFINED", function() { return _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__["UNDEFINED"]; });

/* harmony import */ var _utils_Envmnt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/Envmnt */ "./src/utils/Envmnt.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Envmnt", function() { return _utils_Envmnt__WEBPACK_IMPORTED_MODULE_2__["Envmnt"]; });

/* harmony import */ var _utils_Cntnr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/Cntnr */ "./src/utils/Cntnr.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cntnr", function() { return _utils_Cntnr__WEBPACK_IMPORTED_MODULE_3__["Cntnr"]; });

/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/Op */ "./src/utils/Op.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Op", function() { return _utils_Op__WEBPACK_IMPORTED_MODULE_4__["Op"]; });

/* harmony import */ var _utils_Console__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/Console */ "./src/utils/Console.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Console", function() { return _utils_Console__WEBPACK_IMPORTED_MODULE_5__["Console"]; });

/* harmony import */ var _nodes_ConsoleLogNode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nodes/ConsoleLogNode */ "./src/nodes/ConsoleLogNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConsoleLogNode", function() { return _nodes_ConsoleLogNode__WEBPACK_IMPORTED_MODULE_6__["ConsoleLogNode"]; });

/* harmony import */ var _nodes_NumberNode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nodes/NumberNode */ "./src/nodes/NumberNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberNode", function() { return _nodes_NumberNode__WEBPACK_IMPORTED_MODULE_7__["NumberNode"]; });

/* harmony import */ var _nodes_StringNode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nodes/StringNode */ "./src/nodes/StringNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringNode", function() { return _nodes_StringNode__WEBPACK_IMPORTED_MODULE_8__["StringNode"]; });

/* harmony import */ var _nodes_BooleanNode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nodes/BooleanNode */ "./src/nodes/BooleanNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BooleanNode", function() { return _nodes_BooleanNode__WEBPACK_IMPORTED_MODULE_9__["BooleanNode"]; });

/* harmony import */ var _nodes_NullNode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nodes/NullNode */ "./src/nodes/NullNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NullNode", function() { return _nodes_NullNode__WEBPACK_IMPORTED_MODULE_10__["NullNode"]; });

/* harmony import */ var _nodes_UndefinedNode__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nodes/UndefinedNode */ "./src/nodes/UndefinedNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UndefinedNode", function() { return _nodes_UndefinedNode__WEBPACK_IMPORTED_MODULE_11__["UndefinedNode"]; });

/* harmony import */ var _nodes_DeclareVarNode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nodes/DeclareVarNode */ "./src/nodes/DeclareVarNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeclareVarNode", function() { return _nodes_DeclareVarNode__WEBPACK_IMPORTED_MODULE_12__["DeclareVarNode"]; });

/* harmony import */ var _nodes_DeclareVarListNode__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nodes/DeclareVarListNode */ "./src/nodes/DeclareVarListNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeclareVarListNode", function() { return _nodes_DeclareVarListNode__WEBPACK_IMPORTED_MODULE_13__["DeclareVarListNode"]; });

/* harmony import */ var _nodes_CreateIdVarNode__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./nodes/CreateIdVarNode */ "./src/nodes/CreateIdVarNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateIdVarNode", function() { return _nodes_CreateIdVarNode__WEBPACK_IMPORTED_MODULE_14__["CreateIdVarNode"]; });

/* harmony import */ var _nodes_AsignNode__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./nodes/AsignNode */ "./src/nodes/AsignNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AsignNode", function() { return _nodes_AsignNode__WEBPACK_IMPORTED_MODULE_15__["AsignNode"]; });

/* harmony import */ var _nodes_SumNode__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./nodes/SumNode */ "./src/nodes/SumNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SumNode", function() { return _nodes_SumNode__WEBPACK_IMPORTED_MODULE_16__["SumNode"]; });

/* harmony import */ var _nodes_SubNode__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./nodes/SubNode */ "./src/nodes/SubNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubNode", function() { return _nodes_SubNode__WEBPACK_IMPORTED_MODULE_17__["SubNode"]; });

/* harmony import */ var _nodes_MulNode__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./nodes/MulNode */ "./src/nodes/MulNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MulNode", function() { return _nodes_MulNode__WEBPACK_IMPORTED_MODULE_18__["MulNode"]; });

/* harmony import */ var _nodes_DivNode__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./nodes/DivNode */ "./src/nodes/DivNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DivNode", function() { return _nodes_DivNode__WEBPACK_IMPORTED_MODULE_19__["DivNode"]; });

/* harmony import */ var _nodes_ModNode__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./nodes/ModNode */ "./src/nodes/ModNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModNode", function() { return _nodes_ModNode__WEBPACK_IMPORTED_MODULE_20__["ModNode"]; });

/* harmony import */ var _nodes_ExpNode__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./nodes/ExpNode */ "./src/nodes/ExpNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpNode", function() { return _nodes_ExpNode__WEBPACK_IMPORTED_MODULE_21__["ExpNode"]; });

/* harmony import */ var _nodes_EqNode__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./nodes/EqNode */ "./src/nodes/EqNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EqNode", function() { return _nodes_EqNode__WEBPACK_IMPORTED_MODULE_22__["EqNode"]; });

/* harmony import */ var _nodes_DifNode__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./nodes/DifNode */ "./src/nodes/DifNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DifNode", function() { return _nodes_DifNode__WEBPACK_IMPORTED_MODULE_23__["DifNode"]; });

/* harmony import */ var _nodes_HigherNode__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./nodes/HigherNode */ "./src/nodes/HigherNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HigherNode", function() { return _nodes_HigherNode__WEBPACK_IMPORTED_MODULE_24__["HigherNode"]; });

/* harmony import */ var _nodes_MinorNode__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./nodes/MinorNode */ "./src/nodes/MinorNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MinorNode", function() { return _nodes_MinorNode__WEBPACK_IMPORTED_MODULE_25__["MinorNode"]; });

/* harmony import */ var _nodes_HigherEqNode__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./nodes/HigherEqNode */ "./src/nodes/HigherEqNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HigherEqNode", function() { return _nodes_HigherEqNode__WEBPACK_IMPORTED_MODULE_26__["HigherEqNode"]; });

/* harmony import */ var _nodes_MinorEqNode__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./nodes/MinorEqNode */ "./src/nodes/MinorEqNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MinorEqNode", function() { return _nodes_MinorEqNode__WEBPACK_IMPORTED_MODULE_27__["MinorEqNode"]; });

/* harmony import */ var _nodes_OrNode__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./nodes/OrNode */ "./src/nodes/OrNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrNode", function() { return _nodes_OrNode__WEBPACK_IMPORTED_MODULE_28__["OrNode"]; });

/* harmony import */ var _nodes_AndNode__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./nodes/AndNode */ "./src/nodes/AndNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AndNode", function() { return _nodes_AndNode__WEBPACK_IMPORTED_MODULE_29__["AndNode"]; });

/* harmony import */ var _nodes_NotNode__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./nodes/NotNode */ "./src/nodes/NotNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotNode", function() { return _nodes_NotNode__WEBPACK_IMPORTED_MODULE_30__["NotNode"]; });

/* harmony import */ var _nodes_ReAsignAddNode__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./nodes/ReAsignAddNode */ "./src/nodes/ReAsignAddNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReAsignAddNode", function() { return _nodes_ReAsignAddNode__WEBPACK_IMPORTED_MODULE_31__["ReAsignAddNode"]; });

/* harmony import */ var _nodes_ReAsignSubNode__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./nodes/ReAsignSubNode */ "./src/nodes/ReAsignSubNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReAsignSubNode", function() { return _nodes_ReAsignSubNode__WEBPACK_IMPORTED_MODULE_32__["ReAsignSubNode"]; });

/* harmony import */ var _nodes_ReAsignMulNode__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./nodes/ReAsignMulNode */ "./src/nodes/ReAsignMulNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReAsignMulNode", function() { return _nodes_ReAsignMulNode__WEBPACK_IMPORTED_MODULE_33__["ReAsignMulNode"]; });

/* harmony import */ var _nodes_ReAsignDivNode__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./nodes/ReAsignDivNode */ "./src/nodes/ReAsignDivNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReAsignDivNode", function() { return _nodes_ReAsignDivNode__WEBPACK_IMPORTED_MODULE_34__["ReAsignDivNode"]; });

/* harmony import */ var _nodes_ReAsignModNode__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./nodes/ReAsignModNode */ "./src/nodes/ReAsignModNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReAsignModNode", function() { return _nodes_ReAsignModNode__WEBPACK_IMPORTED_MODULE_35__["ReAsignModNode"]; });

/* harmony import */ var _nodes_ReAddNode__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./nodes/ReAddNode */ "./src/nodes/ReAddNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReAddNode", function() { return _nodes_ReAddNode__WEBPACK_IMPORTED_MODULE_36__["ReAddNode"]; });

/* harmony import */ var _nodes_ReSubNode__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./nodes/ReSubNode */ "./src/nodes/ReSubNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReSubNode", function() { return _nodes_ReSubNode__WEBPACK_IMPORTED_MODULE_37__["ReSubNode"]; });

/* harmony import */ var _nodes_CreateArrayNode__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./nodes/CreateArrayNode */ "./src/nodes/CreateArrayNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateArrayNode", function() { return _nodes_CreateArrayNode__WEBPACK_IMPORTED_MODULE_38__["CreateArrayNode"]; });

/* harmony import */ var _nodes_CreateArrVarNode__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./nodes/CreateArrVarNode */ "./src/nodes/CreateArrVarNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateArrVarNode", function() { return _nodes_CreateArrVarNode__WEBPACK_IMPORTED_MODULE_39__["CreateArrVarNode"]; });

/* harmony import */ var _nodes_ReturnObj__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./nodes/ReturnObj */ "./src/nodes/ReturnObj.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReturnObj", function() { return _nodes_ReturnObj__WEBPACK_IMPORTED_MODULE_40__["ReturnObj"]; });

/* harmony import */ var _nodes_CreateObjVarNode__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./nodes/CreateObjVarNode */ "./src/nodes/CreateObjVarNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateObjVarNode", function() { return _nodes_CreateObjVarNode__WEBPACK_IMPORTED_MODULE_41__["CreateObjVarNode"]; });

/* harmony import */ var _nodes_CreateObjFunNode__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./nodes/CreateObjFunNode */ "./src/nodes/CreateObjFunNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateObjFunNode", function() { return _nodes_CreateObjFunNode__WEBPACK_IMPORTED_MODULE_42__["CreateObjFunNode"]; });













































function ExecuteAST(sentences) {
    _utils_Console__WEBPACK_IMPORTED_MODULE_5__["Console"].log = '';
    const env = new _utils_Envmnt__WEBPACK_IMPORTED_MODULE_2__["Envmnt"](null, sentences);
    env.GO_ALL();
}
if (module && module.hot)
    module.hot.accept();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/nodes/AndNode.ts":
/*!******************************!*\
  !*** ./src/nodes/AndNode.ts ***!
  \******************************/
/*! exports provided: AndNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AndNode", function() { return AndNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_LogicalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/LogicalOperationsFunctions */ "./src/utils/LogicalOperationsFunctions.ts");


class AndNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        return Object(_utils_LogicalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["And"])(this.lf.Exe(env), this.rt.Exe(env));
    }
}


/***/ }),

/***/ "./src/nodes/AsignNode.ts":
/*!********************************!*\
  !*** ./src/nodes/AsignNode.ts ***!
  \********************************/
/*! exports provided: AsignNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignNode", function() { return AsignNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_Reference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Reference */ "./src/utils/Reference.ts");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");



class AsignNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        const lfVal = this.lf.Exe(env);
        const rtVal = this.rt.Exe(env);
        if (!(lfVal instanceof _utils_Reference__WEBPACK_IMPORTED_MODULE_1__["Reference"])) {
            throw new _utils_Utils__WEBPACK_IMPORTED_MODULE_2__["SemanticException"](`No se puede asignar a ${lfVal.typo}, las asignaciones solo pueden ser sobre una referencia`);
        }
        lfVal.PutValueOnReference(rtVal);
        return null;
    }
}


/***/ }),

/***/ "./src/nodes/BooleanNode.ts":
/*!**********************************!*\
  !*** ./src/nodes/BooleanNode.ts ***!
  \**********************************/
/*! exports provided: BooleanNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanNode", function() { return BooleanNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");


class BooleanNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(val) {
        super();
        this.val = val;
    }
    GO(env) {
        return new _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__["BOOLEAN"](this.val);
    }
}


/***/ }),

/***/ "./src/nodes/ConsoleLogNode.ts":
/*!*************************************!*\
  !*** ./src/nodes/ConsoleLogNode.ts ***!
  \*************************************/
/*! exports provided: ConsoleLogNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleLogNode", function() { return ConsoleLogNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_Reference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Reference */ "./src/utils/Reference.ts");
/* harmony import */ var _utils_Console__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Console */ "./src/utils/Console.ts");



class ConsoleLogNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(expression) {
        super();
        this.expression = expression;
    }
    GO(env) {
        let val = this.expression.Exe(env);
        if (val instanceof _utils_Reference__WEBPACK_IMPORTED_MODULE_1__["Reference"]) {
            val = val.getValue();
        }
        _utils_Console__WEBPACK_IMPORTED_MODULE_2__["Console"].log += `>_ ${val} \n`;
        console.log(`>_ ${val}`);
        return null;
    }
    ;
}


/***/ }),

/***/ "./src/nodes/CreateArrVarNode.ts":
/*!***************************************!*\
  !*** ./src/nodes/CreateArrVarNode.ts ***!
  \***************************************/
/*! exports provided: CreateArrVarNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateArrVarNode", function() { return CreateArrVarNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_Reference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Reference */ "./src/utils/Reference.ts");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
/* harmony import */ var _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");




class CreateArrVarNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(id, index) {
        super();
        this.id = id;
        this.index = index;
    }
    GO(env) {
        let idRef = this.id.Exe(env);
        if (!(idRef instanceof _utils_Reference__WEBPACK_IMPORTED_MODULE_1__["Reference"])) {
            throw new _utils_Utils__WEBPACK_IMPORTED_MODULE_2__["SemanticException"](`Llamada a Arreglo ${idRef} no definido.`);
        }
        let index = this.index.Exe(env);
        if (index instanceof _utils_Reference__WEBPACK_IMPORTED_MODULE_1__["Reference"]) {
            index = index.getValue();
        }
        if (!(index instanceof _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_3__["NUMBER"])) {
            throw new _utils_Utils__WEBPACK_IMPORTED_MODULE_2__["SemanticException"]("El indice para accesar debe ser de tipo NUMBER");
        }
        let ref = idRef.getValue();
        if (!(ref instanceof _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_3__["ARRAY"])) {
            return new _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_3__["UNDEFINED"]();
        }
        return ref.getValue(index.getValue());
    }
}


/***/ }),

/***/ "./src/nodes/CreateArrayNode.ts":
/*!**************************************!*\
  !*** ./src/nodes/CreateArrayNode.ts ***!
  \**************************************/
/*! exports provided: CreateArrayNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateArrayNode", function() { return CreateArrayNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_Reference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Reference */ "./src/utils/Reference.ts");
/* harmony import */ var _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");



class CreateArrayNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(vals) {
        super();
        this.vals = vals;
    }
    GO(env) {
        let real = new Array();
        for (let op of this.vals) {
            let reference = new _utils_Reference__WEBPACK_IMPORTED_MODULE_1__["Reference"]();
            reference.PutValueOnReference(op.Exe(env));
            real.push(reference);
        }
        return new _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["ARRAY"](real);
    }
}


/***/ }),

/***/ "./src/nodes/CreateIdVarNode.ts":
/*!**************************************!*\
  !*** ./src/nodes/CreateIdVarNode.ts ***!
  \**************************************/
/*! exports provided: CreateIdVarNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateIdVarNode", function() { return CreateIdVarNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");


class CreateIdVarNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(id) {
        super();
        this.id = id;
    }
    GO(env) {
        return Object(_utils_Utils__WEBPACK_IMPORTED_MODULE_1__["FindVar"])(env, this.id);
    }
}


/***/ }),

/***/ "./src/nodes/CreateObjFunNode.ts":
/*!***************************************!*\
  !*** ./src/nodes/CreateObjFunNode.ts ***!
  \***************************************/
/*! exports provided: CreateObjFunNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateObjFunNode", function() { return CreateObjFunNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_Reference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Reference */ "./src/utils/Reference.ts");
/* harmony import */ var _utils_functions_FunctionRepresent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/functions/FunctionRepresent */ "./src/utils/functions/FunctionRepresent.ts");
/* harmony import */ var _ReturnObj__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReturnObj */ "./src/nodes/ReturnObj.ts");




class CreateObjFunNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(object, funId, args) {
        super();
        this.object = object;
        this.funId = funId;
        this.args = args;
    }
    GO(env) {
        let refe = this.object.Exe(env);
        if (refe instanceof _utils_Reference__WEBPACK_IMPORTED_MODULE_1__["Reference"]) {
            refe = refe.getValue();
        }
        let fun = refe.GetProperty(this.funId);
        if (!(fun instanceof _utils_functions_FunctionRepresent__WEBPACK_IMPORTED_MODULE_2__["FunctionRepresent"])) {
            return null;
        }
        const references = new Array();
        for (let arg of this.args) {
            let argValue = arg.Exe(env);
            if (argValue instanceof _utils_Reference__WEBPACK_IMPORTED_MODULE_1__["Reference"]) {
                argValue = argValue.getValue();
            }
            references.push(argValue);
        }
        let ans = fun.EXE(env, references);
        if (ans instanceof _ReturnObj__WEBPACK_IMPORTED_MODULE_3__["ReturnObj"]) {
            return ans.getValue();
        }
        return null;
    }
}


/***/ }),

/***/ "./src/nodes/CreateObjVarNode.ts":
/*!***************************************!*\
  !*** ./src/nodes/CreateObjVarNode.ts ***!
  \***************************************/
/*! exports provided: CreateObjVarNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateObjVarNode", function() { return CreateObjVarNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_Reference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Reference */ "./src/utils/Reference.ts");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
/* harmony import */ var _utils_functions_FunctionRepresent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/functions/FunctionRepresent */ "./src/utils/functions/FunctionRepresent.ts");
/* harmony import */ var _ReturnObj__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ReturnObj */ "./src/nodes/ReturnObj.ts");





class CreateObjVarNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(id, attr) {
        super();
        this.id = id;
        this.attr = attr;
    }
    GO(env) {
        let id = this.id.Exe(env);
        if (!(id instanceof _utils_Reference__WEBPACK_IMPORTED_MODULE_1__["Reference"])) {
            throw new _utils_Utils__WEBPACK_IMPORTED_MODULE_2__["SemanticException"]("Llamada a Objeto no definido");
        }
        let ref = id.getValue();
        let e = ref.GetProperty(this.attr);
        if (e instanceof _utils_functions_FunctionRepresent__WEBPACK_IMPORTED_MODULE_3__["FunctionRepresent"]) {
            let ans = e.EXE(env, new Array());
            if (ans instanceof _ReturnObj__WEBPACK_IMPORTED_MODULE_4__["ReturnObj"]) {
                return ans.getValue();
            }
        }
        return ref.GetProperty(this.attr);
    }
}


/***/ }),

/***/ "./src/nodes/DeclareVarListNode.ts":
/*!*****************************************!*\
  !*** ./src/nodes/DeclareVarListNode.ts ***!
  \*****************************************/
/*! exports provided: DeclareVarListNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeclareVarListNode", function() { return DeclareVarListNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");


class DeclareVarListNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(tipoNombre, declarationOps, value, isConst = false) {
        super();
        this.tipoNombre = tipoNombre;
        this.declarationOps = declarationOps;
        this.value = value || null;
        this.isConst = isConst;
    }
    GO(env) {
        for (let op of this.declarationOps) {
            try {
                if (this.value !== null) {
                    op.AddValue(this.value.Exe(env), this.isConst, this.tipoNombre);
                }
                else {
                    op.AddValue(new _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__["UNDEFINED"](), this.isConst, this.tipoNombre);
                }
                op.Exe(env);
            }
            catch (e) {
                console.log(e.message);
            }
        }
        console.log(env);
        return null;
    }
}


/***/ }),

/***/ "./src/nodes/DeclareVarNode.ts":
/*!*************************************!*\
  !*** ./src/nodes/DeclareVarNode.ts ***!
  \*************************************/
/*! exports provided: DeclareVarNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeclareVarNode", function() { return DeclareVarNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");
/* harmony import */ var _utils_Reference__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Reference */ "./src/utils/Reference.ts");



class DeclareVarNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(name) {
        super();
        this.value = new _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__["UNDEFINED"]();
        this.name = name;
    }
    GO(env) {
        this.AddVarOnDeclare(env, this.name);
        return null;
    }
    AddValue(value = new _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__["UNDEFINED"](), isConst = false, tipoNombre = 'ANY') {
        this.value = value;
        this.isConst = isConst;
        if (tipoNombre === '') {
            tipoNombre = 'ANY';
        }
        this.tipoNombre = tipoNombre.toUpperCase();
    }
    AddVarOnDeclare(env, identifier) {
        const value = this.value;
        const reference = new _utils_Reference__WEBPACK_IMPORTED_MODULE_2__["Reference"](this.tipoNombre, this.isConst);
        reference.PutValueOnReference(value);
        env.Declare(identifier, reference);
    }
}


/***/ }),

/***/ "./src/nodes/DifNode.ts":
/*!******************************!*\
  !*** ./src/nodes/DifNode.ts ***!
  \******************************/
/*! exports provided: DifNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DifNode", function() { return DifNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_RelationalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/RelationalOperationsFunctions */ "./src/utils/RelationalOperationsFunctions.ts");


class DifNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        return Object(_utils_RelationalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["Diferente"])(this.lf.Exe(env), this.rt.Exe(env));
    }
}


/***/ }),

/***/ "./src/nodes/DivNode.ts":
/*!******************************!*\
  !*** ./src/nodes/DivNode.ts ***!
  \******************************/
/*! exports provided: DivNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivNode", function() { return DivNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/AlgebraicOperationsFunctions */ "./src/utils/AlgebraicOperationsFunctions.ts");


class DivNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        return Object(_utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["Division"])(this.lf.Exe(env), this.rt.Exe(env));
    }
}


/***/ }),

/***/ "./src/nodes/EqNode.ts":
/*!*****************************!*\
  !*** ./src/nodes/EqNode.ts ***!
  \*****************************/
/*! exports provided: EqNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EqNode", function() { return EqNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_RelationalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/RelationalOperationsFunctions */ "./src/utils/RelationalOperationsFunctions.ts");


class EqNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        return Object(_utils_RelationalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["Igual"])(this.lf.Exe(env), this.rt.Exe(env));
    }
}


/***/ }),

/***/ "./src/nodes/ExpNode.ts":
/*!******************************!*\
  !*** ./src/nodes/ExpNode.ts ***!
  \******************************/
/*! exports provided: ExpNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpNode", function() { return ExpNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/AlgebraicOperationsFunctions */ "./src/utils/AlgebraicOperationsFunctions.ts");


class ExpNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        return Object(_utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["Potencia"])(this.lf.Exe(env), this.rt.Exe(env));
    }
}


/***/ }),

/***/ "./src/nodes/HigherEqNode.ts":
/*!***********************************!*\
  !*** ./src/nodes/HigherEqNode.ts ***!
  \***********************************/
/*! exports provided: HigherEqNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HigherEqNode", function() { return HigherEqNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_RelationalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/RelationalOperationsFunctions */ "./src/utils/RelationalOperationsFunctions.ts");


class HigherEqNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        return Object(_utils_RelationalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["MayorEq"])(this.lf.Exe(env), this.rt.Exe(env));
    }
}


/***/ }),

/***/ "./src/nodes/HigherNode.ts":
/*!*********************************!*\
  !*** ./src/nodes/HigherNode.ts ***!
  \*********************************/
/*! exports provided: HigherNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HigherNode", function() { return HigherNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_RelationalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/RelationalOperationsFunctions */ "./src/utils/RelationalOperationsFunctions.ts");


class HigherNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        return Object(_utils_RelationalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["Mayor"])(this.lf.Exe(env), this.rt.Exe(env));
    }
}


/***/ }),

/***/ "./src/nodes/MinorEqNode.ts":
/*!**********************************!*\
  !*** ./src/nodes/MinorEqNode.ts ***!
  \**********************************/
/*! exports provided: MinorEqNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinorEqNode", function() { return MinorEqNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_RelationalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/RelationalOperationsFunctions */ "./src/utils/RelationalOperationsFunctions.ts");


class MinorEqNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        return Object(_utils_RelationalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["MenorEq"])(this.lf.Exe(env), this.rt.Exe(env));
    }
}


/***/ }),

/***/ "./src/nodes/MinorNode.ts":
/*!********************************!*\
  !*** ./src/nodes/MinorNode.ts ***!
  \********************************/
/*! exports provided: MinorNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinorNode", function() { return MinorNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_RelationalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/RelationalOperationsFunctions */ "./src/utils/RelationalOperationsFunctions.ts");


class MinorNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        return Object(_utils_RelationalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["Menor"])(this.lf.Exe(env), this.rt.Exe(env));
    }
}


/***/ }),

/***/ "./src/nodes/ModNode.ts":
/*!******************************!*\
  !*** ./src/nodes/ModNode.ts ***!
  \******************************/
/*! exports provided: ModNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModNode", function() { return ModNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/AlgebraicOperationsFunctions */ "./src/utils/AlgebraicOperationsFunctions.ts");


class ModNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        return Object(_utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["Modulo"])(this.lf.Exe(env), this.rt.Exe(env));
    }
}


/***/ }),

/***/ "./src/nodes/MulNode.ts":
/*!******************************!*\
  !*** ./src/nodes/MulNode.ts ***!
  \******************************/
/*! exports provided: MulNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MulNode", function() { return MulNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/AlgebraicOperationsFunctions */ "./src/utils/AlgebraicOperationsFunctions.ts");


class MulNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        return Object(_utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["Multiplicacion"])(this.lf.Exe(env), this.rt.Exe(env));
    }
}


/***/ }),

/***/ "./src/nodes/NotNode.ts":
/*!******************************!*\
  !*** ./src/nodes/NotNode.ts ***!
  \******************************/
/*! exports provided: NotNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotNode", function() { return NotNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_LogicalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/LogicalOperationsFunctions */ "./src/utils/LogicalOperationsFunctions.ts");


class NotNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
    }
    GO(env) {
        return Object(_utils_LogicalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["Not"])(this.lf.Exe(env));
    }
}


/***/ }),

/***/ "./src/nodes/NullNode.ts":
/*!*******************************!*\
  !*** ./src/nodes/NullNode.ts ***!
  \*******************************/
/*! exports provided: NullNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NullNode", function() { return NullNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");


class NullNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor() {
        super();
    }
    GO(env) {
        return new _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__["NULL"]();
    }
}


/***/ }),

/***/ "./src/nodes/NumberNode.ts":
/*!*********************************!*\
  !*** ./src/nodes/NumberNode.ts ***!
  \*********************************/
/*! exports provided: NumberNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberNode", function() { return NumberNode; });
/* harmony import */ var _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");


class NumberNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_1__["Op"] {
    constructor(val) {
        super();
        this.val = val;
    }
    GO(env) {
        return new _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_0__["NUMBER"](this.val);
    }
}


/***/ }),

/***/ "./src/nodes/OrNode.ts":
/*!*****************************!*\
  !*** ./src/nodes/OrNode.ts ***!
  \*****************************/
/*! exports provided: OrNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrNode", function() { return OrNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_LogicalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/LogicalOperationsFunctions */ "./src/utils/LogicalOperationsFunctions.ts");


class OrNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        return Object(_utils_LogicalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["Or"])(this.lf.Exe(env), this.rt.Exe(env));
    }
}


/***/ }),

/***/ "./src/nodes/ReAddNode.ts":
/*!********************************!*\
  !*** ./src/nodes/ReAddNode.ts ***!
  \********************************/
/*! exports provided: ReAddNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReAddNode", function() { return ReAddNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/AlgebraicOperationsFunctions */ "./src/utils/AlgebraicOperationsFunctions.ts");


class ReAddNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf) {
        super();
        this.lf = lf;
    }
    GO(env) {
        return Object(_utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["Add"])(this.lf.Exe(env));
    }
}


/***/ }),

/***/ "./src/nodes/ReAsignAddNode.ts":
/*!*************************************!*\
  !*** ./src/nodes/ReAsignAddNode.ts ***!
  \*************************************/
/*! exports provided: ReAsignAddNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReAsignAddNode", function() { return ReAsignAddNode; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/index.ts");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
/* harmony import */ var _utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/AlgebraicOperationsFunctions */ "./src/utils/AlgebraicOperationsFunctions.ts");



class ReAsignAddNode extends _index__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        const lf = this.lf.Exe(env);
        const rt = this.rt.Exe(env);
        if (!(lf instanceof _index__WEBPACK_IMPORTED_MODULE_0__["Reference"])) {
            throw new _utils_Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"](`No se puede asiganr a ${lf}, las asignaciones solo pueden ser sobre una referencia`);
        }
        lf.PutValueOnReference(Object(_utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_2__["Suma"])(lf.getValue(), rt));
        return lf.getValue();
    }
}


/***/ }),

/***/ "./src/nodes/ReAsignDivNode.ts":
/*!*************************************!*\
  !*** ./src/nodes/ReAsignDivNode.ts ***!
  \*************************************/
/*! exports provided: ReAsignDivNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReAsignDivNode", function() { return ReAsignDivNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_Reference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Reference */ "./src/utils/Reference.ts");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
/* harmony import */ var _utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/AlgebraicOperationsFunctions */ "./src/utils/AlgebraicOperationsFunctions.ts");




class ReAsignDivNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        const lf = this.lf.Exe(env);
        const rt = this.rt.Exe(env);
        if (!(lf instanceof _utils_Reference__WEBPACK_IMPORTED_MODULE_1__["Reference"])) {
            throw new _utils_Utils__WEBPACK_IMPORTED_MODULE_2__["SemanticException"](`No se puede asiganr a ${lf}, las asignaciones solo pueden ser sobre una referencia`);
        }
        lf.PutValueOnReference(Object(_utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_3__["Division"])(lf.getValue(), rt));
        return lf.getValue();
    }
}


/***/ }),

/***/ "./src/nodes/ReAsignModNode.ts":
/*!*************************************!*\
  !*** ./src/nodes/ReAsignModNode.ts ***!
  \*************************************/
/*! exports provided: ReAsignModNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReAsignModNode", function() { return ReAsignModNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_Reference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Reference */ "./src/utils/Reference.ts");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
/* harmony import */ var _utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/AlgebraicOperationsFunctions */ "./src/utils/AlgebraicOperationsFunctions.ts");




class ReAsignModNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        const lf = this.lf.Exe(env);
        const rt = this.rt.Exe(env);
        if (!(lf instanceof _utils_Reference__WEBPACK_IMPORTED_MODULE_1__["Reference"])) {
            throw new _utils_Utils__WEBPACK_IMPORTED_MODULE_2__["SemanticException"](`No se puede asiganr a ${lf}, las asignaciones solo pueden ser sobre una referencia`);
        }
        lf.PutValueOnReference(Object(_utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_3__["Modulo"])(lf.getValue(), rt));
        return lf.getValue();
    }
}


/***/ }),

/***/ "./src/nodes/ReAsignMulNode.ts":
/*!*************************************!*\
  !*** ./src/nodes/ReAsignMulNode.ts ***!
  \*************************************/
/*! exports provided: ReAsignMulNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReAsignMulNode", function() { return ReAsignMulNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_Reference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Reference */ "./src/utils/Reference.ts");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
/* harmony import */ var _utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/AlgebraicOperationsFunctions */ "./src/utils/AlgebraicOperationsFunctions.ts");




class ReAsignMulNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        const lf = this.lf.Exe(env);
        const rt = this.rt.Exe(env);
        if (!(lf instanceof _utils_Reference__WEBPACK_IMPORTED_MODULE_1__["Reference"])) {
            throw new _utils_Utils__WEBPACK_IMPORTED_MODULE_2__["SemanticException"](`No se puede asiganr a ${lf}, las asignaciones solo pueden ser sobre una referencia`);
        }
        lf.PutValueOnReference(Object(_utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_3__["Multiplicacion"])(lf.getValue(), rt));
        return lf.getValue();
    }
}


/***/ }),

/***/ "./src/nodes/ReAsignSubNode.ts":
/*!*************************************!*\
  !*** ./src/nodes/ReAsignSubNode.ts ***!
  \*************************************/
/*! exports provided: ReAsignSubNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReAsignSubNode", function() { return ReAsignSubNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_Reference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Reference */ "./src/utils/Reference.ts");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
/* harmony import */ var _utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/AlgebraicOperationsFunctions */ "./src/utils/AlgebraicOperationsFunctions.ts");




class ReAsignSubNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        const lf = this.lf.Exe(env);
        const rt = this.rt.Exe(env);
        if (!(lf instanceof _utils_Reference__WEBPACK_IMPORTED_MODULE_1__["Reference"])) {
            throw new _utils_Utils__WEBPACK_IMPORTED_MODULE_2__["SemanticException"](`No se puede asiganr a ${lf}, las asignaciones solo pueden ser sobre una referencia`);
        }
        lf.PutValueOnReference(Object(_utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_3__["Resta"])(lf.getValue(), rt));
        return lf.getValue();
    }
}


/***/ }),

/***/ "./src/nodes/ReSubNode.ts":
/*!********************************!*\
  !*** ./src/nodes/ReSubNode.ts ***!
  \********************************/
/*! exports provided: ReSubNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReSubNode", function() { return ReSubNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/AlgebraicOperationsFunctions */ "./src/utils/AlgebraicOperationsFunctions.ts");


class ReSubNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf) {
        super();
        this.lf = lf;
    }
    GO(env) {
        return Object(_utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["Sub"])(this.lf.Exe(env));
    }
}


/***/ }),

/***/ "./src/nodes/ReturnObj.ts":
/*!********************************!*\
  !*** ./src/nodes/ReturnObj.ts ***!
  \********************************/
/*! exports provided: ReturnObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnObj", function() { return ReturnObj; });
/* harmony import */ var _utils_Cntnr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Cntnr */ "./src/utils/Cntnr.ts");

class ReturnObj extends _utils_Cntnr__WEBPACK_IMPORTED_MODULE_0__["Cntnr"] {
    constructor(returnn) {
        super();
        this.toString = () => {
            return "mi objeto return (ReturnObj)";
        };
        this.returnn = returnn;
    }
    getValue() {
        return this.returnn;
    }
}


/***/ }),

/***/ "./src/nodes/StringNode.ts":
/*!*********************************!*\
  !*** ./src/nodes/StringNode.ts ***!
  \*********************************/
/*! exports provided: StringNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringNode", function() { return StringNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");


class StringNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(val) {
        super();
        this.val = val;
    }
    GO(env) {
        return new _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__["STRING"](this.val.substring(1, this.val.length - 1));
    }
}


/***/ }),

/***/ "./src/nodes/SubNode.ts":
/*!******************************!*\
  !*** ./src/nodes/SubNode.ts ***!
  \******************************/
/*! exports provided: SubNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubNode", function() { return SubNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/AlgebraicOperationsFunctions */ "./src/utils/AlgebraicOperationsFunctions.ts");


class SubNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        return Object(_utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["Resta"])(this.lf.Exe(env), this.rt.Exe(env));
    }
}


/***/ }),

/***/ "./src/nodes/SumNode.ts":
/*!******************************!*\
  !*** ./src/nodes/SumNode.ts ***!
  \******************************/
/*! exports provided: SumNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SumNode", function() { return SumNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/AlgebraicOperationsFunctions */ "./src/utils/AlgebraicOperationsFunctions.ts");


class SumNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        return Object(_utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["Suma"])(this.lf.Exe(env), this.rt.Exe(env));
    }
}


/***/ }),

/***/ "./src/nodes/UndefinedNode.ts":
/*!************************************!*\
  !*** ./src/nodes/UndefinedNode.ts ***!
  \************************************/
/*! exports provided: UndefinedNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UndefinedNode", function() { return UndefinedNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");


class UndefinedNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor() {
        super();
    }
    GO(env) {
        return new _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__["UNDEFINED"]();
    }
}


/***/ }),

/***/ "./src/utils/AlgebraicOperationsFunctions.ts":
/*!***************************************************!*\
  !*** ./src/utils/AlgebraicOperationsFunctions.ts ***!
  \***************************************************/
/*! exports provided: Suma, Resta, Multiplicacion, Division, Modulo, Potencia, Add, Sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Suma", function() { return Suma; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resta", function() { return Resta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Multiplicacion", function() { return Multiplicacion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Division", function() { return Division; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modulo", function() { return Modulo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Potencia", function() { return Potencia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Add", function() { return Add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sub", function() { return Sub; });
/* harmony import */ var _Reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reference */ "./src/utils/Reference.ts");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "./src/utils/Utils.ts");
/* harmony import */ var _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");



function Suma(lf, rt) {
    lf instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? lf = lf.getValue() : lf;
    rt instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? rt = rt.getValue() : rt;
    try {
        return Sumar(lf, rt);
    }
    catch (e) {
        throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"](`Operacion entre tipos ( ${lf.typo} + ${rt.typo} ) no permitida.`);
    }
    function Sumar(lf, rt) {
        switch (true) {
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](lf.getValue() + rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](lf.getValue() + rt.getValueNumber());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"](lf.getValue() + rt.getValue());
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](lf.getValueNumber() + rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](lf.getValueNumber() + rt.getValueNumber());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"](lf.getValue() + rt.getValue());
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"](lf.getValue() + rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"](lf.getValue() + rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"](lf.getValue() + rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["UNDEFINED"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"](lf.getValue() + rt);
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NULL"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"](lf.getValue() + rt);
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["UNDEFINED"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"](lf + rt.getValue());
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NULL"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"](lf + rt.getValue());
                    default:
                        throw new Error();
                }
            default:
                throw new Error();
        }
    }
}
function Resta(lf, rt) {
    lf instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? lf = lf.getValue() : lf;
    rt instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? rt = rt.getValue() : rt;
    try {
        return Restar(lf, rt);
    }
    catch (e) {
        throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"](`Operacion entre tipos ( ${lf.typo} - ${rt.typo} ) no permitida.`);
    }
    function Restar(lf, rt) {
        switch (true) {
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](lf.getValue() - rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](lf.getValue() - rt.getValueNumber());
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](lf.getValueNumber() - rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](lf.getValueNumber() - rt.getValueNumber());
                    default:
                        throw new Error();
                }
            default:
                throw new Error();
        }
    }
}
function Multiplicacion(lf, rt) {
    lf instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? lf = lf.getValue() : lf;
    rt instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? rt = rt.getValue() : rt;
    try {
        return Multiplicar(lf, rt);
    }
    catch (e) {
        throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"](`Operacion entre tipos ( ${lf.typo} * ${rt.typo} ) no permitida.`);
    }
    function Multiplicar(lf, rt) {
        switch (true) {
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](lf.getValue() * rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](lf.getValue() * rt.getValueNumber());
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](lf.getValueNumber() * rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](lf.getValueNumber() * rt.getValueNumber());
                    default:
                        throw new Error();
                }
            default:
                throw new Error();
        }
    }
}
function Division(lf, rt) {
    lf instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? lf = lf.getValue() : lf;
    rt instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? rt = rt.getValue() : rt;
    if (rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]) {
        if (rt.getValue() === 0) {
            throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"]('Operación no válida, no se puede dividir entre 0');
        }
    }
    else if (rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]) {
        if (rt.getValueNumber() === 0) {
            throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"]('Operación no válida, no se puede dividir entre 0');
        }
    }
    try {
        return Dividir(lf, rt);
    }
    catch (e) {
        throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"](`Operacion entre tipos ( ${lf.typo} / ${rt.typo} ) no permitida.`);
    }
    function Dividir(lf, rt) {
        switch (true) {
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](lf.getValue() / rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](lf.getValue() / rt.getValueNumber());
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](lf.getValueNumber() / rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](lf.getValueNumber() / rt.getValueNumber());
                    default:
                        throw new Error();
                }
            default:
                throw new Error();
        }
    }
}
function Modulo(lf, rt) {
    lf instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? lf = lf.getValue() : lf;
    rt instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? rt = rt.getValue() : rt;
    try {
        return Mod(lf, rt);
    }
    catch (e) {
        throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"](`Operacion entre tipos ( ${lf.typo} % ${rt.typo} ) no permitida.`);
    }
    function Mod(lf, rt) {
        switch (true) {
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](lf.getValue() % rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](lf.getValue() % rt.getValueNumber());
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](lf.getValueNumber() % rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](lf.getValueNumber() % rt.getValueNumber());
                    default:
                        throw new Error();
                }
            default:
                throw new Error();
        }
    }
}
function Potencia(lf, rt) {
    lf instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? lf = lf.getValue() : lf;
    rt instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? rt = rt.getValue() : rt;
    try {
        return Pot(lf, rt);
    }
    catch (e) {
        throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"](`Operacion entre tipos ( ${lf.typo} ^ ${rt.typo} ) no permitida.`);
    }
    function Pot(lf, rt) {
        switch (true) {
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](Math.pow(lf.getValue(), rt.getValue()));
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](Math.pow(lf.getValue(), rt.getValueNumber()));
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](Math.pow(lf.getValueNumber(), rt.getValue()));
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](Math.pow(lf.getValueNumber(), rt.getValueNumber()));
                    default:
                        throw new Error();
                }
            default:
                throw new Error();
        }
    }
}
function Add(lf) {
    if (!(lf instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"])) {
        throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"]("Operacion {ref++} permitida solamente sobre referencas");
    }
    const val = lf.getValue();
    if (val instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]) {
        lf.setValue(new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](val.getValue() + 1));
        return val;
    }
    throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"]("Operacion {ref++} No se puede realizar sobre variables distintas de tipo number");
}
function Sub(lf) {
    if (!(lf instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"])) {
        throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"]("Operacion {ref--} permitida solamente sobre referencas");
    }
    const val = lf.getValue();
    if (val instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]) {
        lf.setValue(new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"](val.getValue() - 1));
        return val;
    }
    throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"]("Operacion {ref--} No se puede realizar sobre variables distintas de tipo number");
}


/***/ }),

/***/ "./src/utils/Cntnr.ts":
/*!****************************!*\
  !*** ./src/utils/Cntnr.ts ***!
  \****************************/
/*! exports provided: Cntnr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cntnr", function() { return Cntnr; });
class Cntnr {
    constructor(owner) {
        this.props = new Map();
        this.owner = owner || null;
    }
    AsObjectProps() {
        let ans = "--------------------------------\n";
        this.props.forEach((v, k) => {
            ans += k + ' => ' + v + '\n';
        });
        ans += "--------------------------------\n";
        return ans;
    }
    AddProperty(id, cntnr) {
        id = id.toUpperCase();
        this.props.set(id, cntnr);
    }
    GetProperty(id) {
        id = id.toUpperCase();
        const val = this.props.get(id);
        if (val !== null && val !== undefined) {
            return val;
        }
        //this.props.set(id, new Reference());
        //return this.props.get(id);
        return undefined;
    }
    Declare(id, cntnr) {
        id = id.toUpperCase();
        this.props.set(id, cntnr);
    }
    GetTypo() {
        return this.typo;
    }
    SetTypo(typo) {
        this.typo = typo;
    }
    GetOwner() {
        return this.owner;
    }
}


/***/ }),

/***/ "./src/utils/Console.ts":
/*!******************************!*\
  !*** ./src/utils/Console.ts ***!
  \******************************/
/*! exports provided: Console */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Console", function() { return Console; });
class Console {
}
Console.log = '';


/***/ }),

/***/ "./src/utils/Envmnt.ts":
/*!*****************************!*\
  !*** ./src/utils/Envmnt.ts ***!
  \*****************************/
/*! exports provided: Envmnt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Envmnt", function() { return Envmnt; });
/* harmony import */ var _Cntnr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cntnr */ "./src/utils/Cntnr.ts");

class Envmnt extends _Cntnr__WEBPACK_IMPORTED_MODULE_0__["Cntnr"] {
    constructor(owner, operations) {
        super(owner);
        this.Extra = new Map();
        this.operations = operations;
        this.typo = "Ambito";
    }
    GO_ALL() {
        for (let op of this.operations) {
            try {
                let result = op.Exe(this);
                //TODO añadir validacion de Break y Return
                /*
                   if(result instanceof BreakObj || result instanceof ReturnObj){
                        return (Cntnr) result;
                   }
                */
            }
            catch (e) {
                console.log(e.message);
            }
        }
        return null;
    }
}


/***/ }),

/***/ "./src/utils/LogicalOperationsFunctions.ts":
/*!*************************************************!*\
  !*** ./src/utils/LogicalOperationsFunctions.ts ***!
  \*************************************************/
/*! exports provided: Or, And, Not */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Or", function() { return Or; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "And", function() { return And; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Not", function() { return Not; });
/* harmony import */ var _Reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reference */ "./src/utils/Reference.ts");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "./src/utils/Utils.ts");
/* harmony import */ var _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");



function Or(lf, rt) {
    lf instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? lf = lf.getValue() : lf;
    rt instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? rt = rt.getValue() : rt;
    try {
        return or(lf, rt);
    }
    catch (e) {
        throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"](`Operacion entre tipos ( ${lf.typo} || ${rt.typo} ) no permitida.`);
    }
    function or(lf, rt) {
        switch (true) {
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValue() || rt.getValue());
                    default:
                        throw new Error();
                }
            default:
                throw new Error();
        }
    }
}
function And(lf, rt) {
    lf instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? lf = lf.getValue() : lf;
    rt instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? rt = rt.getValue() : rt;
    try {
        return and(lf, rt);
    }
    catch (e) {
        throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"](`Operacion entre tipos ( ${lf.typo} && ${rt.typo} ) no permitida.`);
    }
    function and(lf, rt) {
        switch (true) {
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValue() && rt.getValue());
                    default:
                        throw new Error();
                }
            default:
                throw new Error();
        }
    }
}
function Not(lf) {
    lf instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? lf = lf.getValue() : lf;
    try {
        return not(lf);
    }
    catch (e) {
        throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"](`Operacion entre tipos ( ! ${lf.typo} ) no permitida.`);
    }
    function not(lf) {
        switch (true) {
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](!lf.getValue());
            default:
                throw new Error();
        }
    }
}


/***/ }),

/***/ "./src/utils/Op.ts":
/*!*************************!*\
  !*** ./src/utils/Op.ts ***!
  \*************************/
/*! exports provided: Op */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Op", function() { return Op; });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "./src/utils/Utils.ts");

class Op {
    Exe(env) {
        try {
            return this.GO(env);
        }
        catch (e) {
            throw new _Utils__WEBPACK_IMPORTED_MODULE_0__["ErrorCompo"](e.message);
        }
    }
}


/***/ }),

/***/ "./src/utils/PrimitiveTypoContainer.ts":
/*!*********************************************!*\
  !*** ./src/utils/PrimitiveTypoContainer.ts ***!
  \*********************************************/
/*! exports provided: BOOLEAN, STRING, NUMBER, UNDEFINED, NAN, NULL, ARRAY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOOLEAN", function() { return BOOLEAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STRING", function() { return STRING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMBER", function() { return NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNDEFINED", function() { return UNDEFINED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAN", function() { return NAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NULL", function() { return NULL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARRAY", function() { return ARRAY; });
/* harmony import */ var _Cntnr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cntnr */ "./src/utils/Cntnr.ts");
/* harmony import */ var _Reference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reference */ "./src/utils/Reference.ts");
/* harmony import */ var _nativeFunctions_length__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nativeFunctions/length */ "./src/utils/nativeFunctions/length.ts");
/* harmony import */ var _nativeFunctions_push__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nativeFunctions/push */ "./src/utils/nativeFunctions/push.ts");




class BOOLEAN extends _Cntnr__WEBPACK_IMPORTED_MODULE_0__["Cntnr"] {
    constructor(value) {
        super();
        this.toString = () => {
            return this.value ? "true" : "false";
        };
        this.getValueNumber = () => {
            return this.value ? 1 : 0;
        };
        this.getValue = () => {
            return this.value;
        };
        this.value = value;
        this.typo = "BOOLEAN";
    }
}
class STRING extends _Cntnr__WEBPACK_IMPORTED_MODULE_0__["Cntnr"] {
    constructor(value) {
        super();
        this.toString = () => {
            return this.value;
        };
        this.getValue = () => {
            return this.value;
        };
        this.value = value || '';
        this.typo = "STRING";
    }
}
class NUMBER extends _Cntnr__WEBPACK_IMPORTED_MODULE_0__["Cntnr"] {
    constructor(value) {
        super();
        this.toString = () => {
            return this.value + '';
        };
        this.getValue = () => {
            return this.value;
        };
        this.value = value || 0;
        this.typo = "NUMBER";
    }
}
class UNDEFINED extends _Cntnr__WEBPACK_IMPORTED_MODULE_0__["Cntnr"] {
    constructor() {
        super();
        this.toString = () => {
            return "undefined";
        };
        this.typo = "UNDEFINED";
    }
}
class NAN extends _Cntnr__WEBPACK_IMPORTED_MODULE_0__["Cntnr"] {
    constructor() {
        super();
        this.toString = () => {
            return "NaN";
        };
        this.typo = "NAN";
    }
}
class NULL extends _Cntnr__WEBPACK_IMPORTED_MODULE_0__["Cntnr"] {
    constructor() {
        super();
        this.toString = () => {
            return null;
        };
        this.getValue = () => {
            return null;
        };
        this.typo = "NULL";
    }
}
class ARRAY extends _Cntnr__WEBPACK_IMPORTED_MODULE_0__["Cntnr"] {
    constructor(value, contentType = 'ANY') {
        super();
        this.toString = () => {
            const size = this.value.length;
            let log = `Array (${size}) [`;
            for (let i = 0; i < size; i++) {
                log += `${this.value[i].getValue()}`;
                if (size - 1 !== i) {
                    log += ', ';
                }
            }
            log += ']';
            return log;
        };
        this.getValue = (index) => {
            let val = this.value[index];
            if (val !== undefined) {
                return val;
            }
            let size = this.value.length;
            while (size <= index) {
                this.value.push(new _Reference__WEBPACK_IMPORTED_MODULE_1__["Reference"]());
                size++;
            }
            return this.value[index];
        };
        this.getValueList = () => {
            return this.value;
        };
        this.value = value || new Array();
        this.typo = `ARRAY`;
        this.contentType = contentType;
        try {
            this.Declare("length", new _nativeFunctions_length__WEBPACK_IMPORTED_MODULE_2__["Length"](this));
            this.Declare("push", new _nativeFunctions_push__WEBPACK_IMPORTED_MODULE_3__["Push"](this));
        }
        catch (e) {
            throw new Error();
        }
    }
    addValue(value) {
        this.value.push(value);
    }
}


/***/ }),

/***/ "./src/utils/Reference.ts":
/*!********************************!*\
  !*** ./src/utils/Reference.ts ***!
  \********************************/
/*! exports provided: Reference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reference", function() { return Reference; });
/* harmony import */ var _Cntnr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cntnr */ "./src/utils/Cntnr.ts");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "./src/utils/Utils.ts");
/* harmony import */ var _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");



class Reference extends _Cntnr__WEBPACK_IMPORTED_MODULE_0__["Cntnr"] {
    constructor(tipoNombre = 'ANY', isConst = false) {
        super();
        this.isConst = false;
        this.tipoNombre = 'any';
        this.getReferenceValue = () => {
            return this.tipoNombre.toUpperCase();
        };
        this.toString = () => {
            return this.value.toString();
        };
        this.getValue = () => {
            return this.value;
        };
        this.setValue = (value) => {
            this.value = value;
        };
        this.Call = (args) => {
            for (let arg of args) {
                console.log(arg);
            }
            return null;
        };
        this.typo = "REFERENCE";
        this.value = Object(_Utils__WEBPACK_IMPORTED_MODULE_1__["DefaultValue"])(tipoNombre);
        this.tipoNombre = tipoNombre;
        this.isConst = isConst;
    }
    PutValueOnReference(value) {
        if (this.isConst && !(this.value instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["UNDEFINED"])) {
            throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"]('No se puede cambiar el valor de una constante');
        }
        let v;
        if (value instanceof Reference) {
            v = value.value;
        }
        else {
            v = value;
        }
        if (this.tipoNombre !== v.typo
            && this.tipoNombre !== 'ANY'
            && v.typo !== 'NULL'
            && v.typo !== 'UNDEFINED') {
            throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"](`Tipo ${v.typo} no puede ser asignado a Variable de tipo ${this.tipoNombre}`);
        }
        this.value = v;
    }
}


/***/ }),

/***/ "./src/utils/RelationalOperationsFunctions.ts":
/*!****************************************************!*\
  !*** ./src/utils/RelationalOperationsFunctions.ts ***!
  \****************************************************/
/*! exports provided: Igual, Diferente, Mayor, Menor, MayorEq, MenorEq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Igual", function() { return Igual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Diferente", function() { return Diferente; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mayor", function() { return Mayor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menor", function() { return Menor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MayorEq", function() { return MayorEq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenorEq", function() { return MenorEq; });
/* harmony import */ var _Reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reference */ "./src/utils/Reference.ts");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "./src/utils/Utils.ts");
/* harmony import */ var _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");



function Igual(lf, rt) {
    lf instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? lf = lf.getValue() : lf;
    rt instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? rt = rt.getValue() : rt;
    try {
        return Eq(lf, rt);
    }
    catch (e) {
        throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"](`Operacion entre tipos ( ${lf.typo} == ${rt.typo} ) no permitida.`);
    }
    function Eq(lf, rt) {
        switch (true) {
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValue() === rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValue() === rt.getValueNumber());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NULL"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["UNDEFINED"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValueNumber() == rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValueNumber() == rt.getValueNumber());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NULL"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["UNDEFINED"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValue() === rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NULL"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["UNDEFINED"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["UNDEFINED"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["UNDEFINED"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](true);
                    default:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NULL"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NULL"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](true);
                    default:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NAN"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](true);
                    default:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                }
        }
    }
}
function Diferente(lf, rt) {
    lf instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? lf = lf.getValue() : lf;
    rt instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? rt = rt.getValue() : rt;
    try {
        return Dif(lf, rt);
    }
    catch (e) {
        throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"](`Operacion entre tipos ( ${lf.typo} == ${rt.typo} ) no permitida.`);
    }
    function Dif(lf, rt) {
        switch (true) {
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValue() !== rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValue() !== rt.getValueNumber());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NULL"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](true);
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["UNDEFINED"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](true);
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](true);
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValueNumber() != rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValueNumber() != rt.getValueNumber());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NULL"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](true);
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["UNDEFINED"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](true);
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](true);
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValue() !== rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NULL"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](true);
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["UNDEFINED"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](true);
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["UNDEFINED"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["UNDEFINED"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                    default:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](true);
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NULL"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NULL"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                    default:
                        throw new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](true);
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NAN"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                    default:
                        throw new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](true);
                }
            default:
                throw new Error();
        }
    }
}
function Mayor(lf, rt) {
    lf instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? lf = lf.getValue() : lf;
    rt instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? rt = rt.getValue() : rt;
    try {
        return May(lf, rt);
    }
    catch (e) {
        throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"](`Operacion entre tipos ( ${lf.typo} > ${rt.typo} ) no permitida.`);
    }
    function May(lf, rt) {
        switch (true) {
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValue() > rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValue() > rt.getValueNumber());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValueNumber() > rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValueNumber() > rt.getValueNumber());
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValue() > rt.getValue());
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NAN"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                    default:
                        throw new Error();
                }
            default:
                throw new Error();
        }
    }
}
function Menor(lf, rt) {
    lf instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? lf = lf.getValue() : lf;
    rt instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? rt = rt.getValue() : rt;
    try {
        return Min(lf, rt);
    }
    catch (e) {
        throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"](`Operacion entre tipos ( ${lf.typo} < ${rt.typo} ) no permitida.`);
    }
    function Min(lf, rt) {
        switch (true) {
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValue() < rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValue() < rt.getValueNumber());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValueNumber() < rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValueNumber() < rt.getValueNumber());
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValue() < rt.getValue());
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NAN"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                    default:
                        throw new Error();
                }
            default:
                throw new Error();
        }
    }
}
function MayorEq(lf, rt) {
    lf instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? lf = lf.getValue() : lf;
    rt instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? rt = rt.getValue() : rt;
    try {
        return MayEq(lf, rt);
    }
    catch (e) {
        throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"](`Operacion entre tipos ( ${lf.typo} >= ${rt.typo} ) no permitida.`);
    }
    function MayEq(lf, rt) {
        switch (true) {
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValue() >= rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValue() >= rt.getValueNumber());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValueNumber() >= rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValueNumber() >= rt.getValueNumber());
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValue() >= rt.getValue());
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NAN"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                    default:
                        throw new Error();
                }
            default:
                throw new Error();
        }
    }
}
function MenorEq(lf, rt) {
    lf instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? lf = lf.getValue() : lf;
    rt instanceof _Reference__WEBPACK_IMPORTED_MODULE_0__["Reference"] ? rt = rt.getValue() : rt;
    try {
        return MinEq(lf, rt);
    }
    catch (e) {
        throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"](`Operacion entre tipos ( ${lf.typo} >= ${rt.typo} ) no permitida.`);
    }
    function MinEq(lf, rt) {
        switch (true) {
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValue() <= rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValue() <= rt.getValueNumber());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValueNumber() <= rt.getValue());
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValueNumber() <= rt.getValueNumber());
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["STRING"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](lf.getValue() <= rt.getValue());
                    default:
                        throw new Error();
                }
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NAN"]:
                switch (true) {
                    case rt instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["NUMBER"]:
                        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
                    default:
                        throw new Error();
                }
            default:
                throw new Error();
        }
    }
}


/***/ }),

/***/ "./src/utils/Utils.ts":
/*!****************************!*\
  !*** ./src/utils/Utils.ts ***!
  \****************************/
/*! exports provided: SemanticException, ErrorCompo, DefaultValue, FindVar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SemanticException", function() { return SemanticException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorCompo", function() { return ErrorCompo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultValue", function() { return DefaultValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindVar", function() { return FindVar; });
/* harmony import */ var _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");

class SemanticException extends Error {
    constructor(message) {
        super(message);
    }
}
class ErrorCompo extends Error {
    constructor(message) {
        super(message);
    }
}
function DefaultValue(typo) {
    switch (typo.toUpperCase()) {
        case "NULL":
            return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_0__["NULL"]();
        default:
            return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_0__["UNDEFINED"]();
    }
}
function FindVar(cont, identifier) {
    let ownerCntnr = cont;
    while (ownerCntnr != null) {
        if (ownerCntnr.GetProperty(identifier) !== null) {
            return ownerCntnr.GetProperty(identifier);
        }
        ownerCntnr = ownerCntnr.GetOwner();
    }
    throw new SemanticException(`identificador ${identifier} no encontrado`);
}


/***/ }),

/***/ "./src/utils/functions/FunctionRepresent.ts":
/*!**************************************************!*\
  !*** ./src/utils/functions/FunctionRepresent.ts ***!
  \**************************************************/
/*! exports provided: FunctionRepresent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionRepresent", function() { return FunctionRepresent; });
/* harmony import */ var _Cntnr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Cntnr */ "./src/utils/Cntnr.ts");

class FunctionRepresent extends _Cntnr__WEBPACK_IMPORTED_MODULE_0__["Cntnr"] {
}


/***/ }),

/***/ "./src/utils/functions/Native.ts":
/*!***************************************!*\
  !*** ./src/utils/functions/Native.ts ***!
  \***************************************/
/*! exports provided: Native */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Native", function() { return Native; });
/* harmony import */ var _FunctionRepresent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FunctionRepresent */ "./src/utils/functions/FunctionRepresent.ts");

class Native extends _FunctionRepresent__WEBPACK_IMPORTED_MODULE_0__["FunctionRepresent"] {
}


/***/ }),

/***/ "./src/utils/nativeFunctions/length.ts":
/*!*********************************************!*\
  !*** ./src/utils/nativeFunctions/length.ts ***!
  \*********************************************/
/*! exports provided: Length */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Length", function() { return Length; });
/* harmony import */ var _functions_Native__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/Native */ "./src/utils/functions/Native.ts");
/* harmony import */ var _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");
/* harmony import */ var _nodes_ReturnObj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../nodes/ReturnObj */ "./src/nodes/ReturnObj.ts");



class Length extends _functions_Native__WEBPACK_IMPORTED_MODULE_0__["Native"] {
    constructor(array) {
        super();
        this.array = array;
    }
    EXE(env0, args) {
        let size = this.array.getValueList().length;
        return new _nodes_ReturnObj__WEBPACK_IMPORTED_MODULE_2__["ReturnObj"](new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__["NUMBER"](size));
    }
}


/***/ }),

/***/ "./src/utils/nativeFunctions/push.ts":
/*!*******************************************!*\
  !*** ./src/utils/nativeFunctions/push.ts ***!
  \*******************************************/
/*! exports provided: Push */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Push", function() { return Push; });
/* harmony import */ var _functions_Native__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/Native */ "./src/utils/functions/Native.ts");
/* harmony import */ var _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");
/* harmony import */ var _nodes_ReturnObj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../nodes/ReturnObj */ "./src/nodes/ReturnObj.ts");
/* harmony import */ var _Reference__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Reference */ "./src/utils/Reference.ts");




class Push extends _functions_Native__WEBPACK_IMPORTED_MODULE_0__["Native"] {
    constructor(array) {
        super();
        this.array = array;
    }
    EXE(env0, args) {
        let size = this.array.getValueList().length;
        for (let i in args) {
            let ref = new _Reference__WEBPACK_IMPORTED_MODULE_3__["Reference"]();
            ref.setValue(args[i]);
            this.array.addValue(ref);
        }
        return new _nodes_ReturnObj__WEBPACK_IMPORTED_MODULE_2__["ReturnObj"](new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__["NUMBER"](size));
    }
}


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hc3Qvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2FzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hc3QvKHdlYnBhY2spL2J1aWxkaW4vaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9BbmROb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9Bc2lnbk5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL0Jvb2xlYW5Ob2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9Db25zb2xlTG9nTm9kZS50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvbm9kZXMvQ3JlYXRlQXJyVmFyTm9kZS50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvbm9kZXMvQ3JlYXRlQXJyYXlOb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9DcmVhdGVJZFZhck5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL0NyZWF0ZU9iakZ1bk5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL0NyZWF0ZU9ialZhck5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL0RlY2xhcmVWYXJMaXN0Tm9kZS50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvbm9kZXMvRGVjbGFyZVZhck5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL0RpZk5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL0Rpdk5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL0VxTm9kZS50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvbm9kZXMvRXhwTm9kZS50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvbm9kZXMvSGlnaGVyRXFOb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9IaWdoZXJOb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9NaW5vckVxTm9kZS50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvbm9kZXMvTWlub3JOb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9Nb2ROb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9NdWxOb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9Ob3ROb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9OdWxsTm9kZS50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvbm9kZXMvTnVtYmVyTm9kZS50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvbm9kZXMvT3JOb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9SZUFkZE5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL1JlQXNpZ25BZGROb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9SZUFzaWduRGl2Tm9kZS50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvbm9kZXMvUmVBc2lnbk1vZE5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL1JlQXNpZ25NdWxOb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9SZUFzaWduU3ViTm9kZS50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvbm9kZXMvUmVTdWJOb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9SZXR1cm5PYmoudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL1N0cmluZ05vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL1N1Yk5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL1N1bU5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL1VuZGVmaW5lZE5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL3V0aWxzL0FsZ2VicmFpY09wZXJhdGlvbnNGdW5jdGlvbnMudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL3V0aWxzL0NudG5yLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy91dGlscy9Db25zb2xlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy91dGlscy9FbnZtbnQudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL3V0aWxzL0xvZ2ljYWxPcGVyYXRpb25zRnVuY3Rpb25zLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy91dGlscy9PcC50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvdXRpbHMvUHJpbWl0aXZlVHlwb0NvbnRhaW5lci50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvdXRpbHMvUmVmZXJlbmNlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy91dGlscy9SZWxhdGlvbmFsT3BlcmF0aW9uc0Z1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvdXRpbHMvVXRpbHMudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL3V0aWxzL2Z1bmN0aW9ucy9GdW5jdGlvblJlcHJlc2VudC50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvdXRpbHMvZnVuY3Rpb25zL05hdGl2ZS50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvdXRpbHMvbmF0aXZlRnVuY3Rpb25zL2xlbmd0aC50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvdXRpbHMvbmF0aXZlRnVuY3Rpb25zL3B1c2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsR0FBRzs7UUFFSDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7O1FBRUw7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsNkJBQTZCO1FBQzdCLDZCQUE2QjtRQUM3QjtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHFCQUFxQixnQkFBZ0I7UUFDckM7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQSxxQkFBcUIsZ0JBQWdCO1FBQ3JDO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7O1FBRUw7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0EsS0FBSzs7UUFFTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0Esa0JBQWtCLDhCQUE4QjtRQUNoRDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNB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QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRDO0FBQ21CO0FBQ3pCO0FBQ0Y7QUFDTjtBQUNVO0FBRWM7QUFDUjtBQUNBO0FBQ0k7QUFDTjtBQUNVO0FBQ0U7QUFDUTtBQUNOO0FBQ1o7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRjtBQUNFO0FBQ007QUFDRjtBQUNNO0FBQ0Y7QUFDVjtBQUNFO0FBQ0E7QUFDYztBQUNB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WUFBWSxLQUFZO1FBQ3BCLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUFZLEVBQUUsSUFBa0I7UUFDaEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDNUMsS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDaEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxvREFBUyxFQUFFLENBQUM7WUFDMUIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUM1QjtRQUNELE9BQU8sSUFBSSwwREFBUyxDQUFDLElBQUksOERBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Q0FDSiIsImZpbGUiOiJub2Rlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImFzdFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJhc3RcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHRmdW5jdGlvbiBob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0fVxuIFx0dmFyIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrID0gdGhpc1tcIndlYnBhY2tIb3RVcGRhdGVhc3RcIl07XG4gXHR0aGlzW1wid2VicGFja0hvdFVwZGF0ZWFzdFwiXSA9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gd2VicGFja0hvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdFx0aWYgKHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKSBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHR9IDtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gXHRcdHNjcmlwdC5jaGFyc2V0ID0gXCJ1dGYtOFwiO1xuIFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc1wiO1xuIFx0XHRpZiAobnVsbCkgc2NyaXB0LmNyb3NzT3JpZ2luID0gbnVsbDtcbiBcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkTWFuaWZlc3QocmVxdWVzdFRpbWVvdXQpIHtcbiBcdFx0cmVxdWVzdFRpbWVvdXQgPSByZXF1ZXN0VGltZW91dCB8fCAxMDAwMDtcbiBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgPT09IFwidW5kZWZpbmVkXCIpIHtcbiBcdFx0XHRcdHJldHVybiByZWplY3QobmV3IEVycm9yKFwiTm8gYnJvd3NlciBzdXBwb3J0XCIpKTtcbiBcdFx0XHR9XG4gXHRcdFx0dHJ5IHtcbiBcdFx0XHRcdHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gXHRcdFx0XHR2YXIgcmVxdWVzdFBhdGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzb25cIjtcbiBcdFx0XHRcdHJlcXVlc3Qub3BlbihcIkdFVFwiLCByZXF1ZXN0UGF0aCwgdHJ1ZSk7XG4gXHRcdFx0XHRyZXF1ZXN0LnRpbWVvdXQgPSByZXF1ZXN0VGltZW91dDtcbiBcdFx0XHRcdHJlcXVlc3Quc2VuZChudWxsKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdHJldHVybiByZWplY3QoZXJyKTtcbiBcdFx0XHR9XG4gXHRcdFx0cmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdGlmIChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHJldHVybjtcbiBcdFx0XHRcdGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCkge1xuIFx0XHRcdFx0XHQvLyB0aW1lb3V0XG4gXHRcdFx0XHRcdHJlamVjdChcbiBcdFx0XHRcdFx0XHRuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiB0aW1lZCBvdXQuXCIpXG4gXHRcdFx0XHRcdCk7XG4gXHRcdFx0XHR9IGVsc2UgaWYgKHJlcXVlc3Quc3RhdHVzID09PSA0MDQpIHtcbiBcdFx0XHRcdFx0Ly8gbm8gdXBkYXRlIGF2YWlsYWJsZVxuIFx0XHRcdFx0XHRyZXNvbHZlKCk7XG4gXHRcdFx0XHR9IGVsc2UgaWYgKHJlcXVlc3Quc3RhdHVzICE9PSAyMDAgJiYgcmVxdWVzdC5zdGF0dXMgIT09IDMwNCkge1xuIFx0XHRcdFx0XHQvLyBvdGhlciBmYWlsdXJlXG4gXHRcdFx0XHRcdHJlamVjdChuZXcgRXJyb3IoXCJNYW5pZmVzdCByZXF1ZXN0IHRvIFwiICsgcmVxdWVzdFBhdGggKyBcIiBmYWlsZWQuXCIpKTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdC8vIHN1Y2Nlc3NcbiBcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHR2YXIgdXBkYXRlID0gSlNPTi5wYXJzZShyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHtcbiBcdFx0XHRcdFx0XHRyZWplY3QoZSk7XG4gXHRcdFx0XHRcdFx0cmV0dXJuO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdHJlc29sdmUodXBkYXRlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9O1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0dmFyIGhvdEFwcGx5T25VcGRhdGUgPSB0cnVlO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudEhhc2ggPSBcIjFiOTc2MjIwZTg4NDA3ODg0YWQxXCI7XG4gXHR2YXIgaG90UmVxdWVzdFRpbWVvdXQgPSAxMDAwMDtcbiBcdHZhciBob3RDdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xuIFx0dmFyIGhvdEN1cnJlbnRDaGlsZE1vZHVsZTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50UGFyZW50c1RlbXAgPSBbXTtcblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSB7XG4gXHRcdHZhciBtZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRpZiAoIW1lKSByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXztcbiBcdFx0dmFyIGZuID0gZnVuY3Rpb24ocmVxdWVzdCkge1xuIFx0XHRcdGlmIChtZS5ob3QuYWN0aXZlKSB7XG4gXHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xuIFx0XHRcdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpID09PSAtMSkge1xuIFx0XHRcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cy5wdXNoKG1vZHVsZUlkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPT09IC0xKSB7XG4gXHRcdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdGNvbnNvbGUud2FybihcbiBcdFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgK1xuIFx0XHRcdFx0XHRcdHJlcXVlc3QgK1xuIFx0XHRcdFx0XHRcdFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdCk7XG4gXHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFtdO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhyZXF1ZXN0KTtcbiBcdFx0fTtcbiBcdFx0dmFyIE9iamVjdEZhY3RvcnkgPSBmdW5jdGlvbiBPYmplY3RGYWN0b3J5KG5hbWUpIHtcbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdO1xuIFx0XHRcdFx0fSxcbiBcdFx0XHRcdHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiBcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfX1tuYW1lXSA9IHZhbHVlO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH07XG4gXHRcdGZvciAodmFyIG5hbWUgaW4gX193ZWJwYWNrX3JlcXVpcmVfXykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfX3dlYnBhY2tfcmVxdWlyZV9fLCBuYW1lKSAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJlXCIgJiZcbiBcdFx0XHRcdG5hbWUgIT09IFwidFwiXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIG5hbWUsIE9iamVjdEZhY3RvcnkobmFtZSkpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRmbi5lID0gZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicmVhZHlcIikgaG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHRob3RDaHVua3NMb2FkaW5nKys7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZShjaHVua0lkKS50aGVuKGZpbmlzaENodW5rTG9hZGluZywgZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRmaW5pc2hDaHVua0xvYWRpbmcoKTtcbiBcdFx0XHRcdHRocm93IGVycjtcbiBcdFx0XHR9KTtcblxuIFx0XHRcdGZ1bmN0aW9uIGZpbmlzaENodW5rTG9hZGluZygpIHtcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmctLTtcbiBcdFx0XHRcdGlmIChob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiKSB7XG4gXHRcdFx0XHRcdGlmICghaG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiYgaG90V2FpdGluZ0ZpbGVzID09PSAwKSB7XG4gXHRcdFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9O1xuIFx0XHRmbi50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0XHRpZiAobW9kZSAmIDEpIHZhbHVlID0gZm4odmFsdWUpO1xuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLnQodmFsdWUsIG1vZGUgJiB+MSk7XG4gXHRcdH07XG4gXHRcdHJldHVybiBmbjtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIGhvdCA9IHtcbiBcdFx0XHQvLyBwcml2YXRlIHN0dWZmXG4gXHRcdFx0X2FjY2VwdGVkRGVwZW5kZW5jaWVzOiB7fSxcbiBcdFx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9zZWxmQWNjZXB0ZWQ6IGZhbHNlLFxuIFx0XHRcdF9zZWxmRGVjbGluZWQ6IGZhbHNlLFxuIFx0XHRcdF9zZWxmSW52YWxpZGF0ZWQ6IGZhbHNlLFxuIFx0XHRcdF9kaXNwb3NlSGFuZGxlcnM6IFtdLFxuIFx0XHRcdF9tYWluOiBob3RDdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkLFxuXG4gXHRcdFx0Ly8gTW9kdWxlIEFQSVxuIFx0XHRcdGFjdGl2ZTogdHJ1ZSxcbiBcdFx0XHRhY2NlcHQ6IGZ1bmN0aW9uKGRlcCwgY2FsbGJhY2spIHtcbiBcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmQWNjZXB0ZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJmdW5jdGlvblwiKSBob3QuX3NlbGZBY2NlcHRlZCA9IGRlcDtcbiBcdFx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwib2JqZWN0XCIpXG4gXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0XHRlbHNlIGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCkge307XG4gXHRcdFx0fSxcbiBcdFx0XHRkZWNsaW5lOiBmdW5jdGlvbihkZXApIHtcbiBcdFx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmRGVjbGluZWQgPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBbaV1dID0gdHJ1ZTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRpc3Bvc2U6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZERpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVEaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90Ll9kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcbiBcdFx0XHRpbnZhbGlkYXRlOiBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdHRoaXMuX3NlbGZJbnZhbGlkYXRlZCA9IHRydWU7XG4gXHRcdFx0XHRzd2l0Y2ggKGhvdFN0YXR1cykge1xuIFx0XHRcdFx0XHRjYXNlIFwiaWRsZVwiOlxuIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZSA9IHt9O1xuIFx0XHRcdFx0XHRcdGhvdFVwZGF0ZVttb2R1bGVJZF0gPSBtb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0XHRob3RTZXRTdGF0dXMoXCJyZWFkeVwiKTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcInJlYWR5XCI6XG4gXHRcdFx0XHRcdFx0aG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZShtb2R1bGVJZCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJwcmVwYXJlXCI6XG4gXHRcdFx0XHRcdGNhc2UgXCJjaGVja1wiOlxuIFx0XHRcdFx0XHRjYXNlIFwiZGlzcG9zZVwiOlxuIFx0XHRcdFx0XHRjYXNlIFwiYXBwbHlcIjpcbiBcdFx0XHRcdFx0XHQoaG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID1cbiBcdFx0XHRcdFx0XHRcdGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyB8fCBbXSkucHVzaChtb2R1bGVJZCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGRlZmF1bHQ6XG4gXHRcdFx0XHRcdFx0Ly8gaWdub3JlIHJlcXVlc3RzIGluIGVycm9yIHN0YXRlc1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH0sXG5cbiBcdFx0XHQvLyBNYW5hZ2VtZW50IEFQSVxuIFx0XHRcdGNoZWNrOiBob3RDaGVjayxcbiBcdFx0XHRhcHBseTogaG90QXBwbHksXG4gXHRcdFx0c3RhdHVzOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHRpZiAoIWwpIHJldHVybiBob3RTdGF0dXM7XG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdHZhciBpZHggPSBob3RTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3RTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly9pbmhlcml0IGZyb20gcHJldmlvdXMgZGlzcG9zZSBjYWxsXG4gXHRcdFx0ZGF0YTogaG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdXG4gXHRcdH07XG4gXHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHVuZGVmaW5lZDtcbiBcdFx0cmV0dXJuIGhvdDtcbiBcdH1cblxuIFx0dmFyIGhvdFN0YXR1c0hhbmRsZXJzID0gW107XG4gXHR2YXIgaG90U3RhdHVzID0gXCJpZGxlXCI7XG5cbiBcdGZ1bmN0aW9uIGhvdFNldFN0YXR1cyhuZXdTdGF0dXMpIHtcbiBcdFx0aG90U3RhdHVzID0gbmV3U3RhdHVzO1xuIFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGhvdFN0YXR1c0hhbmRsZXJzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzW2ldLmNhbGwobnVsbCwgbmV3U3RhdHVzKTtcbiBcdH1cblxuIFx0Ly8gd2hpbGUgZG93bmxvYWRpbmdcbiBcdHZhciBob3RXYWl0aW5nRmlsZXMgPSAwO1xuIFx0dmFyIGhvdENodW5rc0xvYWRpbmcgPSAwO1xuIFx0dmFyIGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90QXZhaWxhYmxlRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3REZWZlcnJlZDtcblxuIFx0Ly8gVGhlIHVwZGF0ZSBpbmZvXG4gXHR2YXIgaG90VXBkYXRlLCBob3RVcGRhdGVOZXdIYXNoLCBob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXM7XG5cbiBcdGZ1bmN0aW9uIHRvTW9kdWxlSWQoaWQpIHtcbiBcdFx0dmFyIGlzTnVtYmVyID0gK2lkICsgXCJcIiA9PT0gaWQ7XG4gXHRcdHJldHVybiBpc051bWJlciA/ICtpZCA6IGlkO1xuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RDaGVjayhhcHBseSkge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcImlkbGVcIikge1xuIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImNoZWNrKCkgaXMgb25seSBhbGxvd2VkIGluIGlkbGUgc3RhdHVzXCIpO1xuIFx0XHR9XG4gXHRcdGhvdEFwcGx5T25VcGRhdGUgPSBhcHBseTtcbiBcdFx0aG90U2V0U3RhdHVzKFwiY2hlY2tcIik7XG4gXHRcdHJldHVybiBob3REb3dubG9hZE1hbmlmZXN0KGhvdFJlcXVlc3RUaW1lb3V0KS50aGVuKGZ1bmN0aW9uKHVwZGF0ZSkge1xuIFx0XHRcdGlmICghdXBkYXRlKSB7XG4gXHRcdFx0XHRob3RTZXRTdGF0dXMoaG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSA/IFwicmVhZHlcIiA6IFwiaWRsZVwiKTtcbiBcdFx0XHRcdHJldHVybiBudWxsO1xuIFx0XHRcdH1cbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcCA9IHt9O1xuIFx0XHRcdGhvdEF2YWlsYWJsZUZpbGVzTWFwID0gdXBkYXRlLmM7XG4gXHRcdFx0aG90VXBkYXRlTmV3SGFzaCA9IHVwZGF0ZS5oO1xuXG4gXHRcdFx0aG90U2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcbiBcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0aG90RGVmZXJyZWQgPSB7XG4gXHRcdFx0XHRcdHJlc29sdmU6IHJlc29sdmUsXG4gXHRcdFx0XHRcdHJlamVjdDogcmVqZWN0XG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdGhvdFVwZGF0ZSA9IHt9O1xuIFx0XHRcdHZhciBjaHVua0lkID0gXCJtYWluXCI7XG4gXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvbmUtYmxvY2tzXG4gXHRcdFx0e1xuIFx0XHRcdFx0aG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIgJiZcbiBcdFx0XHRcdGhvdENodW5rc0xvYWRpbmcgPT09IDAgJiZcbiBcdFx0XHRcdGhvdFdhaXRpbmdGaWxlcyA9PT0gMFxuIFx0XHRcdCkge1xuIFx0XHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXR1cm4gcHJvbWlzZTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSB8fCAhaG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0pXG4gXHRcdFx0cmV0dXJuO1xuIFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IGZhbHNlO1xuIFx0XHRmb3IgKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0aG90VXBkYXRlW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYgKC0taG90V2FpdGluZ0ZpbGVzID09PSAwICYmIGhvdENodW5rc0xvYWRpbmcgPT09IDApIHtcbiBcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90RW5zdXJlVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdKSB7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHRob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzKys7XG4gXHRcdFx0aG90RG93bmxvYWRVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RVcGRhdGVEb3dubG9hZGVkKCkge1xuIFx0XHRob3RTZXRTdGF0dXMoXCJyZWFkeVwiKTtcbiBcdFx0dmFyIGRlZmVycmVkID0gaG90RGVmZXJyZWQ7XG4gXHRcdGhvdERlZmVycmVkID0gbnVsbDtcbiBcdFx0aWYgKCFkZWZlcnJlZCkgcmV0dXJuO1xuIFx0XHRpZiAoaG90QXBwbHlPblVwZGF0ZSkge1xuIFx0XHRcdC8vIFdyYXAgZGVmZXJyZWQgb2JqZWN0IGluIFByb21pc2UgdG8gbWFyayBpdCBhcyBhIHdlbGwtaGFuZGxlZCBQcm9taXNlIHRvXG4gXHRcdFx0Ly8gYXZvaWQgdHJpZ2dlcmluZyB1bmNhdWdodCBleGNlcHRpb24gd2FybmluZyBpbiBDaHJvbWUuXG4gXHRcdFx0Ly8gU2VlIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ2NTY2NlxuIFx0XHRcdFByb21pc2UucmVzb2x2ZSgpXG4gXHRcdFx0XHQudGhlbihmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIGhvdEFwcGx5KGhvdEFwcGx5T25VcGRhdGUpO1xuIFx0XHRcdFx0fSlcbiBcdFx0XHRcdC50aGVuKFxuIFx0XHRcdFx0XHRmdW5jdGlvbihyZXN1bHQpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHJlc3VsdCk7XG4gXHRcdFx0XHRcdH0sXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKGVycikge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdChlcnIpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHQpO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbiBcdFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2godG9Nb2R1bGVJZChpZCkpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xuIFx0XHRpZiAoaG90U3RhdHVzICE9PSBcInJlYWR5XCIpXG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiYXBwbHkoKSBpcyBvbmx5IGFsbG93ZWQgaW4gcmVhZHkgc3RhdHVzXCIpO1xuIFx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiBcdFx0cmV0dXJuIGhvdEFwcGx5SW50ZXJuYWwob3B0aW9ucyk7XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEFwcGx5SW50ZXJuYWwob3B0aW9ucykge1xuIFx0XHRob3RBcHBseUludmFsaWRhdGVkTW9kdWxlcygpO1xuXG4gXHRcdHZhciBjYjtcbiBcdFx0dmFyIGk7XG4gXHRcdHZhciBqO1xuIFx0XHR2YXIgbW9kdWxlO1xuIFx0XHR2YXIgbW9kdWxlSWQ7XG5cbiBcdFx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRTdHVmZih1cGRhdGVNb2R1bGVJZCkge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuIFx0XHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG4gXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLm1hcChmdW5jdGlvbihpZCkge1xuIFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0Y2hhaW46IFtpZF0sXG4gXHRcdFx0XHRcdGlkOiBpZFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuIFx0XHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAoXG4gXHRcdFx0XHRcdCFtb2R1bGUgfHxcbiBcdFx0XHRcdFx0KG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCAmJiAhbW9kdWxlLmhvdC5fc2VsZkludmFsaWRhdGVkKVxuIFx0XHRcdFx0KVxuIFx0XHRcdFx0XHRjb250aW51ZTtcbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9zZWxmRGVjbGluZWQpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtZGVjbGluZWRcIixcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAobW9kdWxlLmhvdC5fbWFpbikge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwidW5hY2NlcHRlZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlLnBhcmVudHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudElkID0gbW9kdWxlLnBhcmVudHNbaV07XG4gXHRcdFx0XHRcdHZhciBwYXJlbnQgPSBpbnN0YWxsZWRNb2R1bGVzW3BhcmVudElkXTtcbiBcdFx0XHRcdFx0aWYgKCFwYXJlbnQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwiZGVjbGluZWRcIixcbiBcdFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRwYXJlbnRJZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmIChvdXRkYXRlZE1vZHVsZXMuaW5kZXhPZihwYXJlbnRJZCkgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuIFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdKVxuIFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdID0gW107XG4gXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdLCBbbW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0XHRjb250aW51ZTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChwYXJlbnRJZCk7XG4gXHRcdFx0XHRcdHF1ZXVlLnB1c2goe1xuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbi5jb25jYXQoW3BhcmVudElkXSksXG4gXHRcdFx0XHRcdFx0aWQ6IHBhcmVudElkXG4gXHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cblxuIFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHR0eXBlOiBcImFjY2VwdGVkXCIsXG4gXHRcdFx0XHRtb2R1bGVJZDogdXBkYXRlTW9kdWxlSWQsXG4gXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXM6IG91dGRhdGVkTW9kdWxlcyxcbiBcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzOiBvdXRkYXRlZERlcGVuZGVuY2llc1xuIFx0XHRcdH07XG4gXHRcdH1cblxuIFx0XHRmdW5jdGlvbiBhZGRBbGxUb1NldChhLCBiKSB7XG4gXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHR2YXIgaXRlbSA9IGJbaV07XG4gXHRcdFx0XHRpZiAoYS5pbmRleE9mKGl0ZW0pID09PSAtMSkgYS5wdXNoKGl0ZW0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGF0IGJlZ2luIGFsbCB1cGRhdGVzIG1vZHVsZXMgYXJlIG91dGRhdGVkXG4gXHRcdC8vIHRoZSBcIm91dGRhdGVkXCIgc3RhdHVzIGNhbiBwcm9wYWdhdGUgdG8gcGFyZW50cyBpZiB0aGV5IGRvbid0IGFjY2VwdCB0aGUgY2hpbGRyZW5cbiBcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG4gXHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0dmFyIGFwcGxpZWRVcGRhdGUgPSB7fTtcblxuIFx0XHR2YXIgd2FyblVuZXhwZWN0ZWRSZXF1aXJlID0gZnVuY3Rpb24gd2FyblVuZXhwZWN0ZWRSZXF1aXJlKCkge1xuIFx0XHRcdGNvbnNvbGUud2FybihcbiBcdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICsgcmVzdWx0Lm1vZHVsZUlkICsgXCIpIHRvIGRpc3Bvc2VkIG1vZHVsZVwiXG4gXHRcdFx0KTtcbiBcdFx0fTtcblxuIFx0XHRmb3IgKHZhciBpZCBpbiBob3RVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVJZCA9IHRvTW9kdWxlSWQoaWQpO1xuIFx0XHRcdFx0LyoqIEB0eXBlIHtUT0RPfSAqL1xuIFx0XHRcdFx0dmFyIHJlc3VsdDtcbiBcdFx0XHRcdGlmIChob3RVcGRhdGVbaWRdKSB7XG4gXHRcdFx0XHRcdHJlc3VsdCA9IGdldEFmZmVjdGVkU3R1ZmYobW9kdWxlSWQpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwiZGlzcG9zZWRcIixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogaWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdC8qKiBAdHlwZSB7RXJyb3J8ZmFsc2V9ICovXG4gXHRcdFx0XHR2YXIgYWJvcnRFcnJvciA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvQXBwbHkgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBkb0Rpc3Bvc2UgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBjaGFpbkluZm8gPSBcIlwiO1xuIFx0XHRcdFx0aWYgKHJlc3VsdC5jaGFpbikge1xuIFx0XHRcdFx0XHRjaGFpbkluZm8gPSBcIlxcblVwZGF0ZSBwcm9wYWdhdGlvbjogXCIgKyByZXN1bHQuY2hhaW4uam9pbihcIiAtPiBcIik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzd2l0Y2ggKHJlc3VsdC50eXBlKSB7XG4gXHRcdFx0XHRcdGNhc2UgXCJzZWxmLWRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2Ygc2VsZiBkZWNsaW5lOiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkZWNsaW5lZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIGRlY2xpbmVkIGRlcGVuZGVuY3k6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdFwiIGluIFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucGFyZW50SWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcInVuYWNjZXB0ZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vblVuYWNjZXB0ZWQpIG9wdGlvbnMub25VbmFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZVVuYWNjZXB0ZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBcIiArIG1vZHVsZUlkICsgXCIgaXMgbm90IGFjY2VwdGVkXCIgKyBjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJhY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uQWNjZXB0ZWQpIG9wdGlvbnMub25BY2NlcHRlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvQXBwbHkgPSB0cnVlO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiZGlzcG9zZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRpc3Bvc2VkKSBvcHRpb25zLm9uRGlzcG9zZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRkb0Rpc3Bvc2UgPSB0cnVlO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRkZWZhdWx0OlxuIFx0XHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuZXhjZXB0aW9uIHR5cGUgXCIgKyByZXN1bHQudHlwZSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoYWJvcnRFcnJvcikge1xuIFx0XHRcdFx0XHRob3RTZXRTdGF0dXMoXCJhYm9ydFwiKTtcbiBcdFx0XHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGFib3J0RXJyb3IpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvQXBwbHkpIHtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSBob3RVcGRhdGVbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIHJlc3VsdC5vdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHRcdFx0XHRmb3IgKG1vZHVsZUlkIGluIHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdFx0XHRcdGlmIChcbiBcdFx0XHRcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChcbiBcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzLFxuIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZFxuIFx0XHRcdFx0XHRcdFx0KVxuIFx0XHRcdFx0XHRcdCkge1xuIFx0XHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pXG4gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSA9IFtdO1xuIFx0XHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQoXG4gXHRcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSxcbiBcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXVxuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChkb0Rpc3Bvc2UpIHtcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCBbcmVzdWx0Lm1vZHVsZUlkXSk7XG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIFN0b3JlIHNlbGYgYWNjZXB0ZWQgb3V0ZGF0ZWQgbW9kdWxlcyB0byByZXF1aXJlIHRoZW0gbGF0ZXIgYnkgdGhlIG1vZHVsZSBzeXN0ZW1cbiBcdFx0dmFyIG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0bW9kdWxlSWQgPSBvdXRkYXRlZE1vZHVsZXNbaV07XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gJiZcbiBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkICYmXG4gXHRcdFx0XHQvLyByZW1vdmVkIHNlbGYtYWNjZXB0ZWQgbW9kdWxlcyBzaG91bGQgbm90IGJlIHJlcXVpcmVkXG4gXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSAhPT0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlICYmXG4gXHRcdFx0XHQvLyB3aGVuIGNhbGxlZCBpbnZhbGlkYXRlIHNlbGYtYWNjZXB0aW5nIGlzIG5vdCBwb3NzaWJsZVxuIFx0XHRcdFx0IWluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkludmFsaWRhdGVkXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XG4gXHRcdFx0XHRcdG1vZHVsZTogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdHBhcmVudHM6IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLnBhcmVudHMuc2xpY2UoKSxcbiBcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxuIFx0XHRcdFx0fSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG4gXHRcdE9iamVjdC5rZXlzKGhvdEF2YWlsYWJsZUZpbGVzTWFwKS5mb3JFYWNoKGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gPT09IGZhbHNlKSB7XG4gXHRcdFx0XHRob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHR9KTtcblxuIFx0XHR2YXIgaWR4O1xuIFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcbiBcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuIFx0XHRcdHZhciBkYXRhID0ge307XG5cbiBcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcbiBcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdGNiID0gZGlzcG9zZUhhbmRsZXJzW2pdO1xuIFx0XHRcdFx0Y2IoZGF0YSk7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXSA9IGRhdGE7XG5cbiBcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuIFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cbiBcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcbiBcdFx0XHRkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG4gXHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGNoaWxkID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuIFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG4gXHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG4gXHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cbiBcdFx0dmFyIGRlcGVuZGVuY3k7XG4gXHRcdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcbiBcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcbiBcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIE5vdyBpbiBcImFwcGx5XCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cbiBcdFx0aWYgKGhvdFVwZGF0ZU5ld0hhc2ggIT09IHVuZGVmaW5lZCkge1xuIFx0XHRcdGhvdEN1cnJlbnRIYXNoID0gaG90VXBkYXRlTmV3SGFzaDtcbiBcdFx0XHRob3RVcGRhdGVOZXdIYXNoID0gdW5kZWZpbmVkO1xuIFx0XHR9XG4gXHRcdGhvdFVwZGF0ZSA9IHVuZGVmaW5lZDtcblxuIFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBhcHBsaWVkVXBkYXRlKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcHBsaWVkVXBkYXRlLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gY2FsbCBhY2NlcHQgaGFuZGxlcnNcbiBcdFx0dmFyIGVycm9yID0gbnVsbDtcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdHZhciBjYWxsYmFja3MgPSBbXTtcbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldO1xuIFx0XHRcdFx0XHRcdGNiID0gbW9kdWxlLmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwZW5kZW5jeV07XG4gXHRcdFx0XHRcdFx0aWYgKGNiKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tzLmluZGV4T2YoY2IpICE9PSAtMSkgY29udGludWU7XG4gXHRcdFx0XHRcdFx0XHRjYWxsYmFja3MucHVzaChjYik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRjYiA9IGNhbGxiYWNrc1tpXTtcbiBcdFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdFx0Y2IobW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMpO1xuIFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV0sXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIExvYWQgc2VsZiBhY2NlcHRlZCBtb2R1bGVzXG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgaXRlbSA9IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xuIFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gaXRlbS5wYXJlbnRzO1xuIFx0XHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IG1vZHVsZUlkO1xuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVycik7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcbiBcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyMjtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuIFx0XHRpZiAoZXJyb3IpIHtcbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJmYWlsXCIpO1xuIFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gXHRcdH1cblxuIFx0XHRpZiAoaG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG4gXHRcdFx0cmV0dXJuIGhvdEFwcGx5SW50ZXJuYWwob3B0aW9ucykudGhlbihmdW5jdGlvbihsaXN0KSB7XG4gXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbihtb2R1bGVJZCkge1xuIFx0XHRcdFx0XHRpZiAobGlzdC5pbmRleE9mKG1vZHVsZUlkKSA8IDApIGxpc3QucHVzaChtb2R1bGVJZCk7XG4gXHRcdFx0XHR9KTtcbiBcdFx0XHRcdHJldHVybiBsaXN0O1xuIFx0XHRcdH0pO1xuIFx0XHR9XG5cbiBcdFx0aG90U2V0U3RhdHVzKFwiaWRsZVwiKTtcbiBcdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiBcdFx0XHRyZXNvbHZlKG91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseUludmFsaWRhdGVkTW9kdWxlcygpIHtcbiBcdFx0aWYgKGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuIFx0XHRcdGlmICghaG90VXBkYXRlKSBob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHRob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMuZm9yRWFjaChob3RBcHBseUludmFsaWRhdGVkTW9kdWxlKTtcbiBcdFx0XHRob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPSB1bmRlZmluZWQ7XG4gXHRcdFx0cmV0dXJuIHRydWU7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHlJbnZhbGlkYXRlZE1vZHVsZShtb2R1bGVJZCkge1xuIFx0XHRpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIG1vZHVsZUlkKSlcbiBcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9kdWxlc1ttb2R1bGVJZF07XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGhvdDogaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSxcbiBcdFx0XHRwYXJlbnRzOiAoaG90Q3VycmVudFBhcmVudHNUZW1wID0gaG90Q3VycmVudFBhcmVudHMsIGhvdEN1cnJlbnRQYXJlbnRzID0gW10sIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCksXG4gXHRcdFx0Y2hpbGRyZW46IFtdXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBfX3dlYnBhY2tfaGFzaF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIGhvdEN1cnJlbnRIYXNoOyB9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIGhvdENyZWF0ZVJlcXVpcmUoXCIuL3NyYy9pbmRleC50c1wiKShfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsImltcG9ydCB7UmVmZXJlbmNlfSBmcm9tIFwiLi91dGlscy9SZWZlcmVuY2VcIjtcclxuaW1wb3J0IHtVTkRFRklORUQsIE5VTEx9IGZyb20gXCIuL3V0aWxzL1ByaW1pdGl2ZVR5cG9Db250YWluZXJcIjtcclxuaW1wb3J0IHtFbnZtbnR9IGZyb20gXCIuL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi91dGlscy9DbnRuclwiO1xyXG5pbXBvcnQge09wfSBmcm9tIFwiLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0NvbnNvbGV9IGZyb20gXCIuL3V0aWxzL0NvbnNvbGVcIjtcclxuXHJcbmltcG9ydCB7Q29uc29sZUxvZ05vZGV9IGZyb20gXCIuL25vZGVzL0NvbnNvbGVMb2dOb2RlXCI7XHJcbmltcG9ydCB7TnVtYmVyTm9kZX0gZnJvbSBcIi4vbm9kZXMvTnVtYmVyTm9kZVwiO1xyXG5pbXBvcnQge1N0cmluZ05vZGV9IGZyb20gXCIuL25vZGVzL1N0cmluZ05vZGVcIjtcclxuaW1wb3J0IHsgQm9vbGVhbk5vZGUgfSBmcm9tIFwiLi9ub2Rlcy9Cb29sZWFuTm9kZVwiO1xyXG5pbXBvcnQgeyBOdWxsTm9kZSB9IGZyb20gXCIuL25vZGVzL051bGxOb2RlXCI7XHJcbmltcG9ydCB7IFVuZGVmaW5lZE5vZGUgfSBmcm9tIFwiLi9ub2Rlcy9VbmRlZmluZWROb2RlXCI7XHJcbmltcG9ydCB7IERlY2xhcmVWYXJOb2RlIH0gZnJvbSBcIi4vbm9kZXMvRGVjbGFyZVZhck5vZGVcIjtcclxuaW1wb3J0IHsgRGVjbGFyZVZhckxpc3ROb2RlIH0gZnJvbSBcIi4vbm9kZXMvRGVjbGFyZVZhckxpc3ROb2RlXCI7XHJcbmltcG9ydCB7IENyZWF0ZUlkVmFyTm9kZSB9IGZyb20gXCIuL25vZGVzL0NyZWF0ZUlkVmFyTm9kZVwiO1xyXG5pbXBvcnQgeyBBc2lnbk5vZGUgfSBmcm9tIFwiLi9ub2Rlcy9Bc2lnbk5vZGVcIjtcclxuaW1wb3J0IHsgU3VtTm9kZSB9IGZyb20gXCIuL25vZGVzL1N1bU5vZGVcIjtcclxuaW1wb3J0IHsgU3ViTm9kZSB9IGZyb20gXCIuL25vZGVzL1N1Yk5vZGVcIjtcclxuaW1wb3J0IHsgTXVsTm9kZSB9IGZyb20gXCIuL25vZGVzL011bE5vZGVcIjtcclxuaW1wb3J0IHsgRGl2Tm9kZSB9IGZyb20gXCIuL25vZGVzL0Rpdk5vZGVcIjtcclxuaW1wb3J0IHsgTW9kTm9kZSB9IGZyb20gXCIuL25vZGVzL01vZE5vZGVcIjtcclxuaW1wb3J0IHsgRXhwTm9kZSB9IGZyb20gXCIuL25vZGVzL0V4cE5vZGVcIjtcclxuaW1wb3J0IHsgRXFOb2RlIH0gZnJvbSBcIi4vbm9kZXMvRXFOb2RlXCI7XHJcbmltcG9ydCB7IERpZk5vZGUgfSBmcm9tIFwiLi9ub2Rlcy9EaWZOb2RlXCI7XHJcbmltcG9ydCB7IEhpZ2hlck5vZGUgfSBmcm9tIFwiLi9ub2Rlcy9IaWdoZXJOb2RlXCI7XHJcbmltcG9ydCB7IE1pbm9yTm9kZSB9IGZyb20gXCIuL25vZGVzL01pbm9yTm9kZVwiO1xyXG5pbXBvcnQgeyBIaWdoZXJFcU5vZGUgfSBmcm9tIFwiLi9ub2Rlcy9IaWdoZXJFcU5vZGVcIjtcclxuaW1wb3J0IHsgTWlub3JFcU5vZGUgfSBmcm9tIFwiLi9ub2Rlcy9NaW5vckVxTm9kZVwiO1xyXG5pbXBvcnQgeyBPck5vZGUgfSBmcm9tIFwiLi9ub2Rlcy9Pck5vZGVcIjtcclxuaW1wb3J0IHsgQW5kTm9kZSB9IGZyb20gXCIuL25vZGVzL0FuZE5vZGVcIjtcclxuaW1wb3J0IHsgTm90Tm9kZSB9IGZyb20gXCIuL25vZGVzL05vdE5vZGVcIjtcclxuaW1wb3J0IHsgUmVBc2lnbkFkZE5vZGUgfSBmcm9tIFwiLi9ub2Rlcy9SZUFzaWduQWRkTm9kZVwiO1xyXG5pbXBvcnQgeyBSZUFzaWduU3ViTm9kZSB9IGZyb20gXCIuL25vZGVzL1JlQXNpZ25TdWJOb2RlXCI7XHJcbmltcG9ydCB7IFJlQXNpZ25NdWxOb2RlIH0gZnJvbSBcIi4vbm9kZXMvUmVBc2lnbk11bE5vZGVcIjtcclxuaW1wb3J0IHsgUmVBc2lnbkRpdk5vZGUgfSBmcm9tIFwiLi9ub2Rlcy9SZUFzaWduRGl2Tm9kZVwiO1xyXG5pbXBvcnQgeyBSZUFzaWduTW9kTm9kZSB9IGZyb20gXCIuL25vZGVzL1JlQXNpZ25Nb2ROb2RlXCI7XHJcbmltcG9ydCB7IFJlQWRkTm9kZSB9IGZyb20gXCIuL25vZGVzL1JlQWRkTm9kZVwiO1xyXG5pbXBvcnQgeyBSZVN1Yk5vZGUgfSBmcm9tIFwiLi9ub2Rlcy9SZVN1Yk5vZGVcIjtcclxuaW1wb3J0IHsgQ3JlYXRlQXJyYXlOb2RlIH0gZnJvbSBcIi4vbm9kZXMvQ3JlYXRlQXJyYXlOb2RlXCI7XHJcbmltcG9ydCB7IENyZWF0ZUFyclZhck5vZGUgfSBmcm9tIFwiLi9ub2Rlcy9DcmVhdGVBcnJWYXJOb2RlXCI7XHJcbmltcG9ydCB7IFJldHVybk9iaiB9IGZyb20gXCIuL25vZGVzL1JldHVybk9ialwiO1xyXG5pbXBvcnQgeyBDcmVhdGVPYmpWYXJOb2RlIH0gZnJvbSBcIi4vbm9kZXMvQ3JlYXRlT2JqVmFyTm9kZVwiO1xyXG5pbXBvcnQgeyBDcmVhdGVPYmpGdW5Ob2RlIH0gZnJvbSBcIi4vbm9kZXMvQ3JlYXRlT2JqRnVuTm9kZVwiO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIENvbnNvbGUsXHJcbiAgICBDbnRucixcclxuICAgIEVudm1udCxcclxuICAgIE9wLFxyXG4gICAgTlVMTCxcclxuICAgIFVOREVGSU5FRCxcclxuICAgIFJlZmVyZW5jZSxcclxuXHJcbiAgICBDb25zb2xlTG9nTm9kZSxcclxuICAgIE51bWJlck5vZGUsXHJcbiAgICBTdHJpbmdOb2RlLFxyXG4gICAgQm9vbGVhbk5vZGUsXHJcbiAgICBOdWxsTm9kZSxcclxuICAgIFVuZGVmaW5lZE5vZGUsXHJcblxyXG4gICAgRGVjbGFyZVZhck5vZGUsXHJcbiAgICBEZWNsYXJlVmFyTGlzdE5vZGUsXHJcblxyXG4gICAgQ3JlYXRlSWRWYXJOb2RlLFxyXG5cclxuICAgIEFzaWduTm9kZSxcclxuXHJcbiAgICBTdW1Ob2RlLFxyXG4gICAgU3ViTm9kZSxcclxuICAgIE11bE5vZGUsXHJcbiAgICBEaXZOb2RlLFxyXG4gICAgTW9kTm9kZSxcclxuICAgIEV4cE5vZGUsXHJcblxyXG4gICAgRXFOb2RlLFxyXG4gICAgRGlmTm9kZSxcclxuICAgIEhpZ2hlck5vZGUsXHJcbiAgICBNaW5vck5vZGUsXHJcbiAgICBIaWdoZXJFcU5vZGUsXHJcbiAgICBNaW5vckVxTm9kZSxcclxuXHJcbiAgICBPck5vZGUsXHJcbiAgICBBbmROb2RlLFxyXG4gICAgTm90Tm9kZSxcclxuXHJcbiAgICBSZUFzaWduQWRkTm9kZSxcclxuICAgIFJlQXNpZ25TdWJOb2RlLFxyXG4gICAgUmVBc2lnbk11bE5vZGUsXHJcbiAgICBSZUFzaWduRGl2Tm9kZSxcclxuICAgIFJlQXNpZ25Nb2ROb2RlLFxyXG5cclxuICAgIFJlQWRkTm9kZSxcclxuICAgIFJlU3ViTm9kZSxcclxuXHJcbiAgICBDcmVhdGVBcnJheU5vZGUsXHJcbiAgICBDcmVhdGVBcnJWYXJOb2RlLFxyXG5cclxuICAgIFJldHVybk9iaixcclxuXHJcbiAgICBDcmVhdGVPYmpWYXJOb2RlLFxyXG4gICAgQ3JlYXRlT2JqRnVuTm9kZSxcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEV4ZWN1dGVBU1Qoc2VudGVuY2VzOiBBcnJheTxPcD4pIHtcclxuICAgIENvbnNvbGUubG9nID0gJyc7XHJcbiAgICBjb25zdCBlbnYgPSBuZXcgRW52bW50KG51bGwsIHNlbnRlbmNlcyk7XHJcbiAgICBlbnYuR09fQUxMKCk7XHJcbn1cclxuXHJcbmlmIChtb2R1bGUgJiYgbW9kdWxlLmhvdCkgbW9kdWxlLmhvdC5hY2NlcHQoKTtcclxuIiwiaW1wb3J0IHsgT3AgfSBmcm9tIFwiLi4vdXRpbHMvT3BcIjtcclxuaW1wb3J0IHtFbnZtbnR9IGZyb20gXCIuLi91dGlscy9FbnZtbnRcIjtcclxuaW1wb3J0IHtBbmR9IGZyb20gXCIuLi91dGlscy9Mb2dpY2FsT3BlcmF0aW9uc0Z1bmN0aW9uc1wiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vdXRpbHMvQ250bnJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBbmROb2RlIGV4dGVuZHMgT3B7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxmOiBPcDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcnQ6IE9wO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxmOiBPcCwgcnQ6IE9wKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmxmID0gbGY7XHJcbiAgICAgICAgdGhpcy5ydCA9IHJ0O1xyXG4gICAgfVxyXG5cclxuICAgIEdPKGVudjogRW52bW50KTogb2JqZWN0IHtcclxuICAgICAgICByZXR1cm4gQW5kKHRoaXMubGYuRXhlKGVudikgYXMgQ250bnIsIHRoaXMucnQuRXhlKGVudikgYXMgQ250bnIpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge1JlZmVyZW5jZX0gZnJvbSBcIi4uL3V0aWxzL1JlZmVyZW5jZVwiO1xyXG5pbXBvcnQge1NlbWFudGljRXhjZXB0aW9ufSBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IHtDbnRucn0gZnJvbSBcIi4uL3V0aWxzL0NudG5yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXNpZ25Ob2RlIGV4dGVuZHMgT3B7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxmOiBPcDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcnQ6IE9wO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxmOiBPcCwgcnQ6IE9wKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmxmID0gbGY7XHJcbiAgICAgICAgdGhpcy5ydCA9IHJ0O1xyXG4gICAgfVxyXG5cclxuICAgIEdPKGVudjogRW52bW50KTogb2JqZWN0IHtcclxuICAgICAgICBjb25zdCBsZlZhbDogb2JqZWN0ID0gdGhpcy5sZi5FeGUoZW52KTtcclxuICAgICAgICBjb25zdCBydFZhbDogb2JqZWN0ID0gdGhpcy5ydC5FeGUoZW52KTtcclxuXHJcbiAgICAgICAgaWYgKCEobGZWYWwgaW5zdGFuY2VvZiBSZWZlcmVuY2UpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBTZW1hbnRpY0V4Y2VwdGlvbihgTm8gc2UgcHVlZGUgYXNpZ25hciBhICR7KGxmVmFsIGFzIENudG5yKS50eXBvfSwgbGFzIGFzaWduYWNpb25lcyBzb2xvIHB1ZWRlbiBzZXIgc29icmUgdW5hIHJlZmVyZW5jaWFgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgKGxmVmFsIGFzIFJlZmVyZW5jZSkuUHV0VmFsdWVPblJlZmVyZW5jZShydFZhbCBhcyBDbnRucik7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7Qk9PTEVBTn0gZnJvbSBcIi4uL3V0aWxzL1ByaW1pdGl2ZVR5cG9Db250YWluZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCb29sZWFuTm9kZSBleHRlbmRzIE9we1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSB2YWw6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsOiBib29sZWFuKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnZhbCA9IHZhbDtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQk9PTEVBTih0aGlzLnZhbCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7UmVmZXJlbmNlfSBmcm9tIFwiLi4vdXRpbHMvUmVmZXJlbmNlXCI7XHJcbmltcG9ydCB7Q29uc29sZX0gZnJvbSBcIi4uL3V0aWxzL0NvbnNvbGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb25zb2xlTG9nTm9kZSBleHRlbmRzIE9we1xyXG4gICAgcHJpdmF0ZSBleHByZXNzaW9uOiBPcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihleHByZXNzaW9uOiBPcCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5leHByZXNzaW9uID0gZXhwcmVzc2lvbjtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCkgOiBvYmplY3Qge1xyXG4gICAgICAgIGxldCB2YWwgPSB0aGlzLmV4cHJlc3Npb24uRXhlKGVudik7XHJcbiAgICAgICAgaWYgKHZhbCBpbnN0YW5jZW9mIFJlZmVyZW5jZSkge1xyXG4gICAgICAgICAgICB2YWwgPSAodmFsIGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIENvbnNvbGUubG9nICs9IGA+XyAke3ZhbH0gXFxuYDtcclxuICAgICAgICBjb25zb2xlLmxvZyhgPl8gJHt2YWx9YCk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9O1xyXG59IiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7Q250bnJ9IGZyb20gXCIuLi91dGlscy9DbnRuclwiO1xyXG5pbXBvcnQge1JlZmVyZW5jZX0gZnJvbSBcIi4uL3V0aWxzL1JlZmVyZW5jZVwiO1xyXG5pbXBvcnQge1NlbWFudGljRXhjZXB0aW9ufSBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IHtBUlJBWSwgTlVNQkVSLCBVTkRFRklORUR9IGZyb20gXCIuLi91dGlscy9QcmltaXRpdmVUeXBvQ29udGFpbmVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ3JlYXRlQXJyVmFyTm9kZSBleHRlbmRzIE9we1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBpZDogT3A7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGluZGV4OiBPcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogT3AsIGluZGV4OiBPcCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCk6IG9iamVjdCB7XHJcbiAgICAgICAgbGV0IGlkUmVmID0gdGhpcy5pZC5FeGUoZW52KSBhcyBDbnRucjtcclxuICAgICAgICBpZiAoIShpZFJlZiBpbnN0YW5jZW9mIFJlZmVyZW5jZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFNlbWFudGljRXhjZXB0aW9uKGBMbGFtYWRhIGEgQXJyZWdsbyAke2lkUmVmfSBubyBkZWZpbmlkby5gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuaW5kZXguRXhlKGVudikgYXMgQ250bnI7XHJcbiAgICAgICAgaWYgKGluZGV4IGluc3RhbmNlb2YgUmVmZXJlbmNlKSB7XHJcbiAgICAgICAgICAgIGluZGV4ID0gKGluZGV4IGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCEoaW5kZXggaW5zdGFuY2VvZiBOVU1CRVIpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBTZW1hbnRpY0V4Y2VwdGlvbihcIkVsIGluZGljZSBwYXJhIGFjY2VzYXIgZGViZSBzZXIgZGUgdGlwbyBOVU1CRVJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcmVmID0gKGlkUmVmIGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKTtcclxuXHJcbiAgICAgICAgaWYgKCEocmVmIGluc3RhbmNlb2YgQVJSQVkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVU5ERUZJTkVEKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKHJlZiBhcyBBUlJBWSkuZ2V0VmFsdWUoKGluZGV4IGFzIE5VTUJFUikuZ2V0VmFsdWUoKSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBPcCB9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vdXRpbHMvQ250bnJcIjtcclxuaW1wb3J0IHtSZWZlcmVuY2V9IGZyb20gXCIuLi91dGlscy9SZWZlcmVuY2VcIjtcclxuaW1wb3J0IHtBUlJBWX0gZnJvbSBcIi4uL3V0aWxzL1ByaW1pdGl2ZVR5cG9Db250YWluZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDcmVhdGVBcnJheU5vZGUgZXh0ZW5kcyBPcHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgdmFsczogQXJyYXk8T3A+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbHM6IEFycmF5PE9wPikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy52YWxzID0gdmFscztcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCk6IG9iamVjdCB7XHJcbiAgICAgICAgbGV0IHJlYWwgPSBuZXcgQXJyYXk8Q250bnI+KCk7XHJcbiAgICAgICAgZm9yIChsZXQgb3Agb2YgdGhpcy52YWxzKSB7XHJcbiAgICAgICAgICAgIGxldCByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKCk7XHJcbiAgICAgICAgICAgIHJlZmVyZW5jZS5QdXRWYWx1ZU9uUmVmZXJlbmNlKG9wLkV4ZShlbnYpIGFzIENudG5yKTtcclxuICAgICAgICAgICAgcmVhbC5wdXNoKHJlZmVyZW5jZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQVJSQVkocmVhbCk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7RmluZFZhcn0gZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ3JlYXRlSWRWYXJOb2RlIGV4dGVuZHMgT3B7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGlkOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIEdPKGVudjogRW52bW50KSA6IG9iamVjdHtcclxuICAgICAgICByZXR1cm4gRmluZFZhcihlbnYsIHRoaXMuaWQpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQgeyBFbnZtbnQgfSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7UmVmZXJlbmNlfSBmcm9tIFwiLi4vdXRpbHMvUmVmZXJlbmNlXCI7XHJcbmltcG9ydCB7Q250bnJ9IGZyb20gXCIuLi91dGlscy9DbnRuclwiO1xyXG5pbXBvcnQge0Z1bmN0aW9uUmVwcmVzZW50fSBmcm9tIFwiLi4vdXRpbHMvZnVuY3Rpb25zL0Z1bmN0aW9uUmVwcmVzZW50XCI7XHJcbmltcG9ydCB7UmV0dXJuT2JqfSBmcm9tIFwiLi9SZXR1cm5PYmpcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDcmVhdGVPYmpGdW5Ob2RlIGV4dGVuZHMgT3B7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IG9iamVjdDogT3A7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZ1bklkOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGFyZ3M6IEFycmF5PE9wPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvYmplY3Q6IE9wLCBmdW5JZDogc3RyaW5nLCBhcmdzOiBBcnJheTxPcD4pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xyXG4gICAgICAgIHRoaXMuZnVuSWQgPSBmdW5JZDtcclxuICAgICAgICB0aGlzLmFyZ3MgPSBhcmdzO1xyXG4gICAgfVxyXG5cclxuICAgIEdPKGVudjogRW52bW50KTogb2JqZWN0IHtcclxuICAgICAgICBsZXQgcmVmZSA9IHRoaXMub2JqZWN0LkV4ZShlbnYpO1xyXG4gICAgICAgIGlmIChyZWZlIGluc3RhbmNlb2YgUmVmZXJlbmNlKSB7XHJcbiAgICAgICAgICAgIHJlZmUgPSAocmVmZSBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZnVuID0gKHJlZmUgYXMgQ250bnIpLkdldFByb3BlcnR5KHRoaXMuZnVuSWQpO1xyXG4gICAgICAgIGlmICghKGZ1biBpbnN0YW5jZW9mIEZ1bmN0aW9uUmVwcmVzZW50KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZXMgPSBuZXcgQXJyYXk8Q250bnI+KCk7XHJcbiAgICAgICAgZm9yIChsZXQgYXJnIG9mIHRoaXMuYXJncykge1xyXG4gICAgICAgICAgICBsZXQgYXJnVmFsdWUgPSBhcmcuRXhlKGVudik7XHJcbiAgICAgICAgICAgIGlmIChhcmdWYWx1ZSBpbnN0YW5jZW9mIFJlZmVyZW5jZSkge1xyXG4gICAgICAgICAgICAgICAgYXJnVmFsdWUgPSAoYXJnVmFsdWUgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlZmVyZW5jZXMucHVzaChhcmdWYWx1ZSBhcyBDbnRucik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYW5zID0gZnVuLkVYRShlbnYsIHJlZmVyZW5jZXMpO1xyXG4gICAgICAgIGlmIChhbnMgaW5zdGFuY2VvZiBSZXR1cm5PYmopIHtcclxuICAgICAgICAgICAgcmV0dXJuIChhbnMgYXMgUmV0dXJuT2JqKS5nZXRWYWx1ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufSIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vdXRpbHMvQ250bnJcIjtcclxuaW1wb3J0IHtSZWZlcmVuY2V9IGZyb20gXCIuLi91dGlscy9SZWZlcmVuY2VcIjtcclxuaW1wb3J0IHtTZW1hbnRpY0V4Y2VwdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCI7XHJcbmltcG9ydCB7TmF0aXZlfSBmcm9tIFwiLi4vdXRpbHMvZnVuY3Rpb25zL05hdGl2ZVwiO1xyXG5pbXBvcnQge0Z1bmN0aW9uUmVwcmVzZW50fSBmcm9tIFwiLi4vdXRpbHMvZnVuY3Rpb25zL0Z1bmN0aW9uUmVwcmVzZW50XCI7XHJcbmltcG9ydCB7UmV0dXJuT2JqfSBmcm9tIFwiLi9SZXR1cm5PYmpcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDcmVhdGVPYmpWYXJOb2RlIGV4dGVuZHMgT3B7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGlkOiBPcDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgYXR0cjogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkOiBPcCwgYXR0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5hdHRyID0gYXR0cjtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCk6IG9iamVjdCB7XHJcbiAgICAgICAgbGV0IGlkID0gdGhpcy5pZC5FeGUoZW52KSBhcyBDbnRucjtcclxuICAgICAgICBpZiAoIShpZCBpbnN0YW5jZW9mIFJlZmVyZW5jZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFNlbWFudGljRXhjZXB0aW9uKFwiTGxhbWFkYSBhIE9iamV0byBubyBkZWZpbmlkb1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByZWYgPSAoaWQgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpO1xyXG4gICAgICAgIGxldCBlID0gcmVmLkdldFByb3BlcnR5KHRoaXMuYXR0cik7XHJcbiAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBGdW5jdGlvblJlcHJlc2VudCkge1xyXG4gICAgICAgICAgICBsZXQgYW5zID0gZS5FWEUoZW52LCBuZXcgQXJyYXk8Q250bnI+KCkpO1xyXG4gICAgICAgICAgICBpZiAoYW5zIGluc3RhbmNlb2YgUmV0dXJuT2JqKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGFucyBhcyBSZXR1cm5PYmopLmdldFZhbHVlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZWYuR2V0UHJvcGVydHkodGhpcy5hdHRyKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge0RlY2xhcmVWYXJOb2RlfSBmcm9tIFwiLi9EZWNsYXJlVmFyTm9kZVwiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vdXRpbHMvQ250bnJcIjtcclxuaW1wb3J0IHtVTkRFRklORUR9IGZyb20gXCIuLi91dGlscy9QcmltaXRpdmVUeXBvQ29udGFpbmVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGVjbGFyZVZhckxpc3ROb2RlIGV4dGVuZHMgT3Age1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSB0aXBvTm9tYnJlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHZhbHVlOiBPcDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGVjbGFyYXRpb25PcHM6IEFycmF5PE9wPjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgaXNDb25zdDogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0aXBvTm9tYnJlOiBzdHJpbmcsIGRlY2xhcmF0aW9uT3BzOiBBcnJheTxPcD4sIHZhbHVlPzogT3AsIGlzQ29uc3Q6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy50aXBvTm9tYnJlID0gdGlwb05vbWJyZTtcclxuICAgICAgICB0aGlzLmRlY2xhcmF0aW9uT3BzID0gZGVjbGFyYXRpb25PcHM7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlIHx8IG51bGw7XHJcbiAgICAgICAgdGhpcy5pc0NvbnN0ID0gaXNDb25zdDtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCk6IG9iamVjdCB7XHJcbiAgICAgICAgZm9yIChsZXQgb3Agb2YgdGhpcy5kZWNsYXJhdGlvbk9wcykge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAob3AgYXMgRGVjbGFyZVZhck5vZGUpLkFkZFZhbHVlKHRoaXMudmFsdWUuRXhlKGVudikgYXMgQ250bnIsIHRoaXMuaXNDb25zdCwgdGhpcy50aXBvTm9tYnJlKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIChvcCBhcyBEZWNsYXJlVmFyTm9kZSkuQWRkVmFsdWUobmV3IFVOREVGSU5FRCgpLCB0aGlzLmlzQ29uc3QsIHRoaXMudGlwb05vbWJyZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvcC5FeGUoZW52KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhlbnYpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE9wIH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7Q250bnJ9IGZyb20gJy4uL3V0aWxzL0NudG5yJztcclxuaW1wb3J0IHtFbnZtbnR9IGZyb20gXCIuLi91dGlscy9FbnZtbnRcIjtcclxuaW1wb3J0IHtVTkRFRklORUR9IGZyb20gXCIuLi91dGlscy9QcmltaXRpdmVUeXBvQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7UmVmZXJlbmNlfSBmcm9tIFwiLi4vdXRpbHMvUmVmZXJlbmNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGVjbGFyZVZhck5vZGUgZXh0ZW5kcyBPcHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSB2YWx1ZTogQ250bnIgPSBuZXcgVU5ERUZJTkVEKCk7XHJcbiAgICBwcml2YXRlIGlzQ29uc3Q6Ym9vbGVhbjtcclxuICAgIHByaXZhdGUgdGlwb05vbWJyZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCkgOiBvYmplY3Qge1xyXG4gICAgICAgIHRoaXMuQWRkVmFyT25EZWNsYXJlKGVudiwgdGhpcy5uYW1lKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgQWRkVmFsdWUodmFsdWU6IENudG5yID0gbmV3IFVOREVGSU5FRCgpLCBpc0NvbnN0OiBib29sZWFuID0gZmFsc2UsIHRpcG9Ob21icmU6IHN0cmluZyA9ICdBTlknKXtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5pc0NvbnN0ID0gaXNDb25zdDtcclxuICAgICAgICBpZih0aXBvTm9tYnJlID09PSAnJyl7XHJcbiAgICAgICAgICAgIHRpcG9Ob21icmUgPSAnQU5ZJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50aXBvTm9tYnJlID0gdGlwb05vbWJyZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgQWRkVmFyT25EZWNsYXJlKGVudjogRW52bW50LCBpZGVudGlmaWVyOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB2YWx1ZTogQ250bnIgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZTogUmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZSh0aGlzLnRpcG9Ob21icmUsIHRoaXMuaXNDb25zdCk7XHJcbiAgICAgICAgcmVmZXJlbmNlLlB1dFZhbHVlT25SZWZlcmVuY2UodmFsdWUpO1xyXG4gICAgICAgIGVudi5EZWNsYXJlKGlkZW50aWZpZXIsIHJlZmVyZW5jZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7RGlmZXJlbnRlfSBmcm9tIFwiLi4vdXRpbHMvUmVsYXRpb25hbE9wZXJhdGlvbnNGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHtDbnRucn0gZnJvbSBcIi4uL3V0aWxzL0NudG5yXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGlmTm9kZSBleHRlbmRzIE9wIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGY6IE9wO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBydDogT3A7XHJcblxyXG4gICAgY29uc3RydWN0b3IobGY6IE9wLCBydDogT3ApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubGYgPSBsZjtcclxuICAgICAgICB0aGlzLnJ0ID0gcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgR08oZW52OiBFbnZtbnQpOiBvYmplY3Qge1xyXG4gICAgICAgIHJldHVybiBEaWZlcmVudGUoKHRoaXMubGYuRXhlKGVudikgYXMgQ250bnIpLCAodGhpcy5ydC5FeGUoZW52KSBhcyBDbnRucikpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge0RpdmlzaW9uLCBTdW1hfSBmcm9tIFwiLi4vdXRpbHMvQWxnZWJyYWljT3BlcmF0aW9uc0Z1bmN0aW9uc1wiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vdXRpbHMvQ250bnJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEaXZOb2RlIGV4dGVuZHMgT3B7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxmOiBPcDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcnQ6IE9wO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxmOiBPcCwgcnQ6IE9wKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmxmID0gbGY7XHJcbiAgICAgICAgdGhpcy5ydCA9IHJ0O1xyXG4gICAgfVxyXG5cclxuICAgIEdPKGVudjogRW52bW50KTogb2JqZWN0IHtcclxuICAgICAgICByZXR1cm4gRGl2aXNpb24oKHRoaXMubGYuRXhlKGVudikgYXMgQ250bnIpLCAodGhpcy5ydC5FeGUoZW52KSBhcyBDbnRucikpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7SWd1YWx9IGZyb20gXCIuLi91dGlscy9SZWxhdGlvbmFsT3BlcmF0aW9uc0Z1bmN0aW9uc1wiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vdXRpbHMvQ250bnJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFcU5vZGUgZXh0ZW5kcyBPcCB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxmOiBPcDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcnQ6IE9wO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxmOiBPcCwgcnQ6IE9wKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmxmID0gbGY7XHJcbiAgICAgICAgdGhpcy5ydCA9IHJ0O1xyXG4gICAgfVxyXG5cclxuICAgIEdPKGVudjogRW52bW50KTogb2JqZWN0IHtcclxuICAgICAgICByZXR1cm4gSWd1YWwoKHRoaXMubGYuRXhlKGVudikgYXMgQ250bnIpLCAodGhpcy5ydC5FeGUoZW52KSBhcyBDbnRucikpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge1BvdGVuY2lhfSBmcm9tIFwiLi4vdXRpbHMvQWxnZWJyYWljT3BlcmF0aW9uc0Z1bmN0aW9uc1wiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vdXRpbHMvQ250bnJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFeHBOb2RlIGV4dGVuZHMgT3Age1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsZjogT3A7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJ0OiBPcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsZjogT3AsIHJ0OiBPcCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5sZiA9IGxmO1xyXG4gICAgICAgIHRoaXMucnQgPSBydDtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCk6IG9iamVjdCB7XHJcbiAgICAgICAgcmV0dXJuIFBvdGVuY2lhKCh0aGlzLmxmLkV4ZShlbnYpIGFzIENudG5yKSwgKHRoaXMucnQuRXhlKGVudikgYXMgQ250bnIpKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge09wfSBmcm9tIFwiLi4vdXRpbHMvT3BcIjtcclxuaW1wb3J0IHtFbnZtbnR9IGZyb20gXCIuLi91dGlscy9FbnZtbnRcIjtcclxuaW1wb3J0IHtNYXlvckVxfSBmcm9tIFwiLi4vdXRpbHMvUmVsYXRpb25hbE9wZXJhdGlvbnNGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHtDbnRucn0gZnJvbSBcIi4uL3V0aWxzL0NudG5yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGlnaGVyRXFOb2RlIGV4dGVuZHMgT3Age1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsZjogT3A7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJ0OiBPcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsZjogT3AsIHJ0OiBPcCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5sZiA9IGxmO1xyXG4gICAgICAgIHRoaXMucnQgPSBydDtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCk6IG9iamVjdCB7XHJcbiAgICAgICAgcmV0dXJuIE1heW9yRXEodGhpcy5sZi5FeGUoZW52KSBhcyBDbnRuciwgdGhpcy5ydC5FeGUoZW52KSBhcyBDbnRucik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge09wfSBmcm9tIFwiLi4vdXRpbHMvT3BcIjtcclxuaW1wb3J0IHtFbnZtbnR9IGZyb20gXCIuLi91dGlscy9FbnZtbnRcIjtcclxuaW1wb3J0IHtNYXlvcn0gZnJvbSBcIi4uL3V0aWxzL1JlbGF0aW9uYWxPcGVyYXRpb25zRnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7Q250bnJ9IGZyb20gXCIuLi91dGlscy9DbnRuclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhpZ2hlck5vZGUgZXh0ZW5kcyBPcCB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxmOiBPcDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcnQ6IE9wO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxmOiBPcCwgcnQ6IE9wKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmxmID0gbGY7XHJcbiAgICAgICAgdGhpcy5ydCA9IHJ0O1xyXG4gICAgfVxyXG5cclxuICAgIEdPKGVudjogRW52bW50KTogb2JqZWN0IHtcclxuICAgICAgICByZXR1cm4gTWF5b3IodGhpcy5sZi5FeGUoZW52KSBhcyBDbnRuciwgdGhpcy5ydC5FeGUoZW52KSBhcyBDbnRucik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge09wfSBmcm9tIFwiLi4vdXRpbHMvT3BcIjtcclxuaW1wb3J0IHtFbnZtbnR9IGZyb20gXCIuLi91dGlscy9FbnZtbnRcIjtcclxuaW1wb3J0IHtNZW5vckVxfSBmcm9tIFwiLi4vdXRpbHMvUmVsYXRpb25hbE9wZXJhdGlvbnNGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHtDbnRucn0gZnJvbSBcIi4uL3V0aWxzL0NudG5yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWlub3JFcU5vZGUgZXh0ZW5kcyBPcCB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxmOiBPcDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcnQ6IE9wO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxmOiBPcCwgcnQ6IE9wKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmxmID0gbGY7XHJcbiAgICAgICAgdGhpcy5ydCA9IHJ0O1xyXG4gICAgfVxyXG5cclxuICAgIEdPKGVudjogRW52bW50KTogb2JqZWN0IHtcclxuICAgICAgICByZXR1cm4gTWVub3JFcSh0aGlzLmxmLkV4ZShlbnYpIGFzIENudG5yLCB0aGlzLnJ0LkV4ZShlbnYpIGFzIENudG5yKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge09wfSBmcm9tIFwiLi4vdXRpbHMvT3BcIjtcclxuaW1wb3J0IHsgRW52bW50IH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge01lbm9yfSBmcm9tIFwiLi4vdXRpbHMvUmVsYXRpb25hbE9wZXJhdGlvbnNGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHtDbnRucn0gZnJvbSBcIi4uL3V0aWxzL0NudG5yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWlub3JOb2RlIGV4dGVuZHMgT3Age1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsZjogT3A7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJ0OiBPcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsZjogT3AsIHJ0OiBPcCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5sZiA9IGxmO1xyXG4gICAgICAgIHRoaXMucnQgPSBydDtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCk6IG9iamVjdCB7XHJcbiAgICAgICAgcmV0dXJuIE1lbm9yKHRoaXMubGYuRXhlKGVudikgYXMgQ250bnIsIHRoaXMucnQuRXhlKGVudikgYXMgQ250bnIpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7TW9kdWxvfSBmcm9tIFwiLi4vdXRpbHMvQWxnZWJyYWljT3BlcmF0aW9uc0Z1bmN0aW9uc1wiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vdXRpbHMvQ250bnJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNb2ROb2RlIGV4dGVuZHMgT3B7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxmOiBPcDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcnQ6IE9wO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxmOiBPcCwgcnQ6IE9wKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmxmID0gbGY7XHJcbiAgICAgICAgdGhpcy5ydCA9IHJ0O1xyXG4gICAgfVxyXG5cclxuICAgIEdPKGVudjogRW52bW50KTogb2JqZWN0IHtcclxuICAgICAgICByZXR1cm4gTW9kdWxvKCh0aGlzLmxmLkV4ZShlbnYpIGFzIENudG5yKSwgKHRoaXMucnQuRXhlKGVudikgYXMgQ250bnIpKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge011bHRpcGxpY2FjaW9ufSBmcm9tIFwiLi4vdXRpbHMvQWxnZWJyYWljT3BlcmF0aW9uc0Z1bmN0aW9uc1wiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vdXRpbHMvQ250bnJcIjtcclxuaW1wb3J0IHtFbnZtbnR9IGZyb20gXCIuLi91dGlscy9FbnZtbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNdWxOb2RlIGV4dGVuZHMgT3B7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxmOiBPcDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcnQ6IE9wO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxmOiBPcCwgcnQ6IE9wKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmxmID0gbGY7XHJcbiAgICAgICAgdGhpcy5ydCA9IHJ0O1xyXG4gICAgfVxyXG5cclxuICAgIEdPKGVudjogRW52bW50KTogb2JqZWN0IHtcclxuICAgICAgICByZXR1cm4gTXVsdGlwbGljYWNpb24odGhpcy5sZi5FeGUoZW52KSBhcyBDbnRuciwgdGhpcy5ydC5FeGUoZW52KSBhcyBDbnRucik7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7Tm90fSBmcm9tIFwiLi4vdXRpbHMvTG9naWNhbE9wZXJhdGlvbnNGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHtDbnRucn0gZnJvbSBcIi4uL3V0aWxzL0NudG5yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTm90Tm9kZSBleHRlbmRzIE9wIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGY6IE9wO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxmOiBPcCwgcnQ6IE9wKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmxmID0gbGY7XHJcbiAgICB9XHJcblxyXG4gICAgR08oZW52OiBFbnZtbnQpOiBvYmplY3Qge1xyXG4gICAgICAgIHJldHVybiBOb3QodGhpcy5sZi5FeGUoZW52KSBhcyBDbnRucik7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7TlVMTH0gZnJvbSBcIi4uL3V0aWxzL1ByaW1pdGl2ZVR5cG9Db250YWluZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBOdWxsTm9kZSBleHRlbmRzIE9we1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgTlVMTCgpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7TlVNQkVSfSBmcm9tIFwiLi4vdXRpbHMvUHJpbWl0aXZlVHlwb0NvbnRhaW5lclwiO1xyXG5pbXBvcnQge09wfSBmcm9tIFwiLi4vdXRpbHMvT3BcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBOdW1iZXJOb2RlIGV4dGVuZHMgT3B7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHZhbDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbDogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnZhbCA9IHZhbDtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBOVU1CRVIodGhpcy52YWwpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7T3J9IGZyb20gXCIuLi91dGlscy9Mb2dpY2FsT3BlcmF0aW9uc0Z1bmN0aW9uc1wiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vdXRpbHMvQ250bnJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBPck5vZGUgZXh0ZW5kcyBPcCB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxmOiBPcDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcnQ6IE9wO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxmOiBPcCwgcnQ6IE9wKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmxmID0gbGY7XHJcbiAgICAgICAgdGhpcy5ydCA9IHJ0O1xyXG4gICAgfVxyXG5cclxuICAgIEdPKGVudjogRW52bW50KTogb2JqZWN0IHtcclxuICAgICAgICByZXR1cm4gT3IodGhpcy5sZi5FeGUoZW52KSBhcyBDbnRuciwgdGhpcy5ydC5FeGUoZW52KSBhcyBDbnRucik7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7QWRkfSBmcm9tIFwiLi4vdXRpbHMvQWxnZWJyYWljT3BlcmF0aW9uc0Z1bmN0aW9uc1wiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vdXRpbHMvQ250bnJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZUFkZE5vZGUgZXh0ZW5kcyBPcCB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxmOiBPcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsZjogT3ApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubGYgPSBsZjtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCk6IG9iamVjdCB7XHJcbiAgICAgICAgcmV0dXJuIEFkZCh0aGlzLmxmLkV4ZShlbnYpIGFzIENudG5yKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0NudG5yLCBFbnZtbnQsIE9wLCBSZWZlcmVuY2V9IGZyb20gXCIuLi9pbmRleFwiO1xyXG5pbXBvcnQge1NlbWFudGljRXhjZXB0aW9ufSBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IHtTdW1hfSBmcm9tIFwiLi4vdXRpbHMvQWxnZWJyYWljT3BlcmF0aW9uc0Z1bmN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlQXNpZ25BZGROb2RlIGV4dGVuZHMgT3Age1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsZjogT3A7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJ0OiBPcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsZjogT3AsIHJ0OiBPcCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5sZiA9IGxmO1xyXG4gICAgICAgIHRoaXMucnQgPSBydDtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCk6IG9iamVjdCB7XHJcbiAgICAgICAgY29uc3QgbGYgPSB0aGlzLmxmLkV4ZShlbnYpO1xyXG4gICAgICAgIGNvbnN0IHJ0ID0gdGhpcy5ydC5FeGUoZW52KTtcclxuXHJcbiAgICAgICAgaWYgKCEobGYgaW5zdGFuY2VvZiBSZWZlcmVuY2UpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBTZW1hbnRpY0V4Y2VwdGlvbihgTm8gc2UgcHVlZGUgYXNpZ2FuciBhICR7bGZ9LCBsYXMgYXNpZ25hY2lvbmVzIHNvbG8gcHVlZGVuIHNlciBzb2JyZSB1bmEgcmVmZXJlbmNpYWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKGxmIGFzIFJlZmVyZW5jZSkuUHV0VmFsdWVPblJlZmVyZW5jZShcclxuICAgICAgICAgICAgU3VtYSgobGYgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpLCBydCBhcyBDbnRucilcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiAobGYgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge1JlZmVyZW5jZX0gZnJvbSBcIi4uL3V0aWxzL1JlZmVyZW5jZVwiO1xyXG5pbXBvcnQge1NlbWFudGljRXhjZXB0aW9ufSBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IHtEaXZpc2lvbn0gZnJvbSBcIi4uL3V0aWxzL0FsZ2VicmFpY09wZXJhdGlvbnNGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHtDbnRucn0gZnJvbSBcIi4uL3V0aWxzL0NudG5yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVBc2lnbkRpdk5vZGUgZXh0ZW5kcyBPcCB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxmOiBPcDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcnQ6IE9wO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxmOiBPcCwgcnQ6IE9wKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmxmID0gbGY7XHJcbiAgICAgICAgdGhpcy5ydCA9IHJ0O1xyXG4gICAgfVxyXG5cclxuICAgIEdPKGVudjogRW52bW50KTogb2JqZWN0IHtcclxuICAgICAgICBjb25zdCBsZiA9IHRoaXMubGYuRXhlKGVudik7XHJcbiAgICAgICAgY29uc3QgcnQgPSB0aGlzLnJ0LkV4ZShlbnYpO1xyXG5cclxuICAgICAgICBpZiAoIShsZiBpbnN0YW5jZW9mIFJlZmVyZW5jZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFNlbWFudGljRXhjZXB0aW9uKGBObyBzZSBwdWVkZSBhc2lnYW5yIGEgJHtsZn0sIGxhcyBhc2lnbmFjaW9uZXMgc29sbyBwdWVkZW4gc2VyIHNvYnJlIHVuYSByZWZlcmVuY2lhYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAobGYgYXMgUmVmZXJlbmNlKS5QdXRWYWx1ZU9uUmVmZXJlbmNlKFxyXG4gICAgICAgICAgICBEaXZpc2lvbigobGYgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpLCBydCBhcyBDbnRucilcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiAobGYgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge1JlZmVyZW5jZX0gZnJvbSBcIi4uL3V0aWxzL1JlZmVyZW5jZVwiO1xyXG5pbXBvcnQge1NlbWFudGljRXhjZXB0aW9ufSBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IHtNb2R1bG99IGZyb20gXCIuLi91dGlscy9BbGdlYnJhaWNPcGVyYXRpb25zRnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7Q250bnJ9IGZyb20gXCIuLi91dGlscy9DbnRuclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlQXNpZ25Nb2ROb2RlIGV4dGVuZHMgT3Age1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsZjogT3A7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJ0OiBPcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsZjogT3AsIHJ0OiBPcCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5sZiA9IGxmO1xyXG4gICAgICAgIHRoaXMucnQgPSBydDtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCk6IG9iamVjdCB7XHJcbiAgICAgICAgY29uc3QgbGYgPSB0aGlzLmxmLkV4ZShlbnYpO1xyXG4gICAgICAgIGNvbnN0IHJ0ID0gdGhpcy5ydC5FeGUoZW52KTtcclxuXHJcbiAgICAgICAgaWYgKCEobGYgaW5zdGFuY2VvZiBSZWZlcmVuY2UpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBTZW1hbnRpY0V4Y2VwdGlvbihgTm8gc2UgcHVlZGUgYXNpZ2FuciBhICR7bGZ9LCBsYXMgYXNpZ25hY2lvbmVzIHNvbG8gcHVlZGVuIHNlciBzb2JyZSB1bmEgcmVmZXJlbmNpYWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKGxmIGFzIFJlZmVyZW5jZSkuUHV0VmFsdWVPblJlZmVyZW5jZShcclxuICAgICAgICAgICAgTW9kdWxvKChsZiBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCksIHJ0IGFzIENudG5yKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIChsZiBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7UmVmZXJlbmNlfSBmcm9tIFwiLi4vdXRpbHMvUmVmZXJlbmNlXCI7XHJcbmltcG9ydCB7U2VtYW50aWNFeGNlcHRpb259IGZyb20gXCIuLi91dGlscy9VdGlsc1wiO1xyXG5pbXBvcnQge011bHRpcGxpY2FjaW9ufSBmcm9tIFwiLi4vdXRpbHMvQWxnZWJyYWljT3BlcmF0aW9uc0Z1bmN0aW9uc1wiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vdXRpbHMvQ250bnJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZUFzaWduTXVsTm9kZSBleHRlbmRzIE9wIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGY6IE9wO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBydDogT3A7XHJcblxyXG4gICAgY29uc3RydWN0b3IobGY6IE9wLCBydDogT3ApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubGYgPSBsZjtcclxuICAgICAgICB0aGlzLnJ0ID0gcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgR08oZW52OiBFbnZtbnQpOiBvYmplY3Qge1xyXG4gICAgICAgIGNvbnN0IGxmID0gdGhpcy5sZi5FeGUoZW52KTtcclxuICAgICAgICBjb25zdCBydCA9IHRoaXMucnQuRXhlKGVudik7XHJcblxyXG4gICAgICAgIGlmICghKGxmIGluc3RhbmNlb2YgUmVmZXJlbmNlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgU2VtYW50aWNFeGNlcHRpb24oYE5vIHNlIHB1ZWRlIGFzaWdhbnIgYSAke2xmfSwgbGFzIGFzaWduYWNpb25lcyBzb2xvIHB1ZWRlbiBzZXIgc29icmUgdW5hIHJlZmVyZW5jaWFgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIChsZiBhcyBSZWZlcmVuY2UpLlB1dFZhbHVlT25SZWZlcmVuY2UoXHJcbiAgICAgICAgICAgIE11bHRpcGxpY2FjaW9uKChsZiBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCksIHJ0IGFzIENudG5yKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIChsZiBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7UmVmZXJlbmNlfSBmcm9tIFwiLi4vdXRpbHMvUmVmZXJlbmNlXCI7XHJcbmltcG9ydCB7U2VtYW50aWNFeGNlcHRpb259IGZyb20gXCIuLi91dGlscy9VdGlsc1wiO1xyXG5pbXBvcnQge1Jlc3RhfSBmcm9tIFwiLi4vdXRpbHMvQWxnZWJyYWljT3BlcmF0aW9uc0Z1bmN0aW9uc1wiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vdXRpbHMvQ250bnJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZUFzaWduU3ViTm9kZSBleHRlbmRzIE9wIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGY6IE9wO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBydDogT3A7XHJcblxyXG4gICAgY29uc3RydWN0b3IobGY6IE9wLCBydDogT3ApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubGYgPSBsZjtcclxuICAgICAgICB0aGlzLnJ0ID0gcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgR08oZW52OiBFbnZtbnQpOiBvYmplY3Qge1xyXG4gICAgICAgIGNvbnN0IGxmID0gdGhpcy5sZi5FeGUoZW52KTtcclxuICAgICAgICBjb25zdCBydCA9IHRoaXMucnQuRXhlKGVudik7XHJcblxyXG4gICAgICAgIGlmICghKGxmIGluc3RhbmNlb2YgUmVmZXJlbmNlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgU2VtYW50aWNFeGNlcHRpb24oYE5vIHNlIHB1ZWRlIGFzaWdhbnIgYSAke2xmfSwgbGFzIGFzaWduYWNpb25lcyBzb2xvIHB1ZWRlbiBzZXIgc29icmUgdW5hIHJlZmVyZW5jaWFgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIChsZiBhcyBSZWZlcmVuY2UpLlB1dFZhbHVlT25SZWZlcmVuY2UoXHJcbiAgICAgICAgICAgIFJlc3RhKChsZiBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCksIHJ0IGFzIENudG5yKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIChsZiBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7U3VifSBmcm9tIFwiLi4vdXRpbHMvQWxnZWJyYWljT3BlcmF0aW9uc0Z1bmN0aW9uc1wiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vdXRpbHMvQ250bnJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZVN1Yk5vZGUgZXh0ZW5kcyBPcCB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxmOiBPcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsZjogT3ApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubGYgPSBsZjtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCk6IG9iamVjdCB7XHJcbiAgICAgICAgcmV0dXJuIFN1Yih0aGlzLmxmLkV4ZShlbnYpIGFzIENudG5yKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vdXRpbHMvQ250bnJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZXR1cm5PYmogZXh0ZW5kcyBDbnRuciB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJldHVybm46IENudG5yO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHJldHVybm46IENudG5yKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnJldHVybm4gPSByZXR1cm5uO1xyXG4gICAgfVxyXG5cclxuICAgIHRvU3RyaW5nID0gKCk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIFwibWkgb2JqZXRvIHJldHVybiAoUmV0dXJuT2JqKVwiO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0VmFsdWUoKTogQ250bnIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJldHVybm47XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge09wfSBmcm9tIFwiLi4vdXRpbHMvT3BcIjtcclxuaW1wb3J0IHtFbnZtbnR9IGZyb20gXCIuLi91dGlscy9FbnZtbnRcIjtcclxuaW1wb3J0IHtTVFJJTkd9IGZyb20gXCIuLi91dGlscy9QcmltaXRpdmVUeXBvQ29udGFpbmVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RyaW5nTm9kZSBleHRlbmRzIE9we1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSB2YWw6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWw6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy52YWwgPSB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgR08oZW52OiBFbnZtbnQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFNUUklORyh0aGlzLnZhbC5zdWJzdHJpbmcoMSwgdGhpcy52YWwubGVuZ3RoIC0gMSkpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge1Jlc3RhfSBmcm9tIFwiLi4vdXRpbHMvQWxnZWJyYWljT3BlcmF0aW9uc0Z1bmN0aW9uc1wiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vdXRpbHMvQ250bnJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdWJOb2RlIGV4dGVuZHMgT3Age1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsZjogT3A7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJ0OiBPcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsZjogT3AsIHJ0OiBPcCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5sZiA9IGxmO1xyXG4gICAgICAgIHRoaXMucnQgPSBydDtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCk6IG9iamVjdCB7XHJcbiAgICAgICAgcmV0dXJuIFJlc3RhKCh0aGlzLmxmLkV4ZShlbnYpIGFzIENudG5yKSwgKHRoaXMucnQuRXhlKGVudikgYXMgQ250bnIpKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge1N1bWF9IGZyb20gXCIuLi91dGlscy9BbGdlYnJhaWNPcGVyYXRpb25zRnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7Q250bnJ9IGZyb20gXCIuLi91dGlscy9DbnRuclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN1bU5vZGUgZXh0ZW5kcyBPcCB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxmOiBPcDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcnQ6IE9wO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxmOiBPcCwgcnQ6IE9wKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmxmID0gbGY7XHJcbiAgICAgICAgdGhpcy5ydCA9IHJ0O1xyXG4gICAgfVxyXG5cclxuICAgIEdPKGVudjogRW52bW50KTogb2JqZWN0IHtcclxuICAgICAgICByZXR1cm4gU3VtYSgodGhpcy5sZi5FeGUoZW52KSBhcyBDbnRuciksICh0aGlzLnJ0LkV4ZShlbnYpIGFzIENudG5yKSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge1VOREVGSU5FRH0gZnJvbSBcIi4uL3V0aWxzL1ByaW1pdGl2ZVR5cG9Db250YWluZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBVbmRlZmluZWROb2RlIGV4dGVuZHMgT3B7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIEdPKGVudjogRW52bW50KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBVTkRFRklORUQoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0NudG5yfSBmcm9tIFwiLi9DbnRuclwiO1xyXG5pbXBvcnQge1JlZmVyZW5jZX0gZnJvbSBcIi4vUmVmZXJlbmNlXCI7XHJcbmltcG9ydCB7U2VtYW50aWNFeGNlcHRpb259IGZyb20gXCIuL1V0aWxzXCI7XHJcbmltcG9ydCB7Qk9PTEVBTiwgTkFOLCBOVUxMLCBOVU1CRVIsIFNUUklORywgVU5ERUZJTkVEfSBmcm9tIFwiLi9QcmltaXRpdmVUeXBvQ29udGFpbmVyXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU3VtYShsZjogQ250bnIsIHJ0OiBDbnRucik6IENudG5yIHtcclxuICAgIGxmIGluc3RhbmNlb2YgUmVmZXJlbmNlID8gbGYgPSAobGYgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpIDogbGY7XHJcbiAgICBydCBpbnN0YW5jZW9mIFJlZmVyZW5jZSA/IHJ0ID0gKHJ0IGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKSA6IHJ0O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIFN1bWFyKGxmLCBydCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFNlbWFudGljRXhjZXB0aW9uKGBPcGVyYWNpb24gZW50cmUgdGlwb3MgKCAke2xmLnR5cG99ICsgJHtydC50eXBvfSApIG5vIHBlcm1pdGlkYS5gKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFN1bWFyKGxmOiBhbnksIHJ0OiBhbnkpOiBDbnRuciB7XHJcbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBOVU1CRVI6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5VTUJFUigobGYgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpICsgKHJ0IGFzIE5VTUJFUikuZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIEJPT0xFQU46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTlVNQkVSKChsZiBhcyBOVU1CRVIpLmdldFZhbHVlKCkgKyAocnQgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIFNUUklORzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTVFJJTkcoKGxmIGFzIE5VTUJFUikuZ2V0VmFsdWUoKSArIChydCBhcyBTVFJJTkcpLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOVU1CRVI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTlVNQkVSKChsZiBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpICsgKHJ0IGFzIE5VTUJFUikuZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIEJPT0xFQU46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTlVNQkVSKChsZiBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpICsgKHJ0IGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBTVFJJTkc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU1RSSU5HKChsZiBhcyBCT09MRUFOKS5nZXRWYWx1ZSgpICsgKHJ0IGFzIFNUUklORykuZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBTVFJJTkc6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNUUklORygobGYgYXMgU1RSSU5HKS5nZXRWYWx1ZSgpICsgKHJ0IGFzIE5VTUJFUikuZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIEJPT0xFQU46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU1RSSU5HKChsZiBhcyBTVFJJTkcpLmdldFZhbHVlKCkgKyAocnQgYXMgQk9PTEVBTikuZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIFNUUklORzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTVFJJTkcoKGxmIGFzIFNUUklORykuZ2V0VmFsdWUoKSArIChydCBhcyBTVFJJTkcpLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBVTkRFRklORUQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU1RSSU5HKChsZiBhcyBTVFJJTkcpLmdldFZhbHVlKCkgKyAocnQgYXMgVU5ERUZJTkVEKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5VTEw6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU1RSSU5HKChsZiBhcyBTVFJJTkcpLmdldFZhbHVlKCkgKyAocnQgYXMgTlVMTCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgVU5ERUZJTkVEOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIFNUUklORzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTVFJJTkcoKGxmIGFzIFVOREVGSU5FRCkgKyAocnQgYXMgU1RSSU5HKS5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBsZiBpbnN0YW5jZW9mIE5VTEw6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgU1RSSU5HOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNUUklORygobGYgYXMgTlVMTCkgKyAocnQgYXMgU1RSSU5HKS5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFJlc3RhKGxmOiBDbnRuciwgcnQ6IENudG5yKTogQ250bnIge1xyXG4gICAgbGYgaW5zdGFuY2VvZiBSZWZlcmVuY2UgPyBsZiA9IChsZiBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCkgOiBsZjtcclxuICAgIHJ0IGluc3RhbmNlb2YgUmVmZXJlbmNlID8gcnQgPSAocnQgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpIDogcnQ7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gUmVzdGFyKGxmLCBydCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFNlbWFudGljRXhjZXB0aW9uKGBPcGVyYWNpb24gZW50cmUgdGlwb3MgKCAke2xmLnR5cG99IC0gJHtydC50eXBvfSApIG5vIHBlcm1pdGlkYS5gKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFJlc3RhcihsZjogYW55LCBydDogYW55KTogQ250bnIge1xyXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5VTUJFUjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOVU1CRVIoKGxmIGFzIE5VTUJFUikuZ2V0VmFsdWUoKSAtIChydCBhcyBOVU1CRVIpLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5VTUJFUigobGYgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpIC0gKHJ0IGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOVU1CRVI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTlVNQkVSKChsZiBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpIC0gKHJ0IGFzIE5VTUJFUikuZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIEJPT0xFQU46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTlVNQkVSKChsZiBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpIC0gKHJ0IGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTXVsdGlwbGljYWNpb24obGY6IENudG5yLCBydDogQ250bnIpOiBDbnRuciB7XHJcbiAgICBsZiBpbnN0YW5jZW9mIFJlZmVyZW5jZSA/IGxmID0gKGxmIGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKSA6IGxmO1xyXG4gICAgcnQgaW5zdGFuY2VvZiBSZWZlcmVuY2UgPyBydCA9IChydCBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCkgOiBydDtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBNdWx0aXBsaWNhcihsZiwgcnQpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBTZW1hbnRpY0V4Y2VwdGlvbihgT3BlcmFjaW9uIGVudHJlIHRpcG9zICggJHtsZi50eXBvfSAqICR7cnQudHlwb30gKSBubyBwZXJtaXRpZGEuYClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBNdWx0aXBsaWNhcihsZjogYW55LCBydDogYW55KTogQ250bnIge1xyXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5VTUJFUjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOVU1CRVIoKGxmIGFzIE5VTUJFUikuZ2V0VmFsdWUoKSAqIChydCBhcyBOVU1CRVIpLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5VTUJFUigobGYgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpICogKHJ0IGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOVU1CRVI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTlVNQkVSKChsZiBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpICogKHJ0IGFzIE5VTUJFUikuZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIEJPT0xFQU46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTlVNQkVSKChsZiBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpICogKHJ0IGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRGl2aXNpb24obGY6IENudG5yLCBydDogQ250bnIpOiBDbnRuciB7XHJcbiAgICBsZiBpbnN0YW5jZW9mIFJlZmVyZW5jZSA/IGxmID0gKGxmIGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKSA6IGxmO1xyXG4gICAgcnQgaW5zdGFuY2VvZiBSZWZlcmVuY2UgPyBydCA9IChydCBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCkgOiBydDtcclxuXHJcbiAgICBpZihydCBpbnN0YW5jZW9mIE5VTUJFUil7XHJcbiAgICAgICAgaWYoKHJ0IGFzIE5VTUJFUikuZ2V0VmFsdWUoKSA9PT0gMCl7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBTZW1hbnRpY0V4Y2VwdGlvbignT3BlcmFjacOzbiBubyB2w6FsaWRhLCBubyBzZSBwdWVkZSBkaXZpZGlyIGVudHJlIDAnKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYocnQgaW5zdGFuY2VvZiBCT09MRUFOKXtcclxuICAgICAgICBpZigocnQgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSA9PT0gMCl7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBTZW1hbnRpY0V4Y2VwdGlvbignT3BlcmFjacOzbiBubyB2w6FsaWRhLCBubyBzZSBwdWVkZSBkaXZpZGlyIGVudHJlIDAnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBEaXZpZGlyKGxmLCBydCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFNlbWFudGljRXhjZXB0aW9uKGBPcGVyYWNpb24gZW50cmUgdGlwb3MgKCAke2xmLnR5cG99IC8gJHtydC50eXBvfSApIG5vIHBlcm1pdGlkYS5gKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIERpdmlkaXIobGY6IGFueSwgcnQ6IGFueSk6IENudG5yIHtcclxuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgY2FzZSBsZiBpbnN0YW5jZW9mIE5VTUJFUjpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOVU1CRVI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTlVNQkVSKChsZiBhcyBOVU1CRVIpLmdldFZhbHVlKCkgLyAocnQgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOVU1CRVIoKGxmIGFzIE5VTUJFUikuZ2V0VmFsdWUoKSAvIChydCBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBsZiBpbnN0YW5jZW9mIEJPT0xFQU46XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5VTUJFUigobGYgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSAvIChydCBhcyBOVU1CRVIpLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5VTUJFUigobGYgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSAvIChydCBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1vZHVsbyhsZjogQ250bnIsIHJ0OiBDbnRucik6IENudG5yIHtcclxuICAgIGxmIGluc3RhbmNlb2YgUmVmZXJlbmNlID8gbGYgPSAobGYgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpIDogbGY7XHJcbiAgICBydCBpbnN0YW5jZW9mIFJlZmVyZW5jZSA/IHJ0ID0gKHJ0IGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKSA6IHJ0O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIE1vZChsZiwgcnQpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBTZW1hbnRpY0V4Y2VwdGlvbihgT3BlcmFjaW9uIGVudHJlIHRpcG9zICggJHtsZi50eXBvfSAlICR7cnQudHlwb30gKSBubyBwZXJtaXRpZGEuYClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBNb2QobGY6IGFueSwgcnQ6IGFueSk6IENudG5yIHtcclxuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgY2FzZSBsZiBpbnN0YW5jZW9mIE5VTUJFUjpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOVU1CRVI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTlVNQkVSKChsZiBhcyBOVU1CRVIpLmdldFZhbHVlKCkgJSAocnQgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOVU1CRVIoKGxmIGFzIE5VTUJFUikuZ2V0VmFsdWUoKSAlIChydCBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBsZiBpbnN0YW5jZW9mIEJPT0xFQU46XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5VTUJFUigobGYgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSAlIChydCBhcyBOVU1CRVIpLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5VTUJFUigobGYgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSAlIChydCBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBvdGVuY2lhKGxmOiBDbnRuciwgcnQ6IENudG5yKTogQ250bnIge1xyXG4gICAgbGYgaW5zdGFuY2VvZiBSZWZlcmVuY2UgPyBsZiA9IChsZiBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCkgOiBsZjtcclxuICAgIHJ0IGluc3RhbmNlb2YgUmVmZXJlbmNlID8gcnQgPSAocnQgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpIDogcnQ7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gUG90KGxmLCBydCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFNlbWFudGljRXhjZXB0aW9uKGBPcGVyYWNpb24gZW50cmUgdGlwb3MgKCAke2xmLnR5cG99IF4gJHtydC50eXBvfSApIG5vIHBlcm1pdGlkYS5gKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIFBvdChsZjogYW55LCBydDogYW55KTogQ250bnIge1xyXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5VTUJFUjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOVU1CRVIoTWF0aC5wb3coKGxmIGFzIE5VTUJFUikuZ2V0VmFsdWUoKSwgKHJ0IGFzIE5VTUJFUikuZ2V0VmFsdWUoKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5VTUJFUihNYXRoLnBvdygobGYgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpLCAgKHJ0IGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkpKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBsZiBpbnN0YW5jZW9mIEJPT0xFQU46XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5VTUJFUihNYXRoLnBvdygobGYgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSwgKHJ0IGFzIE5VTUJFUikuZ2V0VmFsdWUoKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5VTUJFUihNYXRoLnBvdygobGYgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSwgKHJ0IGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkpKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFkZChsZjogQ250bnIpOiBDbnRuciB7XHJcbiAgICBpZiAoIShsZiBpbnN0YW5jZW9mIFJlZmVyZW5jZSkpIHtcclxuICAgICAgICB0aHJvdyBuZXcgU2VtYW50aWNFeGNlcHRpb24oXCJPcGVyYWNpb24ge3JlZisrfSBwZXJtaXRpZGEgc29sYW1lbnRlIHNvYnJlIHJlZmVyZW5jYXNcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdmFsID0gKGxmIGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKTtcclxuICAgIGlmICh2YWwgaW5zdGFuY2VvZiBOVU1CRVIpIHtcclxuICAgICAgICAobGYgYXMgUmVmZXJlbmNlKS5zZXRWYWx1ZShuZXcgTlVNQkVSKCh2YWwgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpICsgMSkpO1xyXG4gICAgICAgIHJldHVybiB2YWwgYXMgTlVNQkVSO1xyXG4gICAgfVxyXG5cclxuICAgIHRocm93IG5ldyBTZW1hbnRpY0V4Y2VwdGlvbihcIk9wZXJhY2lvbiB7cmVmKyt9IE5vIHNlIHB1ZWRlIHJlYWxpemFyIHNvYnJlIHZhcmlhYmxlcyBkaXN0aW50YXMgZGUgdGlwbyBudW1iZXJcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTdWIobGY6IENudG5yKTogQ250bnIge1xyXG4gICAgaWYgKCEobGYgaW5zdGFuY2VvZiBSZWZlcmVuY2UpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFNlbWFudGljRXhjZXB0aW9uKFwiT3BlcmFjaW9uIHtyZWYtLX0gcGVybWl0aWRhIHNvbGFtZW50ZSBzb2JyZSByZWZlcmVuY2FzXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHZhbCA9IChsZiBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCk7XHJcbiAgICBpZiAodmFsIGluc3RhbmNlb2YgTlVNQkVSKSB7XHJcbiAgICAgICAgKGxmIGFzIFJlZmVyZW5jZSkuc2V0VmFsdWUobmV3IE5VTUJFUigodmFsIGFzIE5VTUJFUikuZ2V0VmFsdWUoKSAtIDEpKTtcclxuICAgICAgICByZXR1cm4gdmFsIGFzIE5VTUJFUjtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyBuZXcgU2VtYW50aWNFeGNlcHRpb24oXCJPcGVyYWNpb24ge3JlZi0tfSBObyBzZSBwdWVkZSByZWFsaXphciBzb2JyZSB2YXJpYWJsZXMgZGlzdGludGFzIGRlIHRpcG8gbnVtYmVyXCIpO1xyXG59XHJcbiIsImltcG9ydCB7UmVmZXJlbmNlfSBmcm9tIFwiLi9SZWZlcmVuY2VcIjtcclxuaW1wb3J0IHtVTkRFRklORUR9IGZyb20gXCIuL1ByaW1pdGl2ZVR5cG9Db250YWluZXJcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDbnRuciB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IG93bmVyOiBDbnRucjtcclxuICAgIHB1YmxpYyByZWFkb25seSBwcm9wcyA9IG5ldyBNYXA8c3RyaW5nLCBDbnRucj4oKTtcclxuICAgIHB1YmxpYyB0eXBvOiBzdHJpbmc7XHJcblxyXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKG93bmVyPzogQ250bnIpIHtcclxuICAgICAgICB0aGlzLm93bmVyID0gb3duZXIgfHwgbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgQXNPYmplY3RQcm9wcygpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBhbnMgPSBcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuXCI7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5mb3JFYWNoKCh2LCBrKSA9PiB7XHJcbiAgICAgICAgICAgIGFucyArPSBrICsgJyA9PiAnICsgdiArICdcXG4nO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFucyArPSBcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuXCI7XHJcbiAgICAgICAgcmV0dXJuIGFucztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgQWRkUHJvcGVydHkoaWQ6IHN0cmluZywgY250bnI6IENudG5yKTogdm9pZCB7XHJcbiAgICAgICAgaWQgPSBpZC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuc2V0KGlkLCBjbnRucik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldFByb3BlcnR5KGlkOiBzdHJpbmcpOiBDbnRuciB7XHJcbiAgICAgICAgaWQgPSBpZC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IHZhbCA9IHRoaXMucHJvcHMuZ2V0KGlkKTtcclxuICAgICAgICBpZiAodmFsICE9PSBudWxsICYmIHZhbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3RoaXMucHJvcHMuc2V0KGlkLCBuZXcgUmVmZXJlbmNlKCkpO1xyXG4gICAgICAgIC8vcmV0dXJuIHRoaXMucHJvcHMuZ2V0KGlkKTtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBEZWNsYXJlKGlkOiBzdHJpbmcsIGNudG5yOiBDbnRucik6IHZvaWQge1xyXG4gICAgICAgIGlkID0gaWQudG9VcHBlckNhc2UoKTtcclxuICAgICAgICB0aGlzLnByb3BzLnNldChpZCwgY250bnIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRUeXBvKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwb1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTZXRUeXBvKHR5cG86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudHlwbyA9IHR5cG87XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldE93bmVyKCk6IENudG5yIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vd25lcjtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgQ29uc29sZSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGxvZzogc3RyaW5nID0gJyc7XHJcbn0iLCJpbXBvcnQge0NudG5yfSBmcm9tIFwiLi9DbnRuclwiO1xyXG5pbXBvcnQge09wfSBmcm9tIFwiLi9PcFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVudm1udCBleHRlbmRzIENudG5ye1xyXG4gICAgcHVibGljIHJlYWRvbmx5IEV4dHJhID0gbmV3IE1hcDxzdHJpbmcsIGFueT4oKTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgb3BlcmF0aW9uczogQXJyYXk8T3A+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG93bmVyOiBDbnRuciwgb3BlcmF0aW9uczogQXJyYXk8T3A+KXtcclxuICAgICAgICBzdXBlcihvd25lcik7XHJcbiAgICAgICAgdGhpcy5vcGVyYXRpb25zID0gb3BlcmF0aW9ucztcclxuICAgICAgICB0aGlzLnR5cG8gPSBcIkFtYml0b1wiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHT19BTEwoKTogQ250bnJ7XHJcbiAgICAgICAgZm9yKGxldCBvcCBvZiB0aGlzLm9wZXJhdGlvbnMpe1xyXG4gICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gb3AuRXhlKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgLy9UT0RPIGHDsWFkaXIgdmFsaWRhY2lvbiBkZSBCcmVhayB5IFJldHVyblxyXG4gICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdCBpbnN0YW5jZW9mIEJyZWFrT2JqIHx8IHJlc3VsdCBpbnN0YW5jZW9mIFJldHVybk9iail7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoQ250bnIpIHJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIH1jYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtDbnRucn0gZnJvbSBcIi4vQ250bnJcIjtcclxuaW1wb3J0IHtSZWZlcmVuY2V9IGZyb20gXCIuL1JlZmVyZW5jZVwiO1xyXG5pbXBvcnQge1NlbWFudGljRXhjZXB0aW9ufSBmcm9tIFwiLi9VdGlsc1wiO1xyXG5pbXBvcnQge0JPT0xFQU4sIE5BTiwgTlVMTCwgTlVNQkVSLCBTVFJJTkcsIFVOREVGSU5FRH0gZnJvbSBcIi4vUHJpbWl0aXZlVHlwb0NvbnRhaW5lclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE9yKGxmOiBDbnRuciwgcnQ6IENudG5yKTogQ250bnIge1xyXG4gICAgbGYgaW5zdGFuY2VvZiBSZWZlcmVuY2UgPyBsZiA9IChsZiBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCkgOiBsZjtcclxuICAgIHJ0IGluc3RhbmNlb2YgUmVmZXJlbmNlID8gcnQgPSAocnQgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpIDogcnQ7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gb3IobGYsIHJ0KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgU2VtYW50aWNFeGNlcHRpb24oYE9wZXJhY2lvbiBlbnRyZSB0aXBvcyAoICR7bGYudHlwb30gfHwgJHtydC50eXBvfSApIG5vIHBlcm1pdGlkYS5gKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvcihsZjogYW55LCBydDogYW55KTogQ250bnIge1xyXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oKGxmIGFzIEJPT0xFQU4pLmdldFZhbHVlKCkgfHwgKHJ0IGFzIEJPT0xFQU4pLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQW5kKGxmOiBDbnRuciwgcnQ6IENudG5yKTogQ250bnIge1xyXG4gICAgbGYgaW5zdGFuY2VvZiBSZWZlcmVuY2UgPyBsZiA9IChsZiBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCkgOiBsZjtcclxuICAgIHJ0IGluc3RhbmNlb2YgUmVmZXJlbmNlID8gcnQgPSAocnQgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpIDogcnQ7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gYW5kKGxmLCBydCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFNlbWFudGljRXhjZXB0aW9uKGBPcGVyYWNpb24gZW50cmUgdGlwb3MgKCAke2xmLnR5cG99ICYmICR7cnQudHlwb30gKSBubyBwZXJtaXRpZGEuYCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYW5kKGxmOiBhbnksIHJ0OiBhbnkpOiBDbnRuciB7XHJcbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIEJPT0xFQU46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTigobGYgYXMgQk9PTEVBTikuZ2V0VmFsdWUoKSAmJiAocnQgYXMgQk9PTEVBTikuZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOb3QobGY6IENudG5yKTogQ250bnIge1xyXG4gICAgbGYgaW5zdGFuY2VvZiBSZWZlcmVuY2UgPyBsZiA9IChsZiBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCkgOiBsZjtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBub3QobGYpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBTZW1hbnRpY0V4Y2VwdGlvbihgT3BlcmFjaW9uIGVudHJlIHRpcG9zICggISAke2xmLnR5cG99ICkgbm8gcGVybWl0aWRhLmApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG5vdChsZjogYW55KTogQ250bnIge1xyXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTighKGxmIGFzIEJPT0xFQU4pLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7RW52bW50fSBmcm9tIFwiLi9FbnZtbnRcIjtcclxuaW1wb3J0IHtFcnJvckNvbXBvfSBmcm9tIFwiLi9VdGlsc1wiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE9wIHtcclxuICAgIHB1YmxpYyBFeGUoZW52OiBFbnZtbnQpOiBvYmplY3R7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5HTyhlbnYpO1xyXG4gICAgICAgIH1jYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3JDb21wbyhlLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgR08oZW52OiBFbnZtbnQpOiBvYmplY3Q7XHJcbn0iLCJpbXBvcnQge0NudG5yfSBmcm9tIFwiLi9DbnRuclwiO1xyXG5pbXBvcnQge1JlZmVyZW5jZX0gZnJvbSBcIi4vUmVmZXJlbmNlXCI7XHJcbmltcG9ydCB7TGVuZ3RofSBmcm9tIFwiLi9uYXRpdmVGdW5jdGlvbnMvbGVuZ3RoXCI7XHJcbmltcG9ydCB7UHVzaH0gZnJvbSBcIi4vbmF0aXZlRnVuY3Rpb25zL3B1c2hcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCT09MRUFOIGV4dGVuZHMgQ250bnIge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSB2YWx1ZTogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZT86IGJvb2xlYW4pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnR5cG8gPSBcIkJPT0xFQU5cIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcgPSAoKTogc3RyaW5nID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0VmFsdWVOdW1iZXIgPSAoKTogbnVtYmVyID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSA/IDEgOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRWYWx1ZSA9ICgpOiBib29sZWFuID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTVFJJTkcgZXh0ZW5kcyBDbnRuciB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsdWU/OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZSB8fCAnJztcclxuICAgICAgICB0aGlzLnR5cG8gPSBcIlNUUklOR1wiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZyA9ICgpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0VmFsdWUgPSAoKTogc3RyaW5nID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOVU1CRVIgZXh0ZW5kcyBDbnRuciB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHZhbHVlOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsdWU/OiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZSB8fCAwO1xyXG4gICAgICAgIHRoaXMudHlwbyA9IFwiTlVNQkVSXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nID0gKCk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgKyAnJztcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIGdldFZhbHVlID0gKCk6IG51bWJlciA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVU5ERUZJTkVEIGV4dGVuZHMgQ250bnIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnR5cG8gPSBcIlVOREVGSU5FRFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZyA9ICgpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIHJldHVybiBcInVuZGVmaW5lZFwiO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5BTiBleHRlbmRzIENudG5yIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy50eXBvID0gXCJOQU5cIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcgPSAoKTogc3RyaW5nID0+IHtcclxuICAgICAgICByZXR1cm4gXCJOYU5cIjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5VTEwgZXh0ZW5kcyBDbnRuciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudHlwbyA9IFwiTlVMTFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZyA9ICgpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0VmFsdWUgPSAoKTogb2JqZWN0ID0+IHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBUlJBWSBleHRlbmRzIENudG5yIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgdmFsdWU6IEFycmF5PENudG5yPjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29udGVudFR5cGU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZT86IEFycmF5PENudG5yPiwgY29udGVudFR5cGU6IHN0cmluZyA9ICdBTlknKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWUgfHwgbmV3IEFycmF5PENudG5yPigpO1xyXG4gICAgICAgIHRoaXMudHlwbyA9IGBBUlJBWWA7XHJcbiAgICAgICAgdGhpcy5jb250ZW50VHlwZSA9IGNvbnRlbnRUeXBlO1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgdGhpcy5EZWNsYXJlKFwibGVuZ3RoXCIsIG5ldyBMZW5ndGgodGhpcykpO1xyXG4gICAgICAgICAgICB0aGlzLkRlY2xhcmUoXCJwdXNoXCIsIG5ldyBQdXNoKHRoaXMpKTtcclxuICAgICAgICB9Y2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZyA9ICgpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLnZhbHVlLmxlbmd0aDtcclxuICAgICAgICBsZXQgbG9nID0gYEFycmF5ICgke3NpemV9KSBbYDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xyXG4gICAgICAgICAgICBsb2cgKz0gYCR7KHRoaXMudmFsdWVbaV0gYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpfWA7XHJcbiAgICAgICAgICAgIGlmIChzaXplIC0gMSAhPT0gaSkge1xyXG4gICAgICAgICAgICAgICAgbG9nICs9ICcsICc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbG9nICs9ICddJztcclxuICAgICAgICByZXR1cm4gbG9nO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0VmFsdWUgPSAoaW5kZXg6IG51bWJlcik6IG9iamVjdCA9PiB7XHJcbiAgICAgICAgbGV0IHZhbCA9IHRoaXMudmFsdWVbaW5kZXhdO1xyXG4gICAgICAgIGlmICh2YWwgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2l6ZSA9IHRoaXMudmFsdWUubGVuZ3RoO1xyXG4gICAgICAgIHdoaWxlIChzaXplIDw9IGluZGV4KSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUucHVzaChuZXcgUmVmZXJlbmNlKCkpO1xyXG4gICAgICAgICAgICBzaXplKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlW2luZGV4XTtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIGFkZFZhbHVlKHZhbHVlOiBDbnRucikge1xyXG4gICAgICAgIHRoaXMudmFsdWUucHVzaCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFZhbHVlTGlzdCA9ICgpOiBBcnJheTxDbnRucj4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgfTtcclxufVxyXG4iLCJpbXBvcnQge0NudG5yfSBmcm9tIFwiLi9DbnRuclwiO1xyXG5pbXBvcnQge0RlZmF1bHRWYWx1ZSwgU2VtYW50aWNFeGNlcHRpb259IGZyb20gXCIuL1V0aWxzXCI7XHJcbmltcG9ydCB7VU5ERUZJTkVEfSBmcm9tIFwiLi9QcmltaXRpdmVUeXBvQ29udGFpbmVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVmZXJlbmNlIGV4dGVuZHMgQ250bnIge1xyXG4gICAgcHJpdmF0ZSB2YWx1ZTogQ250bnI7XHJcbiAgICBwcml2YXRlIGlzQ29uc3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgdGlwb05vbWJyZTogc3RyaW5nID0gJ2FueSc7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGlwb05vbWJyZTogc3RyaW5nID0gJ0FOWScsIGlzQ29uc3Q6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy50eXBvID0gXCJSRUZFUkVOQ0VcIjtcclxuICAgICAgICB0aGlzLnZhbHVlID0gRGVmYXVsdFZhbHVlKHRpcG9Ob21icmUpO1xyXG4gICAgICAgIHRoaXMudGlwb05vbWJyZSA9IHRpcG9Ob21icmU7XHJcbiAgICAgICAgdGhpcy5pc0NvbnN0ID0gaXNDb25zdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0UmVmZXJlbmNlVmFsdWUgPSAoKSA6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGlwb05vbWJyZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcgPSAoKTogc3RyaW5nID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS50b1N0cmluZygpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgUHV0VmFsdWVPblJlZmVyZW5jZSh2YWx1ZTogQ250bnIpOiB2b2lkIHtcclxuICAgICAgICBpZih0aGlzLmlzQ29uc3QgJiYgISh0aGlzLnZhbHVlIGluc3RhbmNlb2YgVU5ERUZJTkVEKSl7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBTZW1hbnRpY0V4Y2VwdGlvbignTm8gc2UgcHVlZGUgY2FtYmlhciBlbCB2YWxvciBkZSB1bmEgY29uc3RhbnRlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdjogQ250bnI7XHJcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgUmVmZXJlbmNlKSB7XHJcbiAgICAgICAgICAgIHYgPSAodmFsdWUgYXMgUmVmZXJlbmNlKS52YWx1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2ID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMudGlwb05vbWJyZSAhPT0gdi50eXBvXHJcbiAgICAgICAgICAgICYmIHRoaXMudGlwb05vbWJyZSAhPT0gJ0FOWSdcclxuICAgICAgICAgICAgJiYgdi50eXBvICE9PSAnTlVMTCdcclxuICAgICAgICAgICAgJiYgdi50eXBvICE9PSAnVU5ERUZJTkVEJ1xyXG4gICAgICAgICl7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBTZW1hbnRpY0V4Y2VwdGlvbihgVGlwbyAke3YudHlwb30gbm8gcHVlZGUgc2VyIGFzaWduYWRvIGEgVmFyaWFibGUgZGUgdGlwbyAke3RoaXMudGlwb05vbWJyZX1gKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnZhbHVlID0gdjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VmFsdWUgPSAoKTogQ250bnIgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgc2V0VmFsdWUgPSAodmFsdWU6IENudG5yKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgQ2FsbCA9IChhcmdzOiBBcnJheTxDbnRucj4pOiBvYmplY3QgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IGFyZyBvZiBhcmdzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFyZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxufVxyXG4iLCJpbXBvcnQge0NudG5yfSBmcm9tIFwiLi9DbnRuclwiO1xyXG5pbXBvcnQge1JlZmVyZW5jZX0gZnJvbSBcIi4vUmVmZXJlbmNlXCI7XHJcbmltcG9ydCB7U2VtYW50aWNFeGNlcHRpb259IGZyb20gXCIuL1V0aWxzXCI7XHJcbmltcG9ydCB7Qk9PTEVBTiwgTkFOLCBOVUxMLCBOVU1CRVIsIFNUUklORywgVU5ERUZJTkVEfSBmcm9tIFwiLi9QcmltaXRpdmVUeXBvQ29udGFpbmVyXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSWd1YWwobGY6IENudG5yLCBydDogQ250bnIpOiBDbnRuciB7XHJcbiAgICBsZiBpbnN0YW5jZW9mIFJlZmVyZW5jZSA/IGxmID0gKGxmIGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKSA6IGxmO1xyXG4gICAgcnQgaW5zdGFuY2VvZiBSZWZlcmVuY2UgPyBydCA9IChydCBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCkgOiBydDtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBFcShsZiwgcnQpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBTZW1hbnRpY0V4Y2VwdGlvbihgT3BlcmFjaW9uIGVudHJlIHRpcG9zICggJHtsZi50eXBvfSA9PSAke3J0LnR5cG99ICkgbm8gcGVybWl0aWRhLmApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gRXEobGY6IGFueSwgcnQ6IGFueSk6IENudG5yIHtcclxuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgY2FzZSBsZiBpbnN0YW5jZW9mIE5VTUJFUjpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOVU1CRVI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTigobGYgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpID09PSAocnQgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKChsZiBhcyBOVU1CRVIpLmdldFZhbHVlKCkgPT09IChydCBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTlVMTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgVU5ERUZJTkVEOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOQU46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5VTUJFUjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKChsZiBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpID09IChydCBhcyBOVU1CRVIpLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oKGxmIGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkgPT0gKHJ0IGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOVUxMOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBVTkRFRklORUQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5BTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBsZiBpbnN0YW5jZW9mIFNUUklORzpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBTVFJJTkc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTigobGYgYXMgU1RSSU5HKS5nZXRWYWx1ZSgpID09PSAocnQgYXMgU1RSSU5HKS5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTlVMTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgVU5ERUZJTkVEOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOQU46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBVTkRFRklORUQ6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgVU5ERUZJTkVEOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBsZiBpbnN0YW5jZW9mIE5VTEw6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTlVMTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBOQU46XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTkFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBEaWZlcmVudGUobGY6IENudG5yLCBydDogQ250bnIpOiBDbnRuciB7XHJcbiAgICBsZiBpbnN0YW5jZW9mIFJlZmVyZW5jZSA/IGxmID0gKGxmIGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKSA6IGxmO1xyXG4gICAgcnQgaW5zdGFuY2VvZiBSZWZlcmVuY2UgPyBydCA9IChydCBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCkgOiBydDtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBEaWYobGYsIHJ0KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgU2VtYW50aWNFeGNlcHRpb24oYE9wZXJhY2lvbiBlbnRyZSB0aXBvcyAoICR7bGYudHlwb30gPT0gJHtydC50eXBvfSApIG5vIHBlcm1pdGlkYS5gKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIERpZihsZjogYW55LCBydDogYW55KTogQ250bnIge1xyXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5VTUJFUjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKChsZiBhcyBOVU1CRVIpLmdldFZhbHVlKCkgIT09IChydCBhcyBOVU1CRVIpLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oKGxmIGFzIE5VTUJFUikuZ2V0VmFsdWUoKSAhPT0gKHJ0IGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOVUxMOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIFVOREVGSU5FRDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOQU46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBsZiBpbnN0YW5jZW9mIEJPT0xFQU46XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oKGxmIGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkgIT0gKHJ0IGFzIE5VTUJFUikuZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIEJPT0xFQU46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTigobGYgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSAhPSAocnQgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5VTEw6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgVU5ERUZJTkVEOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5BTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgU1RSSU5HOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIFNUUklORzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKChsZiBhcyBTVFJJTkcpLmdldFZhbHVlKCkgIT09IChydCBhcyBTVFJJTkcpLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOVUxMOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIFVOREVGSU5FRDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgVU5ERUZJTkVEOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIFVOREVGSU5FRDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBOVUxMOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5VTEw6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEJPT0xFQU4odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBOQU46XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTkFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBCT09MRUFOKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTWF5b3IobGY6IENudG5yLCBydDogQ250bnIpOiBDbnRuciB7XHJcbiAgICBsZiBpbnN0YW5jZW9mIFJlZmVyZW5jZSA/IGxmID0gKGxmIGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKSA6IGxmO1xyXG4gICAgcnQgaW5zdGFuY2VvZiBSZWZlcmVuY2UgPyBydCA9IChydCBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCkgOiBydDtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBNYXkobGYsIHJ0KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgU2VtYW50aWNFeGNlcHRpb24oYE9wZXJhY2lvbiBlbnRyZSB0aXBvcyAoICR7bGYudHlwb30gPiAke3J0LnR5cG99ICkgbm8gcGVybWl0aWRhLmApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gTWF5KGxmOiBhbnksIHJ0OiBhbnkpOiBDbnRuciB7XHJcbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBOVU1CRVI6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oKGxmIGFzIE5VTUJFUikuZ2V0VmFsdWUoKSA+IChydCBhcyBOVU1CRVIpLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oKGxmIGFzIE5VTUJFUikuZ2V0VmFsdWUoKSA+IChydCBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTkFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOVU1CRVI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTigobGYgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSA+IChydCBhcyBOVU1CRVIpLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oKGxmIGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkgPiAocnQgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBTVFJJTkc6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgU1RSSU5HOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oKGxmIGFzIFNUUklORykuZ2V0VmFsdWUoKSA+IChydCBhcyBTVFJJTkcpLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgTkFOOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5VTUJFUjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1lbm9yKGxmOiBDbnRuciwgcnQ6IENudG5yKTogQ250bnIge1xyXG4gICAgbGYgaW5zdGFuY2VvZiBSZWZlcmVuY2UgPyBsZiA9IChsZiBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCkgOiBsZjtcclxuICAgIHJ0IGluc3RhbmNlb2YgUmVmZXJlbmNlID8gcnQgPSAocnQgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpIDogcnQ7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gTWluKGxmLCBydCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFNlbWFudGljRXhjZXB0aW9uKGBPcGVyYWNpb24gZW50cmUgdGlwb3MgKCAke2xmLnR5cG99IDwgJHtydC50eXBvfSApIG5vIHBlcm1pdGlkYS5gKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIE1pbihsZjogYW55LCBydDogYW55KTogQ250bnIge1xyXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5VTUJFUjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKChsZiBhcyBOVU1CRVIpLmdldFZhbHVlKCkgPCAocnQgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKChsZiBhcyBOVU1CRVIpLmdldFZhbHVlKCkgPCAocnQgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5BTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBsZiBpbnN0YW5jZW9mIEJPT0xFQU46XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oKGxmIGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkgPCAocnQgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKChsZiBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpIDwgKHJ0IGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgU1RSSU5HOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIFNUUklORzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKChsZiBhcyBTVFJJTkcpLmdldFZhbHVlKCkgPCAocnQgYXMgU1RSSU5HKS5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBsZiBpbnN0YW5jZW9mIE5BTjpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOVU1CRVI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNYXlvckVxKGxmOiBDbnRuciwgcnQ6IENudG5yKTogQ250bnIge1xyXG4gICAgbGYgaW5zdGFuY2VvZiBSZWZlcmVuY2UgPyBsZiA9IChsZiBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCkgOiBsZjtcclxuICAgIHJ0IGluc3RhbmNlb2YgUmVmZXJlbmNlID8gcnQgPSAocnQgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpIDogcnQ7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gTWF5RXEobGYsIHJ0KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgU2VtYW50aWNFeGNlcHRpb24oYE9wZXJhY2lvbiBlbnRyZSB0aXBvcyAoICR7bGYudHlwb30gPj0gJHtydC50eXBvfSApIG5vIHBlcm1pdGlkYS5gKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIE1heUVxKGxmOiBhbnksIHJ0OiBhbnkpOiBDbnRuciB7XHJcbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBOVU1CRVI6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oKGxmIGFzIE5VTUJFUikuZ2V0VmFsdWUoKSA+PSAocnQgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKChsZiBhcyBOVU1CRVIpLmdldFZhbHVlKCkgPj0gKHJ0IGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOQU46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5VTUJFUjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKChsZiBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpID49IChydCBhcyBOVU1CRVIpLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oKGxmIGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkgPj0gKHJ0IGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgU1RSSU5HOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIFNUUklORzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKChsZiBhcyBTVFJJTkcpLmdldFZhbHVlKCkgPj0gKHJ0IGFzIFNUUklORykuZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBOQU46XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTWVub3JFcShsZjogQ250bnIsIHJ0OiBDbnRucik6IENudG5yIHtcclxuICAgIGxmIGluc3RhbmNlb2YgUmVmZXJlbmNlID8gbGYgPSAobGYgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpIDogbGY7XHJcbiAgICBydCBpbnN0YW5jZW9mIFJlZmVyZW5jZSA/IHJ0ID0gKHJ0IGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKSA6IHJ0O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIE1pbkVxKGxmLCBydCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFNlbWFudGljRXhjZXB0aW9uKGBPcGVyYWNpb24gZW50cmUgdGlwb3MgKCAke2xmLnR5cG99ID49ICR7cnQudHlwb30gKSBubyBwZXJtaXRpZGEuYClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBNaW5FcShsZjogYW55LCBydDogYW55KTogQ250bnIge1xyXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5VTUJFUjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKChsZiBhcyBOVU1CRVIpLmdldFZhbHVlKCkgPD0gKHJ0IGFzIE5VTUJFUikuZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIEJPT0xFQU46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTigobGYgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpIDw9IChydCBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTkFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOVU1CRVI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTigobGYgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSA8PSAocnQgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKChsZiBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpIDw9IChydCBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBsZiBpbnN0YW5jZW9mIFNUUklORzpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBTVFJJTkc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTigobGYgYXMgU1RSSU5HKS5nZXRWYWx1ZSgpIDw9IChydCBhcyBTVFJJTkcpLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgTkFOOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5VTUJFUjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge05VTEwsIFVOREVGSU5FRH0gZnJvbSBcIi4vUHJpbWl0aXZlVHlwb0NvbnRhaW5lclwiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi9DbnRuclwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4vRW52bW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VtYW50aWNFeGNlcHRpb24gZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlPzogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFcnJvckNvbXBvIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZT86IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRGVmYXVsdFZhbHVlKHR5cG86IHN0cmluZyk6IENudG5yIHtcclxuICAgIHN3aXRjaCAodHlwby50b1VwcGVyQ2FzZSgpKSB7XHJcbiAgICAgICAgY2FzZSBcIk5VTExcIjpcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBOVUxMKCk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBVTkRFRklORUQoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEZpbmRWYXIoY29udDogQ250bnIsIGlkZW50aWZpZXI6IHN0cmluZyk6IENudG5yIHtcclxuICAgIGxldCBvd25lckNudG5yID0gY29udDtcclxuXHJcbiAgICB3aGlsZSAob3duZXJDbnRuciAhPSBudWxsKXtcclxuICAgICAgICBpZihvd25lckNudG5yLkdldFByb3BlcnR5KGlkZW50aWZpZXIpICE9PSBudWxsKXtcclxuICAgICAgICAgICAgcmV0dXJuIG93bmVyQ250bnIuR2V0UHJvcGVydHkoaWRlbnRpZmllcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG93bmVyQ250bnIgPSBvd25lckNudG5yLkdldE93bmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhyb3cgIG5ldyBTZW1hbnRpY0V4Y2VwdGlvbihgaWRlbnRpZmljYWRvciAke2lkZW50aWZpZXJ9IG5vIGVuY29udHJhZG9gKTtcclxufVxyXG4iLCJpbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL0Vudm1udFwiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vQ250bnJcIjtcclxuXHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRnVuY3Rpb25SZXByZXNlbnQgZXh0ZW5kcyBDbnRucntcclxuICAgIHB1YmxpYyBhYnN0cmFjdCBFWEUoZW52MDogRW52bW50LCBhcmdzOiBBcnJheTxDbnRucj4pOiBDbnRucjtcclxufSIsImltcG9ydCB7RnVuY3Rpb25SZXByZXNlbnR9IGZyb20gXCIuL0Z1bmN0aW9uUmVwcmVzZW50XCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTmF0aXZlIGV4dGVuZHMgRnVuY3Rpb25SZXByZXNlbnR7XHJcblxyXG59IiwiaW1wb3J0IHtOYXRpdmV9IGZyb20gXCIuLi9mdW5jdGlvbnMvTmF0aXZlXCI7XHJcbmltcG9ydCB7QVJSQVksIE5VTUJFUn0gZnJvbSBcIi4uL1ByaW1pdGl2ZVR5cG9Db250YWluZXJcIjtcclxuaW1wb3J0IHtFbnZtbnR9IGZyb20gXCIuLi9FbnZtbnRcIjtcclxuaW1wb3J0IHtDbnRucn0gZnJvbSBcIi4uL0NudG5yXCI7XHJcbmltcG9ydCB7UmV0dXJuT2JqfSBmcm9tIFwiLi4vLi4vbm9kZXMvUmV0dXJuT2JqXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTGVuZ3RoIGV4dGVuZHMgTmF0aXZle1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBhcnJheTogQVJSQVk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYXJyYXk6IEFSUkFZKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmFycmF5ID0gYXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgRVhFKGVudjA6IEVudm1udCwgYXJnczogQXJyYXk8Q250bnI+KTogQ250bnIge1xyXG4gICAgICAgIGxldCBzaXplID0gdGhpcy5hcnJheS5nZXRWYWx1ZUxpc3QoKS5sZW5ndGg7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZXR1cm5PYmoobmV3IE5VTUJFUihzaXplKSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge05hdGl2ZX0gZnJvbSBcIi4uL2Z1bmN0aW9ucy9OYXRpdmVcIjtcclxuaW1wb3J0IHtBUlJBWSwgTlVNQkVSfSBmcm9tIFwiLi4vUHJpbWl0aXZlVHlwb0NvbnRhaW5lclwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL0Vudm1udFwiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vQ250bnJcIjtcclxuaW1wb3J0IHtSZXR1cm5PYmp9IGZyb20gXCIuLi8uLi9ub2Rlcy9SZXR1cm5PYmpcIjtcclxuaW1wb3J0IHtSZWZlcmVuY2V9IGZyb20gXCIuLi9SZWZlcmVuY2VcIjtcclxuaW1wb3J0IHtTZW1hbnRpY0V4Y2VwdGlvbn0gZnJvbSBcIi4uL1V0aWxzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHVzaCBleHRlbmRzIE5hdGl2ZXtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgYXJyYXk6IEFSUkFZO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGFycmF5OiBBUlJBWSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5hcnJheSA9IGFycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIEVYRShlbnYwOiBFbnZtbnQsIGFyZ3M6IEFycmF5PENudG5yPik6IENudG5yIHtcclxuICAgICAgICBsZXQgc2l6ZSA9IHRoaXMuYXJyYXkuZ2V0VmFsdWVMaXN0KCkubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGkgaW4gYXJncykge1xyXG4gICAgICAgICAgICBsZXQgcmVmID0gbmV3IFJlZmVyZW5jZSgpO1xyXG4gICAgICAgICAgICByZWYuc2V0VmFsdWUoYXJnc1tpXSk7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyYXkuYWRkVmFsdWUocmVmKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZXR1cm5PYmoobmV3IE5VTUJFUihzaXplKSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9