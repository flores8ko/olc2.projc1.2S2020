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
/******/ 	var hotCurrentHash = "4b3ee7d0c8f1aadb1256";
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
/*! exports provided: Console, Cntnr, Envmnt, Op, NULL, UNDEFINED, Reference, ConsoleLogNode, NumberNode, StringNode, BooleanNode, NullNode, UndefinedNode, DeclareVarNode, DeclareVarListNode, CreateIdVarNode, AsignNode, SumNode, SubNode, MulNode, DivNode, ModNode, ExpNode, EqNode, DifNode, HigherNode, MinorNode, HigherEqNode, MinorEqNode, OrNode, AndNode, NotNode, ReAsignAddNode, ReAsignSubNode, ReAsignMulNode, ReAsignDivNode, ReAsignModNode, ReAddNode, ReSubNode, CreateArrayNode, CreateArrVarNode, ReturnObj, CreateObjVarNode, CreateObjFunNode, SentenceTernaryNode, BreakNode, ContinueNode, IfNode, WhileNode, DoWhileNode, CaseNode, SwitchNode, ForInNode, ForOfNode, ForNode, CreateObjNode, MyMap, DeclareTypeStructureNode, DeclareFunNode, DeclareFunParamNode, ReturnNode, FunctionCallNode, ExecuteAST, GraphAST, TranslateStringsCompose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecuteAST", function() { return ExecuteAST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphAST", function() { return GraphAST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateStringsCompose", function() { return TranslateStringsCompose; });
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

/* harmony import */ var _nodes_SentenceTernaryNode__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./nodes/SentenceTernaryNode */ "./src/nodes/SentenceTernaryNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SentenceTernaryNode", function() { return _nodes_SentenceTernaryNode__WEBPACK_IMPORTED_MODULE_43__["SentenceTernaryNode"]; });

/* harmony import */ var _nodes_BreakNode__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./nodes/BreakNode */ "./src/nodes/BreakNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreakNode", function() { return _nodes_BreakNode__WEBPACK_IMPORTED_MODULE_44__["BreakNode"]; });

/* harmony import */ var _nodes_ContinueNode__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./nodes/ContinueNode */ "./src/nodes/ContinueNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContinueNode", function() { return _nodes_ContinueNode__WEBPACK_IMPORTED_MODULE_45__["ContinueNode"]; });

/* harmony import */ var _nodes_IfNode__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./nodes/IfNode */ "./src/nodes/IfNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IfNode", function() { return _nodes_IfNode__WEBPACK_IMPORTED_MODULE_46__["IfNode"]; });

/* harmony import */ var _nodes_WhileNode__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./nodes/WhileNode */ "./src/nodes/WhileNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WhileNode", function() { return _nodes_WhileNode__WEBPACK_IMPORTED_MODULE_47__["WhileNode"]; });

/* harmony import */ var _nodes_DoWhileNode__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./nodes/DoWhileNode */ "./src/nodes/DoWhileNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DoWhileNode", function() { return _nodes_DoWhileNode__WEBPACK_IMPORTED_MODULE_48__["DoWhileNode"]; });

/* harmony import */ var _nodes_CaseNode__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./nodes/CaseNode */ "./src/nodes/CaseNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CaseNode", function() { return _nodes_CaseNode__WEBPACK_IMPORTED_MODULE_49__["CaseNode"]; });

/* harmony import */ var _nodes_SwitchNode__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./nodes/SwitchNode */ "./src/nodes/SwitchNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchNode", function() { return _nodes_SwitchNode__WEBPACK_IMPORTED_MODULE_50__["SwitchNode"]; });

/* harmony import */ var _nodes_ForInNode__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./nodes/ForInNode */ "./src/nodes/ForInNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForInNode", function() { return _nodes_ForInNode__WEBPACK_IMPORTED_MODULE_51__["ForInNode"]; });

/* harmony import */ var _nodes_ForOfNode__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./nodes/ForOfNode */ "./src/nodes/ForOfNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForOfNode", function() { return _nodes_ForOfNode__WEBPACK_IMPORTED_MODULE_52__["ForOfNode"]; });

/* harmony import */ var _nodes_ForNode__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./nodes/ForNode */ "./src/nodes/ForNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForNode", function() { return _nodes_ForNode__WEBPACK_IMPORTED_MODULE_53__["ForNode"]; });

/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./utils/Utils */ "./src/utils/Utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MyMap", function() { return _utils_Utils__WEBPACK_IMPORTED_MODULE_54__["MyMap"]; });

/* harmony import */ var _nodes_CreateObjNode__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./nodes/CreateObjNode */ "./src/nodes/CreateObjNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreateObjNode", function() { return _nodes_CreateObjNode__WEBPACK_IMPORTED_MODULE_55__["CreateObjNode"]; });

/* harmony import */ var _nodes_DeclareTypeStructureNode__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./nodes/DeclareTypeStructureNode */ "./src/nodes/DeclareTypeStructureNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeclareTypeStructureNode", function() { return _nodes_DeclareTypeStructureNode__WEBPACK_IMPORTED_MODULE_56__["DeclareTypeStructureNode"]; });

/* harmony import */ var _nodes_DeclareFunNode__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./nodes/DeclareFunNode */ "./src/nodes/DeclareFunNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeclareFunNode", function() { return _nodes_DeclareFunNode__WEBPACK_IMPORTED_MODULE_57__["DeclareFunNode"]; });

/* harmony import */ var _nodes_DeclareFunParamNode__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./nodes/DeclareFunParamNode */ "./src/nodes/DeclareFunParamNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeclareFunParamNode", function() { return _nodes_DeclareFunParamNode__WEBPACK_IMPORTED_MODULE_58__["DeclareFunParamNode"]; });

/* harmony import */ var _nodes_ReturnNode__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./nodes/ReturnNode */ "./src/nodes/ReturnNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReturnNode", function() { return _nodes_ReturnNode__WEBPACK_IMPORTED_MODULE_59__["ReturnNode"]; });

/* harmony import */ var _nodes_FunctionCallNode__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./nodes/FunctionCallNode */ "./src/nodes/FunctionCallNode.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FunctionCallNode", function() { return _nodes_FunctionCallNode__WEBPACK_IMPORTED_MODULE_60__["FunctionCallNode"]; });































































function ExecuteAST(sentences) {
    _utils_Console__WEBPACK_IMPORTED_MODULE_5__["Console"].log = '';
    _utils_Utils__WEBPACK_IMPORTED_MODULE_54__["ObjectsStructures"].objects = new Map();
    const env = new _utils_Envmnt__WEBPACK_IMPORTED_MODULE_2__["Envmnt"](null, sentences);
    env.GO_ALL();
}
function GraphAST(sentences) {
    let graph = 'digraph G {\n' +
        '        bgcolor="#1E222A"\n' +
        '        node [fillcolor="#2E3440"; style=filled; fontcolor="#2BBBAD"; color="#2BBBAD"];\n' +
        '        edge [color="#2BBBAD"];';
    const env = new _utils_Envmnt__WEBPACK_IMPORTED_MODULE_2__["Envmnt"](null, sentences);
    graph += env.GetGraph().toString();
    graph += '}';
    console.log(graph);
    return graph;
}
function TranslateStringsCompose(text) {
    return text.replace(/`([^̣`]*)`/g, (text) => text.replace(/`/g, '"').replace(/\${[^}]*}/g, (text) => "\"+" + text.substring(2, text.length - 1) + "+\""));
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
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");



class AndNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        return Object(_utils_LogicalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["And"])(this.lf.Exe(env), this.rt.Exe(env));
    }
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"]('AND', [this.lf.GetGraph(env), this.rt.GetGraph(env)]);
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
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");




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
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_3__["GraphvizNode"]('ASIG', [this.lf.GetGraph(env), this.rt.GetGraph(env)]);
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
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");



class BooleanNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(val) {
        super();
        this.val = val;
    }
    GO(env) {
        return new _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__["BOOLEAN"](this.val);
    }
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"]('BOOLEAN', [new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"](this.val + '', [])]);
    }
}


/***/ }),

/***/ "./src/nodes/BreakNode.ts":
/*!********************************!*\
  !*** ./src/nodes/BreakNode.ts ***!
  \********************************/
/*! exports provided: BreakNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakNode", function() { return BreakNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _BreakObj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BreakObj */ "./src/nodes/BreakObj.ts");
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");



class BreakNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    GO(env) {
        return new _BreakObj__WEBPACK_IMPORTED_MODULE_1__["BreakObj"]();
    }
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"]('BREAK', [new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"]('break')]);
    }
}


/***/ }),

/***/ "./src/nodes/BreakObj.ts":
/*!*******************************!*\
  !*** ./src/nodes/BreakObj.ts ***!
  \*******************************/
/*! exports provided: BreakObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakObj", function() { return BreakObj; });
/* harmony import */ var _utils_Cntnr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Cntnr */ "./src/utils/Cntnr.ts");

class BreakObj extends _utils_Cntnr__WEBPACK_IMPORTED_MODULE_0__["Cntnr"] {
    constructor() {
        super();
    }
}


/***/ }),

/***/ "./src/nodes/CaseNode.ts":
/*!*******************************!*\
  !*** ./src/nodes/CaseNode.ts ***!
  \*******************************/
/*! exports provided: CaseNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseNode", function() { return CaseNode; });
class CaseNode {
    constructor(conditionValue, sentences) {
        this.conditionValue = conditionValue;
        this.sentences = sentences;
    }
    getConditionValue() {
        return this.conditionValue;
    }
    getSentences() {
        return this.sentences;
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
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");




class ConsoleLogNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(expression) {
        super();
        this.expression = expression;
    }
    GO(env) {
        let finalLog = '[LOG]: ';
        for (let expression of this.expression) {
            let val = expression.Exe(env);
            if (val instanceof _utils_Reference__WEBPACK_IMPORTED_MODULE_1__["Reference"]) {
                val = val.getValue();
            }
            finalLog += `${val} `;
        }
        _utils_Console__WEBPACK_IMPORTED_MODULE_2__["Console"].log += `${finalLog}\n`;
        console.log(`${finalLog}`);
        return null;
    }
    ;
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_3__["GraphvizNode"]('CONSOLE.LOG', this.expression.map(expression => expression.GetGraph(env)));
    }
}


/***/ }),

/***/ "./src/nodes/ContinueNode.ts":
/*!***********************************!*\
  !*** ./src/nodes/ContinueNode.ts ***!
  \***********************************/
/*! exports provided: ContinueNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContinueNode", function() { return ContinueNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _ContinueObj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContinueObj */ "./src/nodes/ContinueObj.ts");
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");



class ContinueNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    GO(env) {
        return new _ContinueObj__WEBPACK_IMPORTED_MODULE_1__["ContinueObj"]();
    }
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"]('CONTINUE', [new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"]('continue')]);
    }
}


/***/ }),

/***/ "./src/nodes/ContinueObj.ts":
/*!**********************************!*\
  !*** ./src/nodes/ContinueObj.ts ***!
  \**********************************/
/*! exports provided: ContinueObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContinueObj", function() { return ContinueObj; });
/* harmony import */ var _utils_Cntnr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Cntnr */ "./src/utils/Cntnr.ts");

class ContinueObj extends _utils_Cntnr__WEBPACK_IMPORTED_MODULE_0__["Cntnr"] {
    constructor() {
        super();
    }
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
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");





class CreateArrVarNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(id, index) {
        super();
        this.id = id;
        this.index = index;
    }
    GO(env) {
        let idRef = this.id.Exe(env);
        // if (!(idRef instanceof Reference)) {
        //     throw new SemanticException(`Llamada a Arreglo ${idRef} no definido.`);
        // }
        let index = this.index.Exe(env);
        if (index instanceof _utils_Reference__WEBPACK_IMPORTED_MODULE_1__["Reference"]) {
            index = index.getValue();
        }
        if (index instanceof _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_3__["STRING"]) {
            const val = parseInt(index.getValue());
            if (isNaN(val)) {
                throw new _utils_Utils__WEBPACK_IMPORTED_MODULE_2__["SemanticException"]("El indice para accesar debe ser de tipo NUMBER");
            }
            index = new _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_3__["NUMBER"](val);
        }
        if (!(index instanceof _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_3__["NUMBER"])) {
            throw new _utils_Utils__WEBPACK_IMPORTED_MODULE_2__["SemanticException"]("El indice para accesar debe ser de tipo NUMBER");
        }
        let ref = idRef instanceof _utils_Reference__WEBPACK_IMPORTED_MODULE_1__["Reference"] ? idRef.getValue() : idRef;
        if (!(ref instanceof _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_3__["ARRAY"])) {
            return new _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_3__["UNDEFINED"]();
        }
        return ref.getValue(index.getValue());
    }
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_4__["GraphvizNode"]('ARR_ELEMENT', [this.id.GetGraph(env), this.index.GetGraph(env)]);
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
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");




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
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_3__["GraphvizNode"]('ARRAY', this.vals.map(val => val.GetGraph(env)));
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
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");



class CreateIdVarNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(id) {
        super();
        this.id = id;
    }
    GO(env) {
        return Object(_utils_Utils__WEBPACK_IMPORTED_MODULE_1__["FindVar"])(env, this.id);
    }
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"]('VAR', [new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"](this.id)]);
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
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");





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
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_4__["GraphvizNode"]('FUNCTION', [this.object.GetGraph(env), new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_4__["GraphvizNode"](this.funId), new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_4__["GraphvizNode"]('ARGS', this.args.map(arg => arg.GetGraph(env)))]);
    }
}


/***/ }),

/***/ "./src/nodes/CreateObjNode.ts":
/*!************************************!*\
  !*** ./src/nodes/CreateObjNode.ts ***!
  \************************************/
/*! exports provided: CreateObjNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateObjNode", function() { return CreateObjNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_Reference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Reference */ "./src/utils/Reference.ts");
/* harmony import */ var _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");




class CreateObjNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(attrs) {
        super();
        this.attrs = attrs;
    }
    GO(env) {
        const real = new Map();
        this.attrs.forEach((v, k) => {
            let value = v.Exe(env);
            if (value instanceof _utils_Reference__WEBPACK_IMPORTED_MODULE_1__["Reference"]) {
                value = value.getValue();
            }
            const reference = new _utils_Reference__WEBPACK_IMPORTED_MODULE_1__["Reference"]();
            reference.PutValueOnReference(value);
            real.set(k, reference);
        });
        return new _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["OBJECT"](real);
    }
    GetGraph(env) {
        let values = [];
        this.attrs.forEach((v, k) => {
            values.push(new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_3__["GraphvizNode"](k));
            values.push(v.GetGraph(env));
        });
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_3__["GraphvizNode"]('TYPE_VALUE', values);
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
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");






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
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_5__["GraphvizNode"]('TYPE_MEMBER', [this.id.GetGraph(env), new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_5__["GraphvizNode"](this.attr)]);
    }
}


/***/ }),

/***/ "./src/nodes/DeclareFunNode.ts":
/*!*************************************!*\
  !*** ./src/nodes/DeclareFunNode.ts ***!
  \*************************************/
/*! exports provided: DeclareFunNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeclareFunNode", function() { return DeclareFunNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_functions_UserDefined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/functions/UserDefined */ "./src/utils/functions/UserDefined.ts");
/* harmony import */ var _utils_Reference__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Reference */ "./src/utils/Reference.ts");
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");




class DeclareFunNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(name, params, sentences, type = 'ANY') {
        super();
        this.name = name;
        this.params = params;
        this.sentences = sentences;
        this.type = type;
    }
    GO(env) {
        const value = new _utils_functions_UserDefined__WEBPACK_IMPORTED_MODULE_1__["UserDefined"](this.sentences, this.params, this.type);
        const reference = new _utils_Reference__WEBPACK_IMPORTED_MODULE_2__["Reference"]();
        reference.PutValueOnReference(value);
        if (this.name !== null) {
            env.Declare(this.name, reference);
            return undefined;
        }
        return value;
    }
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_3__["GraphvizNode"]('NEW_FUN', [
            new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_3__["GraphvizNode"](this.name),
            new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_3__["GraphvizNode"](this.type),
            new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_3__["GraphvizNode"]('PARAMS', this.params.map(param => param.GetGraph(env))),
            new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_3__["GraphvizNode"]('NEW_FUN_BODY', this.sentences.map(sentence => sentence.GetGraph(env)))
        ]);
    }
}


/***/ }),

/***/ "./src/nodes/DeclareFunParamNode.ts":
/*!******************************************!*\
  !*** ./src/nodes/DeclareFunParamNode.ts ***!
  \******************************************/
/*! exports provided: DeclareFunParamNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeclareFunParamNode", function() { return DeclareFunParamNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");
/* harmony import */ var _utils_Reference__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Reference */ "./src/utils/Reference.ts");
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");




class DeclareFunParamNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(name, type = 'ANY') {
        super();
        this.name = name;
        this.type = type.toUpperCase();
    }
    GO(env) {
        const value = new _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__["UNDEFINED"]();
        const reference = new _utils_Reference__WEBPACK_IMPORTED_MODULE_2__["Reference"](this.type);
        reference.PutValueOnReference(value);
        env.Declare(this.name, reference);
        return reference;
    }
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_3__["GraphvizNode"]('NEW_FUN_PARAM', [new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_3__["GraphvizNode"](this.name), new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_3__["GraphvizNode"](this.type)]);
    }
}


/***/ }),

/***/ "./src/nodes/DeclareTypeStructureNode.ts":
/*!***********************************************!*\
  !*** ./src/nodes/DeclareTypeStructureNode.ts ***!
  \***********************************************/
/*! exports provided: DeclareTypeStructureNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeclareTypeStructureNode", function() { return DeclareTypeStructureNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");



class DeclareTypeStructureNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(name, properties) {
        super();
        this.name = name;
        this.properties = properties.getMap();
    }
    GO(env) {
        const structure = new _utils_Utils__WEBPACK_IMPORTED_MODULE_1__["ObjectStructure"](this.properties);
        _utils_Utils__WEBPACK_IMPORTED_MODULE_1__["ObjectsStructures"].objects.set(this.name.toUpperCase(), structure);
        return undefined;
    }
    GetGraph(env) {
        let values = [];
        this.properties.forEach((v, k) => {
            values.push(new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"](k));
            values.push(new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"](v));
        });
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"]('NEW_TYPE', [new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"](this.name), new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"]('VALUES', values)]);
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
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");



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
        return null;
    }
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"]('DECLARE_VAR_LIST', [new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"](this.tipoNombre ? this.tipoNombre : 'ANY'), this.value === null ? new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"]('UNDEFINED') : this.value.GetGraph(env)]
            .concat(this.declarationOps.map(op => op.GetGraph(env))));
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
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");




class DeclareVarNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(name, value = null) {
        super();
        this.value = new _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__["UNDEFINED"]();
        this.name = name;
        this.valueOp = value;
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
        let value = this.value;
        if (this.valueOp != null) {
            value = this.valueOp.Exe(env);
        }
        const reference = new _utils_Reference__WEBPACK_IMPORTED_MODULE_2__["Reference"](this.tipoNombre, this.isConst);
        reference.PutValueOnReference(value);
        env.Declare(identifier, reference);
    }
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_3__["GraphvizNode"]('DECLARE_VAR', [new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_3__["GraphvizNode"](this.name), new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_3__["GraphvizNode"](this.tipoNombre ? this.tipoNombre : 'ANY'),
            this.valueOp !== null ? this.valueOp.GetGraph(env) : new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_3__["GraphvizNode"]('undefined')]);
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
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");



class DifNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        return Object(_utils_RelationalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["Diferente"])(this.lf.Exe(env), this.rt.Exe(env));
    }
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"]('DIF', [this.lf.GetGraph(env), this.rt.GetGraph(env)]);
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
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");



class DivNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        return Object(_utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["Division"])(this.lf.Exe(env), this.rt.Exe(env));
    }
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"]('DIV', [this.lf.GetGraph(env), this.rt.GetGraph(env)]);
    }
}


/***/ }),

/***/ "./src/nodes/DoWhileNode.ts":
/*!**********************************!*\
  !*** ./src/nodes/DoWhileNode.ts ***!
  \**********************************/
/*! exports provided: DoWhileNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoWhileNode", function() { return DoWhileNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");



class DoWhileNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(condition, sentences) {
        super();
        this.condition = condition;
        this.sentences = sentences;
    }
    GO(env) {
        return Object(_utils_Utils__WEBPACK_IMPORTED_MODULE_1__["LogicDoWhile"])(env, this.condition, this.sentences, null);
    }
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"]('DO_WHILE', [new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"]('WHILE_BODY', this.sentences.map(sentence => sentence.GetGraph(env))), this.condition.GetGraph(env)]);
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
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");



class EqNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        return Object(_utils_RelationalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["Igual"])(this.lf.Exe(env), this.rt.Exe(env));
    }
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"]('EQ', [this.lf.GetGraph(env), this.rt.GetGraph(env)]);
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
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");



class ExpNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        return Object(_utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["Potencia"])(this.lf.Exe(env), this.rt.Exe(env));
    }
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"]('EXP', [this.lf.GetGraph(env), this.rt.GetGraph(env)]);
    }
}


/***/ }),

/***/ "./src/nodes/ForInNode.ts":
/*!********************************!*\
  !*** ./src/nodes/ForInNode.ts ***!
  \********************************/
/*! exports provided: ForInNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForInNode", function() { return ForInNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_Envmnt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Envmnt */ "./src/utils/Envmnt.ts");
/* harmony import */ var _utils_Reference__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Reference */ "./src/utils/Reference.ts");
/* harmony import */ var _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");






class ForInNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(controlVar, newControlVar, array, sentences) {
        super();
        this.controlVar = controlVar;
        this.newControlVar = newControlVar;
        this.array = array;
        this.sentences = sentences;
    }
    GO(env) {
        let array = this.array.Exe(env);
        if (array instanceof _utils_Reference__WEBPACK_IMPORTED_MODULE_2__["Reference"]) {
            array = array.getValue();
        }
        if (!(array instanceof _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_3__["ARRAY"])) {
            throw new _utils_Utils__WEBPACK_IMPORTED_MODULE_4__["SemanticException"]("Se esperaba una referencia a un arreglo en ciclo For In");
        }
        const env0 = new _utils_Envmnt__WEBPACK_IMPORTED_MODULE_1__["Envmnt"](env, this.sentences);
        if (this.newControlVar) {
            env0.AddProperty(this.controlVar, new _utils_Reference__WEBPACK_IMPORTED_MODULE_2__["Reference"]());
        }
        for (let index in array.getValueList()) {
            Object(_utils_Utils__WEBPACK_IMPORTED_MODULE_4__["FindVar"])(env0, this.controlVar).setValue(new _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_3__["STRING"](index));
            env0.GO_ALL();
        }
        return undefined;
    }
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_5__["GraphvizNode"]('FOR_IN', [new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_5__["GraphvizNode"](this.controlVar), new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_5__["GraphvizNode"]('FOR_IN_BODY', this.sentences.map(sentence => sentence.GetGraph(env)))]);
    }
}


/***/ }),

/***/ "./src/nodes/ForNode.ts":
/*!******************************!*\
  !*** ./src/nodes/ForNode.ts ***!
  \******************************/
/*! exports provided: ForNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForNode", function() { return ForNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_Envmnt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Envmnt */ "./src/utils/Envmnt.ts");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");




class ForNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(condition0, condition1, condition2, sentences) {
        super();
        this.condition0 = condition0;
        this.condition1 = condition1;
        this.condition2 = condition2;
        this.sentences = sentences;
    }
    GO(env) {
        const conditionEnv = new _utils_Envmnt__WEBPACK_IMPORTED_MODULE_1__["Envmnt"](env, [this.condition0]);
        conditionEnv.GO_ALL();
        Object(_utils_Utils__WEBPACK_IMPORTED_MODULE_2__["LogicWhile"])(conditionEnv, this.condition1, this.sentences, this.condition2);
        return undefined;
    }
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_3__["GraphvizNode"]('FOR', [
            this.condition0.GetGraph(env),
            this.condition1.GetGraph(env),
            this.condition2.GetGraph(env),
            new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_3__["GraphvizNode"]('FOR_BODY', this.sentences.map(sentence => sentence.GetGraph(env)))
        ]);
    }
}


/***/ }),

/***/ "./src/nodes/ForOfNode.ts":
/*!********************************!*\
  !*** ./src/nodes/ForOfNode.ts ***!
  \********************************/
/*! exports provided: ForOfNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForOfNode", function() { return ForOfNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_Envmnt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Envmnt */ "./src/utils/Envmnt.ts");
/* harmony import */ var _utils_Reference__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Reference */ "./src/utils/Reference.ts");
/* harmony import */ var _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");






class ForOfNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(controlVar, newControlVar, array, sentences) {
        super();
        this.controlVar = controlVar;
        this.newControlVar = newControlVar;
        this.array = array;
        this.sentences = sentences;
    }
    GO(env) {
        let array = this.array.Exe(env);
        if (array instanceof _utils_Reference__WEBPACK_IMPORTED_MODULE_2__["Reference"]) {
            array = array.getValue();
        }
        if (!(array instanceof _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_3__["ARRAY"])) {
            throw new _utils_Utils__WEBPACK_IMPORTED_MODULE_4__["SemanticException"]("Se esperaba una referncia a un arreglo en ciclo For Of");
        }
        const env0 = new _utils_Envmnt__WEBPACK_IMPORTED_MODULE_1__["Envmnt"](env, this.sentences);
        if (this.newControlVar) {
            env0.AddProperty(this.controlVar, new _utils_Reference__WEBPACK_IMPORTED_MODULE_2__["Reference"]());
        }
        for (let element of array.getValueList()) {
            let val = element;
            if (val instanceof _utils_Reference__WEBPACK_IMPORTED_MODULE_2__["Reference"]) {
                val = val.getValue();
            }
            Object(_utils_Utils__WEBPACK_IMPORTED_MODULE_4__["FindVar"])(env0, this.controlVar).setValue(val);
            env0.GO_ALL();
        }
        return undefined;
    }
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_5__["GraphvizNode"]('FOR_OF', [new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_5__["GraphvizNode"](this.controlVar), new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_5__["GraphvizNode"]('FOR_OF_BODY', this.sentences.map(sentence => sentence.GetGraph(env)))]);
    }
}


/***/ }),

/***/ "./src/nodes/FunctionCallNode.ts":
/*!***************************************!*\
  !*** ./src/nodes/FunctionCallNode.ts ***!
  \***************************************/
/*! exports provided: FunctionCallNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionCallNode", function() { return FunctionCallNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_Reference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Reference */ "./src/utils/Reference.ts");
/* harmony import */ var _utils_functions_FunctionRepresent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/functions/FunctionRepresent */ "./src/utils/functions/FunctionRepresent.ts");
/* harmony import */ var _ReturnObj__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReturnObj */ "./src/nodes/ReturnObj.ts");
/* harmony import */ var _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");







class FunctionCallNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(name, args) {
        super();
        this.name = name;
        this.args = args;
    }
    GO(env) {
        let id = this.name.Exe(env);
        if (id instanceof _utils_Reference__WEBPACK_IMPORTED_MODULE_1__["Reference"]) {
            id = id.getValue();
        }
        const argsValues = new Array();
        for (let arg of this.args) {
            let ans = arg.Exe(env);
            if (ans instanceof _utils_Reference__WEBPACK_IMPORTED_MODULE_1__["Reference"]) {
                ans = ans.getValue();
            }
            argsValues.push(ans);
        }
        if (id instanceof _utils_functions_FunctionRepresent__WEBPACK_IMPORTED_MODULE_2__["FunctionRepresent"]) {
            let funct = id;
            let ans = funct.EXE(env, argsValues);
            if (ans instanceof _ReturnObj__WEBPACK_IMPORTED_MODULE_3__["ReturnObj"]) {
                let ret = ans.getValue();
                if (ret instanceof _utils_Reference__WEBPACK_IMPORTED_MODULE_1__["Reference"]) {
                    ret = ret.getValue();
                }
                if (funct.getType() !== ret.typo
                    && funct.getType() !== 'ANY'
                    && ret.typo !== 'NULL'
                    && ret.typo !== 'UNDEFINED'
                    && ret.typo !== 'OBJECT'
                    || (Object(_utils_Utils__WEBPACK_IMPORTED_MODULE_5__["IsPrimitiveTypo"])(funct.getType()) && ret.typo === 'OBJECT')) {
                    throw new _utils_Utils__WEBPACK_IMPORTED_MODULE_5__["SemanticException"](`Se esperaba retorno de tipo ${funct.getType()}, se retorno tipo ${ret.typo}`);
                }
                return ans.getValue();
            }
        }
        return new _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_4__["UNDEFINED"]();
    }
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_6__["GraphvizNode"]('FUNCTION_CALL', [this.name.GetGraph(env), new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_6__["GraphvizNode"]('ARGS', this.args.map(arg => arg.GetGraph(env)))]);
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
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");



class HigherEqNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        return Object(_utils_RelationalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["MayorEq"])(this.lf.Exe(env), this.rt.Exe(env));
    }
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"]('MAY_EQ', [this.lf.GetGraph(env), this.rt.GetGraph(env)]);
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
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");



class HigherNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        return Object(_utils_RelationalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["Mayor"])(this.lf.Exe(env), this.rt.Exe(env));
    }
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"]('MAY', [this.lf.GetGraph(env), this.rt.GetGraph(env)]);
    }
}


/***/ }),

/***/ "./src/nodes/IfNode.ts":
/*!*****************************!*\
  !*** ./src/nodes/IfNode.ts ***!
  \*****************************/
/*! exports provided: IfNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IfNode", function() { return IfNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_Envmnt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Envmnt */ "./src/utils/Envmnt.ts");
/* harmony import */ var _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");
/* harmony import */ var _utils_Reference__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Reference */ "./src/utils/Reference.ts");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");






class IfNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(condition, operationsTrue, operationsFalse) {
        super();
        this.condition = condition;
        this.operationsTrue = operationsTrue;
        this.operationsFalse = operationsFalse;
    }
    GO(env) {
        let condition = this.condition.Exe(env);
        if (condition instanceof _utils_Reference__WEBPACK_IMPORTED_MODULE_3__["Reference"]) {
            condition = condition.getValue();
        }
        if (!(condition instanceof _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"])) {
            throw new _utils_Utils__WEBPACK_IMPORTED_MODULE_4__["SemanticException"]("Condicion utilizada como parametro no soportada por sentencia If");
        }
        if (condition.getValue()) {
            const envTrue = new _utils_Envmnt__WEBPACK_IMPORTED_MODULE_1__["Envmnt"](env, this.operationsTrue);
            Object(_utils_Utils__WEBPACK_IMPORTED_MODULE_4__["PassPropsAndFuncs"])(env, envTrue);
            return envTrue.GO_ALL();
        }
        const envFalse = new _utils_Envmnt__WEBPACK_IMPORTED_MODULE_1__["Envmnt"](env, this.operationsFalse);
        Object(_utils_Utils__WEBPACK_IMPORTED_MODULE_4__["PassPropsAndFuncs"])(env, envFalse);
        return envFalse.GO_ALL();
    }
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_5__["GraphvizNode"]('IF', [
            this.condition.GetGraph(env),
            new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_5__["GraphvizNode"]('IF_BODY_TRUE', this.operationsTrue.map(sentence => sentence.GetGraph(env))),
            new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_5__["GraphvizNode"]('IF_BODY_FALSE', this.operationsFalse.map(sentence => sentence.GetGraph(env)))
        ]);
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
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");



class MinorEqNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        return Object(_utils_RelationalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["MenorEq"])(this.lf.Exe(env), this.rt.Exe(env));
    }
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"]('MIN_EQ', [this.lf.GetGraph(env), this.rt.GetGraph(env)]);
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
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");



class MinorNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        return Object(_utils_RelationalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["Menor"])(this.lf.Exe(env), this.rt.Exe(env));
    }
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"]('MIN', [this.lf.GetGraph(env), this.rt.GetGraph(env)]);
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
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");



class ModNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        return Object(_utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["Modulo"])(this.lf.Exe(env), this.rt.Exe(env));
    }
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"]('MOD', [this.lf.GetGraph(env), this.rt.GetGraph(env)]);
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
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");



class MulNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        return Object(_utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["Multiplicacion"])(this.lf.Exe(env), this.rt.Exe(env));
    }
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"]('MUL', [this.lf.GetGraph(env), this.rt.GetGraph(env)]);
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
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");



class NotNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
    }
    GO(env) {
        return Object(_utils_LogicalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["Not"])(this.lf.Exe(env));
    }
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"]('NOT', [this.lf.GetGraph(env)]);
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
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");



class NullNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor() {
        super();
    }
    GO(env) {
        return new _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__["NULL"]();
    }
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"]('NULL', [new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"]('null')]);
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
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");



class NumberNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_1__["Op"] {
    constructor(val) {
        super();
        this.val = val;
    }
    GO(env) {
        return new _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_0__["NUMBER"](this.val);
    }
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"]('NUMBER', [new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"](this.val + '')]);
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
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");



class OrNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        return Object(_utils_LogicalOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["Or"])(this.lf.Exe(env), this.rt.Exe(env));
    }
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"]('OR', [this.lf.GetGraph(env), this.rt.GetGraph(env)]);
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
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");



class ReAddNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf) {
        super();
        this.lf = lf;
    }
    GO(env) {
        return Object(_utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["Add"])(this.lf.Exe(env));
    }
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"]('RE_ADD', [this.lf.GetGraph(env)]);
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
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");




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
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_3__["GraphvizNode"]('RE_ASIGN_ADD', [this.lf.GetGraph(env), this.rt.GetGraph(env)]);
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
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");





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
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_4__["GraphvizNode"]('RE_ASIGN_DIV', [this.lf.GetGraph(env), this.rt.GetGraph(env)]);
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
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");





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
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_4__["GraphvizNode"]('RE_ASIGN_MOD', [this.lf.GetGraph(env), this.rt.GetGraph(env)]);
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
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");





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
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_4__["GraphvizNode"]('RE_ASIGN_MUL-', [this.lf.GetGraph(env), this.rt.GetGraph(env)]);
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
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");





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
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_4__["GraphvizNode"]('RE_ASIGN_SUB', [this.lf.GetGraph(env), this.rt.GetGraph(env)]);
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
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");



class ReSubNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf) {
        super();
        this.lf = lf;
    }
    GO(env) {
        return Object(_utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["Sub"])(this.lf.Exe(env));
    }
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"]('RE_SUB', [this.lf.GetGraph(env)]);
    }
}


/***/ }),

/***/ "./src/nodes/ReturnNode.ts":
/*!*********************************!*\
  !*** ./src/nodes/ReturnNode.ts ***!
  \*********************************/
/*! exports provided: ReturnNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnNode", function() { return ReturnNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _ReturnObj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReturnObj */ "./src/nodes/ReturnObj.ts");
/* harmony import */ var _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");




class ReturnNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(value) {
        super();
        this.value = value;
    }
    GO(env) {
        if (this.value !== null) {
            const value = this.value.Exe(env);
            return new _ReturnObj__WEBPACK_IMPORTED_MODULE_1__["ReturnObj"](value);
        }
        return new _ReturnObj__WEBPACK_IMPORTED_MODULE_1__["ReturnObj"](new _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["UNDEFINED"]());
    }
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_3__["GraphvizNode"]('RETURN', [this.value.GetGraph(env)]);
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

/***/ "./src/nodes/SentenceTernaryNode.ts":
/*!******************************************!*\
  !*** ./src/nodes/SentenceTernaryNode.ts ***!
  \******************************************/
/*! exports provided: SentenceTernaryNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentenceTernaryNode", function() { return SentenceTernaryNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_Reference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Reference */ "./src/utils/Reference.ts");
/* harmony import */ var _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");





class SentenceTernaryNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(condition, trueSentence, falseSentence) {
        super();
        this.condicion = condition;
        this.trueSentence = trueSentence;
        this.falseSentence = falseSentence;
    }
    GO(env) {
        let ans = this.condicion.Exe(env);
        if (ans instanceof _utils_Reference__WEBPACK_IMPORTED_MODULE_1__["Reference"]) {
            ans = ans.getValue();
        }
        if (!(ans instanceof _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"])) {
            throw new _utils_Utils__WEBPACK_IMPORTED_MODULE_3__["SemanticException"]("Condicion utilizada con parametro no soportada por operador ternario");
        }
        if (ans.getValue()) {
            return this.trueSentence.Exe(env);
        }
        return this.falseSentence.Exe(env);
    }
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_4__["GraphvizNode"]('TERNARY', [this.condicion.GetGraph(env), this.trueSentence.GetGraph(env), this.falseSentence.GetGraph(env)]);
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
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");



class StringNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(val) {
        super();
        this.val = val.replace(/\\n/g, "&#13;&#10;       ").replace(/\\t/g, "&#9;");
        console.log(this.val);
    }
    GO(env) {
        return new _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__["STRING"](this.val.substring(1, this.val.length - 1));
    }
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"]('STRING', [new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"](this.val.substring(1, this.val.length - 1))]);
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
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");



class SubNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        return Object(_utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["Resta"])(this.lf.Exe(env), this.rt.Exe(env));
    }
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"]('SUB', [this.lf.GetGraph(env), this.rt.GetGraph(env)]);
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
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");



class SumNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(lf, rt) {
        super();
        this.lf = lf;
        this.rt = rt;
    }
    GO(env) {
        return Object(_utils_AlgebraicOperationsFunctions__WEBPACK_IMPORTED_MODULE_1__["Suma"])(this.lf.Exe(env), this.rt.Exe(env));
    }
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"]('SUM', [this.lf.GetGraph(env), this.rt.GetGraph(env)]);
    }
}


/***/ }),

/***/ "./src/nodes/SwitchNode.ts":
/*!*********************************!*\
  !*** ./src/nodes/SwitchNode.ts ***!
  \*********************************/
/*! exports provided: SwitchNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchNode", function() { return SwitchNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_Envmnt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Envmnt */ "./src/utils/Envmnt.ts");
/* harmony import */ var _utils_RelationalOperationsFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/RelationalOperationsFunctions */ "./src/utils/RelationalOperationsFunctions.ts");
/* harmony import */ var _BreakObj__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BreakObj */ "./src/nodes/BreakObj.ts");
/* harmony import */ var _ReturnObj__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ReturnObj */ "./src/nodes/ReturnObj.ts");
/* harmony import */ var _ContinueObj__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ContinueObj */ "./src/nodes/ContinueObj.ts");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");








class SwitchNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(condition, cases) {
        super();
        this.condition = condition;
        this.cases = cases;
    }
    GO(env) {
        let condition = this.condition.Exe(env);
        let ret = undefined;
        let hasEnter = false;
        let defaultCount = 0;
        for (let Case of this.cases) {
            if (Case.getConditionValue() === null) {
                defaultCount++;
            }
        }
        if (defaultCount > 1) {
            throw new _utils_Utils__WEBPACK_IMPORTED_MODULE_6__["SemanticException"]("No pueden exisistir mas de una sentencia 'default' dentro de un ciclo switch");
        }
        for (let Case of this.cases) {
            if (ret instanceof _BreakObj__WEBPACK_IMPORTED_MODULE_3__["BreakObj"]) {
                break;
            }
            if (ret instanceof _ReturnObj__WEBPACK_IMPORTED_MODULE_4__["ReturnObj"]) {
                return ret;
            }
            if (ret instanceof _ContinueObj__WEBPACK_IMPORTED_MODULE_5__["ContinueObj"]) {
                continue;
            }
            if (Case.getConditionValue() !== null) {
                let caseValue = Case.getConditionValue().Exe(env);
                if (!Object(_utils_RelationalOperationsFunctions__WEBPACK_IMPORTED_MODULE_2__["Igual"])(condition, caseValue).getValue() && !hasEnter) {
                    continue;
                }
            }
            const env0 = new _utils_Envmnt__WEBPACK_IMPORTED_MODULE_1__["Envmnt"](env, Case.getSentences());
            ret = env0.GO_ALL();
            hasEnter = true;
            if (ret instanceof _BreakObj__WEBPACK_IMPORTED_MODULE_3__["BreakObj"]) {
                break;
            }
            if (ret instanceof _ReturnObj__WEBPACK_IMPORTED_MODULE_4__["ReturnObj"]) {
                return ret;
            }
        }
        return undefined;
    }
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_7__["GraphvizNode"]('SWTICH', [
            this.condition.GetGraph(env),
            new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_7__["GraphvizNode"]('SWITCH_BODY', this.cases.map(casee => new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_7__["GraphvizNode"]('CASE', [
                casee.getConditionValue() ? casee.getConditionValue().GetGraph(env) : new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_7__["GraphvizNode"]('UNDEFINED'),
                new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_7__["GraphvizNode"]('SENTENCES', casee.getSentences().map(sentence => sentence.GetGraph(env)))
            ])))
        ]);
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
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");



class UndefinedNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor() {
        super();
    }
    GO(env) {
        return new _utils_PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__["UNDEFINED"]();
    }
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"]('UNDEFINED', [new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"]('undefined')]);
    }
}


/***/ }),

/***/ "./src/nodes/WhileNode.ts":
/*!********************************!*\
  !*** ./src/nodes/WhileNode.ts ***!
  \********************************/
/*! exports provided: WhileNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhileNode", function() { return WhileNode; });
/* harmony import */ var _utils_Op__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/Op */ "./src/utils/Op.ts");
/* harmony import */ var _utils_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Utils */ "./src/utils/Utils.ts");
/* harmony import */ var _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/GraphvizNode */ "./src/utils/GraphvizNode.ts");



class WhileNode extends _utils_Op__WEBPACK_IMPORTED_MODULE_0__["Op"] {
    constructor(condition, sentences) {
        super();
        this.condition = condition;
        this.sentences = sentences;
    }
    GO(env) {
        return Object(_utils_Utils__WEBPACK_IMPORTED_MODULE_1__["LogicWhile"])(env, this.condition, this.sentences, null);
    }
    GetGraph(env) {
        return new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"]('WHILE', [this.condition.GetGraph(env), new _utils_GraphvizNode__WEBPACK_IMPORTED_MODULE_2__["GraphvizNode"]('WHILE_BODY', this.sentences.map(sentence => sentence.GetGraph(env)))]);
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
        throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"](`Operacion entre tipos ( ${lf.typo} ** ${rt.typo} ) no permitida.`);
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
/* harmony import */ var _nodes_BreakObj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nodes/BreakObj */ "./src/nodes/BreakObj.ts");
/* harmony import */ var _nodes_ReturnObj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nodes/ReturnObj */ "./src/nodes/ReturnObj.ts");
/* harmony import */ var _nodes_ContinueObj__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nodes/ContinueObj */ "./src/nodes/ContinueObj.ts");
/* harmony import */ var _nodes_DeclareFunNode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nodes/DeclareFunNode */ "./src/nodes/DeclareFunNode.ts");
/* harmony import */ var _nodes_DeclareTypeStructureNode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../nodes/DeclareTypeStructureNode */ "./src/nodes/DeclareTypeStructureNode.ts");
/* harmony import */ var _GraphvizNode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GraphvizNode */ "./src/utils/GraphvizNode.ts");







class Envmnt extends _Cntnr__WEBPACK_IMPORTED_MODULE_0__["Cntnr"] {
    constructor(owner, operations) {
        super(owner);
        this.Extra = new Map();
        this.operations = operations;
        this.typo = "Ambito";
    }
    GO_ALL() {
        for (let op of this.operations) {
            if (op instanceof _nodes_DeclareFunNode__WEBPACK_IMPORTED_MODULE_4__["DeclareFunNode"] || op instanceof _nodes_DeclareTypeStructureNode__WEBPACK_IMPORTED_MODULE_5__["DeclareTypeStructureNode"]) {
                try {
                    op.Exe(this);
                }
                catch (e) {
                    console.log(e.message);
                }
            }
        }
        for (let op of this.operations) {
            if (!(op instanceof _nodes_DeclareFunNode__WEBPACK_IMPORTED_MODULE_4__["DeclareFunNode"] || op instanceof _nodes_DeclareTypeStructureNode__WEBPACK_IMPORTED_MODULE_5__["DeclareTypeStructureNode"])) {
                try {
                    let result = op.Exe(this);
                    if (result instanceof _nodes_BreakObj__WEBPACK_IMPORTED_MODULE_1__["BreakObj"] || result instanceof _nodes_ReturnObj__WEBPACK_IMPORTED_MODULE_2__["ReturnObj"] || result instanceof _nodes_ContinueObj__WEBPACK_IMPORTED_MODULE_3__["ContinueObj"]) {
                        return result;
                    }
                }
                catch (e) {
                    console.log(e.message);
                }
            }
        }
        return null;
    }
    GetGraph() {
        console.log('aver');
        return new _GraphvizNode__WEBPACK_IMPORTED_MODULE_6__["GraphvizNode"]('ROOT', this.operations.map(operation => operation.GetGraph(this)));
    }
}


/***/ }),

/***/ "./src/utils/GraphvizNode.ts":
/*!***********************************!*\
  !*** ./src/utils/GraphvizNode.ts ***!
  \***********************************/
/*! exports provided: GraphvizNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphvizNode", function() { return GraphvizNode; });
/* harmony import */ var _NodesControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NodesControl */ "./src/utils/NodesControl.ts");

class GraphvizNode {
    constructor(label, childs = []) {
        this.GetId = () => this.id;
        this.toString = () => {
            let value = `${this.id} [label="${this.label}"];\n`;
            this.childs.forEach(child => {
                value += `${this.id} -> ${child.GetId()};\n`;
            });
            this.childs.forEach(child => {
                value += child;
            });
            return value;
        };
        this.label = label;
        this.childs = childs;
        this.id = `n${_NodesControl__WEBPACK_IMPORTED_MODULE_0__["NodesControl"].GetNodeId()}`;
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

/***/ "./src/utils/NodesControl.ts":
/*!***********************************!*\
  !*** ./src/utils/NodesControl.ts ***!
  \***********************************/
/*! exports provided: NodesControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodesControl", function() { return NodesControl; });
class NodesControl {
}
NodesControl.nodeIdCount = 0;
NodesControl.GetNodeId = () => NodesControl.nodeIdCount++;


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
/*! exports provided: BOOLEAN, STRING, NUMBER, UNDEFINED, NAN, NULL, ARRAY, OBJECT */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OBJECT", function() { return OBJECT; });
/* harmony import */ var _Cntnr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cntnr */ "./src/utils/Cntnr.ts");
/* harmony import */ var _Reference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reference */ "./src/utils/Reference.ts");
/* harmony import */ var _nativeFunctions_length__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nativeFunctions/length */ "./src/utils/nativeFunctions/length.ts");
/* harmony import */ var _nativeFunctions_push__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nativeFunctions/push */ "./src/utils/nativeFunctions/push.ts");
/* harmony import */ var _nativeFunctions_pop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nativeFunctions/pop */ "./src/utils/nativeFunctions/pop.ts");





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
            this.Declare("pop", new _nativeFunctions_pop__WEBPACK_IMPORTED_MODULE_4__["Pop"](this));
        }
        catch (e) {
            throw new Error();
        }
    }
    addValue(value) {
        this.value.push(value);
    }
}
class OBJECT extends _Cntnr__WEBPACK_IMPORTED_MODULE_0__["Cntnr"] {
    constructor(attributes) {
        super();
        this.toString = () => {
            let log = '{';
            let count = 1;
            this.props.forEach((v, k) => {
                let value = v;
                if (value instanceof _Reference__WEBPACK_IMPORTED_MODULE_1__["Reference"]) {
                    value = value.getValue();
                }
                log += `"${k}" : ${value}`;
                if (count < this.props.size) {
                    log += ', ';
                }
                count++;
            });
            log += '}';
            return log;
        };
        this.attributes = attributes || new Map();
        this.attributes.forEach((v, k) => {
            let value = v;
            if (value instanceof _Reference__WEBPACK_IMPORTED_MODULE_1__["Reference"]) {
                value = value.getValue();
            }
            const reference = new _Reference__WEBPACK_IMPORTED_MODULE_1__["Reference"]();
            reference.PutValueOnReference(value);
            this.Declare(k, reference);
        });
        this.typo = "OBJECT";
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
            && v.typo !== 'UNDEFINED'
            && v.typo !== 'OBJECT'
            || (Object(_Utils__WEBPACK_IMPORTED_MODULE_1__["IsPrimitiveTypo"])(this.tipoNombre) && v.typo === 'OBJECT' && this.tipoNombre != "ANY")) {
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
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["OBJECT"]:
                return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](false);
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["ARRAY"]:
                return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](true);
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
        throw new _Utils__WEBPACK_IMPORTED_MODULE_1__["SemanticException"](`Operacion entre tipos ( ${lf.typo} != ${rt.typo} ) no permitida.`);
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
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["OBJECT"]:
                return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](true);
            case lf instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["ARRAY"]:
                return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_2__["BOOLEAN"](true);
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
/*! exports provided: SemanticException, ErrorCompo, DefaultValue, IsPrimitiveTypo, GetObjectValue, FindVar, PassPropsAndFuncs, LogicWhile, LogicDoWhile, MyMap, ObjectStructure, ObjectsStructures */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SemanticException", function() { return SemanticException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorCompo", function() { return ErrorCompo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultValue", function() { return DefaultValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsPrimitiveTypo", function() { return IsPrimitiveTypo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetObjectValue", function() { return GetObjectValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindVar", function() { return FindVar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassPropsAndFuncs", function() { return PassPropsAndFuncs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogicWhile", function() { return LogicWhile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogicDoWhile", function() { return LogicDoWhile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyMap", function() { return MyMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectStructure", function() { return ObjectStructure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectsStructures", function() { return ObjectsStructures; });
/* harmony import */ var _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");
/* harmony import */ var _Envmnt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Envmnt */ "./src/utils/Envmnt.ts");
/* harmony import */ var _Reference__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Reference */ "./src/utils/Reference.ts");
/* harmony import */ var _nodes_BreakObj__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nodes/BreakObj */ "./src/nodes/BreakObj.ts");
/* harmony import */ var _nodes_ReturnObj__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../nodes/ReturnObj */ "./src/nodes/ReturnObj.ts");
/* harmony import */ var _nodes_ContinueObj__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../nodes/ContinueObj */ "./src/nodes/ContinueObj.ts");






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
    if (IsPrimitiveTypo(typo)) {
        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_0__["UNDEFINED"]();
    }
    return GetObjectValue(typo);
}
function IsPrimitiveTypo(typo) {
    typo = typo.toUpperCase();
    switch (typo) {
        case "STRING":
        case "NUMBER":
        case "BOOLEAN":
        case "ANY":
        case "ARRAY":
        case "NULL":
        case "UNDEFINED":
            return true;
        default:
            return false;
    }
}
function GetObjectValue(typo) {
    typo = typo.toUpperCase();
    let structure = ObjectsStructures.objects.get(typo);
    if (structure === null || structure === undefined) {
        throw new SemanticException(`No existe una definicion para el tipo ${typo}`);
    }
    return structure.GetDefaultValue();
}
function FindVar(cont, identifier) {
    let ownerCntnr = cont;
    while (ownerCntnr != null) {
        if (ownerCntnr.GetProperty(identifier) !== undefined) {
            return ownerCntnr.GetProperty(identifier);
        }
        ownerCntnr = ownerCntnr.GetOwner();
    }
    throw new SemanticException(`identificador ${identifier} no encontrado`);
}
function PassPropsAndFuncs(father, son) {
    // father.props.forEach((v, k) => {
    //     son.Declare(k, v);
    // });
}
function LogicWhile(env, condition, sentences, extra) {
    let ans = condition.Exe(env);
    if (ans instanceof _Reference__WEBPACK_IMPORTED_MODULE_2__["Reference"]) {
        ans = ans.getValue();
    }
    if (!(ans instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_0__["BOOLEAN"])) {
        throw new SemanticException("Condicion utilizada en ciclo while no soportada");
    }
    let tmp = ans;
    while (tmp.getValue()) {
        const env0 = new _Envmnt__WEBPACK_IMPORTED_MODULE_1__["Envmnt"](env, sentences);
        PassPropsAndFuncs(env, env0);
        const ret = env0.GO_ALL();
        if (ret instanceof _nodes_BreakObj__WEBPACK_IMPORTED_MODULE_3__["BreakObj"]) {
            break;
        }
        if (ret instanceof _nodes_ReturnObj__WEBPACK_IMPORTED_MODULE_4__["ReturnObj"]) {
            return ret;
        }
        if (ret instanceof _nodes_ContinueObj__WEBPACK_IMPORTED_MODULE_5__["ContinueObj"]) {
            continue;
        }
        if (extra !== null) {
            extra.Exe(env);
        }
        let ans0 = condition.Exe(env);
        if (ans0 instanceof _Reference__WEBPACK_IMPORTED_MODULE_2__["Reference"]) {
            ans0 = ans0.getValue();
        }
        tmp = ans0;
    }
    return null;
}
function LogicDoWhile(env, condition, sentences, extra) {
    let ans = condition.Exe(env);
    if (ans instanceof _Reference__WEBPACK_IMPORTED_MODULE_2__["Reference"]) {
        ans = ans.getValue();
    }
    if (!(ans instanceof _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_0__["BOOLEAN"])) {
        throw new SemanticException("Condicion utilizada en ciclo while no soportada");
    }
    let env0 = new _Envmnt__WEBPACK_IMPORTED_MODULE_1__["Envmnt"](env, sentences);
    PassPropsAndFuncs(env, env0);
    env0.GO_ALL();
    let ans0 = condition.Exe(env);
    if (ans0 instanceof _Reference__WEBPACK_IMPORTED_MODULE_2__["Reference"]) {
        ans0 = ans0.getValue();
    }
    let tmp = ans0;
    while (tmp.getValue()) {
        const env0 = new _Envmnt__WEBPACK_IMPORTED_MODULE_1__["Envmnt"](env, sentences);
        PassPropsAndFuncs(env, env0);
        const ret = env0.GO_ALL();
        if (ret instanceof _nodes_BreakObj__WEBPACK_IMPORTED_MODULE_3__["BreakObj"]) {
            break;
        }
        if (ret instanceof _nodes_ReturnObj__WEBPACK_IMPORTED_MODULE_4__["ReturnObj"]) {
            return ret;
        }
        if (ret instanceof _nodes_ContinueObj__WEBPACK_IMPORTED_MODULE_5__["ContinueObj"]) {
            continue;
        }
        if (extra !== null) {
            extra.Exe(env);
        }
        let ans0 = condition.Exe(env);
        if (ans0 instanceof _Reference__WEBPACK_IMPORTED_MODULE_2__["Reference"]) {
            ans0 = ans0.getValue();
        }
        tmp = ans0;
    }
    return null;
}
class MyMap {
    constructor() {
        this.map = new Map();
    }
    getMap() {
        return this.map;
    }
    addEntry(key, value) {
        this.map.set(key, value);
    }
}
class ObjectStructure {
    constructor(properties) {
        this.properties = properties;
    }
    GetDefaultValue() {
        const attributes = new Map();
        this.properties.forEach((v, k) => {
            attributes.set(k, new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_0__["UNDEFINED"]());
        });
        return new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_0__["OBJECT"](attributes);
    }
}
class ObjectsStructures {
}
ObjectsStructures.objects = new Map();


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

/***/ "./src/utils/functions/UserDefined.ts":
/*!********************************************!*\
  !*** ./src/utils/functions/UserDefined.ts ***!
  \********************************************/
/*! exports provided: UserDefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDefined", function() { return UserDefined; });
/* harmony import */ var _FunctionRepresent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FunctionRepresent */ "./src/utils/functions/FunctionRepresent.ts");
/* harmony import */ var _Envmnt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Envmnt */ "./src/utils/Envmnt.ts");


class UserDefined extends _FunctionRepresent__WEBPACK_IMPORTED_MODULE_0__["FunctionRepresent"] {
    constructor(src, params, type) {
        super();
        this.src = src;
        this.params = params;
        this.type = type.toUpperCase();
    }
    getType() {
        return this.type;
    }
    getSrc() {
        return this.src;
    }
    EXE(env0, args) {
        let env = new _Envmnt__WEBPACK_IMPORTED_MODULE_1__["Envmnt"](env0, this.src);
        const references = new Array();
        for (let param of this.params) {
            references.push(param.Exe(env));
        }
        for (let i = 0; i < args.length && i < references.length; i++) {
            references[i].PutValueOnReference(args[i]);
        }
        return env.GO_ALL();
    }
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

/***/ "./src/utils/nativeFunctions/pop.ts":
/*!******************************************!*\
  !*** ./src/utils/nativeFunctions/pop.ts ***!
  \******************************************/
/*! exports provided: Pop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pop", function() { return Pop; });
/* harmony import */ var _functions_Native__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/Native */ "./src/utils/functions/Native.ts");
/* harmony import */ var _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../PrimitiveTypoContainer */ "./src/utils/PrimitiveTypoContainer.ts");
/* harmony import */ var _nodes_ReturnObj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../nodes/ReturnObj */ "./src/nodes/ReturnObj.ts");



class Pop extends _functions_Native__WEBPACK_IMPORTED_MODULE_0__["Native"] {
    constructor(array) {
        super();
        this.array = array;
    }
    EXE(env0, args) {
        let value = this.array.getValueList().pop();
        if (value === undefined) {
            return new _nodes_ReturnObj__WEBPACK_IMPORTED_MODULE_2__["ReturnObj"](new _PrimitiveTypoContainer__WEBPACK_IMPORTED_MODULE_1__["UNDEFINED"]());
        }
        return new _nodes_ReturnObj__WEBPACK_IMPORTED_MODULE_2__["ReturnObj"](value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hc3Qvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2FzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hc3QvKHdlYnBhY2spL2J1aWxkaW4vaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9BbmROb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9Bc2lnbk5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL0Jvb2xlYW5Ob2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9CcmVha05vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL0JyZWFrT2JqLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9DYXNlTm9kZS50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvbm9kZXMvQ29uc29sZUxvZ05vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL0NvbnRpbnVlTm9kZS50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvbm9kZXMvQ29udGludWVPYmoudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL0NyZWF0ZUFyclZhck5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL0NyZWF0ZUFycmF5Tm9kZS50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvbm9kZXMvQ3JlYXRlSWRWYXJOb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9DcmVhdGVPYmpGdW5Ob2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9DcmVhdGVPYmpOb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9DcmVhdGVPYmpWYXJOb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9EZWNsYXJlRnVuTm9kZS50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvbm9kZXMvRGVjbGFyZUZ1blBhcmFtTm9kZS50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvbm9kZXMvRGVjbGFyZVR5cGVTdHJ1Y3R1cmVOb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9EZWNsYXJlVmFyTGlzdE5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL0RlY2xhcmVWYXJOb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9EaWZOb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9EaXZOb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9Eb1doaWxlTm9kZS50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvbm9kZXMvRXFOb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9FeHBOb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9Gb3JJbk5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL0Zvck5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL0Zvck9mTm9kZS50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvbm9kZXMvRnVuY3Rpb25DYWxsTm9kZS50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvbm9kZXMvSGlnaGVyRXFOb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9IaWdoZXJOb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9JZk5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL01pbm9yRXFOb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9NaW5vck5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL01vZE5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL011bE5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL05vdE5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL051bGxOb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9OdW1iZXJOb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9Pck5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL1JlQWRkTm9kZS50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvbm9kZXMvUmVBc2lnbkFkZE5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL1JlQXNpZ25EaXZOb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9SZUFzaWduTW9kTm9kZS50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvbm9kZXMvUmVBc2lnbk11bE5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL1JlQXNpZ25TdWJOb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy9ub2Rlcy9SZVN1Yk5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL1JldHVybk5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL25vZGVzL1JldHVybk9iai50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvbm9kZXMvU2VudGVuY2VUZXJuYXJ5Tm9kZS50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvbm9kZXMvU3RyaW5nTm9kZS50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvbm9kZXMvU3ViTm9kZS50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvbm9kZXMvU3VtTm9kZS50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvbm9kZXMvU3dpdGNoTm9kZS50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvbm9kZXMvVW5kZWZpbmVkTm9kZS50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvbm9kZXMvV2hpbGVOb2RlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy91dGlscy9BbGdlYnJhaWNPcGVyYXRpb25zRnVuY3Rpb25zLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy91dGlscy9DbnRuci50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvdXRpbHMvQ29uc29sZS50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvdXRpbHMvRW52bW50LnRzIiwid2VicGFjazovL2FzdC8uL3NyYy91dGlscy9HcmFwaHZpek5vZGUudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL3V0aWxzL0xvZ2ljYWxPcGVyYXRpb25zRnVuY3Rpb25zLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy91dGlscy9Ob2Rlc0NvbnRyb2wudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL3V0aWxzL09wLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy91dGlscy9QcmltaXRpdmVUeXBvQ29udGFpbmVyLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy91dGlscy9SZWZlcmVuY2UudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL3V0aWxzL1JlbGF0aW9uYWxPcGVyYXRpb25zRnVuY3Rpb25zLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy91dGlscy9VdGlscy50cyIsIndlYnBhY2s6Ly9hc3QvLi9zcmMvdXRpbHMvZnVuY3Rpb25zL0Z1bmN0aW9uUmVwcmVzZW50LnRzIiwid2VicGFjazovL2FzdC8uL3NyYy91dGlscy9mdW5jdGlvbnMvTmF0aXZlLnRzIiwid2VicGFjazovL2FzdC8uL3NyYy91dGlscy9mdW5jdGlvbnMvVXNlckRlZmluZWQudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL3V0aWxzL25hdGl2ZUZ1bmN0aW9ucy9sZW5ndGgudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL3V0aWxzL25hdGl2ZUZ1bmN0aW9ucy9wb3AudHMiLCJ3ZWJwYWNrOi8vYXN0Ly4vc3JjL3V0aWxzL25hdGl2ZUZ1bmN0aW9ucy9wdXNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEdBQUc7O1FBRUg7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLOztRQUVMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLDZCQUE2QjtRQUM3Qiw2QkFBNkI7UUFDN0I7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxxQkFBcUIsZ0JBQWdCO1FBQ3JDO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0EscUJBQXFCLGdCQUFnQjtRQUNyQztRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLOztRQUVMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBLEtBQUs7O1FBRUw7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBLGtCQUFrQiw4QkFBOEI7UUFDaEQ7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQSxPQUFPO1FBQ1A7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0Esb0JBQW9CLDJCQUEyQjtRQUMvQztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxtQkFBbUIsY0FBYztRQUNqQztRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLEtBQUs7UUFDckI7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsWUFBWTtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QUNBLHNDQUFzQyx1QkFBdUI7OztRQUc3RDtRQUNBOzs7Ozs7Ozs7Ozs7QUN2MUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEM7QUFDbUI7QUFDekI7QUFDRjtBQUNOO0FBQ1U7QUFFYztBQUNSO0FBQ0E7QUFDRTtBQUNOO0FBQ1U7QUFDRTtBQUNRO0FBQ047QUFDWjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNGO0FBQ0U7QUFDTTtBQUNGO0FBQ007QUFDRjtBQUNWO0FBQ0U7QUFDQTtBQUNjO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDVjtBQUNBO0FBQ1k7QUFDRTtBQUNkO0FBQ2M7QUFDQTtBQUNNO0FBQ3BCO0FBQ007QUFDWjtBQUNNO0FBQ0k7QUFDTjtBQUNJO0FBQ0Y7QUFDQTtBQUNKO0FBQ2dDO0FBQ3BCO0FBQ3NCO0FBQ3BCO0FBQ1U7QUFDbEI7QUFDWTtBQXNGekQ7QUFFTSxTQUFTLFVBQVUsQ0FBQyxTQUFvQjtJQUMzQyxzREFBTyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDakIsK0RBQWlCLENBQUMsT0FBTyxHQUFHLElBQUksR0FBRyxFQUEyQixDQUFDO0lBQy9ELE1BQU0sR0FBRyxHQUFHLElBQUksb0RBQU0sQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDeEMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2pCLENBQUM7QUFFTSxTQUFTLFFBQVEsQ0FBQyxTQUFvQjtJQUN6QyxJQUFJLEtBQUssR0FDTCxlQUFlO1FBQ2YsNkJBQTZCO1FBQzdCLDJGQUEyRjtRQUMzRixpQ0FBaUMsQ0FBQztJQUN0QyxNQUFNLEdBQUcsR0FBRyxJQUFJLG9EQUFNLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3hDLEtBQUssSUFBSSxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbkMsS0FBSyxJQUFJLEdBQUcsQ0FBQztJQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkIsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQUVNLFNBQVMsdUJBQXVCLENBQUMsSUFBWTtJQUNoRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQzlHLENBQUM7QUFDTixDQUFDO0FBRUQsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLEdBQUc7SUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQy9LOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFpQztBQUV1QjtBQUVMO0FBRTVDLE1BQU0sT0FBUSxTQUFRLDRDQUFFO0lBSTNCLFlBQVksRUFBTSxFQUFFLEVBQU07UUFDdEIsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxFQUFFLENBQUMsR0FBVztRQUNWLE9BQU8sNkVBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQVUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQVUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxRQUFRLENBQUMsR0FBVztRQUNoQixPQUFPLElBQUksZ0VBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkYsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDdkJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUVjO0FBQ0k7QUFFRTtBQUU1QyxNQUFNLFNBQVUsU0FBUSw0Q0FBRTtJQUk3QixZQUFZLEVBQU0sRUFBRSxFQUFNO1FBQ3RCLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsRUFBRSxDQUFDLEdBQVc7UUFDVixNQUFNLEtBQUssR0FBVyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QyxNQUFNLEtBQUssR0FBVyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV2QyxJQUFJLENBQUMsQ0FBQyxLQUFLLFlBQVksMERBQVMsQ0FBQyxFQUFFO1lBQy9CLE1BQU0sSUFBSSw4REFBaUIsQ0FBQyx5QkFBMEIsS0FBZSxDQUFDLElBQUkseURBQXlELENBQUMsQ0FBQztTQUN4STtRQUNBLEtBQW1CLENBQUMsbUJBQW1CLENBQUMsS0FBYyxDQUFDLENBQUM7UUFDekQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUFXO1FBQ2hCLE9BQU8sSUFBSSxnRUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRixDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUMvQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUV5QjtBQUNMO0FBRTVDLE1BQU0sV0FBWSxTQUFRLDRDQUFFO0lBRy9CLFlBQVksR0FBWTtRQUNwQixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ25CLENBQUM7SUFFRCxFQUFFLENBQUMsR0FBVztRQUNWLE9BQU8sSUFBSSxxRUFBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsUUFBUSxDQUFDLEdBQVc7UUFDaEIsT0FBTyxJQUFJLGdFQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxnRUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUNwQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUVLO0FBQ2U7QUFFNUMsTUFBTyxTQUFVLFNBQVEsNENBQUU7SUFDOUIsRUFBRSxDQUFDLEdBQVc7UUFDVixPQUFPLElBQUksa0RBQVEsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDRCxRQUFRLENBQUMsR0FBVztRQUNoQixPQUFPLElBQUksZ0VBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLGdFQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQ1pEO0FBQUE7QUFBQTtBQUFxQztBQUU5QixNQUFNLFFBQVMsU0FBUSxrREFBSztJQUMvQjtRQUNJLEtBQUssRUFBRSxDQUFDO0lBQ1osQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDSkQ7QUFBQTtBQUFPLE1BQU0sUUFBUTtJQUlqQixZQUFZLGNBQWtCLEVBQUUsU0FBb0I7UUFDaEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUVNLGlCQUFpQjtRQUNwQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0IsQ0FBQztJQUVNLFlBQVk7UUFDZixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDbEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUVjO0FBQ0o7QUFDVTtBQUU1QyxNQUFNLGNBQWUsU0FBUSw0Q0FBRTtJQUdsQyxZQUFZLFVBQXFCO1FBQzdCLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDakMsQ0FBQztJQUVELEVBQUUsQ0FBQyxHQUFXO1FBQ1YsSUFBSSxRQUFRLEdBQUcsU0FBUyxDQUFDO1FBQ3pCLEtBQUksSUFBSSxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQyxJQUFJLEdBQUcsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzlCLElBQUksR0FBRyxZQUFZLDBEQUFTLEVBQUU7Z0JBQzFCLEdBQUcsR0FBSSxHQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3ZDO1lBQ0QsUUFBUSxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDekI7UUFDRCxzREFBTyxDQUFDLEdBQUcsSUFBSSxHQUFHLFFBQVEsSUFBSSxDQUFDO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFBQSxDQUFDO0lBRUYsUUFBUSxDQUFDLEdBQVc7UUFDaEIsT0FBTyxJQUFJLGdFQUFZLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEcsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDL0JEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFFVztBQUNTO0FBRTVDLE1BQU0sWUFBYSxTQUFRLDRDQUFFO0lBQ2hDLEVBQUUsQ0FBQyxHQUFXO1FBQ1YsT0FBTyxJQUFJLHdEQUFXLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsUUFBUSxDQUFDLEdBQVc7UUFDaEIsT0FBTyxJQUFJLGdFQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxnRUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUNiRDtBQUFBO0FBQUE7QUFBcUM7QUFFOUIsTUFBTSxXQUFZLFNBQVEsa0RBQUs7SUFDbEM7UUFDSSxLQUFLLEVBQUUsQ0FBQztJQUNaLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQ05EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBR2M7QUFDSTtBQUNnQztBQUM5QjtBQUU1QyxNQUFNLGdCQUFpQixTQUFRLDRDQUFFO0lBSXBDLFlBQVksRUFBTSxFQUFFLEtBQVM7UUFDekIsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxFQUFFLENBQUMsR0FBVztRQUNWLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBVSxDQUFDO1FBQ3RDLHVDQUF1QztRQUN2Qyw4RUFBOEU7UUFDOUUsSUFBSTtRQUVKLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBVSxDQUFDO1FBQ3pDLElBQUksS0FBSyxZQUFZLDBEQUFTLEVBQUU7WUFDNUIsS0FBSyxHQUFJLEtBQW1CLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDM0M7UUFFRCxJQUFJLEtBQUssWUFBWSxvRUFBTSxFQUFFO1lBQ3pCLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBRSxLQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFDbkQsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ1osTUFBTSxJQUFJLDhEQUFpQixDQUFDLGdEQUFnRCxDQUFDLENBQUM7YUFDakY7WUFDRCxLQUFLLEdBQUcsSUFBSSxvRUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzNCO1FBRUQsSUFBSSxDQUFDLENBQUMsS0FBSyxZQUFZLG9FQUFNLENBQUMsRUFBRTtZQUM1QixNQUFNLElBQUksOERBQWlCLENBQUMsZ0RBQWdELENBQUMsQ0FBQztTQUNqRjtRQUVELElBQUksR0FBRyxHQUFHLEtBQUssWUFBWSwwREFBUyxDQUFDLENBQUMsQ0FBRSxLQUFtQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFFL0UsSUFBSSxDQUFDLENBQUMsR0FBRyxZQUFZLG1FQUFLLENBQUMsRUFBRTtZQUN6QixPQUFPLElBQUksdUVBQVMsRUFBRSxDQUFDO1NBQzFCO1FBRUQsT0FBUSxHQUFhLENBQUMsUUFBUSxDQUFFLEtBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsUUFBUSxDQUFDLEdBQVc7UUFDaEIsT0FBTyxJQUFJLGdFQUFZLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlGLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQ3JERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUM7QUFHWTtBQUNTO0FBQ0g7QUFFNUMsTUFBTSxlQUFnQixTQUFRLDRDQUFFO0lBR25DLFlBQVksSUFBZTtRQUN2QixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxFQUFFLENBQUMsR0FBVztRQUNWLElBQUksSUFBSSxHQUFHLElBQUksS0FBSyxFQUFTLENBQUM7UUFDOUIsS0FBSyxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ3RCLElBQUksU0FBUyxHQUFHLElBQUksMERBQVMsRUFBRSxDQUFDO1lBQ2hDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBVSxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN4QjtRQUNELE9BQU8sSUFBSSxtRUFBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxRQUFRLENBQUMsR0FBVztRQUNoQixPQUFPLElBQUksZ0VBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUM1QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUVRO0FBQ1k7QUFFNUMsTUFBTSxlQUFnQixTQUFRLDRDQUFFO0lBR25DLFlBQVksRUFBVTtRQUNsQixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxFQUFFLENBQUMsR0FBVztRQUNWLE9BQU8sNERBQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxRQUFRLENBQUMsR0FBVztRQUNoQixPQUFPLElBQUksZ0VBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLGdFQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUNwQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFFYztBQUUwQjtBQUNqQztBQUNhO0FBRTVDLE1BQU0sZ0JBQWlCLFNBQVEsNENBQUU7SUFLcEMsWUFBWSxNQUFVLEVBQUUsS0FBYSxFQUFFLElBQWU7UUFDbEQsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsRUFBRSxDQUFDLEdBQVc7UUFDVixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoQyxJQUFJLElBQUksWUFBWSwwREFBUyxFQUFFO1lBQzNCLElBQUksR0FBSSxJQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3pDO1FBRUQsSUFBSSxHQUFHLEdBQUksSUFBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLENBQUMsR0FBRyxZQUFZLG9GQUFpQixDQUFDLEVBQUU7WUFDckMsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELE1BQU0sVUFBVSxHQUFHLElBQUksS0FBSyxFQUFTLENBQUM7UUFDdEMsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ3ZCLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUIsSUFBSSxRQUFRLFlBQVksMERBQVMsRUFBRTtnQkFDL0IsUUFBUSxHQUFJLFFBQXNCLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDakQ7WUFDRCxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQWlCLENBQUMsQ0FBQztTQUN0QztRQUVELElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ25DLElBQUksR0FBRyxZQUFZLG9EQUFTLEVBQUU7WUFDMUIsT0FBUSxHQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3hDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUFXO1FBQ2hCLE9BQU8sSUFBSSxnRUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksZ0VBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxnRUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0SyxDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUNsREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBR2M7QUFDVTtBQUNKO0FBRTVDLE1BQU0sYUFBYyxTQUFRLDRDQUFFO0lBR2pDLFlBQVksS0FBc0I7UUFDOUIsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRUQsRUFBRSxDQUFDLEdBQVc7UUFDVixNQUFNLElBQUksR0FBdUIsSUFBSSxHQUFHLEVBQWlCLENBQUM7UUFDMUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2QixJQUFJLEtBQUssWUFBWSwwREFBUyxFQUFFO2dCQUM1QixLQUFLLEdBQUksS0FBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUMzQztZQUNELE1BQU0sU0FBUyxHQUFHLElBQUksMERBQVMsRUFBRSxDQUFDO1lBQ2xDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFjLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxvRUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxRQUFRLENBQUMsR0FBVztRQUNoQixJQUFJLE1BQU0sR0FBbUIsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxnRUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksZ0VBQVksQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbEQsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDckNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFHYztBQUNJO0FBRXNCO0FBQ2pDO0FBQ2E7QUFFNUMsTUFBTSxnQkFBaUIsU0FBUSw0Q0FBRTtJQUlwQyxZQUFZLEVBQU0sRUFBRSxJQUFZO1FBQzVCLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsRUFBRSxDQUFDLEdBQVc7UUFDVixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsQ0FBQyxFQUFFLFlBQVksMERBQVMsQ0FBQyxFQUFFO1lBQzVCLE1BQU0sSUFBSSw4REFBaUIsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1NBQy9EO1FBRUQsSUFBSSxHQUFHLEdBQUksRUFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxvRkFBaUIsRUFBRTtZQUNoQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLEtBQUssRUFBUyxDQUFDLENBQUM7WUFDekMsSUFBSSxHQUFHLFlBQVksb0RBQVMsRUFBRTtnQkFDMUIsT0FBUSxHQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3hDO1NBQ0o7UUFFRCxPQUFPLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxRQUFRLENBQUMsR0FBVztRQUNoQixPQUFPLElBQUksZ0VBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLGdFQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRyxDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUN6Q0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBRTRCO0FBQ2Q7QUFDTTtBQUU1QyxNQUFNLGNBQWUsU0FBUSw0Q0FBRTtJQU1sQyxZQUFZLElBQVksRUFBRSxNQUFpQixFQUFFLFNBQW9CLEVBQUUsSUFBSSxHQUFHLEtBQUs7UUFDM0UsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsRUFBRSxDQUFDLEdBQVc7UUFDVixNQUFNLEtBQUssR0FBRyxJQUFJLHdFQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RSxNQUFNLFNBQVMsR0FBRyxJQUFJLDBEQUFTLEVBQUUsQ0FBQztRQUNsQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsSUFBRyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtZQUNuQixHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDbEMsT0FBTyxTQUFTLENBQUM7U0FDcEI7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsUUFBUSxDQUFDLEdBQVc7UUFDaEIsT0FBTyxJQUFJLGdFQUFZLENBQUMsU0FBUyxFQUFFO1lBQy9CLElBQUksZ0VBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzNCLElBQUksZ0VBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzNCLElBQUksZ0VBQVksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDekUsSUFBSSxnRUFBWSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUMzRixDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUN2Q0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBRTJCO0FBQ2I7QUFDTTtBQUU1QyxNQUFNLG1CQUFvQixTQUFRLDRDQUFFO0lBSXZDLFlBQVksSUFBWSxFQUFFLElBQUksR0FBRyxLQUFLO1FBQ2xDLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELEVBQUUsQ0FBQyxHQUFXO1FBQ1YsTUFBTSxLQUFLLEdBQUcsSUFBSSx1RUFBUyxFQUFFLENBQUM7UUFDOUIsTUFBTSxTQUFTLEdBQUcsSUFBSSwwREFBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxRQUFRLENBQUMsR0FBVztRQUNoQixPQUFPLElBQUksZ0VBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxJQUFJLGdFQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksZ0VBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pHLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQzNCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBRTBDO0FBQ3RCO0FBRTVDLE1BQU0sd0JBQXlCLFNBQVEsNENBQUU7SUFJNUMsWUFBWSxJQUFZLEVBQUUsVUFBaUI7UUFDdkMsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsVUFBVSxHQUFJLFVBQW9CLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDckQsQ0FBQztJQUVELEVBQUUsQ0FBQyxHQUFXO1FBQ1YsTUFBTSxTQUFTLEdBQUcsSUFBSSw0REFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2RCw4REFBaUIsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDbEUsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUFXO1FBQ2hCLElBQUksTUFBTSxHQUFtQixFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLGdFQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksZ0VBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLGdFQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxnRUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLGdFQUFZLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzRyxDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUM3QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUkyQjtBQUNQO0FBRTVDLE1BQU0sa0JBQW1CLFNBQVEsNENBQUU7SUFNdEMsWUFBWSxVQUFrQixFQUFFLGNBQXlCLEVBQUUsS0FBVSxFQUFFLFVBQW1CLEtBQUs7UUFDM0YsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUNyQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztJQUVELEVBQUUsQ0FBQyxHQUFXO1FBQ1YsS0FBSyxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ2hDLElBQUk7Z0JBQ0EsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRTtvQkFDcEIsRUFBcUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7aUJBQ2hHO3FCQUFJO29CQUNBLEVBQXFCLENBQUMsUUFBUSxDQUFDLElBQUksdUVBQVMsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUNuRjtnQkFDRCxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2Y7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDUixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMxQjtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUFXO1FBQ2hCLE9BQU8sSUFBSSxnRUFBWSxDQUFDLGtCQUFrQixFQUFFLENBQUMsSUFBSSxnRUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksZ0VBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbEwsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUN6Q0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBRzJCO0FBQ2I7QUFDTTtBQUU1QyxNQUFNLGNBQWUsU0FBUSw0Q0FBRTtJQU9sQyxZQUFZLElBQVksRUFBRSxRQUFZLElBQUk7UUFDdEMsS0FBSyxFQUFFLENBQUM7UUFOSixVQUFLLEdBQVUsSUFBSSx1RUFBUyxFQUFFLENBQUM7UUFPbkMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQUVELEVBQUUsQ0FBQyxHQUFXO1FBQ1YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxRQUFRLENBQUMsUUFBZSxJQUFJLHVFQUFTLEVBQUUsRUFBRSxVQUFtQixLQUFLLEVBQUUsYUFBcUIsS0FBSztRQUNoRyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLFVBQVUsS0FBSyxFQUFFLEVBQUU7WUFDbkIsVUFBVSxHQUFHLEtBQUssQ0FBQztTQUN0QjtRQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFTyxlQUFlLENBQUMsR0FBVyxFQUFFLFVBQWtCO1FBQ25ELElBQUksS0FBSyxHQUFVLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDOUIsSUFBRyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTtZQUNyQixLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFVLENBQUM7U0FDMUM7UUFDRCxNQUFNLFNBQVMsR0FBYyxJQUFJLDBEQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUUsU0FBUyxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxRQUFRLENBQUMsR0FBVztRQUNoQixPQUFPLElBQUksZ0VBQVksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLGdFQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksZ0VBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFDLEtBQUksQ0FBQyxVQUFVLEVBQUMsTUFBSyxDQUFDO1lBQ3hILElBQUksQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxnRUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RixDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUNoREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUNrQztBQUdkO0FBRTVDLE1BQU0sT0FBUSxTQUFRLDRDQUFFO0lBSTNCLFlBQVksRUFBTSxFQUFFLEVBQU07UUFDdEIsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxFQUFFLENBQUMsR0FBVztRQUNWLE9BQU8sc0ZBQVMsQ0FBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQVcsRUFBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQVcsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFRCxRQUFRLENBQUMsR0FBVztRQUNoQixPQUFPLElBQUksZ0VBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkYsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDdkJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFFc0M7QUFFbEI7QUFFNUMsTUFBTSxPQUFRLFNBQVEsNENBQUU7SUFJM0IsWUFBWSxFQUFNLEVBQUUsRUFBTTtRQUN0QixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELEVBQUUsQ0FBQyxHQUFXO1FBQ1YsT0FBTyxvRkFBUSxDQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBVyxFQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBVyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUFXO1FBQ2hCLE9BQU8sSUFBSSxnRUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRixDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUN2QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUVhO0FBQ087QUFFNUMsTUFBTSxXQUFZLFNBQVEsNENBQUU7SUFJL0IsWUFBWSxTQUFhLEVBQUUsU0FBb0I7UUFDM0MsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBRUQsRUFBRSxDQUFDLEdBQVc7UUFDVixPQUFPLGlFQUFZLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsUUFBUSxDQUFDLEdBQVc7UUFDaEIsT0FBTyxJQUFJLGdFQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxnRUFBWSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoSyxDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUN0QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUM4QjtBQUdWO0FBRTVDLE1BQU0sTUFBTyxTQUFRLDRDQUFFO0lBSTFCLFlBQVksRUFBTSxFQUFFLEVBQU07UUFDdEIsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxFQUFFLENBQUMsR0FBVztRQUNWLE9BQU8sa0ZBQUssQ0FBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQVcsRUFBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQVcsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCxRQUFRLENBQUMsR0FBVztRQUNoQixPQUFPLElBQUksZ0VBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEYsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDdkJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFFZ0M7QUFFWjtBQUU1QyxNQUFNLE9BQVEsU0FBUSw0Q0FBRTtJQUkzQixZQUFZLEVBQU0sRUFBRSxFQUFNO1FBQ3RCLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsRUFBRSxDQUFDLEdBQVc7UUFDVixPQUFPLG9GQUFRLENBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFXLEVBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFXLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQsUUFBUSxDQUFDLEdBQVc7UUFDaEIsT0FBTyxJQUFJLGdFQUFZLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQ3ZCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBQ1E7QUFDTTtBQUN5QjtBQUNaO0FBQ1A7QUFFNUMsTUFBTSxTQUFVLFNBQVEsNENBQUU7SUFNN0IsWUFBWSxVQUFrQixFQUFFLGFBQXNCLEVBQUUsS0FBUyxFQUFFLFNBQW9CO1FBQ25GLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUVELEVBQUUsQ0FBQyxHQUFXO1FBQ1YsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsSUFBSSxLQUFLLFlBQVksMERBQVMsRUFBRTtZQUM1QixLQUFLLEdBQUksS0FBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUMzQztRQUNELElBQUksQ0FBQyxDQUFDLEtBQUssWUFBWSxtRUFBSyxDQUFDLEVBQUU7WUFDM0IsTUFBTSxJQUFJLDhEQUFpQixDQUFDLHlEQUF5RCxDQUFDLENBQUM7U0FDMUY7UUFFRCxNQUFNLElBQUksR0FBRyxJQUFJLG9EQUFNLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3QyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksMERBQVMsRUFBRSxDQUFDLENBQUM7U0FDdEQ7UUFFRCxLQUFJLElBQUksS0FBSyxJQUFLLEtBQWUsQ0FBQyxZQUFZLEVBQUUsRUFBQztZQUM1Qyw0REFBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFlLENBQUMsUUFBUSxDQUFDLElBQUksb0VBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNqQjtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxRQUFRLENBQUMsR0FBVztRQUNoQixPQUFPLElBQUksZ0VBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLGdFQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksZ0VBQVksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEssQ0FBQztDQUVKOzs7Ozs7Ozs7Ozs7O0FDOUNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUNRO0FBQ0c7QUFDUztBQUU1QyxNQUFNLE9BQVEsU0FBUSw0Q0FBRTtJQU8zQixZQUFZLFVBQWMsRUFBRSxVQUFjLEVBQUUsVUFBYyxFQUFFLFNBQW9CO1FBQzVFLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUVELEVBQUUsQ0FBQyxHQUFXO1FBQ1YsTUFBTSxZQUFZLEdBQUcsSUFBSSxvREFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3hELFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUV0QiwrREFBVSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzNFLE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxRQUFRLENBQUMsR0FBVztRQUNoQixPQUFPLElBQUksZ0VBQVksQ0FBQyxLQUFLLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO1lBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztZQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7WUFDN0IsSUFBSSxnRUFBWSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUFDLENBQUMsQ0FBQztJQUMvRixDQUFDO0NBRUo7Ozs7Ozs7Ozs7Ozs7QUNwQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUNRO0FBQ007QUFDUztBQUNJO0FBQ1A7QUFFNUMsTUFBTSxTQUFVLFNBQVEsNENBQUU7SUFNN0IsWUFBWSxVQUFrQixFQUFFLGFBQXNCLEVBQUUsS0FBUyxFQUFFLFNBQW9CO1FBQ25GLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUVELEVBQUUsQ0FBQyxHQUFXO1FBQ1YsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEMsSUFBSSxLQUFLLFlBQVksMERBQVMsRUFBRTtZQUM1QixLQUFLLEdBQUksS0FBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUMzQztRQUNELElBQUksQ0FBQyxDQUFDLEtBQUssWUFBWSxtRUFBSyxDQUFDLEVBQUU7WUFDM0IsTUFBTSxJQUFJLDhEQUFpQixDQUFDLHdEQUF3RCxDQUFDO1NBQ3hGO1FBRUQsTUFBTSxJQUFJLEdBQUcsSUFBSSxvREFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0MsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLDBEQUFTLEVBQUUsQ0FBQyxDQUFDO1NBQ3REO1FBRUQsS0FBSyxJQUFJLE9BQU8sSUFBSyxLQUFlLENBQUMsWUFBWSxFQUFFLEVBQUU7WUFDakQsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDO1lBQ2xCLElBQUksR0FBRyxZQUFZLDBEQUFTLEVBQUU7Z0JBQzFCLEdBQUcsR0FBSSxHQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3ZDO1lBQ0EsNERBQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBZSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDakI7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBRUQsUUFBUSxDQUFDLEdBQVc7UUFDaEIsT0FBTyxJQUFJLGdFQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxnRUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxJQUFJLGdFQUFZLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BLLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQ2pERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFHYztBQUMwQjtBQUNqQztBQUNvQjtBQUNRO0FBRWY7QUFFNUMsTUFBTSxnQkFBaUIsU0FBUSw0Q0FBRTtJQUlwQyxZQUFZLElBQVEsRUFBRSxJQUFlO1FBQ2pDLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELEVBQUUsQ0FBQyxHQUFXO1FBQ1YsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUIsSUFBSSxFQUFFLFlBQVksMERBQVMsRUFBRTtZQUN6QixFQUFFLEdBQUksRUFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNyQztRQUVELE1BQU0sVUFBVSxHQUFHLElBQUksS0FBSyxFQUFTLENBQUM7UUFDdEMsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ3ZCLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkIsSUFBSSxHQUFHLFlBQVksMERBQVMsRUFBRTtnQkFDMUIsR0FBRyxHQUFJLEdBQWlCLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDdkM7WUFDRCxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQVksQ0FBQyxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxFQUFFLFlBQVksb0ZBQWlCLEVBQUU7WUFDakMsSUFBSSxLQUFLLEdBQUksRUFBa0IsQ0FBQztZQUNoQyxJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNyQyxJQUFJLEdBQUcsWUFBWSxvREFBUyxFQUFFO2dCQUMxQixJQUFJLEdBQUcsR0FBSSxHQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUN4QyxJQUFJLEdBQUcsWUFBWSwwREFBUyxFQUFFO29CQUMxQixHQUFHLEdBQUksR0FBaUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDdkM7Z0JBQ0QsSUFBRyxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssR0FBRyxDQUFDLElBQUk7dUJBQ3hCLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxLQUFLO3VCQUN6QixHQUFHLENBQUMsSUFBSSxLQUFLLE1BQU07dUJBQ25CLEdBQUcsQ0FBQyxJQUFJLEtBQUssV0FBVzt1QkFDeEIsR0FBRyxDQUFDLElBQUksS0FBSyxRQUFRO3VCQUNyQixDQUFDLG9FQUFlLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsRUFDaEU7b0JBQ0UsTUFBTSxJQUFJLDhEQUFpQixDQUFDLCtCQUErQixLQUFLLENBQUMsT0FBTyxFQUFFLHFCQUFxQixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQzdHO2dCQUNELE9BQVEsR0FBaUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUN4QztTQUNKO1FBQ0QsT0FBTyxJQUFJLHVFQUFTLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsUUFBUSxDQUFDLEdBQVc7UUFDaEIsT0FBTyxJQUFJLGdFQUFZLENBQUMsZUFBZSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxnRUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzSSxDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUM5REQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUVnQztBQUVaO0FBRTVDLE1BQU0sWUFBYSxTQUFRLDRDQUFFO0lBSWhDLFlBQVksRUFBTSxFQUFFLEVBQU07UUFDdEIsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxFQUFFLENBQUMsR0FBVztRQUNWLE9BQU8sb0ZBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQVUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQVUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxRQUFRLENBQUMsR0FBVztRQUNoQixPQUFPLElBQUksZ0VBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEYsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDdkJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFFOEI7QUFFVjtBQUU1QyxNQUFNLFVBQVcsU0FBUSw0Q0FBRTtJQUk5QixZQUFZLEVBQU0sRUFBRSxFQUFNO1FBQ3RCLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsRUFBRSxDQUFDLEdBQVc7UUFDVixPQUFPLGtGQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFVLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFVLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsUUFBUSxDQUFDLEdBQVc7UUFDaEIsT0FBTyxJQUFJLGdFQUFZLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQ3ZCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBQ1E7QUFDaUI7QUFDWDtBQUN1QjtBQUNqQjtBQUU1QyxNQUFNLE1BQU8sU0FBUSw0Q0FBRTtJQUsxQixZQUFZLFNBQWEsRUFBRSxjQUF5QixFQUFFLGVBQTBCO1FBQzVFLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7SUFDM0MsQ0FBQztJQUVELEVBQUUsQ0FBQyxHQUFXO1FBQ1YsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEMsSUFBSSxTQUFTLFlBQVksMERBQVMsRUFBRTtZQUNoQyxTQUFTLEdBQUksU0FBdUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNuRDtRQUNELElBQUcsQ0FBQyxDQUFDLFNBQVMsWUFBWSxxRUFBTyxDQUFDLEVBQUM7WUFDL0IsTUFBTSxJQUFJLDhEQUFpQixDQUFDLGtFQUFrRSxDQUFDLENBQUM7U0FDbkc7UUFFRCxJQUFJLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUN0QixNQUFNLE9BQU8sR0FBRyxJQUFJLG9EQUFNLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNyRCxzRUFBaUIsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDaEMsT0FBTyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDM0I7UUFFRCxNQUFNLFFBQVEsR0FBRyxJQUFJLG9EQUFNLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN2RCxzRUFBaUIsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDakMsT0FBTyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUFXO1FBQ2hCLE9BQU8sSUFBSSxnRUFBWSxDQUFDLElBQUksRUFBRTtZQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7WUFDNUIsSUFBSSxnRUFBWSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM3RixJQUFJLGdFQUFZLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2xHLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQzlDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBRWdDO0FBRVo7QUFFNUMsTUFBTSxXQUFZLFNBQVEsNENBQUU7SUFJL0IsWUFBWSxFQUFNLEVBQUUsRUFBTTtRQUN0QixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELEVBQUUsQ0FBQyxHQUFXO1FBQ1YsT0FBTyxvRkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBVSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBVSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUFXO1FBQ2hCLE9BQU8sSUFBSSxnRUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RixDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUN2QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUU4QjtBQUVWO0FBRTVDLE1BQU0sU0FBVSxTQUFRLDRDQUFFO0lBSTdCLFlBQVksRUFBTSxFQUFFLEVBQU07UUFDdEIsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxFQUFFLENBQUMsR0FBVztRQUNWLE9BQU8sa0ZBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQVUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQVUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxRQUFRLENBQUMsR0FBVztRQUNoQixPQUFPLElBQUksZ0VBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkYsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDdkJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFFOEI7QUFFVjtBQUU1QyxNQUFNLE9BQVEsU0FBUSw0Q0FBRTtJQUkzQixZQUFZLEVBQU0sRUFBRSxFQUFNO1FBQ3RCLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsRUFBRSxDQUFDLEdBQVc7UUFDVixPQUFPLGtGQUFNLENBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFXLEVBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFXLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsUUFBUSxDQUFDLEdBQVc7UUFDaEIsT0FBTyxJQUFJLGdFQUFZLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQ3ZCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBQ3NDO0FBR2xCO0FBRTVDLE1BQU0sT0FBUSxTQUFRLDRDQUFFO0lBSTNCLFlBQVksRUFBTSxFQUFFLEVBQU07UUFDdEIsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxFQUFFLENBQUMsR0FBVztRQUNWLE9BQU8sMEZBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQVUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQVUsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFFRCxRQUFRLENBQUMsR0FBVztRQUNoQixPQUFPLElBQUksZ0VBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkYsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDdkJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFFeUI7QUFFTDtBQUU1QyxNQUFNLE9BQVEsU0FBUSw0Q0FBRTtJQUczQixZQUFZLEVBQU0sRUFBRSxFQUFNO1FBQ3RCLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELEVBQUUsQ0FBQyxHQUFXO1FBQ1YsT0FBTyw2RUFBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBVSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUFXO1FBQ2hCLE9BQU8sSUFBSSxnRUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUNyQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUVzQjtBQUNGO0FBRTVDLE1BQU0sUUFBUyxTQUFRLDRDQUFFO0lBQzVCO1FBQ0ksS0FBSyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQsRUFBRSxDQUFDLEdBQVc7UUFDVixPQUFPLElBQUksa0VBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxRQUFRLENBQUMsR0FBVztRQUNoQixPQUFPLElBQUksZ0VBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLGdFQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQ2hCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVEO0FBQ3hCO0FBQ29CO0FBRTVDLE1BQU0sVUFBVyxTQUFRLDRDQUFFO0lBRzlCLFlBQVksR0FBVztRQUNuQixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ25CLENBQUM7SUFFRCxFQUFFLENBQUMsR0FBVztRQUNWLE9BQU8sSUFBSSxvRUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsUUFBUSxDQUFDLEdBQVc7UUFDaEIsT0FBTyxJQUFJLGdFQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxnRUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQ3BCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBRXdCO0FBRUo7QUFFNUMsTUFBTSxNQUFPLFNBQVEsNENBQUU7SUFJMUIsWUFBWSxFQUFNLEVBQUUsRUFBTTtRQUN0QixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELEVBQUUsQ0FBQyxHQUFXO1FBQ1YsT0FBTyw0RUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBVSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBVSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUFXO1FBQ2hCLE9BQU8sSUFBSSxnRUFBWSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRixDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUN2QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUUyQjtBQUVQO0FBRTVDLE1BQU0sU0FBVSxTQUFRLDRDQUFFO0lBRzdCLFlBQVksRUFBTTtRQUNkLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELEVBQUUsQ0FBQyxHQUFXO1FBQ1YsT0FBTywrRUFBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBVSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUFXO1FBQ2hCLE9BQU8sSUFBSSxnRUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUNyQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNEO0FBQ0w7QUFDVTtBQUNSO0FBRTVDLE1BQU0sY0FBZSxTQUFRLHlDQUFFO0lBSWxDLFlBQVksRUFBTSxFQUFFLEVBQU07UUFDdEIsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxFQUFFLENBQUMsR0FBVztRQUNWLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTVCLElBQUksQ0FBQyxDQUFDLEVBQUUsWUFBWSxnREFBUyxDQUFDLEVBQUU7WUFDNUIsTUFBTSxJQUFJLDhEQUFpQixDQUFDLHlCQUF5QixFQUFFLHlEQUF5RCxDQUFDLENBQUM7U0FDckg7UUFFQSxFQUFnQixDQUFDLG1CQUFtQixDQUNqQyxnRkFBSSxDQUFFLEVBQWdCLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBVyxDQUFDLENBQ2xELENBQUM7UUFDRixPQUFRLEVBQWdCLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUFXO1FBQ2hCLE9BQU8sSUFBSSxnRUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RixDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUNoQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFFYztBQUNJO0FBQ2M7QUFFWjtBQUU1QyxNQUFNLGNBQWUsU0FBUSw0Q0FBRTtJQUlsQyxZQUFZLEVBQU0sRUFBRSxFQUFNO1FBQ3RCLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsRUFBRSxDQUFDLEdBQVc7UUFDVixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUU1QixJQUFJLENBQUMsQ0FBQyxFQUFFLFlBQVksMERBQVMsQ0FBQyxFQUFFO1lBQzVCLE1BQU0sSUFBSSw4REFBaUIsQ0FBQyx5QkFBeUIsRUFBRSx5REFBeUQsQ0FBQyxDQUFDO1NBQ3JIO1FBRUEsRUFBZ0IsQ0FBQyxtQkFBbUIsQ0FDakMsb0ZBQVEsQ0FBRSxFQUFnQixDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQVcsQ0FBQyxDQUN0RCxDQUFDO1FBQ0YsT0FBUSxFQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxRQUFRLENBQUMsR0FBVztRQUNoQixPQUFPLElBQUksZ0VBQVksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUYsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDbkNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBRWM7QUFDSTtBQUNZO0FBRVY7QUFFNUMsTUFBTSxjQUFlLFNBQVEsNENBQUU7SUFJbEMsWUFBWSxFQUFNLEVBQUUsRUFBTTtRQUN0QixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELEVBQUUsQ0FBQyxHQUFXO1FBQ1YsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUIsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFNUIsSUFBSSxDQUFDLENBQUMsRUFBRSxZQUFZLDBEQUFTLENBQUMsRUFBRTtZQUM1QixNQUFNLElBQUksOERBQWlCLENBQUMseUJBQXlCLEVBQUUseURBQXlELENBQUMsQ0FBQztTQUNySDtRQUVBLEVBQWdCLENBQUMsbUJBQW1CLENBQ2pDLGtGQUFNLENBQUUsRUFBZ0IsQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFXLENBQUMsQ0FDcEQsQ0FBQztRQUNGLE9BQVEsRUFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsUUFBUSxDQUFDLEdBQVc7UUFDaEIsT0FBTyxJQUFJLGdFQUFZLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVGLENBQUM7Q0FFSjs7Ozs7Ozs7Ozs7OztBQ3BDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUVjO0FBQ0k7QUFDb0I7QUFFbEI7QUFFNUMsTUFBTSxjQUFlLFNBQVEsNENBQUU7SUFJbEMsWUFBWSxFQUFNLEVBQUUsRUFBTTtRQUN0QixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELEVBQUUsQ0FBQyxHQUFXO1FBQ1YsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUIsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFNUIsSUFBSSxDQUFDLENBQUMsRUFBRSxZQUFZLDBEQUFTLENBQUMsRUFBRTtZQUM1QixNQUFNLElBQUksOERBQWlCLENBQUMseUJBQXlCLEVBQUUseURBQXlELENBQUMsQ0FBQztTQUNySDtRQUVBLEVBQWdCLENBQUMsbUJBQW1CLENBQ2pDLDBGQUFjLENBQUUsRUFBZ0IsQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFXLENBQUMsQ0FDNUQsQ0FBQztRQUNGLE9BQVEsRUFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsUUFBUSxDQUFDLEdBQVc7UUFDaEIsT0FBTyxJQUFJLGdFQUFZLENBQUMsZUFBZSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdGLENBQUM7Q0FFSjs7Ozs7Ozs7Ozs7OztBQ3BDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUVjO0FBQ0k7QUFDVztBQUVUO0FBRTVDLE1BQU0sY0FBZSxTQUFRLDRDQUFFO0lBSWxDLFlBQVksRUFBTSxFQUFFLEVBQU07UUFDdEIsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxFQUFFLENBQUMsR0FBVztRQUNWLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTVCLElBQUksQ0FBQyxDQUFDLEVBQUUsWUFBWSwwREFBUyxDQUFDLEVBQUU7WUFDNUIsTUFBTSxJQUFJLDhEQUFpQixDQUFDLHlCQUF5QixFQUFFLHlEQUF5RCxDQUFDLENBQUM7U0FDckg7UUFFQSxFQUFnQixDQUFDLG1CQUFtQixDQUNqQyxpRkFBSyxDQUFFLEVBQWdCLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBVyxDQUFDLENBQ25ELENBQUM7UUFDRixPQUFRLEVBQWdCLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUFXO1FBQ2hCLE9BQU8sSUFBSSxnRUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RixDQUFDO0NBRUo7Ozs7Ozs7Ozs7Ozs7QUNwQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUUyQjtBQUVQO0FBRTVDLE1BQU0sU0FBVSxTQUFRLDRDQUFFO0lBRzdCLFlBQVksRUFBTTtRQUNkLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELEVBQUUsQ0FBQyxHQUFXO1FBQ1YsT0FBTywrRUFBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBVSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUFXO1FBQ2hCLE9BQU8sSUFBSSxnRUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0NBRUo7Ozs7Ozs7Ozs7Ozs7QUN0QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBRU87QUFFb0I7QUFDUDtBQUU1QyxNQUFNLFVBQVcsU0FBUSw0Q0FBRTtJQUc5QixZQUFZLEtBQVM7UUFDakIsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRUQsRUFBRSxDQUFDLEdBQVc7UUFDVixJQUFHLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3BCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xDLE9BQU8sSUFBSSxvREFBUyxDQUFDLEtBQWMsQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsT0FBTyxJQUFJLG9EQUFTLENBQUMsSUFBSSx1RUFBUyxFQUFFLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsUUFBUSxDQUFDLEdBQVc7UUFDaEIsT0FBTyxJQUFJLGdFQUFZLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Q0FFSjs7Ozs7Ozs7Ozs7OztBQzNCRDtBQUFBO0FBQUE7QUFBcUM7QUFFOUIsTUFBTSxTQUFVLFNBQVEsa0RBQUs7SUFHaEMsWUFBWSxPQUFjO1FBQ3RCLEtBQUssRUFBRSxDQUFDO1FBSVosYUFBUSxHQUFHLEdBQVcsRUFBRTtZQUNwQixPQUFPLDhCQUE4QixDQUFDO1FBQzFDLENBQUMsQ0FBQztRQUxFLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFNTSxRQUFRO1FBQ1gsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7OztBQ2pCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUVjO0FBQ1c7QUFDUDtBQUNFO0FBRTVDLE1BQU0sbUJBQW9CLFNBQVEsNENBQUU7SUFLdkMsWUFBWSxTQUFhLEVBQUUsWUFBZ0IsRUFBRSxhQUFpQjtRQUMxRCxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxFQUFFLENBQUMsR0FBVztRQUNWLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLElBQUksR0FBRyxZQUFZLDBEQUFTLEVBQUU7WUFDMUIsR0FBRyxHQUFJLEdBQWlCLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDdkM7UUFFRCxJQUFJLENBQUMsQ0FBQyxHQUFHLFlBQVkscUVBQU8sQ0FBQyxFQUFFO1lBQzNCLE1BQU0sSUFBSSw4REFBaUIsQ0FBQyxzRUFBc0UsQ0FBQyxDQUFDO1NBQ3ZHO1FBRUQsSUFBSyxHQUFlLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDN0IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNyQztRQUNELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUFXO1FBQ2hCLE9BQU8sSUFBSSxnRUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxSSxDQUFDO0NBRUo7Ozs7Ozs7Ozs7Ozs7QUN2Q0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUV3QjtBQUNKO0FBRTVDLE1BQU0sVUFBVyxTQUFRLDRDQUFFO0lBRzlCLFlBQVksR0FBVztRQUNuQixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsbUJBQW1CLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzVFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxFQUFFLENBQUMsR0FBVztRQUNWLE9BQU8sSUFBSSxvRUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCxRQUFRLENBQUMsR0FBVztRQUNoQixPQUFPLElBQUksZ0VBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLGdFQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RHLENBQUM7Q0FFSjs7Ozs7Ozs7Ozs7OztBQ3RCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBRTZCO0FBRVQ7QUFFNUMsTUFBTSxPQUFRLFNBQVEsNENBQUU7SUFJM0IsWUFBWSxFQUFNLEVBQUUsRUFBTTtRQUN0QixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELEVBQUUsQ0FBQyxHQUFXO1FBQ1YsT0FBTyxpRkFBSyxDQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBVyxFQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBVyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUFXO1FBQ2hCLE9BQU8sSUFBSSxnRUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRixDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUN2QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUU0QjtBQUVSO0FBRTVDLE1BQU0sT0FBUSxTQUFRLDRDQUFFO0lBSTNCLFlBQVksRUFBTSxFQUFFLEVBQU07UUFDdEIsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxFQUFFLENBQUMsR0FBVztRQUNWLE9BQU8sZ0ZBQUksQ0FBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQVcsRUFBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQVcsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRCxRQUFRLENBQUMsR0FBVztRQUNoQixPQUFPLElBQUksZ0VBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkYsQ0FBQztDQUVKOzs7Ozs7Ozs7Ozs7O0FDeEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBQ1E7QUFDc0I7QUFJekI7QUFDRTtBQUNJO0FBRU87QUFDRTtBQUU1QyxNQUFNLFVBQVcsU0FBUSw0Q0FBRTtJQUk5QixZQUFZLFNBQWEsRUFBRSxLQUFzQjtRQUM3QyxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxFQUFFLENBQUMsR0FBVztRQUNWLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLElBQUksR0FBRyxHQUFVLFNBQVMsQ0FBQztRQUMzQixJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFFckIsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUN6QixJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLElBQUksRUFBRTtnQkFDbkMsWUFBWSxFQUFFLENBQUM7YUFDbEI7U0FDSjtRQUVELElBQUksWUFBWSxHQUFHLENBQUMsRUFBRTtZQUNsQixNQUFNLElBQUksOERBQWlCLENBQUMsOEVBQThFLENBQUMsQ0FBQztTQUMvRztRQUVELEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUN6QixJQUFJLEdBQUcsWUFBWSxrREFBUSxFQUFFO2dCQUN6QixNQUFNO2FBQ1Q7WUFDRCxJQUFJLEdBQUcsWUFBWSxvREFBUyxFQUFFO2dCQUMxQixPQUFPLEdBQUcsQ0FBQzthQUNkO1lBQ0QsSUFBSSxHQUFHLFlBQVksd0RBQVcsRUFBRTtnQkFDNUIsU0FBUzthQUNaO1lBRUQsSUFBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxJQUFJLEVBQUU7Z0JBQ2xDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbEQsSUFBSSxDQUFFLGtGQUFLLENBQUMsU0FBa0IsRUFBRSxTQUFrQixDQUFhLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ3JGLFNBQVM7aUJBQ1o7YUFDSjtZQUVELE1BQU0sSUFBSSxHQUFHLElBQUksb0RBQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7WUFDbEQsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNwQixRQUFRLEdBQUcsSUFBSSxDQUFDO1lBRWhCLElBQUksR0FBRyxZQUFZLGtEQUFRLEVBQUU7Z0JBQ3pCLE1BQU07YUFDVDtZQUNELElBQUksR0FBRyxZQUFZLG9EQUFTLEVBQUU7Z0JBQzFCLE9BQU8sR0FBRyxDQUFDO2FBQ2Q7U0FDSjtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxRQUFRLENBQUMsR0FBVztRQUNoQixPQUFPLElBQUksZ0VBQVksQ0FBQyxRQUFRLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO1lBQzVCLElBQUksZ0VBQVksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDbkQsSUFBSSxnRUFBWSxDQUFDLE1BQU0sRUFBRTtnQkFDckIsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxnRUFBWSxDQUFDLFdBQVcsQ0FBQztnQkFDbkcsSUFBSSxnRUFBWSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQzlGLENBQUMsQ0FBQyxDQUFDO1NBQ1gsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUVKOzs7Ozs7Ozs7Ozs7O0FDbEZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFFMkI7QUFDUDtBQUU1QyxNQUFNLGFBQWMsU0FBUSw0Q0FBRTtJQUNqQztRQUNJLEtBQUssRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVELEVBQUUsQ0FBQyxHQUFXO1FBQ1YsT0FBTyxJQUFJLHVFQUFTLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsUUFBUSxDQUFDLEdBQVc7UUFDaEIsT0FBTyxJQUFJLGdFQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxnRUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDO0NBRUo7Ozs7Ozs7Ozs7Ozs7QUNsQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQjtBQUVXO0FBQ1M7QUFFNUMsTUFBTSxTQUFVLFNBQVEsNENBQUU7SUFJN0IsWUFBWSxTQUFhLEVBQUUsU0FBb0I7UUFDM0MsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBRUQsRUFBRSxDQUFDLEdBQVc7UUFDVixPQUFPLCtEQUFVLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsUUFBUSxDQUFDLEdBQVc7UUFDaEIsT0FBTyxJQUFJLGdFQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxnRUFBWSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3SixDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUNyQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNDO0FBQ0k7QUFDNkM7QUFFaEYsU0FBUyxJQUFJLENBQUMsRUFBUyxFQUFFLEVBQVM7SUFDckMsRUFBRSxZQUFZLG9EQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBSSxFQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDakUsRUFBRSxZQUFZLG9EQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBSSxFQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFFakUsSUFBSTtRQUNBLE9BQU8sS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUN4QjtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsTUFBTSxJQUFJLHdEQUFpQixDQUFDLDJCQUEyQixFQUFFLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQyxJQUFJLGtCQUFrQixDQUFDO0tBQ2pHO0lBRUQsU0FBUyxLQUFLLENBQUMsRUFBTyxFQUFFLEVBQU87UUFDM0IsUUFBUSxJQUFJLEVBQUU7WUFDVixLQUFLLEVBQUUsWUFBWSw4REFBTTtnQkFDckIsUUFBUSxJQUFJLEVBQUU7b0JBQ1YsS0FBSyxFQUFFLFlBQVksOERBQU07d0JBQ3JCLE9BQU8sSUFBSSw4REFBTSxDQUFFLEVBQWEsQ0FBQyxRQUFRLEVBQUUsR0FBSSxFQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztvQkFDN0UsS0FBSyxFQUFFLFlBQVksK0RBQU87d0JBQ3RCLE9BQU8sSUFBSSw4REFBTSxDQUFFLEVBQWEsQ0FBQyxRQUFRLEVBQUUsR0FBSSxFQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztvQkFDcEYsS0FBSyxFQUFFLFlBQVksOERBQU07d0JBQ3JCLE9BQU8sSUFBSSw4REFBTSxDQUFFLEVBQWEsQ0FBQyxRQUFRLEVBQUUsR0FBSSxFQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztvQkFDN0U7d0JBQ0ksTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDO2lCQUN6QjtZQUNMLEtBQUssRUFBRSxZQUFZLCtEQUFPO2dCQUN0QixRQUFRLElBQUksRUFBRTtvQkFDVixLQUFLLEVBQUUsWUFBWSw4REFBTTt3QkFDckIsT0FBTyxJQUFJLDhEQUFNLENBQUUsRUFBYyxDQUFDLGNBQWMsRUFBRSxHQUFJLEVBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO29CQUNwRixLQUFLLEVBQUUsWUFBWSwrREFBTzt3QkFDdEIsT0FBTyxJQUFJLDhEQUFNLENBQUUsRUFBYyxDQUFDLGNBQWMsRUFBRSxHQUFJLEVBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO29CQUMzRixLQUFLLEVBQUUsWUFBWSw4REFBTTt3QkFDckIsT0FBTyxJQUFJLDhEQUFNLENBQUUsRUFBYyxDQUFDLFFBQVEsRUFBRSxHQUFJLEVBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO29CQUM5RTt3QkFDSSxNQUFNLElBQUksS0FBSyxFQUFFLENBQUM7aUJBQ3pCO1lBQ0wsS0FBSyxFQUFFLFlBQVksOERBQU07Z0JBQ3JCLFFBQVEsSUFBSSxFQUFFO29CQUNWLEtBQUssRUFBRSxZQUFZLDhEQUFNO3dCQUNyQixPQUFPLElBQUksOERBQU0sQ0FBRSxFQUFhLENBQUMsUUFBUSxFQUFFLEdBQUksRUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7b0JBQzdFLEtBQUssRUFBRSxZQUFZLCtEQUFPO3dCQUN0QixPQUFPLElBQUksOERBQU0sQ0FBRSxFQUFhLENBQUMsUUFBUSxFQUFFLEdBQUksRUFBYyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7b0JBQzlFLEtBQUssRUFBRSxZQUFZLDhEQUFNO3dCQUNyQixPQUFPLElBQUksOERBQU0sQ0FBRSxFQUFhLENBQUMsUUFBUSxFQUFFLEdBQUksRUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7b0JBQzdFLEtBQUssRUFBRSxZQUFZLGlFQUFTO3dCQUN4QixPQUFPLElBQUksOERBQU0sQ0FBRSxFQUFhLENBQUMsUUFBUSxFQUFFLEdBQUksRUFBZ0IsQ0FBQyxDQUFDO29CQUNyRSxLQUFLLEVBQUUsWUFBWSw0REFBSTt3QkFDbkIsT0FBTyxJQUFJLDhEQUFNLENBQUUsRUFBYSxDQUFDLFFBQVEsRUFBRSxHQUFJLEVBQVcsQ0FBQyxDQUFDO29CQUNoRTt3QkFDSSxNQUFNLElBQUksS0FBSyxFQUFFLENBQUM7aUJBQ3pCO1lBQ0wsS0FBSyxFQUFFLFlBQVksaUVBQVM7Z0JBQ3hCLFFBQVEsSUFBSSxFQUFFO29CQUNWLEtBQUssRUFBRSxZQUFZLDhEQUFNO3dCQUNyQixPQUFPLElBQUksOERBQU0sQ0FBRSxFQUFnQixHQUFJLEVBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO29CQUNyRTt3QkFDSSxNQUFNLElBQUksS0FBSyxFQUFFLENBQUM7aUJBQ3pCO1lBQ0wsS0FBSyxFQUFFLFlBQVksNERBQUk7Z0JBQ25CLFFBQVEsSUFBSSxFQUFFO29CQUNWLEtBQUssRUFBRSxZQUFZLDhEQUFNO3dCQUNyQixPQUFPLElBQUksOERBQU0sQ0FBRSxFQUFXLEdBQUksRUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7b0JBQ2hFO3dCQUNJLE1BQU0sSUFBSSxLQUFLLEVBQUUsQ0FBQztpQkFDekI7WUFDTDtnQkFDSSxNQUFNLElBQUksS0FBSyxFQUFFLENBQUM7U0FDekI7SUFDTCxDQUFDO0FBQ0wsQ0FBQztBQUVNLFNBQVMsS0FBSyxDQUFDLEVBQVMsRUFBRSxFQUFTO0lBQ3RDLEVBQUUsWUFBWSxvREFBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUksRUFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2pFLEVBQUUsWUFBWSxvREFBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUksRUFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBRWpFLElBQUk7UUFDQSxPQUFPLE1BQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDekI7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLE1BQU0sSUFBSSx3REFBaUIsQ0FBQywyQkFBMkIsRUFBRSxDQUFDLElBQUksTUFBTSxFQUFFLENBQUMsSUFBSSxrQkFBa0IsQ0FBQztLQUNqRztJQUVELFNBQVMsTUFBTSxDQUFDLEVBQU8sRUFBRSxFQUFPO1FBQzVCLFFBQVEsSUFBSSxFQUFFO1lBQ1YsS0FBSyxFQUFFLFlBQVksOERBQU07Z0JBQ3JCLFFBQVEsSUFBSSxFQUFFO29CQUNWLEtBQUssRUFBRSxZQUFZLDhEQUFNO3dCQUNyQixPQUFPLElBQUksOERBQU0sQ0FBRSxFQUFhLENBQUMsUUFBUSxFQUFFLEdBQUksRUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7b0JBQzdFLEtBQUssRUFBRSxZQUFZLCtEQUFPO3dCQUN0QixPQUFPLElBQUksOERBQU0sQ0FBRSxFQUFhLENBQUMsUUFBUSxFQUFFLEdBQUksRUFBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7b0JBQ3BGO3dCQUNJLE1BQU0sSUFBSSxLQUFLLEVBQUUsQ0FBQztpQkFDekI7WUFDTCxLQUFLLEVBQUUsWUFBWSwrREFBTztnQkFDdEIsUUFBUSxJQUFJLEVBQUU7b0JBQ1YsS0FBSyxFQUFFLFlBQVksOERBQU07d0JBQ3JCLE9BQU8sSUFBSSw4REFBTSxDQUFFLEVBQWMsQ0FBQyxjQUFjLEVBQUUsR0FBSSxFQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztvQkFDcEYsS0FBSyxFQUFFLFlBQVksK0RBQU87d0JBQ3RCLE9BQU8sSUFBSSw4REFBTSxDQUFFLEVBQWMsQ0FBQyxjQUFjLEVBQUUsR0FBSSxFQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztvQkFDM0Y7d0JBQ0ksTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDO2lCQUN6QjtZQUNMO2dCQUNJLE1BQU0sSUFBSSxLQUFLLEVBQUUsQ0FBQztTQUN6QjtJQUNMLENBQUM7QUFDTCxDQUFDO0FBRU0sU0FBUyxjQUFjLENBQUMsRUFBUyxFQUFFLEVBQVM7SUFDL0MsRUFBRSxZQUFZLG9EQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBSSxFQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDakUsRUFBRSxZQUFZLG9EQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBSSxFQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFFakUsSUFBSTtRQUNBLE9BQU8sV0FBVyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUM5QjtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsTUFBTSxJQUFJLHdEQUFpQixDQUFDLDJCQUEyQixFQUFFLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQyxJQUFJLGtCQUFrQixDQUFDO0tBQ2pHO0lBRUQsU0FBUyxXQUFXLENBQUMsRUFBTyxFQUFFLEVBQU87UUFDakMsUUFBUSxJQUFJLEVBQUU7WUFDVixLQUFLLEVBQUUsWUFBWSw4REFBTTtnQkFDckIsUUFBUSxJQUFJLEVBQUU7b0JBQ1YsS0FBSyxFQUFFLFlBQVksOERBQU07d0JBQ3JCLE9BQU8sSUFBSSw4REFBTSxDQUFFLEVBQWEsQ0FBQyxRQUFRLEVBQUUsR0FBSSxFQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztvQkFDN0UsS0FBSyxFQUFFLFlBQVksK0RBQU87d0JBQ3RCLE9BQU8sSUFBSSw4REFBTSxDQUFFLEVBQWEsQ0FBQyxRQUFRLEVBQUUsR0FBSSxFQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztvQkFDcEY7d0JBQ0ksTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDO2lCQUN6QjtZQUNMLEtBQUssRUFBRSxZQUFZLCtEQUFPO2dCQUN0QixRQUFRLElBQUksRUFBRTtvQkFDVixLQUFLLEVBQUUsWUFBWSw4REFBTTt3QkFDckIsT0FBTyxJQUFJLDhEQUFNLENBQUUsRUFBYyxDQUFDLGNBQWMsRUFBRSxHQUFJLEVBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO29CQUNwRixLQUFLLEVBQUUsWUFBWSwrREFBTzt3QkFDdEIsT0FBTyxJQUFJLDhEQUFNLENBQUUsRUFBYyxDQUFDLGNBQWMsRUFBRSxHQUFJLEVBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO29CQUMzRjt3QkFDSSxNQUFNLElBQUksS0FBSyxFQUFFLENBQUM7aUJBQ3pCO1lBQ0w7Z0JBQ0ksTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztBQUNMLENBQUM7QUFFTSxTQUFTLFFBQVEsQ0FBQyxFQUFTLEVBQUUsRUFBUztJQUN6QyxFQUFFLFlBQVksb0RBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFJLEVBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNqRSxFQUFFLFlBQVksb0RBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFJLEVBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUVqRSxJQUFHLEVBQUUsWUFBWSw4REFBTSxFQUFDO1FBQ3BCLElBQUksRUFBYSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBQztZQUMvQixNQUFNLElBQUksd0RBQWlCLENBQUMsa0RBQWtELENBQUMsQ0FBQztTQUNuRjtLQUNKO1NBQU0sSUFBRyxFQUFFLFlBQVksK0RBQU8sRUFBQztRQUM1QixJQUFJLEVBQWMsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLEVBQUM7WUFDdEMsTUFBTSxJQUFJLHdEQUFpQixDQUFDLGtEQUFrRCxDQUFDLENBQUM7U0FDbkY7S0FDSjtJQUNELElBQUk7UUFDQSxPQUFPLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDMUI7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLE1BQU0sSUFBSSx3REFBaUIsQ0FBQywyQkFBMkIsRUFBRSxDQUFDLElBQUksTUFBTSxFQUFFLENBQUMsSUFBSSxrQkFBa0IsQ0FBQztLQUNqRztJQUVELFNBQVMsT0FBTyxDQUFDLEVBQU8sRUFBRSxFQUFPO1FBQzdCLFFBQVEsSUFBSSxFQUFFO1lBQ1YsS0FBSyxFQUFFLFlBQVksOERBQU07Z0JBQ3JCLFFBQVEsSUFBSSxFQUFFO29CQUNWLEtBQUssRUFBRSxZQUFZLDhEQUFNO3dCQUNyQixPQUFPLElBQUksOERBQU0sQ0FBRSxFQUFhLENBQUMsUUFBUSxFQUFFLEdBQUksRUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7b0JBQzdFLEtBQUssRUFBRSxZQUFZLCtEQUFPO3dCQUN0QixPQUFPLElBQUksOERBQU0sQ0FBRSxFQUFhLENBQUMsUUFBUSxFQUFFLEdBQUksRUFBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7b0JBQ3BGO3dCQUNJLE1BQU0sSUFBSSxLQUFLLEVBQUUsQ0FBQztpQkFDekI7WUFDTCxLQUFLLEVBQUUsWUFBWSwrREFBTztnQkFDdEIsUUFBUSxJQUFJLEVBQUU7b0JBQ1YsS0FBSyxFQUFFLFlBQVksOERBQU07d0JBQ3JCLE9BQU8sSUFBSSw4REFBTSxDQUFFLEVBQWMsQ0FBQyxjQUFjLEVBQUUsR0FBSSxFQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztvQkFDcEYsS0FBSyxFQUFFLFlBQVksK0RBQU87d0JBQ3RCLE9BQU8sSUFBSSw4REFBTSxDQUFFLEVBQWMsQ0FBQyxjQUFjLEVBQUUsR0FBSSxFQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztvQkFDM0Y7d0JBQ0ksTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDO2lCQUN6QjtZQUNMO2dCQUNJLE1BQU0sSUFBSSxLQUFLLEVBQUUsQ0FBQztTQUN6QjtJQUNMLENBQUM7QUFDTCxDQUFDO0FBRU0sU0FBUyxNQUFNLENBQUMsRUFBUyxFQUFFLEVBQVM7SUFDdkMsRUFBRSxZQUFZLG9EQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBSSxFQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDakUsRUFBRSxZQUFZLG9EQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBSSxFQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFFakUsSUFBSTtRQUNBLE9BQU8sR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUN0QjtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsTUFBTSxJQUFJLHdEQUFpQixDQUFDLDJCQUEyQixFQUFFLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQyxJQUFJLGtCQUFrQixDQUFDO0tBQ2pHO0lBRUQsU0FBUyxHQUFHLENBQUMsRUFBTyxFQUFFLEVBQU87UUFDekIsUUFBUSxJQUFJLEVBQUU7WUFDVixLQUFLLEVBQUUsWUFBWSw4REFBTTtnQkFDckIsUUFBUSxJQUFJLEVBQUU7b0JBQ1YsS0FBSyxFQUFFLFlBQVksOERBQU07d0JBQ3JCLE9BQU8sSUFBSSw4REFBTSxDQUFFLEVBQWEsQ0FBQyxRQUFRLEVBQUUsR0FBSSxFQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztvQkFDN0UsS0FBSyxFQUFFLFlBQVksK0RBQU87d0JBQ3RCLE9BQU8sSUFBSSw4REFBTSxDQUFFLEVBQWEsQ0FBQyxRQUFRLEVBQUUsR0FBSSxFQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztvQkFDcEY7d0JBQ0ksTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDO2lCQUN6QjtZQUNMLEtBQUssRUFBRSxZQUFZLCtEQUFPO2dCQUN0QixRQUFRLElBQUksRUFBRTtvQkFDVixLQUFLLEVBQUUsWUFBWSw4REFBTTt3QkFDckIsT0FBTyxJQUFJLDhEQUFNLENBQUUsRUFBYyxDQUFDLGNBQWMsRUFBRSxHQUFJLEVBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO29CQUNwRixLQUFLLEVBQUUsWUFBWSwrREFBTzt3QkFDdEIsT0FBTyxJQUFJLDhEQUFNLENBQUUsRUFBYyxDQUFDLGNBQWMsRUFBRSxHQUFJLEVBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO29CQUMzRjt3QkFDSSxNQUFNLElBQUksS0FBSyxFQUFFLENBQUM7aUJBQ3pCO1lBQ0w7Z0JBQ0ksTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztBQUNMLENBQUM7QUFFTSxTQUFTLFFBQVEsQ0FBQyxFQUFTLEVBQUUsRUFBUztJQUN6QyxFQUFFLFlBQVksb0RBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFJLEVBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNqRSxFQUFFLFlBQVksb0RBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFJLEVBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUVqRSxJQUFJO1FBQ0EsT0FBTyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQ3RCO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDUixNQUFNLElBQUksd0RBQWlCLENBQUMsMkJBQTJCLEVBQUUsQ0FBQyxJQUFJLE9BQU8sRUFBRSxDQUFDLElBQUksa0JBQWtCLENBQUM7S0FDbEc7SUFFRCxTQUFTLEdBQUcsQ0FBQyxFQUFPLEVBQUUsRUFBTztRQUN6QixRQUFRLElBQUksRUFBRTtZQUNWLEtBQUssRUFBRSxZQUFZLDhEQUFNO2dCQUNyQixRQUFRLElBQUksRUFBRTtvQkFDVixLQUFLLEVBQUUsWUFBWSw4REFBTTt3QkFDckIsT0FBTyxJQUFJLDhEQUFNLENBQUMsU0FBQyxFQUFhLENBQUMsUUFBUSxFQUFFLEVBQUssRUFBYSxDQUFDLFFBQVEsRUFBRSxFQUFDLENBQUM7b0JBQzlFLEtBQUssRUFBRSxZQUFZLCtEQUFPO3dCQUN0QixPQUFPLElBQUksOERBQU0sQ0FBQyxTQUFDLEVBQWEsQ0FBQyxRQUFRLEVBQUUsRUFBTSxFQUFjLENBQUMsY0FBYyxFQUFFLEVBQUMsQ0FBQztvQkFDdEY7d0JBQ0ksTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDO2lCQUN6QjtZQUNMLEtBQUssRUFBRSxZQUFZLCtEQUFPO2dCQUN0QixRQUFRLElBQUksRUFBRTtvQkFDVixLQUFLLEVBQUUsWUFBWSw4REFBTTt3QkFDckIsT0FBTyxJQUFJLDhEQUFNLENBQUMsU0FBQyxFQUFjLENBQUMsY0FBYyxFQUFFLEVBQUssRUFBYSxDQUFDLFFBQVEsRUFBRSxFQUFDLENBQUM7b0JBQ3JGLEtBQUssRUFBRSxZQUFZLCtEQUFPO3dCQUN0QixPQUFPLElBQUksOERBQU0sQ0FBQyxTQUFDLEVBQWMsQ0FBQyxjQUFjLEVBQUUsRUFBSyxFQUFjLENBQUMsY0FBYyxFQUFFLEVBQUMsQ0FBQztvQkFDNUY7d0JBQ0ksTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDO2lCQUN6QjtZQUNMO2dCQUNJLE1BQU0sSUFBSSxLQUFLLEVBQUUsQ0FBQztTQUN6QjtJQUNMLENBQUM7QUFDTCxDQUFDO0FBRU0sU0FBUyxHQUFHLENBQUMsRUFBUztJQUN6QixJQUFJLENBQUMsQ0FBQyxFQUFFLFlBQVksb0RBQVMsQ0FBQyxFQUFFO1FBQzVCLE1BQU0sSUFBSSx3REFBaUIsQ0FBQyx3REFBd0QsQ0FBQyxDQUFDO0tBQ3pGO0lBRUQsTUFBTSxHQUFHLEdBQUksRUFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QyxJQUFJLEdBQUcsWUFBWSw4REFBTSxFQUFFO1FBQ3RCLEVBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksOERBQU0sQ0FBRSxHQUFjLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RSxPQUFPLEdBQWEsQ0FBQztLQUN4QjtJQUVELE1BQU0sSUFBSSx3REFBaUIsQ0FBQyxpRkFBaUYsQ0FBQyxDQUFDO0FBQ25ILENBQUM7QUFFTSxTQUFTLEdBQUcsQ0FBQyxFQUFTO0lBQ3pCLElBQUksQ0FBQyxDQUFDLEVBQUUsWUFBWSxvREFBUyxDQUFDLEVBQUU7UUFDNUIsTUFBTSxJQUFJLHdEQUFpQixDQUFDLHdEQUF3RCxDQUFDLENBQUM7S0FDekY7SUFFRCxNQUFNLEdBQUcsR0FBSSxFQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pDLElBQUksR0FBRyxZQUFZLDhEQUFNLEVBQUU7UUFDdEIsRUFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSw4REFBTSxDQUFFLEdBQWMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLE9BQU8sR0FBYSxDQUFDO0tBQ3hCO0lBRUQsTUFBTSxJQUFJLHdEQUFpQixDQUFDLGlGQUFpRixDQUFDLENBQUM7QUFDbkgsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzlSRDtBQUFBO0FBQU8sTUFBZSxLQUFLO0lBS3ZCLFlBQXNCLEtBQWE7UUFIbkIsVUFBSyxHQUFHLElBQUksR0FBRyxFQUFpQixDQUFDO1FBSTdDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQztJQUMvQixDQUFDO0lBRU0sYUFBYTtRQUNoQixJQUFJLEdBQUcsR0FBRyxvQ0FBb0MsQ0FBQztRQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QixHQUFHLElBQUksQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsR0FBRyxJQUFJLG9DQUFvQyxDQUFDO1FBQzVDLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVNLFdBQVcsQ0FBQyxFQUFVLEVBQUUsS0FBWTtRQUN2QyxFQUFFLEdBQUcsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRU0sV0FBVyxDQUFDLEVBQVU7UUFDekIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN0QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvQixJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQyxPQUFPLEdBQUcsQ0FBQztTQUNkO1FBRUQsc0NBQXNDO1FBQ3RDLDRCQUE0QjtRQUM1QixPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBRU0sT0FBTyxDQUFDLEVBQVUsRUFBRSxLQUFZO1FBQ25DLEVBQUUsR0FBRyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTSxPQUFPO1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSTtJQUNwQixDQUFDO0lBRU0sT0FBTyxDQUFDLElBQVk7UUFDdkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVNLFFBQVE7UUFDWCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDdEREO0FBQUE7QUFBTyxNQUFNLE9BQU87O0FBQ0YsV0FBRyxHQUFXLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ0RuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEI7QUFFYTtBQUNFO0FBQ0k7QUFDTTtBQUNvQjtBQUMvQjtBQUVyQyxNQUFNLE1BQU8sU0FBUSw0Q0FBSztJQUk3QixZQUFZLEtBQVksRUFBRSxVQUFxQjtRQUMzQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFKRCxVQUFLLEdBQUcsSUFBSSxHQUFHLEVBQWUsQ0FBQztRQUszQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRU0sTUFBTTtRQUNULEtBQUssSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUM1QixJQUFJLEVBQUUsWUFBWSxvRUFBYyxJQUFJLEVBQUUsWUFBWSx3RkFBd0IsRUFBRTtnQkFDeEUsSUFBSTtvQkFDQSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNoQjtnQkFBQyxPQUFPLENBQUMsRUFBRTtvQkFDUixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7aUJBQ3pCO2FBQ0o7U0FDSjtRQUNELEtBQUssSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUM1QixJQUFJLENBQUMsQ0FBQyxFQUFFLFlBQVksb0VBQWMsSUFBSSxFQUFFLFlBQVksd0ZBQXdCLENBQUMsRUFBRTtnQkFDM0UsSUFBSTtvQkFDQSxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMxQixJQUFJLE1BQU0sWUFBWSx3REFBUSxJQUFJLE1BQU0sWUFBWSwwREFBUyxJQUFJLE1BQU0sWUFBWSw4REFBVyxFQUFFO3dCQUM1RixPQUFPLE1BQWUsQ0FBQztxQkFDMUI7aUJBQ0o7Z0JBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO2lCQUN6QjthQUNKO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sUUFBUTtRQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsT0FBTyxJQUFJLDBEQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEcsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDaEREO0FBQUE7QUFBQTtBQUE0QztBQUVyQyxNQUFNLFlBQVk7SUFLckIsWUFBWSxLQUFhLEVBQUUsU0FBeUIsRUFBRTtRQU10RCxVQUFLLEdBQUcsR0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUU5QixhQUFRLEdBQUcsR0FBVyxFQUFFO1lBQ3BCLElBQUksS0FBSyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsWUFBWSxJQUFJLENBQUMsS0FBSyxPQUFPLENBQUM7WUFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3hCLEtBQUssSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLE9BQU8sS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7WUFDakQsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDeEIsS0FBSyxJQUFJLEtBQUssQ0FBQztZQUNuQixDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUMsQ0FBQztRQWhCRSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksMERBQVksQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDO0lBQzdDLENBQUM7Q0FjSjs7Ozs7Ozs7Ozs7OztBQ3hCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzQztBQUNJO0FBQzZDO0FBRWhGLFNBQVMsRUFBRSxDQUFDLEVBQVMsRUFBRSxFQUFTO0lBQ25DLEVBQUUsWUFBWSxvREFBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUksRUFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2pFLEVBQUUsWUFBWSxvREFBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUksRUFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBRWpFLElBQUk7UUFDQSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDckI7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLE1BQU0sSUFBSSx3REFBaUIsQ0FBQywyQkFBMkIsRUFBRSxDQUFDLElBQUksT0FBTyxFQUFFLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxDQUFDO0tBQ25HO0lBRUQsU0FBUyxFQUFFLENBQUMsRUFBTyxFQUFFLEVBQU87UUFDeEIsUUFBUSxJQUFJLEVBQUU7WUFDVixLQUFLLEVBQUUsWUFBWSwrREFBTztnQkFDdEIsUUFBUSxJQUFJLEVBQUU7b0JBQ1YsS0FBSyxFQUFFLFlBQVksK0RBQU87d0JBQ3RCLE9BQU8sSUFBSSwrREFBTyxDQUFFLEVBQWMsQ0FBQyxRQUFRLEVBQUUsSUFBSyxFQUFjLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztvQkFDakY7d0JBQ0ksTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDO2lCQUN6QjtZQUNMO2dCQUNJLE1BQU0sSUFBSSxLQUFLLEVBQUUsQ0FBQztTQUN6QjtJQUNMLENBQUM7QUFDTCxDQUFDO0FBRU0sU0FBUyxHQUFHLENBQUMsRUFBUyxFQUFFLEVBQVM7SUFDcEMsRUFBRSxZQUFZLG9EQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBSSxFQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDakUsRUFBRSxZQUFZLG9EQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBSSxFQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFFakUsSUFBSTtRQUNBLE9BQU8sR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUN0QjtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsTUFBTSxJQUFJLHdEQUFpQixDQUFDLDJCQUEyQixFQUFFLENBQUMsSUFBSSxPQUFPLEVBQUUsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLENBQUM7S0FDbkc7SUFFRCxTQUFTLEdBQUcsQ0FBQyxFQUFPLEVBQUUsRUFBTztRQUN6QixRQUFRLElBQUksRUFBRTtZQUNWLEtBQUssRUFBRSxZQUFZLCtEQUFPO2dCQUN0QixRQUFRLElBQUksRUFBRTtvQkFDVixLQUFLLEVBQUUsWUFBWSwrREFBTzt3QkFDdEIsT0FBTyxJQUFJLCtEQUFPLENBQUUsRUFBYyxDQUFDLFFBQVEsRUFBRSxJQUFLLEVBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO29CQUNqRjt3QkFDSSxNQUFNLElBQUksS0FBSyxFQUFFLENBQUM7aUJBQ3pCO1lBQ0w7Z0JBQ0ksTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztBQUNMLENBQUM7QUFFTSxTQUFTLEdBQUcsQ0FBQyxFQUFTO0lBQ3pCLEVBQUUsWUFBWSxvREFBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUksRUFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBRWpFLElBQUk7UUFDQSxPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNsQjtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsTUFBTSxJQUFJLHdEQUFpQixDQUFDLDZCQUE2QixFQUFFLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxDQUFDO0tBQ3ZGO0lBRUQsU0FBUyxHQUFHLENBQUMsRUFBTztRQUNoQixRQUFRLElBQUksRUFBRTtZQUNWLEtBQUssRUFBRSxZQUFZLCtEQUFPO2dCQUN0QixPQUFPLElBQUksK0RBQU8sQ0FBQyxDQUFFLEVBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ3BEO2dCQUNJLE1BQU0sSUFBSSxLQUFLLEVBQUUsQ0FBQztTQUN6QjtJQUNMLENBQUM7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDeEVEO0FBQUE7QUFBTyxNQUFNLFlBQVk7O0FBQ04sd0JBQVcsR0FBRyxDQUFDLENBQUM7QUFDakIsc0JBQVMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNEL0Q7QUFBQTtBQUFBO0FBQW1DO0FBRzVCLE1BQWUsRUFBRTtJQUNiLEdBQUcsQ0FBQyxHQUFXO1FBQ2xCLElBQUc7WUFDQyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdkI7UUFBQSxPQUFPLENBQUMsRUFBRTtZQUNQLE1BQU0sSUFBSSxpREFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNuQztJQUNMLENBQUM7Q0FLSjs7Ozs7Ozs7Ozs7OztBQ2hCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThCO0FBQ1E7QUFDVTtBQUNKO0FBQ0Y7QUFFbkMsTUFBTSxPQUFRLFNBQVEsNENBQUs7SUFHOUIsWUFBWSxLQUFlO1FBQ3ZCLEtBQUssRUFBRSxDQUFDO1FBS0wsYUFBUSxHQUFHLEdBQVcsRUFBRTtZQUMzQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQ3pDLENBQUMsQ0FBQztRQUVLLG1CQUFjLEdBQUcsR0FBVyxFQUFFO1lBQ2pDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsQ0FBQztRQUVNLGFBQVEsR0FBRyxHQUFZLEVBQUU7WUFDNUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUMsQ0FBQztRQWRFLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO0lBQzFCLENBQUM7Q0FhSjtBQUVNLE1BQU0sTUFBTyxTQUFRLDRDQUFLO0lBRzdCLFlBQVksS0FBYztRQUN0QixLQUFLLEVBQUUsQ0FBQztRQUtMLGFBQVEsR0FBRyxHQUFXLEVBQUU7WUFDM0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUMsQ0FBQztRQUVLLGFBQVEsR0FBRyxHQUFXLEVBQUU7WUFDM0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUMsQ0FBQztRQVZFLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztJQUN6QixDQUFDO0NBU0o7QUFFTSxNQUFNLE1BQU8sU0FBUSw0Q0FBSztJQUc3QixZQUFZLEtBQWM7UUFDdEIsS0FBSyxFQUFFLENBQUM7UUFLTCxhQUFRLEdBQUcsR0FBVyxFQUFFO1lBQzNCLE9BQU8sSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDO1FBRUssYUFBUSxHQUFHLEdBQVcsRUFBRTtZQUMzQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQyxDQUFDO1FBVkUsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO0lBQ3pCLENBQUM7Q0FTSjtBQUVNLE1BQU0sU0FBVSxTQUFRLDRDQUFLO0lBQ2hDO1FBQ0ksS0FBSyxFQUFFLENBQUM7UUFJTCxhQUFRLEdBQUcsR0FBVyxFQUFFO1lBQzNCLE9BQU8sV0FBVyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQztRQUxFLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO0lBQzVCLENBQUM7Q0FLSjtBQUVNLE1BQU0sR0FBSSxTQUFRLDRDQUFLO0lBQzFCO1FBQ0ksS0FBSyxFQUFFLENBQUM7UUFJTCxhQUFRLEdBQUcsR0FBVyxFQUFFO1lBQzNCLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFMRyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0NBS0o7QUFFTSxNQUFNLElBQUssU0FBUSw0Q0FBSztJQUMzQjtRQUNJLEtBQUssRUFBRSxDQUFDO1FBSUwsYUFBUSxHQUFHLEdBQVcsRUFBRTtZQUMzQixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDLENBQUM7UUFFSyxhQUFRLEdBQUcsR0FBVyxFQUFFO1lBQzNCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUMsQ0FBQztRQVRFLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7Q0FTSjtBQUVNLE1BQU0sS0FBTSxTQUFRLDRDQUFLO0lBSTVCLFlBQVksS0FBb0IsRUFBRSxjQUFzQixLQUFLO1FBQ3pELEtBQUssRUFBRSxDQUFDO1FBYUwsYUFBUSxHQUFHLEdBQVcsRUFBRTtZQUMzQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUMvQixJQUFJLEdBQUcsR0FBRyxVQUFVLElBQUksS0FBSyxDQUFDO1lBQzlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzNCLEdBQUcsSUFBSSxHQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFlLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQztnQkFDcEQsSUFBSSxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDaEIsR0FBRyxJQUFJLElBQUksQ0FBQztpQkFDZjthQUNKO1lBQ0QsR0FBRyxJQUFJLEdBQUcsQ0FBQztZQUNYLE9BQU8sR0FBRyxDQUFDO1FBQ2YsQ0FBQyxDQUFDO1FBRUssYUFBUSxHQUFHLENBQUMsS0FBYSxFQUFVLEVBQUU7WUFDeEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM1QixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7Z0JBQ25CLE9BQU8sR0FBRyxDQUFDO2FBQ2Q7WUFDRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUM3QixPQUFPLElBQUksSUFBSSxLQUFLLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksb0RBQVMsRUFBRSxDQUFDLENBQUM7Z0JBQ2pDLElBQUksRUFBRSxDQUFDO2FBQ1Y7WUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDO1FBTUssaUJBQVksR0FBRyxHQUFpQixFQUFFO1lBQ3JDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDLENBQUM7UUE1Q0UsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUksSUFBSSxLQUFLLEVBQVMsQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFHO1lBQ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSw4REFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSwwREFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSx3REFBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDdEM7UUFBQSxPQUFPLENBQUMsRUFBRTtZQUNQLE1BQU0sSUFBSSxLQUFLLEVBQUUsQ0FBQztTQUNyQjtJQUNMLENBQUM7SUE0Qk0sUUFBUSxDQUFDLEtBQVk7UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztDQUtKO0FBRU0sTUFBTSxNQUFPLFNBQVEsNENBQUs7SUFHN0IsWUFBWSxVQUErQjtRQUN2QyxLQUFLLEVBQUUsQ0FBQztRQWNMLGFBQVEsR0FBRyxHQUFXLEVBQUU7WUFDM0IsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDO1lBQ2QsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDZCxJQUFJLEtBQUssWUFBWSxvREFBUyxFQUFFO29CQUM1QixLQUFLLEdBQUksS0FBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDM0M7Z0JBQ0QsR0FBRyxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssRUFBRSxDQUFDO2dCQUMzQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtvQkFDekIsR0FBRyxJQUFJLElBQUksQ0FBQztpQkFDZjtnQkFDRCxLQUFLLEVBQUUsQ0FBQztZQUNaLENBQUMsQ0FBQyxDQUFDO1lBQ0gsR0FBRyxJQUFJLEdBQUcsQ0FBQztZQUNYLE9BQU8sR0FBRyxDQUFDO1FBQ2YsQ0FBQyxDQUFDO1FBN0JFLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxJQUFJLElBQUksR0FBRyxFQUFpQixDQUFDO1FBQ3pELElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzdCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNkLElBQUksS0FBSyxZQUFZLG9EQUFTLEVBQUU7Z0JBQzVCLEtBQUssR0FBSSxLQUFtQixDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQzNDO1lBQ0QsTUFBTSxTQUFTLEdBQUcsSUFBSSxvREFBUyxFQUFFLENBQUM7WUFDbEMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7SUFDekIsQ0FBQztDQW1CSjs7Ozs7Ozs7Ozs7OztBQzdMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThCO0FBQzJDO0FBQ3RCO0FBRTVDLE1BQU0sU0FBVSxTQUFRLDRDQUFLO0lBS2hDLFlBQVksYUFBcUIsS0FBSyxFQUFFLFVBQW1CLEtBQUs7UUFDNUQsS0FBSyxFQUFFLENBQUM7UUFKSixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGVBQVUsR0FBVyxLQUFLLENBQUM7UUFVNUIsc0JBQWlCLEdBQUcsR0FBWSxFQUFFO1lBQ3JDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN6QyxDQUFDLENBQUM7UUFFSyxhQUFRLEdBQUcsR0FBVyxFQUFFO1lBQzNCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQyxDQUFDLENBQUM7UUF5QkssYUFBUSxHQUFHLEdBQVUsRUFBRTtZQUMxQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQyxDQUFDO1FBRUssYUFBUSxHQUFHLENBQUMsS0FBWSxFQUFRLEVBQUU7WUFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQyxDQUFDO1FBRUssU0FBSSxHQUFHLENBQUMsSUFBa0IsRUFBVSxFQUFFO1lBQ3pDLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO2dCQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3BCO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQyxDQUFDO1FBbERFLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsMkRBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUMzQixDQUFDO0lBVU0sbUJBQW1CLENBQUMsS0FBWTtRQUNuQyxJQUFHLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLFlBQVksaUVBQVMsQ0FBQyxFQUFDO1lBQ2xELE1BQU0sSUFBSSx3REFBaUIsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO1NBQ2hGO1FBRUQsSUFBSSxDQUFRLENBQUM7UUFDYixJQUFJLEtBQUssWUFBWSxTQUFTLEVBQUU7WUFDNUIsQ0FBQyxHQUFJLEtBQW1CLENBQUMsS0FBSyxDQUFDO1NBQ2xDO2FBQU07WUFDSCxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQ2I7UUFDRCxJQUFHLElBQUksQ0FBQyxVQUFVLEtBQUssQ0FBQyxDQUFDLElBQUk7ZUFDdEIsSUFBSSxDQUFDLFVBQVUsS0FBSyxLQUFLO2VBQ3pCLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTTtlQUNqQixDQUFDLENBQUMsSUFBSSxLQUFLLFdBQVc7ZUFDdEIsQ0FBQyxDQUFDLElBQUksS0FBSyxRQUFRO2VBQ25CLENBQUMsOERBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsRUFDM0Y7WUFDRyxNQUFNLElBQUksd0RBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSw2Q0FBNkMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQzVHO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDbkIsQ0FBQztDQWdCSjs7Ozs7Ozs7Ozs7OztBQzdERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzQztBQUNJO0FBQzREO0FBRS9GLFNBQVMsS0FBSyxDQUFDLEVBQVMsRUFBRSxFQUFTO0lBQ3RDLEVBQUUsWUFBWSxvREFBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUksRUFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2pFLEVBQUUsWUFBWSxvREFBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUksRUFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBRWpFLElBQUk7UUFDQSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDckI7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLE1BQU0sSUFBSSx3REFBaUIsQ0FBQywyQkFBMkIsRUFBRSxDQUFDLElBQUksT0FBTyxFQUFFLENBQUMsSUFBSSxrQkFBa0IsQ0FBQztLQUNsRztJQUVELFNBQVMsRUFBRSxDQUFDLEVBQU8sRUFBRSxFQUFPO1FBQ3hCLFFBQVEsSUFBSSxFQUFFO1lBQ1YsS0FBSyxFQUFFLFlBQVksOERBQU07Z0JBQ3JCLFFBQVEsSUFBSSxFQUFFO29CQUNWLEtBQUssRUFBRSxZQUFZLDhEQUFNO3dCQUNyQixPQUFPLElBQUksK0RBQU8sQ0FBRSxFQUFhLENBQUMsUUFBUSxFQUFFLEtBQU0sRUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7b0JBQ2hGLEtBQUssRUFBRSxZQUFZLCtEQUFPO3dCQUN0QixPQUFPLElBQUksK0RBQU8sQ0FBRSxFQUFhLENBQUMsUUFBUSxFQUFFLEtBQU0sRUFBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7b0JBQ3ZGLEtBQUssRUFBRSxZQUFZLDREQUFJO3dCQUNuQixPQUFPLElBQUksK0RBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDOUIsS0FBSyxFQUFFLFlBQVksaUVBQVM7d0JBQ3hCLE9BQU8sSUFBSSwrREFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUM5QixLQUFLLEVBQUUsWUFBWSwyREFBRzt3QkFDbEIsT0FBTyxJQUFJLCtEQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzlCO3dCQUNJLE1BQU0sSUFBSSxLQUFLLEVBQUUsQ0FBQztpQkFDekI7WUFDTCxLQUFLLEVBQUUsWUFBWSwrREFBTztnQkFDdEIsUUFBUSxJQUFJLEVBQUU7b0JBQ1YsS0FBSyxFQUFFLFlBQVksOERBQU07d0JBQ3JCLE9BQU8sSUFBSSwrREFBTyxDQUFFLEVBQWMsQ0FBQyxjQUFjLEVBQUUsSUFBSyxFQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztvQkFDdEYsS0FBSyxFQUFFLFlBQVksK0RBQU87d0JBQ3RCLE9BQU8sSUFBSSwrREFBTyxDQUFFLEVBQWMsQ0FBQyxjQUFjLEVBQUUsSUFBSyxFQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztvQkFDN0YsS0FBSyxFQUFFLFlBQVksNERBQUk7d0JBQ25CLE9BQU8sSUFBSSwrREFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUM5QixLQUFLLEVBQUUsWUFBWSxpRUFBUzt3QkFDeEIsT0FBTyxJQUFJLCtEQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzlCLEtBQUssRUFBRSxZQUFZLDJEQUFHO3dCQUNsQixPQUFPLElBQUksK0RBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDOUI7d0JBQ0ksTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDO2lCQUN6QjtZQUNMLEtBQUssRUFBRSxZQUFZLDhEQUFNO2dCQUNyQixRQUFRLElBQUksRUFBRTtvQkFDVixLQUFLLEVBQUUsWUFBWSw4REFBTTt3QkFDckIsT0FBTyxJQUFJLCtEQUFPLENBQUUsRUFBYSxDQUFDLFFBQVEsRUFBRSxLQUFNLEVBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO29CQUNoRixLQUFLLEVBQUUsWUFBWSw0REFBSTt3QkFDbkIsT0FBTyxJQUFJLCtEQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzlCLEtBQUssRUFBRSxZQUFZLGlFQUFTO3dCQUN4QixPQUFPLElBQUksK0RBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDOUIsS0FBSyxFQUFFLFlBQVksMkRBQUc7d0JBQ2xCLE9BQU8sSUFBSSwrREFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUM5Qjt3QkFDSSxNQUFNLElBQUksS0FBSyxFQUFFLENBQUM7aUJBQ3pCO1lBQ0wsS0FBSyxFQUFFLFlBQVksaUVBQVM7Z0JBQ3hCLFFBQVEsSUFBSSxFQUFFO29CQUNWLEtBQUssRUFBRSxZQUFZLGlFQUFTO3dCQUN4QixPQUFPLElBQUksK0RBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDN0I7d0JBQ0ksT0FBTyxJQUFJLCtEQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2pDO1lBQ0wsS0FBSyxFQUFFLFlBQVksNERBQUk7Z0JBQ25CLFFBQVEsSUFBSSxFQUFFO29CQUNWLEtBQUssRUFBRSxZQUFZLDREQUFJO3dCQUNuQixPQUFPLElBQUksK0RBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDN0I7d0JBQ0ksT0FBTyxJQUFJLCtEQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2pDO1lBQ0wsS0FBSyxFQUFFLFlBQVksMkRBQUc7Z0JBQ2xCLFFBQVEsSUFBSSxFQUFFO29CQUNWLEtBQUssRUFBRSxZQUFZLDJEQUFHO3dCQUNsQixPQUFPLElBQUksK0RBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDN0I7d0JBQ0ksT0FBTyxJQUFJLCtEQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ2pDO1lBQ0wsS0FBSyxFQUFFLFlBQVksOERBQU07Z0JBQ3JCLE9BQU8sSUFBSSwrREFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlCLEtBQUssRUFBRSxZQUFZLDZEQUFLO2dCQUNwQixPQUFPLElBQUksK0RBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQztJQUNMLENBQUM7QUFDTCxDQUFDO0FBRU0sU0FBUyxTQUFTLENBQUMsRUFBUyxFQUFFLEVBQVM7SUFDMUMsRUFBRSxZQUFZLG9EQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBSSxFQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDakUsRUFBRSxZQUFZLG9EQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBSSxFQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFFakUsSUFBSTtRQUNBLE9BQU8sR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUN0QjtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsTUFBTSxJQUFJLHdEQUFpQixDQUFDLDJCQUEyQixFQUFFLENBQUMsSUFBSSxPQUFPLEVBQUUsQ0FBQyxJQUFJLGtCQUFrQixDQUFDO0tBQ2xHO0lBRUQsU0FBUyxHQUFHLENBQUMsRUFBTyxFQUFFLEVBQU87UUFDekIsUUFBUSxJQUFJLEVBQUU7WUFDVixLQUFLLEVBQUUsWUFBWSw4REFBTTtnQkFDckIsUUFBUSxJQUFJLEVBQUU7b0JBQ1YsS0FBSyxFQUFFLFlBQVksOERBQU07d0JBQ3JCLE9BQU8sSUFBSSwrREFBTyxDQUFFLEVBQWEsQ0FBQyxRQUFRLEVBQUUsS0FBTSxFQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztvQkFDaEYsS0FBSyxFQUFFLFlBQVksK0RBQU87d0JBQ3RCLE9BQU8sSUFBSSwrREFBTyxDQUFFLEVBQWEsQ0FBQyxRQUFRLEVBQUUsS0FBTSxFQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztvQkFDdkYsS0FBSyxFQUFFLFlBQVksNERBQUk7d0JBQ25CLE9BQU8sSUFBSSwrREFBTyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM3QixLQUFLLEVBQUUsWUFBWSxpRUFBUzt3QkFDeEIsT0FBTyxJQUFJLCtEQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzdCLEtBQUssRUFBRSxZQUFZLDJEQUFHO3dCQUNsQixPQUFPLElBQUksK0RBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDN0I7d0JBQ0ksTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDO2lCQUN6QjtZQUNMLEtBQUssRUFBRSxZQUFZLCtEQUFPO2dCQUN0QixRQUFRLElBQUksRUFBRTtvQkFDVixLQUFLLEVBQUUsWUFBWSw4REFBTTt3QkFDckIsT0FBTyxJQUFJLCtEQUFPLENBQUUsRUFBYyxDQUFDLGNBQWMsRUFBRSxJQUFLLEVBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO29CQUN0RixLQUFLLEVBQUUsWUFBWSwrREFBTzt3QkFDdEIsT0FBTyxJQUFJLCtEQUFPLENBQUUsRUFBYyxDQUFDLGNBQWMsRUFBRSxJQUFLLEVBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO29CQUM3RixLQUFLLEVBQUUsWUFBWSw0REFBSTt3QkFDbkIsT0FBTyxJQUFJLCtEQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzdCLEtBQUssRUFBRSxZQUFZLGlFQUFTO3dCQUN4QixPQUFPLElBQUksK0RBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDN0IsS0FBSyxFQUFFLFlBQVksMkRBQUc7d0JBQ2xCLE9BQU8sSUFBSSwrREFBTyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM3Qjt3QkFDSSxNQUFNLElBQUksS0FBSyxFQUFFLENBQUM7aUJBQ3pCO1lBQ0wsS0FBSyxFQUFFLFlBQVksOERBQU07Z0JBQ3JCLFFBQVEsSUFBSSxFQUFFO29CQUNWLEtBQUssRUFBRSxZQUFZLDhEQUFNO3dCQUNyQixPQUFPLElBQUksK0RBQU8sQ0FBRSxFQUFhLENBQUMsUUFBUSxFQUFFLEtBQU0sRUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7b0JBQ2hGLEtBQUssRUFBRSxZQUFZLDREQUFJO3dCQUNuQixPQUFPLElBQUksK0RBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDN0IsS0FBSyxFQUFFLFlBQVksaUVBQVM7d0JBQ3hCLE9BQU8sSUFBSSwrREFBTyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUM3Qjt3QkFDSSxNQUFNLElBQUksS0FBSyxFQUFFLENBQUM7aUJBQ3pCO1lBQ0wsS0FBSyxFQUFFLFlBQVksaUVBQVM7Z0JBQ3hCLFFBQVEsSUFBSSxFQUFFO29CQUNWLEtBQUssRUFBRSxZQUFZLGlFQUFTO3dCQUN4QixPQUFPLElBQUksK0RBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDOUI7d0JBQ0ksT0FBTyxJQUFJLCtEQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2hDO1lBQ0wsS0FBSyxFQUFFLFlBQVksNERBQUk7Z0JBQ25CLFFBQVEsSUFBSSxFQUFFO29CQUNWLEtBQUssRUFBRSxZQUFZLDREQUFJO3dCQUNuQixPQUFPLElBQUksK0RBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDOUI7d0JBQ0ksTUFBTSxJQUFJLCtEQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQy9CO1lBQ0wsS0FBSyxFQUFFLFlBQVksMkRBQUc7Z0JBQ2xCLFFBQVEsSUFBSSxFQUFFO29CQUNWLEtBQUssRUFBRSxZQUFZLDJEQUFHO3dCQUNsQixPQUFPLElBQUksK0RBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDOUI7d0JBQ0ksTUFBTSxJQUFJLCtEQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQy9CO1lBQ0wsS0FBSyxFQUFFLFlBQVksOERBQU07Z0JBQ3JCLE9BQU8sSUFBSSwrREFBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdCLEtBQUssRUFBRSxZQUFZLDZEQUFLO2dCQUNwQixPQUFPLElBQUksK0RBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QjtnQkFDSSxNQUFNLElBQUksS0FBSyxFQUFFLENBQUM7U0FDekI7SUFDTCxDQUFDO0FBQ0wsQ0FBQztBQUVNLFNBQVMsS0FBSyxDQUFDLEVBQVMsRUFBRSxFQUFTO0lBQ3RDLEVBQUUsWUFBWSxvREFBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUksRUFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2pFLEVBQUUsWUFBWSxvREFBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUksRUFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBRWpFLElBQUk7UUFDQSxPQUFPLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDdEI7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLE1BQU0sSUFBSSx3REFBaUIsQ0FBQywyQkFBMkIsRUFBRSxDQUFDLElBQUksTUFBTSxFQUFFLENBQUMsSUFBSSxrQkFBa0IsQ0FBQztLQUNqRztJQUVELFNBQVMsR0FBRyxDQUFDLEVBQU8sRUFBRSxFQUFPO1FBQ3pCLFFBQVEsSUFBSSxFQUFFO1lBQ1YsS0FBSyxFQUFFLFlBQVksOERBQU07Z0JBQ3JCLFFBQVEsSUFBSSxFQUFFO29CQUNWLEtBQUssRUFBRSxZQUFZLDhEQUFNO3dCQUNyQixPQUFPLElBQUksK0RBQU8sQ0FBRSxFQUFhLENBQUMsUUFBUSxFQUFFLEdBQUksRUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7b0JBQzlFLEtBQUssRUFBRSxZQUFZLCtEQUFPO3dCQUN0QixPQUFPLElBQUksK0RBQU8sQ0FBRSxFQUFhLENBQUMsUUFBUSxFQUFFLEdBQUksRUFBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7b0JBQ3JGLEtBQUssRUFBRSxZQUFZLDJEQUFHO3dCQUNsQixPQUFPLElBQUksK0RBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDOUI7d0JBQ0ksTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDO2lCQUN6QjtZQUNMLEtBQUssRUFBRSxZQUFZLCtEQUFPO2dCQUN0QixRQUFRLElBQUksRUFBRTtvQkFDVixLQUFLLEVBQUUsWUFBWSw4REFBTTt3QkFDckIsT0FBTyxJQUFJLCtEQUFPLENBQUUsRUFBYyxDQUFDLGNBQWMsRUFBRSxHQUFJLEVBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO29CQUNyRixLQUFLLEVBQUUsWUFBWSwrREFBTzt3QkFDdEIsT0FBTyxJQUFJLCtEQUFPLENBQUUsRUFBYyxDQUFDLGNBQWMsRUFBRSxHQUFJLEVBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO29CQUM1Rjt3QkFDSSxNQUFNLElBQUksS0FBSyxFQUFFLENBQUM7aUJBQ3pCO1lBQ0wsS0FBSyxFQUFFLFlBQVksOERBQU07Z0JBQ3JCLFFBQVEsSUFBSSxFQUFFO29CQUNWLEtBQUssRUFBRSxZQUFZLDhEQUFNO3dCQUNyQixPQUFPLElBQUksK0RBQU8sQ0FBRSxFQUFhLENBQUMsUUFBUSxFQUFFLEdBQUksRUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7b0JBQzlFO3dCQUNJLE1BQU0sSUFBSSxLQUFLLEVBQUUsQ0FBQztpQkFDekI7WUFDTCxLQUFLLEVBQUUsWUFBWSwyREFBRztnQkFDbEIsUUFBUSxJQUFJLEVBQUU7b0JBQ1YsS0FBSyxFQUFFLFlBQVksOERBQU07d0JBQ3JCLE9BQU8sSUFBSSwrREFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUM5Qjt3QkFDSSxNQUFNLElBQUksS0FBSyxFQUFFLENBQUM7aUJBQ3pCO1lBQ0w7Z0JBQ0ksTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztBQUNMLENBQUM7QUFFTSxTQUFTLEtBQUssQ0FBQyxFQUFTLEVBQUUsRUFBUztJQUN0QyxFQUFFLFlBQVksb0RBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFJLEVBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNqRSxFQUFFLFlBQVksb0RBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFJLEVBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUVqRSxJQUFJO1FBQ0EsT0FBTyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQ3RCO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDUixNQUFNLElBQUksd0RBQWlCLENBQUMsMkJBQTJCLEVBQUUsQ0FBQyxJQUFJLE1BQU0sRUFBRSxDQUFDLElBQUksa0JBQWtCLENBQUM7S0FDakc7SUFFRCxTQUFTLEdBQUcsQ0FBQyxFQUFPLEVBQUUsRUFBTztRQUN6QixRQUFRLElBQUksRUFBRTtZQUNWLEtBQUssRUFBRSxZQUFZLDhEQUFNO2dCQUNyQixRQUFRLElBQUksRUFBRTtvQkFDVixLQUFLLEVBQUUsWUFBWSw4REFBTTt3QkFDckIsT0FBTyxJQUFJLCtEQUFPLENBQUUsRUFBYSxDQUFDLFFBQVEsRUFBRSxHQUFJLEVBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO29CQUM5RSxLQUFLLEVBQUUsWUFBWSwrREFBTzt3QkFDdEIsT0FBTyxJQUFJLCtEQUFPLENBQUUsRUFBYSxDQUFDLFFBQVEsRUFBRSxHQUFJLEVBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO29CQUNyRixLQUFLLEVBQUUsWUFBWSwyREFBRzt3QkFDbEIsT0FBTyxJQUFJLCtEQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzlCO3dCQUNJLE1BQU0sSUFBSSxLQUFLLEVBQUUsQ0FBQztpQkFDekI7WUFDTCxLQUFLLEVBQUUsWUFBWSwrREFBTztnQkFDdEIsUUFBUSxJQUFJLEVBQUU7b0JBQ1YsS0FBSyxFQUFFLFlBQVksOERBQU07d0JBQ3JCLE9BQU8sSUFBSSwrREFBTyxDQUFFLEVBQWMsQ0FBQyxjQUFjLEVBQUUsR0FBSSxFQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztvQkFDckYsS0FBSyxFQUFFLFlBQVksK0RBQU87d0JBQ3RCLE9BQU8sSUFBSSwrREFBTyxDQUFFLEVBQWMsQ0FBQyxjQUFjLEVBQUUsR0FBSSxFQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztvQkFDNUY7d0JBQ0ksTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDO2lCQUN6QjtZQUNMLEtBQUssRUFBRSxZQUFZLDhEQUFNO2dCQUNyQixRQUFRLElBQUksRUFBRTtvQkFDVixLQUFLLEVBQUUsWUFBWSw4REFBTTt3QkFDckIsT0FBTyxJQUFJLCtEQUFPLENBQUUsRUFBYSxDQUFDLFFBQVEsRUFBRSxHQUFJLEVBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO29CQUM5RTt3QkFDSSxNQUFNLElBQUksS0FBSyxFQUFFLENBQUM7aUJBQ3pCO1lBQ0wsS0FBSyxFQUFFLFlBQVksMkRBQUc7Z0JBQ2xCLFFBQVEsSUFBSSxFQUFFO29CQUNWLEtBQUssRUFBRSxZQUFZLDhEQUFNO3dCQUNyQixPQUFPLElBQUksK0RBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDOUI7d0JBQ0ksTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDO2lCQUN6QjtZQUNMO2dCQUNJLE1BQU0sSUFBSSxLQUFLLEVBQUUsQ0FBQztTQUN6QjtJQUNMLENBQUM7QUFDTCxDQUFDO0FBRU0sU0FBUyxPQUFPLENBQUMsRUFBUyxFQUFFLEVBQVM7SUFDeEMsRUFBRSxZQUFZLG9EQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBSSxFQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDakUsRUFBRSxZQUFZLG9EQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBSSxFQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFFakUsSUFBSTtRQUNBLE9BQU8sS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUN4QjtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1IsTUFBTSxJQUFJLHdEQUFpQixDQUFDLDJCQUEyQixFQUFFLENBQUMsSUFBSSxPQUFPLEVBQUUsQ0FBQyxJQUFJLGtCQUFrQixDQUFDO0tBQ2xHO0lBRUQsU0FBUyxLQUFLLENBQUMsRUFBTyxFQUFFLEVBQU87UUFDM0IsUUFBUSxJQUFJLEVBQUU7WUFDVixLQUFLLEVBQUUsWUFBWSw4REFBTTtnQkFDckIsUUFBUSxJQUFJLEVBQUU7b0JBQ1YsS0FBSyxFQUFFLFlBQVksOERBQU07d0JBQ3JCLE9BQU8sSUFBSSwrREFBTyxDQUFFLEVBQWEsQ0FBQyxRQUFRLEVBQUUsSUFBSyxFQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztvQkFDL0UsS0FBSyxFQUFFLFlBQVksK0RBQU87d0JBQ3RCLE9BQU8sSUFBSSwrREFBTyxDQUFFLEVBQWEsQ0FBQyxRQUFRLEVBQUUsSUFBSyxFQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztvQkFDdEYsS0FBSyxFQUFFLFlBQVksMkRBQUc7d0JBQ2xCLE9BQU8sSUFBSSwrREFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUM5Qjt3QkFDSSxNQUFNLElBQUksS0FBSyxFQUFFLENBQUM7aUJBQ3pCO1lBQ0wsS0FBSyxFQUFFLFlBQVksK0RBQU87Z0JBQ3RCLFFBQVEsSUFBSSxFQUFFO29CQUNWLEtBQUssRUFBRSxZQUFZLDhEQUFNO3dCQUNyQixPQUFPLElBQUksK0RBQU8sQ0FBRSxFQUFjLENBQUMsY0FBYyxFQUFFLElBQUssRUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7b0JBQ3RGLEtBQUssRUFBRSxZQUFZLCtEQUFPO3dCQUN0QixPQUFPLElBQUksK0RBQU8sQ0FBRSxFQUFjLENBQUMsY0FBYyxFQUFFLElBQUssRUFBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7b0JBQzdGO3dCQUNJLE1BQU0sSUFBSSxLQUFLLEVBQUUsQ0FBQztpQkFDekI7WUFDTCxLQUFLLEVBQUUsWUFBWSw4REFBTTtnQkFDckIsUUFBUSxJQUFJLEVBQUU7b0JBQ1YsS0FBSyxFQUFFLFlBQVksOERBQU07d0JBQ3JCLE9BQU8sSUFBSSwrREFBTyxDQUFFLEVBQWEsQ0FBQyxRQUFRLEVBQUUsSUFBSyxFQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztvQkFDL0U7d0JBQ0ksTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDO2lCQUN6QjtZQUNMLEtBQUssRUFBRSxZQUFZLDJEQUFHO2dCQUNsQixRQUFRLElBQUksRUFBRTtvQkFDVixLQUFLLEVBQUUsWUFBWSw4REFBTTt3QkFDckIsT0FBTyxJQUFJLCtEQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzlCO3dCQUNJLE1BQU0sSUFBSSxLQUFLLEVBQUUsQ0FBQztpQkFDekI7WUFDTDtnQkFDSSxNQUFNLElBQUksS0FBSyxFQUFFLENBQUM7U0FDekI7SUFDTCxDQUFDO0FBQ0wsQ0FBQztBQUVNLFNBQVMsT0FBTyxDQUFDLEVBQVMsRUFBRSxFQUFTO0lBQ3hDLEVBQUUsWUFBWSxvREFBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUksRUFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2pFLEVBQUUsWUFBWSxvREFBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUksRUFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBRWpFLElBQUk7UUFDQSxPQUFPLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDeEI7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLE1BQU0sSUFBSSx3REFBaUIsQ0FBQywyQkFBMkIsRUFBRSxDQUFDLElBQUksT0FBTyxFQUFFLENBQUMsSUFBSSxrQkFBa0IsQ0FBQztLQUNsRztJQUVELFNBQVMsS0FBSyxDQUFDLEVBQU8sRUFBRSxFQUFPO1FBQzNCLFFBQVEsSUFBSSxFQUFFO1lBQ1YsS0FBSyxFQUFFLFlBQVksOERBQU07Z0JBQ3JCLFFBQVEsSUFBSSxFQUFFO29CQUNWLEtBQUssRUFBRSxZQUFZLDhEQUFNO3dCQUNyQixPQUFPLElBQUksK0RBQU8sQ0FBRSxFQUFhLENBQUMsUUFBUSxFQUFFLElBQUssRUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7b0JBQy9FLEtBQUssRUFBRSxZQUFZLCtEQUFPO3dCQUN0QixPQUFPLElBQUksK0RBQU8sQ0FBRSxFQUFhLENBQUMsUUFBUSxFQUFFLElBQUssRUFBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7b0JBQ3RGLEtBQUssRUFBRSxZQUFZLDJEQUFHO3dCQUNsQixPQUFPLElBQUksK0RBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDOUI7d0JBQ0ksTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDO2lCQUN6QjtZQUNMLEtBQUssRUFBRSxZQUFZLCtEQUFPO2dCQUN0QixRQUFRLElBQUksRUFBRTtvQkFDVixLQUFLLEVBQUUsWUFBWSw4REFBTTt3QkFDckIsT0FBTyxJQUFJLCtEQUFPLENBQUUsRUFBYyxDQUFDLGNBQWMsRUFBRSxJQUFLLEVBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO29CQUN0RixLQUFLLEVBQUUsWUFBWSwrREFBTzt3QkFDdEIsT0FBTyxJQUFJLCtEQUFPLENBQUUsRUFBYyxDQUFDLGNBQWMsRUFBRSxJQUFLLEVBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO29CQUM3Rjt3QkFDSSxNQUFNLElBQUksS0FBSyxFQUFFLENBQUM7aUJBQ3pCO1lBQ0wsS0FBSyxFQUFFLFlBQVksOERBQU07Z0JBQ3JCLFFBQVEsSUFBSSxFQUFFO29CQUNWLEtBQUssRUFBRSxZQUFZLDhEQUFNO3dCQUNyQixPQUFPLElBQUksK0RBQU8sQ0FBRSxFQUFhLENBQUMsUUFBUSxFQUFFLElBQUssRUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7b0JBQy9FO3dCQUNJLE1BQU0sSUFBSSxLQUFLLEVBQUUsQ0FBQztpQkFDekI7WUFDTCxLQUFLLEVBQUUsWUFBWSwyREFBRztnQkFDbEIsUUFBUSxJQUFJLEVBQUU7b0JBQ1YsS0FBSyxFQUFFLFlBQVksOERBQU07d0JBQ3JCLE9BQU8sSUFBSSwrREFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUM5Qjt3QkFDSSxNQUFNLElBQUksS0FBSyxFQUFFLENBQUM7aUJBQ3pCO1lBQ0w7Z0JBQ0ksTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztBQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7QUMzWEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEU7QUFFMUM7QUFFTTtBQUNLO0FBQ0U7QUFDSTtBQUUxQyxNQUFNLGlCQUFrQixTQUFRLEtBQUs7SUFDeEMsWUFBWSxPQUFnQjtRQUN4QixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkIsQ0FBQztDQUNKO0FBRU0sTUFBTSxVQUFXLFNBQVEsS0FBSztJQUNqQyxZQUFZLE9BQWdCO1FBQ3hCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQixDQUFDO0NBQ0o7QUFFTSxTQUFTLFlBQVksQ0FBQyxJQUFZO0lBQ3JDLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3ZCLE9BQU8sSUFBSSxpRUFBUyxFQUFFLENBQUM7S0FDMUI7SUFDRCxPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNoQyxDQUFDO0FBRU0sU0FBUyxlQUFlLENBQUMsSUFBWTtJQUN4QyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzFCLFFBQVEsSUFBSSxFQUFFO1FBQ1YsS0FBSyxRQUFRLENBQUM7UUFDZCxLQUFLLFFBQVEsQ0FBQztRQUNkLEtBQUssU0FBUyxDQUFDO1FBQ2YsS0FBSyxLQUFLLENBQUM7UUFDWCxLQUFLLE9BQU8sQ0FBQztRQUNiLEtBQUssTUFBTSxDQUFDO1FBQ1osS0FBSyxXQUFXO1lBQ1osT0FBTyxJQUFJLENBQUM7UUFDaEI7WUFDSSxPQUFPLEtBQUssQ0FBQztLQUNwQjtBQUNMLENBQUM7QUFFTSxTQUFTLGNBQWMsQ0FBQyxJQUFZO0lBQ3ZDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDMUIsSUFBSSxTQUFTLEdBQW9CLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckUsSUFBSSxTQUFTLEtBQUssSUFBSSxJQUFJLFNBQVMsS0FBSyxTQUFTLEVBQUU7UUFDL0MsTUFBTSxJQUFJLGlCQUFpQixDQUFDLHlDQUF5QyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0tBQ2hGO0lBQ0QsT0FBTyxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDdkMsQ0FBQztBQUVNLFNBQVMsT0FBTyxDQUFDLElBQVcsRUFBRSxVQUFrQjtJQUNuRCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFFdEIsT0FBTyxVQUFVLElBQUksSUFBSSxFQUFDO1FBQ3RCLElBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxTQUFTLEVBQUM7WUFDaEQsT0FBTyxVQUFVLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsVUFBVSxHQUFHLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUN0QztJQUVELE1BQU8sSUFBSSxpQkFBaUIsQ0FBQyxpQkFBaUIsVUFBVSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQzlFLENBQUM7QUFFTSxTQUFTLGlCQUFpQixDQUFDLE1BQWMsRUFBRSxHQUFXO0lBQ3pELG1DQUFtQztJQUNuQyx5QkFBeUI7SUFDekIsTUFBTTtBQUNWLENBQUM7QUFFTSxTQUFTLFVBQVUsQ0FBQyxHQUFXLEVBQUUsU0FBYSxFQUFFLFNBQW9CLEVBQUUsS0FBUztJQUNsRixJQUFJLEdBQUcsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLElBQUksR0FBRyxZQUFZLG9EQUFTLEVBQUU7UUFDMUIsR0FBRyxHQUFJLEdBQWlCLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDdkM7SUFFRCxJQUFJLENBQUMsQ0FBQyxHQUFHLFlBQVksK0RBQU8sQ0FBQyxFQUFFO1FBQzNCLE1BQU0sSUFBSSxpQkFBaUIsQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO0tBQ2xGO0lBRUQsSUFBSSxHQUFHLEdBQUcsR0FBYyxDQUFDO0lBQ3pCLE9BQU8sR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFO1FBQ25CLE1BQU0sSUFBSSxHQUFHLElBQUksOENBQU0sQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDeEMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUUxQixJQUFJLEdBQUcsWUFBWSx3REFBUSxFQUFFO1lBQ3pCLE1BQU07U0FDVDtRQUNELElBQUksR0FBRyxZQUFZLDBEQUFTLEVBQUU7WUFDMUIsT0FBTyxHQUFHLENBQUM7U0FDZDtRQUNELElBQUcsR0FBRyxZQUFZLDhEQUFXLEVBQUM7WUFDMUIsU0FBUztTQUNaO1FBRUQsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ2hCLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbEI7UUFFRCxJQUFJLElBQUksR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLElBQUksSUFBSSxZQUFZLG9EQUFTLEVBQUU7WUFDM0IsSUFBSSxHQUFJLElBQWtCLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDekM7UUFDRCxHQUFHLEdBQUcsSUFBZSxDQUFDO0tBQ3pCO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQUVNLFNBQVMsWUFBWSxDQUFDLEdBQVcsRUFBRSxTQUFhLEVBQUUsU0FBb0IsRUFBRSxLQUFTO0lBQ3BGLElBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsSUFBSSxHQUFHLFlBQVksb0RBQVMsRUFBRTtRQUMxQixHQUFHLEdBQUksR0FBaUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUN2QztJQUVELElBQUksQ0FBQyxDQUFDLEdBQUcsWUFBWSwrREFBTyxDQUFDLEVBQUU7UUFDM0IsTUFBTSxJQUFJLGlCQUFpQixDQUFDLGlEQUFpRCxDQUFDLENBQUM7S0FDbEY7SUFFRCxJQUFJLElBQUksR0FBRyxJQUFJLDhDQUFNLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3RDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFFZCxJQUFJLElBQUksR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLElBQUksSUFBSSxZQUFZLG9EQUFTLEVBQUU7UUFDM0IsSUFBSSxHQUFJLElBQWtCLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDekM7SUFDRCxJQUFJLEdBQUcsR0FBRyxJQUFlLENBQUM7SUFFMUIsT0FBTyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUU7UUFDbkIsTUFBTSxJQUFJLEdBQUcsSUFBSSw4Q0FBTSxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN4QyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0IsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRTFCLElBQUksR0FBRyxZQUFZLHdEQUFRLEVBQUU7WUFDekIsTUFBTTtTQUNUO1FBQ0QsSUFBSSxHQUFHLFlBQVksMERBQVMsRUFBRTtZQUMxQixPQUFPLEdBQUcsQ0FBQztTQUNkO1FBQ0QsSUFBRyxHQUFHLFlBQVksOERBQVcsRUFBQztZQUMxQixTQUFTO1NBQ1o7UUFFRCxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDaEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNsQjtRQUVELElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsSUFBSSxJQUFJLFlBQVksb0RBQVMsRUFBRTtZQUMzQixJQUFJLEdBQUksSUFBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUN6QztRQUNELEdBQUcsR0FBRyxJQUFlLENBQUM7S0FDekI7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDO0FBRU0sTUFBTSxLQUFLO0lBR2Q7UUFDSSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyxFQUFZLENBQUM7SUFDbkMsQ0FBQztJQUVELE1BQU07UUFDRixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUFRLEVBQUUsS0FBVTtRQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUNKO0FBRU0sTUFBTSxlQUFlO0lBR3hCLFlBQVksVUFBK0I7UUFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDakMsQ0FBQztJQUVELGVBQWU7UUFDWCxNQUFNLFVBQVUsR0FBdUIsSUFBSSxHQUFHLEVBQWlCLENBQUM7UUFDaEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0IsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxpRUFBUyxFQUFFLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSw4REFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Q0FDSjtBQUVNLE1BQU0saUJBQWlCOztBQUNaLHlCQUFPLEdBQWlDLElBQUksR0FBRyxFQUEyQixDQUFDOzs7Ozs7Ozs7Ozs7O0FDL0w3RjtBQUFBO0FBQUE7QUFBK0I7QUFHeEIsTUFBZSxpQkFBa0IsU0FBUSw0Q0FBSztDQUVwRDs7Ozs7Ozs7Ozs7OztBQ05EO0FBQUE7QUFBQTtBQUFzRDtBQUUvQyxNQUFlLE1BQU8sU0FBUSxvRUFBaUI7Q0FFckQ7Ozs7Ozs7Ozs7Ozs7QUNKRDtBQUFBO0FBQUE7QUFBQTtBQUFzRDtBQUVyQjtBQUkxQixNQUFNLFdBQVksU0FBUSxvRUFBaUI7SUFLOUMsWUFBWSxHQUFjLEVBQUUsTUFBaUIsRUFBRSxJQUFZO1FBQ3ZELEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRU0sT0FBTztRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRU0sTUFBTTtRQUNULE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDO0lBRUQsR0FBRyxDQUFDLElBQVksRUFBRSxJQUFrQjtRQUNoQyxJQUFJLEdBQUcsR0FBRyxJQUFJLDhDQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQyxNQUFNLFVBQVUsR0FBcUIsSUFBSSxLQUFLLEVBQWEsQ0FBQztRQUM1RCxLQUFLLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDM0IsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBYyxDQUFDLENBQUM7U0FDaEQ7UUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzRCxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUM7UUFDRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN4QixDQUFDO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUNyQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyQztBQUNhO0FBR1I7QUFFekMsTUFBTSxNQUFPLFNBQVEsd0RBQU07SUFHOUIsWUFBWSxLQUFZO1FBQ3BCLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUFZLEVBQUUsSUFBa0I7UUFDaEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDNUMsT0FBTyxJQUFJLDBEQUFTLENBQUMsSUFBSSw4REFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDbEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkM7QUFDZ0I7QUFHWDtBQUV6QyxNQUFNLEdBQUksU0FBUSx3REFBTTtJQUczQixZQUFZLEtBQVk7UUFDcEIsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRUQsR0FBRyxDQUFDLElBQVksRUFBRSxJQUFrQjtRQUNoQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzVDLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUNyQixPQUFPLElBQUksMERBQVMsQ0FBQyxJQUFJLGlFQUFTLEVBQUUsQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsT0FBTyxJQUFJLDBEQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7O0FDckJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyQztBQUNhO0FBR1I7QUFDVDtBQUdoQyxNQUFNLElBQUssU0FBUSx3REFBTTtJQUc1QixZQUFZLEtBQVk7UUFDcEIsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRUQsR0FBRyxDQUFDLElBQVksRUFBRSxJQUFrQjtRQUNoQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUM1QyxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtZQUNoQixJQUFJLEdBQUcsR0FBRyxJQUFJLG9EQUFTLEVBQUUsQ0FBQztZQUMxQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsT0FBTyxJQUFJLDBEQUFTLENBQUMsSUFBSSw4REFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztDQUNKIiwiZmlsZSI6Im5vZGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYXN0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImFzdFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdGZ1bmN0aW9uIGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKSB7XG4gXHRcdGRlbGV0ZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHR9XG4gXHR2YXIgcGFyZW50SG90VXBkYXRlQ2FsbGJhY2sgPSB0aGlzW1wid2VicGFja0hvdFVwZGF0ZWFzdFwiXTtcbiBcdHRoaXNbXCJ3ZWJwYWNrSG90VXBkYXRlYXN0XCJdID0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xuIFx0XHRpZiAocGFyZW50SG90VXBkYXRlQ2FsbGJhY2spIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdH0gO1xuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiBcdFx0c2NyaXB0LmNoYXJzZXQgPSBcInV0Zi04XCI7XG4gXHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzXCI7XG4gXHRcdGlmIChudWxsKSBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBudWxsO1xuIFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRNYW5pZmVzdChyZXF1ZXN0VGltZW91dCkge1xuIFx0XHRyZXF1ZXN0VGltZW91dCA9IHJlcXVlc3RUaW1lb3V0IHx8IDEwMDAwO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0aWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCA9PT0gXCJ1bmRlZmluZWRcIikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnRcIikpO1xuIFx0XHRcdH1cbiBcdFx0XHR0cnkge1xuIFx0XHRcdFx0dmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiBcdFx0XHRcdHZhciByZXF1ZXN0UGF0aCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNvblwiO1xuIFx0XHRcdFx0cmVxdWVzdC5vcGVuKFwiR0VUXCIsIHJlcXVlc3RQYXRoLCB0cnVlKTtcbiBcdFx0XHRcdHJlcXVlc3QudGltZW91dCA9IHJlcXVlc3RUaW1lb3V0O1xuIFx0XHRcdFx0cmVxdWVzdC5zZW5kKG51bGwpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChlcnIpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0aWYgKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkgcmV0dXJuO1xuIFx0XHRcdFx0aWYgKHJlcXVlc3Quc3RhdHVzID09PSAwKSB7XG4gXHRcdFx0XHRcdC8vIHRpbWVvdXRcbiBcdFx0XHRcdFx0cmVqZWN0KFxuIFx0XHRcdFx0XHRcdG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIHRpbWVkIG91dC5cIilcbiBcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDQwNCkge1xuIFx0XHRcdFx0XHQvLyBubyB1cGRhdGUgYXZhaWxhYmxlXG4gXHRcdFx0XHRcdHJlc29sdmUoKTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgIT09IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyAhPT0gMzA0KSB7XG4gXHRcdFx0XHRcdC8vIG90aGVyIGZhaWx1cmVcbiBcdFx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIGZhaWxlZC5cIikpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0Ly8gc3VjY2Vzc1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdHZhciB1cGRhdGUgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xuIFx0XHRcdFx0XHRcdHJlamVjdChlKTtcbiBcdFx0XHRcdFx0XHRyZXR1cm47XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0cmVzb2x2ZSh1cGRhdGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHR2YXIgaG90QXBwbHlPblVwZGF0ZSA9IHRydWU7XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50SGFzaCA9IFwiNGIzZWU3ZDBjOGYxYWFkYjEyNTZcIjtcbiBcdHZhciBob3RSZXF1ZXN0VGltZW91dCA9IDEwMDAwO1xuIFx0dmFyIGhvdEN1cnJlbnRNb2R1bGVEYXRhID0ge307XG4gXHR2YXIgaG90Q3VycmVudENoaWxkTW9kdWxlO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IFtdO1xuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIG1lID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdGlmICghbWUpIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fO1xuIFx0XHR2YXIgZm4gPSBmdW5jdGlvbihyZXF1ZXN0KSB7XG4gXHRcdFx0aWYgKG1lLmhvdC5hY3RpdmUpIHtcbiBcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XG4gXHRcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPT09IC0xKSB7XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHJlcXVlc3Q7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG4gXHRcdFx0XHRcdFx0cmVxdWVzdCArXG4gXHRcdFx0XHRcdFx0XCIpIGZyb20gZGlzcG9zZWQgbW9kdWxlIFwiICtcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZFxuIFx0XHRcdFx0KTtcbiBcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHJlcXVlc3QpO1xuIFx0XHR9O1xuIFx0XHR2YXIgT2JqZWN0RmFjdG9yeSA9IGZ1bmN0aW9uIE9iamVjdEZhY3RvcnkobmFtZSkge1xuIFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX19bbmFtZV07XG4gXHRcdFx0XHR9LFxuIFx0XHRcdFx0c2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuIFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdID0gdmFsdWU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fTtcbiBcdFx0Zm9yICh2YXIgbmFtZSBpbiBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9fd2VicGFja19yZXF1aXJlX18sIG5hbWUpICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcImVcIiAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJ0XCJcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgT2JqZWN0RmFjdG9yeShuYW1lKSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGZuLmUgPSBmdW5jdGlvbihjaHVua0lkKSB7XG4gXHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJyZWFkeVwiKSBob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuIFx0XHRcdGhvdENodW5rc0xvYWRpbmcrKztcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGNodW5rSWQpLnRoZW4oZmluaXNoQ2h1bmtMb2FkaW5nLCBmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdGZpbmlzaENodW5rTG9hZGluZygpO1xuIFx0XHRcdFx0dGhyb3cgZXJyO1xuIFx0XHRcdH0pO1xuXG4gXHRcdFx0ZnVuY3Rpb24gZmluaXNoQ2h1bmtMb2FkaW5nKCkge1xuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZy0tO1xuIFx0XHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIpIHtcbiBcdFx0XHRcdFx0aWYgKCFob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAoaG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJiBob3RXYWl0aW5nRmlsZXMgPT09IDApIHtcbiBcdFx0XHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH07XG4gXHRcdGZuLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRcdGlmIChtb2RlICYgMSkgdmFsdWUgPSBmbih2YWx1ZSk7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18udCh2YWx1ZSwgbW9kZSAmIH4xKTtcbiBcdFx0fTtcbiBcdFx0cmV0dXJuIGZuO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgaG90ID0ge1xuIFx0XHRcdC8vIHByaXZhdGUgc3R1ZmZcbiBcdFx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9kZWNsaW5lZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG4gXHRcdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXG4gXHRcdFx0X3NlbGZJbnZhbGlkYXRlZDogZmFsc2UsXG4gXHRcdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXG4gXHRcdFx0X21haW46IGhvdEN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQsXG5cbiBcdFx0XHQvLyBNb2R1bGUgQVBJXG4gXHRcdFx0YWN0aXZlOiB0cnVlLFxuIFx0XHRcdGFjY2VwdDogZnVuY3Rpb24oZGVwLCBjYWxsYmFjaykge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZBY2NlcHRlZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpIGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBdID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRlY2xpbmU6IGZ1bmN0aW9uKGRlcCkge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGlzcG9zZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGludmFsaWRhdGU6IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0dGhpcy5fc2VsZkludmFsaWRhdGVkID0gdHJ1ZTtcbiBcdFx0XHRcdHN3aXRjaCAoaG90U3RhdHVzKSB7XG4gXHRcdFx0XHRcdGNhc2UgXCJpZGxlXCI6XG4gXHRcdFx0XHRcdFx0aG90VXBkYXRlID0ge307XG4gXHRcdFx0XHRcdFx0aG90VXBkYXRlW21vZHVsZUlkXSA9IG1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHRcdGhvdFNldFN0YXR1cyhcInJlYWR5XCIpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwicmVhZHlcIjpcbiBcdFx0XHRcdFx0XHRob3RBcHBseUludmFsaWRhdGVkTW9kdWxlKG1vZHVsZUlkKTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcInByZXBhcmVcIjpcbiBcdFx0XHRcdFx0Y2FzZSBcImNoZWNrXCI6XG4gXHRcdFx0XHRcdGNhc2UgXCJkaXNwb3NlXCI6XG4gXHRcdFx0XHRcdGNhc2UgXCJhcHBseVwiOlxuIFx0XHRcdFx0XHRcdChob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPVxuIFx0XHRcdFx0XHRcdFx0aG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzIHx8IFtdKS5wdXNoKG1vZHVsZUlkKTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0ZGVmYXVsdDpcbiBcdFx0XHRcdFx0XHQvLyBpZ25vcmUgcmVxdWVzdHMgaW4gZXJyb3Igc3RhdGVzXG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vIE1hbmFnZW1lbnQgQVBJXG4gXHRcdFx0Y2hlY2s6IGhvdENoZWNrLFxuIFx0XHRcdGFwcGx5OiBob3RBcHBseSxcbiBcdFx0XHRzdGF0dXM6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGlmICghbCkgcmV0dXJuIGhvdFN0YXR1cztcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRhZGRTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHRob3RTdGF0dXNIYW5kbGVycy5wdXNoKGwpO1xuIFx0XHRcdH0sXG4gXHRcdFx0cmVtb3ZlU3RhdHVzSGFuZGxlcjogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdFN0YXR1c0hhbmRsZXJzLmluZGV4T2YobCk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIGhvdFN0YXR1c0hhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdH0sXG5cbiBcdFx0XHQvL2luaGVyaXQgZnJvbSBwcmV2aW91cyBkaXNwb3NlIGNhbGxcbiBcdFx0XHRkYXRhOiBob3RDdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF1cbiBcdFx0fTtcbiBcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gdW5kZWZpbmVkO1xuIFx0XHRyZXR1cm4gaG90O1xuIFx0fVxuXG4gXHR2YXIgaG90U3RhdHVzSGFuZGxlcnMgPSBbXTtcbiBcdHZhciBob3RTdGF0dXMgPSBcImlkbGVcIjtcblxuIFx0ZnVuY3Rpb24gaG90U2V0U3RhdHVzKG5ld1N0YXR1cykge1xuIFx0XHRob3RTdGF0dXMgPSBuZXdTdGF0dXM7XG4gXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaG90U3RhdHVzSGFuZGxlcnMubGVuZ3RoOyBpKyspXG4gXHRcdFx0aG90U3RhdHVzSGFuZGxlcnNbaV0uY2FsbChudWxsLCBuZXdTdGF0dXMpO1xuIFx0fVxuXG4gXHQvLyB3aGlsZSBkb3dubG9hZGluZ1xuIFx0dmFyIGhvdFdhaXRpbmdGaWxlcyA9IDA7XG4gXHR2YXIgaG90Q2h1bmtzTG9hZGluZyA9IDA7XG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RBdmFpbGFibGVGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdERlZmVycmVkO1xuXG4gXHQvLyBUaGUgdXBkYXRlIGluZm9cbiBcdHZhciBob3RVcGRhdGUsIGhvdFVwZGF0ZU5ld0hhc2gsIGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcztcblxuIFx0ZnVuY3Rpb24gdG9Nb2R1bGVJZChpZCkge1xuIFx0XHR2YXIgaXNOdW1iZXIgPSAraWQgKyBcIlwiID09PSBpZDtcbiBcdFx0cmV0dXJuIGlzTnVtYmVyID8gK2lkIDogaWQ7XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5KSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XG4gXHRcdH1cbiBcdFx0aG90QXBwbHlPblVwZGF0ZSA9IGFwcGx5O1xuIFx0XHRob3RTZXRTdGF0dXMoXCJjaGVja1wiKTtcbiBcdFx0cmV0dXJuIGhvdERvd25sb2FkTWFuaWZlc3QoaG90UmVxdWVzdFRpbWVvdXQpLnRoZW4oZnVuY3Rpb24odXBkYXRlKSB7XG4gXHRcdFx0aWYgKCF1cGRhdGUpIHtcbiBcdFx0XHRcdGhvdFNldFN0YXR1cyhob3RBcHBseUludmFsaWRhdGVkTW9kdWxlcygpID8gXCJyZWFkeVwiIDogXCJpZGxlXCIpO1xuIFx0XHRcdFx0cmV0dXJuIG51bGw7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwID0ge307XG4gXHRcdFx0aG90V2FpdGluZ0ZpbGVzTWFwID0ge307XG4gXHRcdFx0aG90QXZhaWxhYmxlRmlsZXNNYXAgPSB1cGRhdGUuYztcbiBcdFx0XHRob3RVcGRhdGVOZXdIYXNoID0gdXBkYXRlLmg7XG5cbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuIFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRob3REZWZlcnJlZCA9IHtcbiBcdFx0XHRcdFx0cmVzb2x2ZTogcmVzb2x2ZSxcbiBcdFx0XHRcdFx0cmVqZWN0OiByZWplY3RcbiBcdFx0XHRcdH07XG4gXHRcdFx0fSk7XG4gXHRcdFx0aG90VXBkYXRlID0ge307XG4gXHRcdFx0dmFyIGNodW5rSWQgPSBcIm1haW5cIjtcbiBcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9uZS1ibG9ja3NcbiBcdFx0XHR7XG4gXHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0aG90U3RhdHVzID09PSBcInByZXBhcmVcIiAmJlxuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJlxuIFx0XHRcdFx0aG90V2FpdGluZ0ZpbGVzID09PSAwXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBwcm9taXNlO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdIHx8ICFob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSlcbiBcdFx0XHRyZXR1cm47XG4gXHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gZmFsc2U7XG4gXHRcdGZvciAodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZiAoLS1ob3RXYWl0aW5nRmlsZXMgPT09IDAgJiYgaG90Q2h1bmtzTG9hZGluZyA9PT0gMCkge1xuIFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXMrKztcbiBcdFx0XHRob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdFVwZGF0ZURvd25sb2FkZWQoKSB7XG4gXHRcdGhvdFNldFN0YXR1cyhcInJlYWR5XCIpO1xuIFx0XHR2YXIgZGVmZXJyZWQgPSBob3REZWZlcnJlZDtcbiBcdFx0aG90RGVmZXJyZWQgPSBudWxsO1xuIFx0XHRpZiAoIWRlZmVycmVkKSByZXR1cm47XG4gXHRcdGlmIChob3RBcHBseU9uVXBkYXRlKSB7XG4gXHRcdFx0Ly8gV3JhcCBkZWZlcnJlZCBvYmplY3QgaW4gUHJvbWlzZSB0byBtYXJrIGl0IGFzIGEgd2VsbC1oYW5kbGVkIFByb21pc2UgdG9cbiBcdFx0XHQvLyBhdm9pZCB0cmlnZ2VyaW5nIHVuY2F1Z2h0IGV4Y2VwdGlvbiB3YXJuaW5nIGluIENocm9tZS5cbiBcdFx0XHQvLyBTZWUgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDY1NjY2XG4gXHRcdFx0UHJvbWlzZS5yZXNvbHZlKClcbiBcdFx0XHRcdC50aGVuKGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gaG90QXBwbHkoaG90QXBwbHlPblVwZGF0ZSk7XG4gXHRcdFx0XHR9KVxuIFx0XHRcdFx0LnRoZW4oXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKHJlc3VsdCkge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0ZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KGVycik7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdCk7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaCh0b01vZHVsZUlkKGlkKSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHRcdGRlZmVycmVkLnJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwicmVhZHlcIilcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXNcIik7XG4gXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuIFx0XHRyZXR1cm4gaG90QXBwbHlJbnRlcm5hbChvcHRpb25zKTtcbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90QXBwbHlJbnRlcm5hbChvcHRpb25zKSB7XG4gXHRcdGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCk7XG5cbiBcdFx0dmFyIGNiO1xuIFx0XHR2YXIgaTtcbiBcdFx0dmFyIGo7XG4gXHRcdHZhciBtb2R1bGU7XG4gXHRcdHZhciBtb2R1bGVJZDtcblxuIFx0XHRmdW5jdGlvbiBnZXRBZmZlY3RlZFN0dWZmKHVwZGF0ZU1vZHVsZUlkKSB7XG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFt1cGRhdGVNb2R1bGVJZF07XG4gXHRcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cbiBcdFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMubWFwKGZ1bmN0aW9uKGlkKSB7XG4gXHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRjaGFpbjogW2lkXSxcbiBcdFx0XHRcdFx0aWQ6IGlkXG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gXHRcdFx0XHR2YXIgcXVldWVJdGVtID0gcXVldWUucG9wKCk7XG4gXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZUl0ZW0uaWQ7XG4gXHRcdFx0XHR2YXIgY2hhaW4gPSBxdWV1ZUl0ZW0uY2hhaW47XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChcbiBcdFx0XHRcdFx0IW1vZHVsZSB8fFxuIFx0XHRcdFx0XHQobW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkICYmICFtb2R1bGUuaG90Ll9zZWxmSW52YWxpZGF0ZWQpXG4gXHRcdFx0XHQpXG4gXHRcdFx0XHRcdGNvbnRpbnVlO1xuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudCA9IGluc3RhbGxlZE1vZHVsZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHRcdH07XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG4gXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcbiBcdFx0XHRcdFx0cXVldWUucHVzaCh7XG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRpZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuXG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcbiBcdFx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcbiBcdFx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuIFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG4gXHRcdFx0fTtcbiBcdFx0fVxuXG4gXHRcdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcbiBcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdHZhciBpdGVtID0gYltpXTtcbiBcdFx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcbiBcdFx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuIFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcbiBcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG4gXHRcdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUoKSB7XG4gXHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyByZXN1bHQubW9kdWxlSWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcbiBcdFx0XHQpO1xuIFx0XHR9O1xuXG4gXHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdG1vZHVsZUlkID0gdG9Nb2R1bGVJZChpZCk7XG4gXHRcdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG4gXHRcdFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRcdFx0aWYgKGhvdFVwZGF0ZVtpZF0pIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRTdHVmZihtb2R1bGVJZCk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBpZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cbiBcdFx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG4gXHRcdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG4gXHRcdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcbiBcdFx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGRlZmF1bHQ6XG4gXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG4gXHRcdFx0XHRcdGhvdFNldFN0YXR1cyhcImFib3J0XCIpO1xuIFx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoYWJvcnRFcnJvcik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9BcHBseSkge1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IGhvdFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0XHRcdFx0aWYgKFxuIFx0XHRcdFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHRcdFx0XHQpXG4gXHRcdFx0XHRcdFx0KSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG4gXHRcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuIFx0XHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRtb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSAmJlxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWQgJiZcbiBcdFx0XHRcdC8vIHJlbW92ZWQgc2VsZi1hY2NlcHRlZCBtb2R1bGVzIHNob3VsZCBub3QgYmUgcmVxdWlyZWRcbiBcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdICE9PSB3YXJuVW5leHBlY3RlZFJlcXVpcmUgJiZcbiBcdFx0XHRcdC8vIHdoZW4gY2FsbGVkIGludmFsaWRhdGUgc2VsZi1hY2NlcHRpbmcgaXMgbm90IHBvc3NpYmxlXG4gXHRcdFx0XHQhaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmSW52YWxpZGF0ZWRcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcbiBcdFx0XHRcdFx0bW9kdWxlOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0cGFyZW50czogaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0ucGFyZW50cy5zbGljZSgpLFxuIFx0XHRcdFx0XHRlcnJvckhhbmRsZXI6IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkXG4gXHRcdFx0XHR9KTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcbiBcdFx0T2JqZWN0LmtleXMoaG90QXZhaWxhYmxlRmlsZXNNYXApLmZvckVhY2goZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSA9PT0gZmFsc2UpIHtcbiBcdFx0XHRcdGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdH0pO1xuXG4gXHRcdHZhciBpZHg7XG4gXHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xuIFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdG1vZHVsZUlkID0gcXVldWUucG9wKCk7XG4gXHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0aWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuXG4gXHRcdFx0dmFyIGRhdGEgPSB7fTtcblxuIFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xuIFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0Y2IgPSBkaXNwb3NlSGFuZGxlcnNbal07XG4gXHRcdFx0XHRjYihkYXRhKTtcbiBcdFx0XHR9XG4gXHRcdFx0aG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdID0gZGF0YTtcblxuIFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXG4gXHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcblxuIFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxuIFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcbiBcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuXG4gXHRcdFx0Ly8gcmVtb3ZlIFwicGFyZW50c1wiIHJlZmVyZW5jZXMgZnJvbSBhbGwgY2hpbGRyZW5cbiBcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgY2hpbGQgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZS5jaGlsZHJlbltqXV07XG4gXHRcdFx0XHRpZiAoIWNoaWxkKSBjb250aW51ZTtcbiBcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIHtcbiBcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxuIFx0XHR2YXIgZGVwZW5kZW5jeTtcbiBcdFx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuIFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xuIFx0XHRcdFx0XHRcdGlmIChpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTm93IGluIFwiYXBwbHlcIiBwaGFzZVxuIFx0XHRob3RTZXRTdGF0dXMoXCJhcHBseVwiKTtcblxuIFx0XHRpZiAoaG90VXBkYXRlTmV3SGFzaCAhPT0gdW5kZWZpbmVkKSB7XG4gXHRcdFx0aG90Q3VycmVudEhhc2ggPSBob3RVcGRhdGVOZXdIYXNoO1xuIFx0XHRcdGhvdFVwZGF0ZU5ld0hhc2ggPSB1bmRlZmluZWQ7XG4gXHRcdH1cbiBcdFx0aG90VXBkYXRlID0gdW5kZWZpbmVkO1xuXG4gXHRcdC8vIGluc2VydCBuZXcgY29kZVxuIFx0XHRmb3IgKG1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFwcGxpZWRVcGRhdGUsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuIFx0XHR2YXIgZXJyb3IgPSBudWxsO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV07XG4gXHRcdFx0XHRcdFx0Y2IgPSBtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcbiBcdFx0XHRcdFx0XHRpZiAoY2IpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihjYikgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGNiKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGNiID0gY2FsbGJhY2tzW2ldO1xuIFx0XHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0XHRjYihtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG4gXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXSxcbiBcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XG4gXHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBpdGVtLnBhcmVudHM7XG4gXHRcdFx0aG90Q3VycmVudENoaWxkTW9kdWxlID0gbW9kdWxlSWQ7XG4gXHRcdFx0dHJ5IHtcbiBcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gXHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyKTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuIFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnIyO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXG4gXHRcdGlmIChlcnJvcikge1xuIFx0XHRcdGhvdFNldFN0YXR1cyhcImZhaWxcIik7XG4gXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiBcdFx0fVxuXG4gXHRcdGlmIChob3RRdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMpIHtcbiBcdFx0XHRyZXR1cm4gaG90QXBwbHlJbnRlcm5hbChvcHRpb25zKS50aGVuKGZ1bmN0aW9uKGxpc3QpIHtcbiBcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uKG1vZHVsZUlkKSB7XG4gXHRcdFx0XHRcdGlmIChsaXN0LmluZGV4T2YobW9kdWxlSWQpIDwgMCkgbGlzdC5wdXNoKG1vZHVsZUlkKTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cmV0dXJuIGxpc3Q7XG4gXHRcdFx0fSk7XG4gXHRcdH1cblxuIFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuIFx0XHRcdHJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkge1xuIFx0XHRpZiAoaG90UXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG4gXHRcdFx0aWYgKCFob3RVcGRhdGUpIGhvdFVwZGF0ZSA9IHt9O1xuIFx0XHRcdGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcy5mb3JFYWNoKGhvdEFwcGx5SW52YWxpZGF0ZWRNb2R1bGUpO1xuIFx0XHRcdGhvdFF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyA9IHVuZGVmaW5lZDtcbiBcdFx0XHRyZXR1cm4gdHJ1ZTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseUludmFsaWRhdGVkTW9kdWxlKG1vZHVsZUlkKSB7XG4gXHRcdGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgbW9kdWxlSWQpKVxuIFx0XHRcdGhvdFVwZGF0ZVttb2R1bGVJZF0gPSBtb2R1bGVzW21vZHVsZUlkXTtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aG90OiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpLFxuIFx0XHRcdHBhcmVudHM6IChob3RDdXJyZW50UGFyZW50c1RlbXAgPSBob3RDdXJyZW50UGFyZW50cywgaG90Q3VycmVudFBhcmVudHMgPSBbXSwgaG90Q3VycmVudFBhcmVudHNUZW1wKSxcbiBcdFx0XHRjaGlsZHJlbjogW11cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkpO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIF9fd2VicGFja19oYXNoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gaG90Q3VycmVudEhhc2g7IH07XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gaG90Q3JlYXRlUmVxdWlyZShcIi4vc3JjL2luZGV4LnRzXCIpKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiaW1wb3J0IHtSZWZlcmVuY2V9IGZyb20gXCIuL3V0aWxzL1JlZmVyZW5jZVwiO1xyXG5pbXBvcnQge1VOREVGSU5FRCwgTlVMTH0gZnJvbSBcIi4vdXRpbHMvUHJpbWl0aXZlVHlwb0NvbnRhaW5lclwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7Q250bnJ9IGZyb20gXCIuL3V0aWxzL0NudG5yXCI7XHJcbmltcG9ydCB7T3B9IGZyb20gXCIuL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7Q29uc29sZX0gZnJvbSBcIi4vdXRpbHMvQ29uc29sZVwiO1xyXG5cclxuaW1wb3J0IHtDb25zb2xlTG9nTm9kZX0gZnJvbSBcIi4vbm9kZXMvQ29uc29sZUxvZ05vZGVcIjtcclxuaW1wb3J0IHtOdW1iZXJOb2RlfSBmcm9tIFwiLi9ub2Rlcy9OdW1iZXJOb2RlXCI7XHJcbmltcG9ydCB7U3RyaW5nTm9kZX0gZnJvbSBcIi4vbm9kZXMvU3RyaW5nTm9kZVwiO1xyXG5pbXBvcnQge0Jvb2xlYW5Ob2RlfSBmcm9tIFwiLi9ub2Rlcy9Cb29sZWFuTm9kZVwiO1xyXG5pbXBvcnQge051bGxOb2RlfSBmcm9tIFwiLi9ub2Rlcy9OdWxsTm9kZVwiO1xyXG5pbXBvcnQge1VuZGVmaW5lZE5vZGV9IGZyb20gXCIuL25vZGVzL1VuZGVmaW5lZE5vZGVcIjtcclxuaW1wb3J0IHtEZWNsYXJlVmFyTm9kZX0gZnJvbSBcIi4vbm9kZXMvRGVjbGFyZVZhck5vZGVcIjtcclxuaW1wb3J0IHtEZWNsYXJlVmFyTGlzdE5vZGV9IGZyb20gXCIuL25vZGVzL0RlY2xhcmVWYXJMaXN0Tm9kZVwiO1xyXG5pbXBvcnQge0NyZWF0ZUlkVmFyTm9kZX0gZnJvbSBcIi4vbm9kZXMvQ3JlYXRlSWRWYXJOb2RlXCI7XHJcbmltcG9ydCB7QXNpZ25Ob2RlfSBmcm9tIFwiLi9ub2Rlcy9Bc2lnbk5vZGVcIjtcclxuaW1wb3J0IHtTdW1Ob2RlfSBmcm9tIFwiLi9ub2Rlcy9TdW1Ob2RlXCI7XHJcbmltcG9ydCB7U3ViTm9kZX0gZnJvbSBcIi4vbm9kZXMvU3ViTm9kZVwiO1xyXG5pbXBvcnQge011bE5vZGV9IGZyb20gXCIuL25vZGVzL011bE5vZGVcIjtcclxuaW1wb3J0IHtEaXZOb2RlfSBmcm9tIFwiLi9ub2Rlcy9EaXZOb2RlXCI7XHJcbmltcG9ydCB7TW9kTm9kZX0gZnJvbSBcIi4vbm9kZXMvTW9kTm9kZVwiO1xyXG5pbXBvcnQge0V4cE5vZGV9IGZyb20gXCIuL25vZGVzL0V4cE5vZGVcIjtcclxuaW1wb3J0IHtFcU5vZGV9IGZyb20gXCIuL25vZGVzL0VxTm9kZVwiO1xyXG5pbXBvcnQge0RpZk5vZGV9IGZyb20gXCIuL25vZGVzL0RpZk5vZGVcIjtcclxuaW1wb3J0IHtIaWdoZXJOb2RlfSBmcm9tIFwiLi9ub2Rlcy9IaWdoZXJOb2RlXCI7XHJcbmltcG9ydCB7TWlub3JOb2RlfSBmcm9tIFwiLi9ub2Rlcy9NaW5vck5vZGVcIjtcclxuaW1wb3J0IHtIaWdoZXJFcU5vZGV9IGZyb20gXCIuL25vZGVzL0hpZ2hlckVxTm9kZVwiO1xyXG5pbXBvcnQge01pbm9yRXFOb2RlfSBmcm9tIFwiLi9ub2Rlcy9NaW5vckVxTm9kZVwiO1xyXG5pbXBvcnQge09yTm9kZX0gZnJvbSBcIi4vbm9kZXMvT3JOb2RlXCI7XHJcbmltcG9ydCB7QW5kTm9kZX0gZnJvbSBcIi4vbm9kZXMvQW5kTm9kZVwiO1xyXG5pbXBvcnQge05vdE5vZGV9IGZyb20gXCIuL25vZGVzL05vdE5vZGVcIjtcclxuaW1wb3J0IHtSZUFzaWduQWRkTm9kZX0gZnJvbSBcIi4vbm9kZXMvUmVBc2lnbkFkZE5vZGVcIjtcclxuaW1wb3J0IHtSZUFzaWduU3ViTm9kZX0gZnJvbSBcIi4vbm9kZXMvUmVBc2lnblN1Yk5vZGVcIjtcclxuaW1wb3J0IHtSZUFzaWduTXVsTm9kZX0gZnJvbSBcIi4vbm9kZXMvUmVBc2lnbk11bE5vZGVcIjtcclxuaW1wb3J0IHtSZUFzaWduRGl2Tm9kZX0gZnJvbSBcIi4vbm9kZXMvUmVBc2lnbkRpdk5vZGVcIjtcclxuaW1wb3J0IHtSZUFzaWduTW9kTm9kZX0gZnJvbSBcIi4vbm9kZXMvUmVBc2lnbk1vZE5vZGVcIjtcclxuaW1wb3J0IHtSZUFkZE5vZGV9IGZyb20gXCIuL25vZGVzL1JlQWRkTm9kZVwiO1xyXG5pbXBvcnQge1JlU3ViTm9kZX0gZnJvbSBcIi4vbm9kZXMvUmVTdWJOb2RlXCI7XHJcbmltcG9ydCB7Q3JlYXRlQXJyYXlOb2RlfSBmcm9tIFwiLi9ub2Rlcy9DcmVhdGVBcnJheU5vZGVcIjtcclxuaW1wb3J0IHtDcmVhdGVBcnJWYXJOb2RlfSBmcm9tIFwiLi9ub2Rlcy9DcmVhdGVBcnJWYXJOb2RlXCI7XHJcbmltcG9ydCB7UmV0dXJuT2JqfSBmcm9tIFwiLi9ub2Rlcy9SZXR1cm5PYmpcIjtcclxuaW1wb3J0IHtDcmVhdGVPYmpWYXJOb2RlfSBmcm9tIFwiLi9ub2Rlcy9DcmVhdGVPYmpWYXJOb2RlXCI7XHJcbmltcG9ydCB7Q3JlYXRlT2JqRnVuTm9kZX0gZnJvbSBcIi4vbm9kZXMvQ3JlYXRlT2JqRnVuTm9kZVwiO1xyXG5pbXBvcnQge1NlbnRlbmNlVGVybmFyeU5vZGV9IGZyb20gXCIuL25vZGVzL1NlbnRlbmNlVGVybmFyeU5vZGVcIjtcclxuaW1wb3J0IHtCcmVha05vZGV9IGZyb20gXCIuL25vZGVzL0JyZWFrTm9kZVwiO1xyXG5pbXBvcnQge0NvbnRpbnVlTm9kZX0gZnJvbSBcIi4vbm9kZXMvQ29udGludWVOb2RlXCI7XHJcbmltcG9ydCB7SWZOb2RlfSBmcm9tIFwiLi9ub2Rlcy9JZk5vZGVcIjtcclxuaW1wb3J0IHtXaGlsZU5vZGV9IGZyb20gXCIuL25vZGVzL1doaWxlTm9kZVwiO1xyXG5pbXBvcnQge0RvV2hpbGVOb2RlfSBmcm9tIFwiLi9ub2Rlcy9Eb1doaWxlTm9kZVwiO1xyXG5pbXBvcnQge0Nhc2VOb2RlfSBmcm9tIFwiLi9ub2Rlcy9DYXNlTm9kZVwiO1xyXG5pbXBvcnQge1N3aXRjaE5vZGV9IGZyb20gXCIuL25vZGVzL1N3aXRjaE5vZGVcIjtcclxuaW1wb3J0IHtGb3JJbk5vZGV9IGZyb20gXCIuL25vZGVzL0ZvckluTm9kZVwiO1xyXG5pbXBvcnQge0Zvck9mTm9kZX0gZnJvbSBcIi4vbm9kZXMvRm9yT2ZOb2RlXCI7XHJcbmltcG9ydCB7Rm9yTm9kZX0gZnJvbSBcIi4vbm9kZXMvRm9yTm9kZVwiO1xyXG5pbXBvcnQge015TWFwLCBPYmplY3RzU3RydWN0dXJlcywgT2JqZWN0U3RydWN0dXJlfSBmcm9tIFwiLi91dGlscy9VdGlsc1wiO1xyXG5pbXBvcnQge0NyZWF0ZU9iak5vZGV9IGZyb20gXCIuL25vZGVzL0NyZWF0ZU9iak5vZGVcIjtcclxuaW1wb3J0IHtEZWNsYXJlVHlwZVN0cnVjdHVyZU5vZGV9IGZyb20gXCIuL25vZGVzL0RlY2xhcmVUeXBlU3RydWN0dXJlTm9kZVwiO1xyXG5pbXBvcnQge0RlY2xhcmVGdW5Ob2RlfSBmcm9tIFwiLi9ub2Rlcy9EZWNsYXJlRnVuTm9kZVwiO1xyXG5pbXBvcnQge0RlY2xhcmVGdW5QYXJhbU5vZGV9IGZyb20gXCIuL25vZGVzL0RlY2xhcmVGdW5QYXJhbU5vZGVcIjtcclxuaW1wb3J0IHtSZXR1cm5Ob2RlfSBmcm9tIFwiLi9ub2Rlcy9SZXR1cm5Ob2RlXCI7XHJcbmltcG9ydCB7RnVuY3Rpb25DYWxsTm9kZX0gZnJvbSBcIi4vbm9kZXMvRnVuY3Rpb25DYWxsTm9kZVwiO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIENvbnNvbGUsXHJcbiAgICBDbnRucixcclxuICAgIEVudm1udCxcclxuICAgIE9wLFxyXG4gICAgTlVMTCxcclxuICAgIFVOREVGSU5FRCxcclxuICAgIFJlZmVyZW5jZSxcclxuXHJcbiAgICBDb25zb2xlTG9nTm9kZSxcclxuICAgIE51bWJlck5vZGUsXHJcbiAgICBTdHJpbmdOb2RlLFxyXG4gICAgQm9vbGVhbk5vZGUsXHJcbiAgICBOdWxsTm9kZSxcclxuICAgIFVuZGVmaW5lZE5vZGUsXHJcblxyXG4gICAgRGVjbGFyZVZhck5vZGUsXHJcbiAgICBEZWNsYXJlVmFyTGlzdE5vZGUsXHJcblxyXG4gICAgQ3JlYXRlSWRWYXJOb2RlLFxyXG5cclxuICAgIEFzaWduTm9kZSxcclxuXHJcbiAgICBTdW1Ob2RlLFxyXG4gICAgU3ViTm9kZSxcclxuICAgIE11bE5vZGUsXHJcbiAgICBEaXZOb2RlLFxyXG4gICAgTW9kTm9kZSxcclxuICAgIEV4cE5vZGUsXHJcblxyXG4gICAgRXFOb2RlLFxyXG4gICAgRGlmTm9kZSxcclxuICAgIEhpZ2hlck5vZGUsXHJcbiAgICBNaW5vck5vZGUsXHJcbiAgICBIaWdoZXJFcU5vZGUsXHJcbiAgICBNaW5vckVxTm9kZSxcclxuXHJcbiAgICBPck5vZGUsXHJcbiAgICBBbmROb2RlLFxyXG4gICAgTm90Tm9kZSxcclxuXHJcbiAgICBSZUFzaWduQWRkTm9kZSxcclxuICAgIFJlQXNpZ25TdWJOb2RlLFxyXG4gICAgUmVBc2lnbk11bE5vZGUsXHJcbiAgICBSZUFzaWduRGl2Tm9kZSxcclxuICAgIFJlQXNpZ25Nb2ROb2RlLFxyXG5cclxuICAgIFJlQWRkTm9kZSxcclxuICAgIFJlU3ViTm9kZSxcclxuXHJcbiAgICBDcmVhdGVBcnJheU5vZGUsXHJcbiAgICBDcmVhdGVBcnJWYXJOb2RlLFxyXG5cclxuICAgIFJldHVybk9iaixcclxuXHJcbiAgICBDcmVhdGVPYmpWYXJOb2RlLFxyXG4gICAgQ3JlYXRlT2JqRnVuTm9kZSxcclxuXHJcbiAgICBTZW50ZW5jZVRlcm5hcnlOb2RlLFxyXG5cclxuICAgIEJyZWFrTm9kZSxcclxuICAgIENvbnRpbnVlTm9kZSxcclxuXHJcbiAgICBJZk5vZGUsXHJcbiAgICBXaGlsZU5vZGUsXHJcbiAgICBEb1doaWxlTm9kZSxcclxuXHJcbiAgICBDYXNlTm9kZSxcclxuICAgIFN3aXRjaE5vZGUsXHJcblxyXG4gICAgRm9ySW5Ob2RlLFxyXG4gICAgRm9yT2ZOb2RlLFxyXG4gICAgRm9yTm9kZSxcclxuXHJcbiAgICBDcmVhdGVPYmpOb2RlLFxyXG4gICAgTXlNYXAsXHJcblxyXG4gICAgRGVjbGFyZVR5cGVTdHJ1Y3R1cmVOb2RlLFxyXG5cclxuICAgIERlY2xhcmVGdW5Ob2RlLFxyXG4gICAgRGVjbGFyZUZ1blBhcmFtTm9kZSxcclxuICAgIFJldHVybk5vZGUsXHJcblxyXG4gICAgRnVuY3Rpb25DYWxsTm9kZSxcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEV4ZWN1dGVBU1Qoc2VudGVuY2VzOiBBcnJheTxPcD4pIHtcclxuICAgIENvbnNvbGUubG9nID0gJyc7XHJcbiAgICBPYmplY3RzU3RydWN0dXJlcy5vYmplY3RzID0gbmV3IE1hcDxzdHJpbmcsIE9iamVjdFN0cnVjdHVyZT4oKTtcclxuICAgIGNvbnN0IGVudiA9IG5ldyBFbnZtbnQobnVsbCwgc2VudGVuY2VzKTtcclxuICAgIGVudi5HT19BTEwoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdyYXBoQVNUKHNlbnRlbmNlczogQXJyYXk8T3A+KTogc3RyaW5nIHtcclxuICAgIGxldCBncmFwaCA9XHJcbiAgICAgICAgJ2RpZ3JhcGggRyB7XFxuJyArXHJcbiAgICAgICAgJyAgICAgICAgYmdjb2xvcj1cIiMxRTIyMkFcIlxcbicgK1xyXG4gICAgICAgICcgICAgICAgIG5vZGUgW2ZpbGxjb2xvcj1cIiMyRTM0NDBcIjsgc3R5bGU9ZmlsbGVkOyBmb250Y29sb3I9XCIjMkJCQkFEXCI7IGNvbG9yPVwiIzJCQkJBRFwiXTtcXG4nICtcclxuICAgICAgICAnICAgICAgICBlZGdlIFtjb2xvcj1cIiMyQkJCQURcIl07JztcclxuICAgIGNvbnN0IGVudiA9IG5ldyBFbnZtbnQobnVsbCwgc2VudGVuY2VzKTtcclxuICAgIGdyYXBoICs9IGVudi5HZXRHcmFwaCgpLnRvU3RyaW5nKCk7XHJcbiAgICBncmFwaCArPSAnfSc7XHJcbiAgICBjb25zb2xlLmxvZyhncmFwaCk7XHJcbiAgICByZXR1cm4gZ3JhcGg7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2xhdGVTdHJpbmdzQ29tcG9zZSh0ZXh0OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoL2AoW17Mo2BdKilgL2csICh0ZXh0KSA9PlxyXG4gICAgICAgIHRleHQucmVwbGFjZSgvYC9nLCAnXCInKS5yZXBsYWNlKC9cXCR7W159XSp9L2csICh0ZXh0KSA9PiBcIlxcXCIrXCIgKyB0ZXh0LnN1YnN0cmluZygyLCB0ZXh0Lmxlbmd0aCAtIDEpICsgXCIrXFxcIlwiKVxyXG4gICAgKTtcclxufVxyXG5cclxuaWYgKG1vZHVsZSAmJiBtb2R1bGUuaG90KSBtb2R1bGUuaG90LmFjY2VwdCgpO1xyXG4iLCJpbXBvcnQgeyBPcCB9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge0FuZH0gZnJvbSBcIi4uL3V0aWxzL0xvZ2ljYWxPcGVyYXRpb25zRnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7Q250bnJ9IGZyb20gXCIuLi91dGlscy9DbnRuclwiO1xyXG5pbXBvcnQge0dyYXBodml6Tm9kZX0gZnJvbSBcIi4uL3V0aWxzL0dyYXBodml6Tm9kZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFuZE5vZGUgZXh0ZW5kcyBPcHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGY6IE9wO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBydDogT3A7XHJcblxyXG4gICAgY29uc3RydWN0b3IobGY6IE9wLCBydDogT3ApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubGYgPSBsZjtcclxuICAgICAgICB0aGlzLnJ0ID0gcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgR08oZW52OiBFbnZtbnQpOiBvYmplY3Qge1xyXG4gICAgICAgIHJldHVybiBBbmQodGhpcy5sZi5FeGUoZW52KSBhcyBDbnRuciwgdGhpcy5ydC5FeGUoZW52KSBhcyBDbnRucik7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0R3JhcGgoZW52OiBFbnZtbnQpOiBHcmFwaHZpek5vZGUge1xyXG4gICAgICAgIHJldHVybiBuZXcgR3JhcGh2aXpOb2RlKCdBTkQnLCBbdGhpcy5sZi5HZXRHcmFwaChlbnYpLCB0aGlzLnJ0LkdldEdyYXBoKGVudildKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge09wfSBmcm9tIFwiLi4vdXRpbHMvT3BcIjtcclxuaW1wb3J0IHtFbnZtbnR9IGZyb20gXCIuLi91dGlscy9FbnZtbnRcIjtcclxuaW1wb3J0IHtSZWZlcmVuY2V9IGZyb20gXCIuLi91dGlscy9SZWZlcmVuY2VcIjtcclxuaW1wb3J0IHtTZW1hbnRpY0V4Y2VwdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCI7XHJcbmltcG9ydCB7Q250bnJ9IGZyb20gXCIuLi91dGlscy9DbnRuclwiO1xyXG5pbXBvcnQge0dyYXBodml6Tm9kZX0gZnJvbSBcIi4uL3V0aWxzL0dyYXBodml6Tm9kZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFzaWduTm9kZSBleHRlbmRzIE9we1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsZjogT3A7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJ0OiBPcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsZjogT3AsIHJ0OiBPcCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5sZiA9IGxmO1xyXG4gICAgICAgIHRoaXMucnQgPSBydDtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCk6IG9iamVjdCB7XHJcbiAgICAgICAgY29uc3QgbGZWYWw6IG9iamVjdCA9IHRoaXMubGYuRXhlKGVudik7XHJcbiAgICAgICAgY29uc3QgcnRWYWw6IG9iamVjdCA9IHRoaXMucnQuRXhlKGVudik7XHJcblxyXG4gICAgICAgIGlmICghKGxmVmFsIGluc3RhbmNlb2YgUmVmZXJlbmNlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgU2VtYW50aWNFeGNlcHRpb24oYE5vIHNlIHB1ZWRlIGFzaWduYXIgYSAkeyhsZlZhbCBhcyBDbnRucikudHlwb30sIGxhcyBhc2lnbmFjaW9uZXMgc29sbyBwdWVkZW4gc2VyIHNvYnJlIHVuYSByZWZlcmVuY2lhYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIChsZlZhbCBhcyBSZWZlcmVuY2UpLlB1dFZhbHVlT25SZWZlcmVuY2UocnRWYWwgYXMgQ250bnIpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIEdldEdyYXBoKGVudjogRW52bW50KTogR3JhcGh2aXpOb2RlIHtcclxuICAgICAgICByZXR1cm4gbmV3IEdyYXBodml6Tm9kZSgnQVNJRycsIFt0aGlzLmxmLkdldEdyYXBoKGVudiksIHRoaXMucnQuR2V0R3JhcGgoZW52KV0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge0JPT0xFQU59IGZyb20gXCIuLi91dGlscy9QcmltaXRpdmVUeXBvQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7R3JhcGh2aXpOb2RlfSBmcm9tIFwiLi4vdXRpbHMvR3JhcGh2aXpOb2RlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQm9vbGVhbk5vZGUgZXh0ZW5kcyBPcHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgdmFsOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbDogYm9vbGVhbikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy52YWwgPSB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgR08oZW52OiBFbnZtbnQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4odGhpcy52YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIEdldEdyYXBoKGVudjogRW52bW50KTogR3JhcGh2aXpOb2RlIHtcclxuICAgICAgICByZXR1cm4gbmV3IEdyYXBodml6Tm9kZSgnQk9PTEVBTicsIFtuZXcgR3JhcGh2aXpOb2RlKHRoaXMudmFsICsgJycsIFtdKV0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge0JyZWFrT2JqfSBmcm9tIFwiLi9CcmVha09ialwiO1xyXG5pbXBvcnQge0dyYXBodml6Tm9kZX0gZnJvbSBcIi4uL3V0aWxzL0dyYXBodml6Tm9kZVwiO1xyXG5cclxuZXhwb3J0ICBjbGFzcyBCcmVha05vZGUgZXh0ZW5kcyBPcHtcclxuICAgIEdPKGVudjogRW52bW50KTogb2JqZWN0IHtcclxuICAgICAgICByZXR1cm4gbmV3IEJyZWFrT2JqKCk7XHJcbiAgICB9XHJcbiAgICBHZXRHcmFwaChlbnY6IEVudm1udCk6IEdyYXBodml6Tm9kZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHcmFwaHZpek5vZGUoJ0JSRUFLJywgW25ldyBHcmFwaHZpek5vZGUoJ2JyZWFrJyldKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7Q250bnJ9IGZyb20gXCIuLi91dGlscy9DbnRuclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJyZWFrT2JqIGV4dGVuZHMgQ250bnJ7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FzZU5vZGUge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb25kaXRpb25WYWx1ZTogT3A7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNlbnRlbmNlczogQXJyYXk8T3A+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmRpdGlvblZhbHVlOiBPcCwgc2VudGVuY2VzOiBBcnJheTxPcD4pIHtcclxuICAgICAgICB0aGlzLmNvbmRpdGlvblZhbHVlID0gY29uZGl0aW9uVmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZW50ZW5jZXMgPSBzZW50ZW5jZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENvbmRpdGlvblZhbHVlKCk6IE9wIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25WYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U2VudGVuY2VzKCk6IEFycmF5PE9wPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VudGVuY2VzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7UmVmZXJlbmNlfSBmcm9tIFwiLi4vdXRpbHMvUmVmZXJlbmNlXCI7XHJcbmltcG9ydCB7Q29uc29sZX0gZnJvbSBcIi4uL3V0aWxzL0NvbnNvbGVcIjtcclxuaW1wb3J0IHtHcmFwaHZpek5vZGV9IGZyb20gXCIuLi91dGlscy9HcmFwaHZpek5vZGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb25zb2xlTG9nTm9kZSBleHRlbmRzIE9we1xyXG4gICAgcHJpdmF0ZSBleHByZXNzaW9uOiBBcnJheTxPcD47XHJcblxyXG4gICAgY29uc3RydWN0b3IoZXhwcmVzc2lvbjogQXJyYXk8T3A+KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xyXG4gICAgfVxyXG5cclxuICAgIEdPKGVudjogRW52bW50KSA6IG9iamVjdCB7XHJcbiAgICAgICAgbGV0IGZpbmFsTG9nID0gJ1tMT0ddOiAnO1xyXG4gICAgICAgIGZvcihsZXQgZXhwcmVzc2lvbiBvZiB0aGlzLmV4cHJlc3Npb24pIHtcclxuICAgICAgICAgICAgbGV0IHZhbCA9IGV4cHJlc3Npb24uRXhlKGVudik7XHJcbiAgICAgICAgICAgIGlmICh2YWwgaW5zdGFuY2VvZiBSZWZlcmVuY2UpIHtcclxuICAgICAgICAgICAgICAgIHZhbCA9ICh2YWwgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZpbmFsTG9nICs9IGAke3ZhbH0gYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgQ29uc29sZS5sb2cgKz0gYCR7ZmluYWxMb2d9XFxuYDtcclxuICAgICAgICBjb25zb2xlLmxvZyhgJHtmaW5hbExvZ31gKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcblxyXG4gICAgR2V0R3JhcGgoZW52OiBFbnZtbnQpOiBHcmFwaHZpek5vZGUge1xyXG4gICAgICAgIHJldHVybiBuZXcgR3JhcGh2aXpOb2RlKCdDT05TT0xFLkxPRycsIHRoaXMuZXhwcmVzc2lvbi5tYXAoZXhwcmVzc2lvbiA9PiBleHByZXNzaW9uLkdldEdyYXBoKGVudikpKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge0NvbnRpbnVlT2JqfSBmcm9tIFwiLi9Db250aW51ZU9ialwiO1xyXG5pbXBvcnQge0dyYXBodml6Tm9kZX0gZnJvbSBcIi4uL3V0aWxzL0dyYXBodml6Tm9kZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRpbnVlTm9kZSBleHRlbmRzIE9we1xyXG4gICAgR08oZW52OiBFbnZtbnQpOiBvYmplY3Qge1xyXG4gICAgICAgIHJldHVybiBuZXcgQ29udGludWVPYmooKTtcclxuICAgIH1cclxuXHJcbiAgICBHZXRHcmFwaChlbnY6IEVudm1udCk6IEdyYXBodml6Tm9kZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHcmFwaHZpek5vZGUoJ0NPTlRJTlVFJywgW25ldyBHcmFwaHZpek5vZGUoJ2NvbnRpbnVlJyldKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7Q250bnJ9IGZyb20gXCIuLi91dGlscy9DbnRuclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRpbnVlT2JqIGV4dGVuZHMgQ250bnJ7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7Q250bnJ9IGZyb20gXCIuLi91dGlscy9DbnRuclwiO1xyXG5pbXBvcnQge1JlZmVyZW5jZX0gZnJvbSBcIi4uL3V0aWxzL1JlZmVyZW5jZVwiO1xyXG5pbXBvcnQge1NlbWFudGljRXhjZXB0aW9ufSBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IHtBUlJBWSwgTlVNQkVSLCBTVFJJTkcsIFVOREVGSU5FRH0gZnJvbSBcIi4uL3V0aWxzL1ByaW1pdGl2ZVR5cG9Db250YWluZXJcIjtcclxuaW1wb3J0IHtHcmFwaHZpek5vZGV9IGZyb20gXCIuLi91dGlscy9HcmFwaHZpek5vZGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDcmVhdGVBcnJWYXJOb2RlIGV4dGVuZHMgT3Age1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBpZDogT3A7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGluZGV4OiBPcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogT3AsIGluZGV4OiBPcCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCk6IG9iamVjdCB7XHJcbiAgICAgICAgbGV0IGlkUmVmID0gdGhpcy5pZC5FeGUoZW52KSBhcyBDbnRucjtcclxuICAgICAgICAvLyBpZiAoIShpZFJlZiBpbnN0YW5jZW9mIFJlZmVyZW5jZSkpIHtcclxuICAgICAgICAvLyAgICAgdGhyb3cgbmV3IFNlbWFudGljRXhjZXB0aW9uKGBMbGFtYWRhIGEgQXJyZWdsbyAke2lkUmVmfSBubyBkZWZpbmlkby5gKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuaW5kZXguRXhlKGVudikgYXMgQ250bnI7XHJcbiAgICAgICAgaWYgKGluZGV4IGluc3RhbmNlb2YgUmVmZXJlbmNlKSB7XHJcbiAgICAgICAgICAgIGluZGV4ID0gKGluZGV4IGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpbmRleCBpbnN0YW5jZW9mIFNUUklORykge1xyXG4gICAgICAgICAgICBjb25zdCB2YWwgPSBwYXJzZUludCgoaW5kZXggYXMgU1RSSU5HKS5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgaWYgKGlzTmFOKHZhbCkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBTZW1hbnRpY0V4Y2VwdGlvbihcIkVsIGluZGljZSBwYXJhIGFjY2VzYXIgZGViZSBzZXIgZGUgdGlwbyBOVU1CRVJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5kZXggPSBuZXcgTlVNQkVSKHZhbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIShpbmRleCBpbnN0YW5jZW9mIE5VTUJFUikpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFNlbWFudGljRXhjZXB0aW9uKFwiRWwgaW5kaWNlIHBhcmEgYWNjZXNhciBkZWJlIHNlciBkZSB0aXBvIE5VTUJFUlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByZWYgPSBpZFJlZiBpbnN0YW5jZW9mIFJlZmVyZW5jZSA/IChpZFJlZiBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCkgOiBpZFJlZjtcclxuXHJcbiAgICAgICAgaWYgKCEocmVmIGluc3RhbmNlb2YgQVJSQVkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVU5ERUZJTkVEKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKHJlZiBhcyBBUlJBWSkuZ2V0VmFsdWUoKGluZGV4IGFzIE5VTUJFUikuZ2V0VmFsdWUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0R3JhcGgoZW52OiBFbnZtbnQpOiBHcmFwaHZpek5vZGUge1xyXG4gICAgICAgIHJldHVybiBuZXcgR3JhcGh2aXpOb2RlKCdBUlJfRUxFTUVOVCcsIFt0aGlzLmlkLkdldEdyYXBoKGVudiksIHRoaXMuaW5kZXguR2V0R3JhcGgoZW52KV0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgT3AgfSBmcm9tIFwiLi4vdXRpbHMvT3BcIjtcclxuaW1wb3J0IHtFbnZtbnR9IGZyb20gXCIuLi91dGlscy9FbnZtbnRcIjtcclxuaW1wb3J0IHtDbnRucn0gZnJvbSBcIi4uL3V0aWxzL0NudG5yXCI7XHJcbmltcG9ydCB7UmVmZXJlbmNlfSBmcm9tIFwiLi4vdXRpbHMvUmVmZXJlbmNlXCI7XHJcbmltcG9ydCB7QVJSQVl9IGZyb20gXCIuLi91dGlscy9QcmltaXRpdmVUeXBvQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7R3JhcGh2aXpOb2RlfSBmcm9tIFwiLi4vdXRpbHMvR3JhcGh2aXpOb2RlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ3JlYXRlQXJyYXlOb2RlIGV4dGVuZHMgT3B7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHZhbHM6IEFycmF5PE9wPjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWxzOiBBcnJheTxPcD4pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudmFscyA9IHZhbHM7XHJcbiAgICB9XHJcblxyXG4gICAgR08oZW52OiBFbnZtbnQpOiBvYmplY3Qge1xyXG4gICAgICAgIGxldCByZWFsID0gbmV3IEFycmF5PENudG5yPigpO1xyXG4gICAgICAgIGZvciAobGV0IG9wIG9mIHRoaXMudmFscykge1xyXG4gICAgICAgICAgICBsZXQgcmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZSgpO1xyXG4gICAgICAgICAgICByZWZlcmVuY2UuUHV0VmFsdWVPblJlZmVyZW5jZShvcC5FeGUoZW52KSBhcyBDbnRucik7XHJcbiAgICAgICAgICAgIHJlYWwucHVzaChyZWZlcmVuY2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEFSUkFZKHJlYWwpO1xyXG4gICAgfVxyXG5cclxuICAgIEdldEdyYXBoKGVudjogRW52bW50KTogR3JhcGh2aXpOb2RlIHtcclxuICAgICAgICByZXR1cm4gbmV3IEdyYXBodml6Tm9kZSgnQVJSQVknLCB0aGlzLnZhbHMubWFwKHZhbCA9PiB2YWwuR2V0R3JhcGgoZW52KSkpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7RmluZFZhcn0gZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCI7XHJcbmltcG9ydCB7R3JhcGh2aXpOb2RlfSBmcm9tIFwiLi4vdXRpbHMvR3JhcGh2aXpOb2RlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ3JlYXRlSWRWYXJOb2RlIGV4dGVuZHMgT3B7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGlkOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIEdPKGVudjogRW52bW50KSA6IG9iamVjdHtcclxuICAgICAgICByZXR1cm4gRmluZFZhcihlbnYsIHRoaXMuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIEdldEdyYXBoKGVudjogRW52bW50KTogR3JhcGh2aXpOb2RlIHtcclxuICAgICAgICByZXR1cm4gbmV3IEdyYXBodml6Tm9kZSgnVkFSJywgW25ldyBHcmFwaHZpek5vZGUodGhpcy5pZCldKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge09wfSBmcm9tIFwiLi4vdXRpbHMvT3BcIjtcclxuaW1wb3J0IHsgRW52bW50IH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge1JlZmVyZW5jZX0gZnJvbSBcIi4uL3V0aWxzL1JlZmVyZW5jZVwiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vdXRpbHMvQ250bnJcIjtcclxuaW1wb3J0IHtGdW5jdGlvblJlcHJlc2VudH0gZnJvbSBcIi4uL3V0aWxzL2Z1bmN0aW9ucy9GdW5jdGlvblJlcHJlc2VudFwiO1xyXG5pbXBvcnQge1JldHVybk9ian0gZnJvbSBcIi4vUmV0dXJuT2JqXCI7XHJcbmltcG9ydCB7R3JhcGh2aXpOb2RlfSBmcm9tIFwiLi4vdXRpbHMvR3JhcGh2aXpOb2RlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ3JlYXRlT2JqRnVuTm9kZSBleHRlbmRzIE9we1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBvYmplY3Q6IE9wO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBmdW5JZDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBhcmdzOiBBcnJheTxPcD47XHJcblxyXG4gICAgY29uc3RydWN0b3Iob2JqZWN0OiBPcCwgZnVuSWQ6IHN0cmluZywgYXJnczogQXJyYXk8T3A+KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcclxuICAgICAgICB0aGlzLmZ1bklkID0gZnVuSWQ7XHJcbiAgICAgICAgdGhpcy5hcmdzID0gYXJncztcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCk6IG9iamVjdCB7XHJcbiAgICAgICAgbGV0IHJlZmUgPSB0aGlzLm9iamVjdC5FeGUoZW52KTtcclxuICAgICAgICBpZiAocmVmZSBpbnN0YW5jZW9mIFJlZmVyZW5jZSkge1xyXG4gICAgICAgICAgICByZWZlID0gKHJlZmUgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGZ1biA9IChyZWZlIGFzIENudG5yKS5HZXRQcm9wZXJ0eSh0aGlzLmZ1bklkKTtcclxuICAgICAgICBpZiAoIShmdW4gaW5zdGFuY2VvZiBGdW5jdGlvblJlcHJlc2VudCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZWZlcmVuY2VzID0gbmV3IEFycmF5PENudG5yPigpO1xyXG4gICAgICAgIGZvciAobGV0IGFyZyBvZiB0aGlzLmFyZ3MpIHtcclxuICAgICAgICAgICAgbGV0IGFyZ1ZhbHVlID0gYXJnLkV4ZShlbnYpO1xyXG4gICAgICAgICAgICBpZiAoYXJnVmFsdWUgaW5zdGFuY2VvZiBSZWZlcmVuY2UpIHtcclxuICAgICAgICAgICAgICAgIGFyZ1ZhbHVlID0gKGFyZ1ZhbHVlIGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZWZlcmVuY2VzLnB1c2goYXJnVmFsdWUgYXMgQ250bnIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGFucyA9IGZ1bi5FWEUoZW52LCByZWZlcmVuY2VzKTtcclxuICAgICAgICBpZiAoYW5zIGluc3RhbmNlb2YgUmV0dXJuT2JqKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoYW5zIGFzIFJldHVybk9iaikuZ2V0VmFsdWUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0R3JhcGgoZW52OiBFbnZtbnQpOiBHcmFwaHZpek5vZGUge1xyXG4gICAgICAgIHJldHVybiBuZXcgR3JhcGh2aXpOb2RlKCdGVU5DVElPTicsIFt0aGlzLm9iamVjdC5HZXRHcmFwaChlbnYpLCBuZXcgR3JhcGh2aXpOb2RlKHRoaXMuZnVuSWQpLCBuZXcgR3JhcGh2aXpOb2RlKCdBUkdTJywgdGhpcy5hcmdzLm1hcChhcmcgPT4gYXJnLkdldEdyYXBoKGVudikpKV0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7Q250bnJ9IGZyb20gXCIuLi91dGlscy9DbnRuclwiO1xyXG5pbXBvcnQge1JlZmVyZW5jZX0gZnJvbSBcIi4uL3V0aWxzL1JlZmVyZW5jZVwiO1xyXG5pbXBvcnQge09CSkVDVH0gZnJvbSBcIi4uL3V0aWxzL1ByaW1pdGl2ZVR5cG9Db250YWluZXJcIjtcclxuaW1wb3J0IHtHcmFwaHZpek5vZGV9IGZyb20gXCIuLi91dGlscy9HcmFwaHZpek5vZGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDcmVhdGVPYmpOb2RlIGV4dGVuZHMgT3Age1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBhdHRyczogTWFwPHN0cmluZywgT3A+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGF0dHJzOiBNYXA8c3RyaW5nLCBPcD4pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuYXR0cnMgPSBhdHRycztcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCk6IG9iamVjdCB7XHJcbiAgICAgICAgY29uc3QgcmVhbDogTWFwPHN0cmluZywgQ250bnI+ID0gbmV3IE1hcDxzdHJpbmcsIENudG5yPigpO1xyXG4gICAgICAgIHRoaXMuYXR0cnMuZm9yRWFjaCgodiwgaykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB2LkV4ZShlbnYpO1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBSZWZlcmVuY2UpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gKHZhbHVlIGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKCk7XHJcbiAgICAgICAgICAgIHJlZmVyZW5jZS5QdXRWYWx1ZU9uUmVmZXJlbmNlKHZhbHVlIGFzIENudG5yKTtcclxuICAgICAgICAgICAgcmVhbC5zZXQoaywgcmVmZXJlbmNlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbmV3IE9CSkVDVChyZWFsKTtcclxuICAgIH1cclxuXHJcbiAgICBHZXRHcmFwaChlbnY6IEVudm1udCk6IEdyYXBodml6Tm9kZSB7XHJcbiAgICAgICAgbGV0IHZhbHVlczogR3JhcGh2aXpOb2RlW10gPSBbXTtcclxuICAgICAgICB0aGlzLmF0dHJzLmZvckVhY2goKHYsIGspID0+IHtcclxuICAgICAgICAgICAgdmFsdWVzLnB1c2gobmV3IEdyYXBodml6Tm9kZShrKSk7XHJcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKHYuR2V0R3JhcGgoZW52KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHcmFwaHZpek5vZGUoJ1RZUEVfVkFMVUUnLCB2YWx1ZXMpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7Q250bnJ9IGZyb20gXCIuLi91dGlscy9DbnRuclwiO1xyXG5pbXBvcnQge1JlZmVyZW5jZX0gZnJvbSBcIi4uL3V0aWxzL1JlZmVyZW5jZVwiO1xyXG5pbXBvcnQge1NlbWFudGljRXhjZXB0aW9ufSBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IHtOYXRpdmV9IGZyb20gXCIuLi91dGlscy9mdW5jdGlvbnMvTmF0aXZlXCI7XHJcbmltcG9ydCB7RnVuY3Rpb25SZXByZXNlbnR9IGZyb20gXCIuLi91dGlscy9mdW5jdGlvbnMvRnVuY3Rpb25SZXByZXNlbnRcIjtcclxuaW1wb3J0IHtSZXR1cm5PYmp9IGZyb20gXCIuL1JldHVybk9ialwiO1xyXG5pbXBvcnQge0dyYXBodml6Tm9kZX0gZnJvbSBcIi4uL3V0aWxzL0dyYXBodml6Tm9kZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENyZWF0ZU9ialZhck5vZGUgZXh0ZW5kcyBPcHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgaWQ6IE9wO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBhdHRyOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6IE9wLCBhdHRyOiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLmF0dHIgPSBhdHRyO1xyXG4gICAgfVxyXG5cclxuICAgIEdPKGVudjogRW52bW50KTogb2JqZWN0IHtcclxuICAgICAgICBsZXQgaWQgPSB0aGlzLmlkLkV4ZShlbnYpIGFzIENudG5yO1xyXG4gICAgICAgIGlmICghKGlkIGluc3RhbmNlb2YgUmVmZXJlbmNlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgU2VtYW50aWNFeGNlcHRpb24oXCJMbGFtYWRhIGEgT2JqZXRvIG5vIGRlZmluaWRvXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJlZiA9IChpZCBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCk7XHJcbiAgICAgICAgbGV0IGUgPSByZWYuR2V0UHJvcGVydHkodGhpcy5hdHRyKTtcclxuICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIEZ1bmN0aW9uUmVwcmVzZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBhbnMgPSBlLkVYRShlbnYsIG5ldyBBcnJheTxDbnRucj4oKSk7XHJcbiAgICAgICAgICAgIGlmIChhbnMgaW5zdGFuY2VvZiBSZXR1cm5PYmopIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoYW5zIGFzIFJldHVybk9iaikuZ2V0VmFsdWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlZi5HZXRQcm9wZXJ0eSh0aGlzLmF0dHIpO1xyXG4gICAgfVxyXG5cclxuICAgIEdldEdyYXBoKGVudjogRW52bW50KTogR3JhcGh2aXpOb2RlIHtcclxuICAgICAgICByZXR1cm4gbmV3IEdyYXBodml6Tm9kZSgnVFlQRV9NRU1CRVInLCBbdGhpcy5pZC5HZXRHcmFwaChlbnYpLCBuZXcgR3JhcGh2aXpOb2RlKHRoaXMuYXR0cildKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge1VzZXJEZWZpbmVkfSBmcm9tIFwiLi4vdXRpbHMvZnVuY3Rpb25zL1VzZXJEZWZpbmVkXCI7XHJcbmltcG9ydCB7UmVmZXJlbmNlfSBmcm9tIFwiLi4vdXRpbHMvUmVmZXJlbmNlXCI7XHJcbmltcG9ydCB7R3JhcGh2aXpOb2RlfSBmcm9tIFwiLi4vdXRpbHMvR3JhcGh2aXpOb2RlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGVjbGFyZUZ1bk5vZGUgZXh0ZW5kcyBPcHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBwYXJhbXM6IEFycmF5PE9wPjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc2VudGVuY2VzOiBBcnJheTxPcD47XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHBhcmFtczogQXJyYXk8T3A+LCBzZW50ZW5jZXM6IEFycmF5PE9wPiwgdHlwZSA9ICdBTlknKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xyXG4gICAgICAgIHRoaXMuc2VudGVuY2VzID0gc2VudGVuY2VzO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgR08oZW52OiBFbnZtbnQpOiBvYmplY3Qge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gbmV3IFVzZXJEZWZpbmVkKHRoaXMuc2VudGVuY2VzLCB0aGlzLnBhcmFtcywgdGhpcy50eXBlKTtcclxuICAgICAgICBjb25zdCByZWZlcmVuY2UgPSBuZXcgUmVmZXJlbmNlKCk7XHJcbiAgICAgICAgcmVmZXJlbmNlLlB1dFZhbHVlT25SZWZlcmVuY2UodmFsdWUpO1xyXG4gICAgICAgIGlmKHRoaXMubmFtZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBlbnYuRGVjbGFyZSh0aGlzLm5hbWUsIHJlZmVyZW5jZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBHZXRHcmFwaChlbnY6IEVudm1udCk6IEdyYXBodml6Tm9kZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHcmFwaHZpek5vZGUoJ05FV19GVU4nLCBbXHJcbiAgICAgICAgICAgIG5ldyBHcmFwaHZpek5vZGUodGhpcy5uYW1lKSxcclxuICAgICAgICAgICAgbmV3IEdyYXBodml6Tm9kZSh0aGlzLnR5cGUpLFxyXG4gICAgICAgICAgICBuZXcgR3JhcGh2aXpOb2RlKCdQQVJBTVMnLCB0aGlzLnBhcmFtcy5tYXAocGFyYW0gPT4gcGFyYW0uR2V0R3JhcGgoZW52KSkpLFxyXG4gICAgICAgICAgICBuZXcgR3JhcGh2aXpOb2RlKCdORVdfRlVOX0JPRFknLCB0aGlzLnNlbnRlbmNlcy5tYXAoc2VudGVuY2UgPT4gc2VudGVuY2UuR2V0R3JhcGgoZW52KSkpXHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge09wfSBmcm9tIFwiLi4vdXRpbHMvT3BcIjtcclxuaW1wb3J0IHtFbnZtbnR9IGZyb20gXCIuLi91dGlscy9FbnZtbnRcIjtcclxuaW1wb3J0IHtVTkRFRklORUR9IGZyb20gXCIuLi91dGlscy9QcmltaXRpdmVUeXBvQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7UmVmZXJlbmNlfSBmcm9tIFwiLi4vdXRpbHMvUmVmZXJlbmNlXCI7XHJcbmltcG9ydCB7R3JhcGh2aXpOb2RlfSBmcm9tIFwiLi4vdXRpbHMvR3JhcGh2aXpOb2RlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGVjbGFyZUZ1blBhcmFtTm9kZSBleHRlbmRzIE9we1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBuYW1lOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHR5cGUgPSAnQU5ZJykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlLnRvVXBwZXJDYXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgR08oZW52OiBFbnZtbnQpOiBvYmplY3Qge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gbmV3IFVOREVGSU5FRCgpO1xyXG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IG5ldyBSZWZlcmVuY2UodGhpcy50eXBlKTtcclxuICAgICAgICByZWZlcmVuY2UuUHV0VmFsdWVPblJlZmVyZW5jZSh2YWx1ZSk7XHJcbiAgICAgICAgZW52LkRlY2xhcmUodGhpcy5uYW1lLCByZWZlcmVuY2UpO1xyXG4gICAgICAgIHJldHVybiByZWZlcmVuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0R3JhcGgoZW52OiBFbnZtbnQpOiBHcmFwaHZpek5vZGUge1xyXG4gICAgICAgIHJldHVybiBuZXcgR3JhcGh2aXpOb2RlKCdORVdfRlVOX1BBUkFNJywgW25ldyBHcmFwaHZpek5vZGUodGhpcy5uYW1lKSwgbmV3IEdyYXBodml6Tm9kZSh0aGlzLnR5cGUpXSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge09wfSBmcm9tIFwiLi4vdXRpbHMvT3BcIjtcclxuaW1wb3J0IHtFbnZtbnR9IGZyb20gXCIuLi91dGlscy9FbnZtbnRcIjtcclxuaW1wb3J0IHtNeU1hcCwgT2JqZWN0c1N0cnVjdHVyZXMsIE9iamVjdFN0cnVjdHVyZX0gZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCI7XHJcbmltcG9ydCB7R3JhcGh2aXpOb2RlfSBmcm9tIFwiLi4vdXRpbHMvR3JhcGh2aXpOb2RlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGVjbGFyZVR5cGVTdHJ1Y3R1cmVOb2RlIGV4dGVuZHMgT3B7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcHJvcGVydGllczogTWFwPHN0cmluZywgc3RyaW5nPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHByb3BlcnRpZXM6IE15TWFwKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IChwcm9wZXJ0aWVzIGFzIE15TWFwKS5nZXRNYXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCk6IG9iamVjdCB7XHJcbiAgICAgICAgY29uc3Qgc3RydWN0dXJlID0gbmV3IE9iamVjdFN0cnVjdHVyZSh0aGlzLnByb3BlcnRpZXMpO1xyXG4gICAgICAgIE9iamVjdHNTdHJ1Y3R1cmVzLm9iamVjdHMuc2V0KHRoaXMubmFtZS50b1VwcGVyQ2FzZSgpLCBzdHJ1Y3R1cmUpO1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0R3JhcGgoZW52OiBFbnZtbnQpOiBHcmFwaHZpek5vZGUge1xyXG4gICAgICAgIGxldCB2YWx1ZXM6IEdyYXBodml6Tm9kZVtdID0gW107XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzLmZvckVhY2goKHYsIGspID0+IHtcclxuICAgICAgICAgICAgdmFsdWVzLnB1c2gobmV3IEdyYXBodml6Tm9kZShrKSk7XHJcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKG5ldyBHcmFwaHZpek5vZGUodikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBuZXcgR3JhcGh2aXpOb2RlKCdORVdfVFlQRScsIFtuZXcgR3JhcGh2aXpOb2RlKHRoaXMubmFtZSksIG5ldyBHcmFwaHZpek5vZGUoJ1ZBTFVFUycsIHZhbHVlcyldKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge0RlY2xhcmVWYXJOb2RlfSBmcm9tIFwiLi9EZWNsYXJlVmFyTm9kZVwiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vdXRpbHMvQ250bnJcIjtcclxuaW1wb3J0IHtVTkRFRklORUR9IGZyb20gXCIuLi91dGlscy9QcmltaXRpdmVUeXBvQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7R3JhcGh2aXpOb2RlfSBmcm9tIFwiLi4vdXRpbHMvR3JhcGh2aXpOb2RlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGVjbGFyZVZhckxpc3ROb2RlIGV4dGVuZHMgT3Age1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSB0aXBvTm9tYnJlOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHZhbHVlOiBPcDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGVjbGFyYXRpb25PcHM6IEFycmF5PE9wPjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgaXNDb25zdDogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0aXBvTm9tYnJlOiBzdHJpbmcsIGRlY2xhcmF0aW9uT3BzOiBBcnJheTxPcD4sIHZhbHVlPzogT3AsIGlzQ29uc3Q6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy50aXBvTm9tYnJlID0gdGlwb05vbWJyZTtcclxuICAgICAgICB0aGlzLmRlY2xhcmF0aW9uT3BzID0gZGVjbGFyYXRpb25PcHM7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlIHx8IG51bGw7XHJcbiAgICAgICAgdGhpcy5pc0NvbnN0ID0gaXNDb25zdDtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCk6IG9iamVjdCB7XHJcbiAgICAgICAgZm9yIChsZXQgb3Agb2YgdGhpcy5kZWNsYXJhdGlvbk9wcykge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAob3AgYXMgRGVjbGFyZVZhck5vZGUpLkFkZFZhbHVlKHRoaXMudmFsdWUuRXhlKGVudikgYXMgQ250bnIsIHRoaXMuaXNDb25zdCwgdGhpcy50aXBvTm9tYnJlKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIChvcCBhcyBEZWNsYXJlVmFyTm9kZSkuQWRkVmFsdWUobmV3IFVOREVGSU5FRCgpLCB0aGlzLmlzQ29uc3QsIHRoaXMudGlwb05vbWJyZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvcC5FeGUoZW52KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBHZXRHcmFwaChlbnY6IEVudm1udCk6IEdyYXBodml6Tm9kZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHcmFwaHZpek5vZGUoJ0RFQ0xBUkVfVkFSX0xJU1QnLCBbbmV3IEdyYXBodml6Tm9kZSh0aGlzLnRpcG9Ob21icmU/IHRoaXMudGlwb05vbWJyZTogJ0FOWScpLCB0aGlzLnZhbHVlID09PSBudWxsID8gbmV3IEdyYXBodml6Tm9kZSgnVU5ERUZJTkVEJykgOiB0aGlzLnZhbHVlLkdldEdyYXBoKGVudildXHJcbiAgICAgICAgICAgIC5jb25jYXQodGhpcy5kZWNsYXJhdGlvbk9wcy5tYXAob3AgPT4gb3AuR2V0R3JhcGgoZW52KSkpKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge09wfSBmcm9tIFwiLi4vdXRpbHMvT3BcIjtcclxuaW1wb3J0IHtDbnRucn0gZnJvbSAnLi4vdXRpbHMvQ250bnInO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge1VOREVGSU5FRH0gZnJvbSBcIi4uL3V0aWxzL1ByaW1pdGl2ZVR5cG9Db250YWluZXJcIjtcclxuaW1wb3J0IHtSZWZlcmVuY2V9IGZyb20gXCIuLi91dGlscy9SZWZlcmVuY2VcIjtcclxuaW1wb3J0IHtHcmFwaHZpek5vZGV9IGZyb20gXCIuLi91dGlscy9HcmFwaHZpek5vZGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEZWNsYXJlVmFyTm9kZSBleHRlbmRzIE9wIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSB2YWx1ZTogQ250bnIgPSBuZXcgVU5ERUZJTkVEKCk7XHJcbiAgICBwcml2YXRlIHZhbHVlT3A6IE9wO1xyXG4gICAgcHJpdmF0ZSBpc0NvbnN0OiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSB0aXBvTm9tYnJlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB2YWx1ZTogT3AgPSBudWxsKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMudmFsdWVPcCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIEdPKGVudjogRW52bW50KTogb2JqZWN0IHtcclxuICAgICAgICB0aGlzLkFkZFZhck9uRGVjbGFyZShlbnYsIHRoaXMubmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEFkZFZhbHVlKHZhbHVlOiBDbnRuciA9IG5ldyBVTkRFRklORUQoKSwgaXNDb25zdDogYm9vbGVhbiA9IGZhbHNlLCB0aXBvTm9tYnJlOiBzdHJpbmcgPSAnQU5ZJykge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmlzQ29uc3QgPSBpc0NvbnN0O1xyXG4gICAgICAgIGlmICh0aXBvTm9tYnJlID09PSAnJykge1xyXG4gICAgICAgICAgICB0aXBvTm9tYnJlID0gJ0FOWSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGlwb05vbWJyZSA9IHRpcG9Ob21icmUudG9VcHBlckNhc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIEFkZFZhck9uRGVjbGFyZShlbnY6IEVudm1udCwgaWRlbnRpZmllcjogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHZhbHVlOiBDbnRuciA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgaWYodGhpcy52YWx1ZU9wICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnZhbHVlT3AuRXhlKGVudikgYXMgQ250bnI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZTogUmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZSh0aGlzLnRpcG9Ob21icmUsIHRoaXMuaXNDb25zdCk7XHJcbiAgICAgICAgcmVmZXJlbmNlLlB1dFZhbHVlT25SZWZlcmVuY2UodmFsdWUpO1xyXG4gICAgICAgIGVudi5EZWNsYXJlKGlkZW50aWZpZXIsIHJlZmVyZW5jZSk7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0R3JhcGgoZW52OiBFbnZtbnQpOiBHcmFwaHZpek5vZGUge1xyXG4gICAgICAgIHJldHVybiBuZXcgR3JhcGh2aXpOb2RlKCdERUNMQVJFX1ZBUicsIFtuZXcgR3JhcGh2aXpOb2RlKHRoaXMubmFtZSksIG5ldyBHcmFwaHZpek5vZGUodGhpcy50aXBvTm9tYnJlP3RoaXMudGlwb05vbWJyZTonQU5ZJyksXHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVPcCAhPT0gbnVsbCA/IHRoaXMudmFsdWVPcC5HZXRHcmFwaChlbnYpIDogbmV3IEdyYXBodml6Tm9kZSgndW5kZWZpbmVkJyldKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge09wfSBmcm9tIFwiLi4vdXRpbHMvT3BcIjtcclxuaW1wb3J0IHtEaWZlcmVudGV9IGZyb20gXCIuLi91dGlscy9SZWxhdGlvbmFsT3BlcmF0aW9uc0Z1bmN0aW9uc1wiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vdXRpbHMvQ250bnJcIjtcclxuaW1wb3J0IHtFbnZtbnR9IGZyb20gXCIuLi91dGlscy9FbnZtbnRcIjtcclxuaW1wb3J0IHtHcmFwaHZpek5vZGV9IGZyb20gXCIuLi91dGlscy9HcmFwaHZpek5vZGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEaWZOb2RlIGV4dGVuZHMgT3Age1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsZjogT3A7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJ0OiBPcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsZjogT3AsIHJ0OiBPcCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5sZiA9IGxmO1xyXG4gICAgICAgIHRoaXMucnQgPSBydDtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCk6IG9iamVjdCB7XHJcbiAgICAgICAgcmV0dXJuIERpZmVyZW50ZSgodGhpcy5sZi5FeGUoZW52KSBhcyBDbnRuciksICh0aGlzLnJ0LkV4ZShlbnYpIGFzIENudG5yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0R3JhcGgoZW52OiBFbnZtbnQpOiBHcmFwaHZpek5vZGUge1xyXG4gICAgICAgIHJldHVybiBuZXcgR3JhcGh2aXpOb2RlKCdESUYnLCBbdGhpcy5sZi5HZXRHcmFwaChlbnYpLCB0aGlzLnJ0LkdldEdyYXBoKGVudildKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge09wfSBmcm9tIFwiLi4vdXRpbHMvT3BcIjtcclxuaW1wb3J0IHtFbnZtbnR9IGZyb20gXCIuLi91dGlscy9FbnZtbnRcIjtcclxuaW1wb3J0IHtEaXZpc2lvbiwgU3VtYX0gZnJvbSBcIi4uL3V0aWxzL0FsZ2VicmFpY09wZXJhdGlvbnNGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHtDbnRucn0gZnJvbSBcIi4uL3V0aWxzL0NudG5yXCI7XHJcbmltcG9ydCB7R3JhcGh2aXpOb2RlfSBmcm9tIFwiLi4vdXRpbHMvR3JhcGh2aXpOb2RlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGl2Tm9kZSBleHRlbmRzIE9we1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsZjogT3A7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJ0OiBPcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsZjogT3AsIHJ0OiBPcCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5sZiA9IGxmO1xyXG4gICAgICAgIHRoaXMucnQgPSBydDtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCk6IG9iamVjdCB7XHJcbiAgICAgICAgcmV0dXJuIERpdmlzaW9uKCh0aGlzLmxmLkV4ZShlbnYpIGFzIENudG5yKSwgKHRoaXMucnQuRXhlKGVudikgYXMgQ250bnIpKTtcclxuICAgIH1cclxuXHJcbiAgICBHZXRHcmFwaChlbnY6IEVudm1udCk6IEdyYXBodml6Tm9kZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHcmFwaHZpek5vZGUoJ0RJVicsIFt0aGlzLmxmLkdldEdyYXBoKGVudiksIHRoaXMucnQuR2V0R3JhcGgoZW52KV0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7TG9naWNEb1doaWxlfSBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IHtHcmFwaHZpek5vZGV9IGZyb20gXCIuLi91dGlscy9HcmFwaHZpek5vZGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEb1doaWxlTm9kZSBleHRlbmRzIE9wIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29uZGl0aW9uOiBPcDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc2VudGVuY2VzOiBBcnJheTxPcD47XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZGl0aW9uOiBPcCwgc2VudGVuY2VzOiBBcnJheTxPcD4pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xyXG4gICAgICAgIHRoaXMuc2VudGVuY2VzID0gc2VudGVuY2VzO1xyXG4gICAgfVxyXG5cclxuICAgIEdPKGVudjogRW52bW50KTogb2JqZWN0IHtcclxuICAgICAgICByZXR1cm4gTG9naWNEb1doaWxlKGVudiwgdGhpcy5jb25kaXRpb24sIHRoaXMuc2VudGVuY2VzLCBudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBHZXRHcmFwaChlbnY6IEVudm1udCk6IEdyYXBodml6Tm9kZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHcmFwaHZpek5vZGUoJ0RPX1dISUxFJywgW25ldyBHcmFwaHZpek5vZGUoJ1dISUxFX0JPRFknLCB0aGlzLnNlbnRlbmNlcy5tYXAoc2VudGVuY2UgPT4gc2VudGVuY2UuR2V0R3JhcGgoZW52KSkpLCB0aGlzLmNvbmRpdGlvbi5HZXRHcmFwaChlbnYpXSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge09wfSBmcm9tIFwiLi4vdXRpbHMvT3BcIjtcclxuaW1wb3J0IHtJZ3VhbH0gZnJvbSBcIi4uL3V0aWxzL1JlbGF0aW9uYWxPcGVyYXRpb25zRnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7Q250bnJ9IGZyb20gXCIuLi91dGlscy9DbnRuclwiO1xyXG5pbXBvcnQge0dyYXBodml6Tm9kZX0gZnJvbSBcIi4uL3V0aWxzL0dyYXBodml6Tm9kZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVxTm9kZSBleHRlbmRzIE9wIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGY6IE9wO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBydDogT3A7XHJcblxyXG4gICAgY29uc3RydWN0b3IobGY6IE9wLCBydDogT3ApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubGYgPSBsZjtcclxuICAgICAgICB0aGlzLnJ0ID0gcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgR08oZW52OiBFbnZtbnQpOiBvYmplY3Qge1xyXG4gICAgICAgIHJldHVybiBJZ3VhbCgodGhpcy5sZi5FeGUoZW52KSBhcyBDbnRuciksICh0aGlzLnJ0LkV4ZShlbnYpIGFzIENudG5yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0R3JhcGgoZW52OiBFbnZtbnQpOiBHcmFwaHZpek5vZGUge1xyXG4gICAgICAgIHJldHVybiBuZXcgR3JhcGh2aXpOb2RlKCdFUScsIFt0aGlzLmxmLkdldEdyYXBoKGVudiksIHRoaXMucnQuR2V0R3JhcGgoZW52KV0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge1BvdGVuY2lhfSBmcm9tIFwiLi4vdXRpbHMvQWxnZWJyYWljT3BlcmF0aW9uc0Z1bmN0aW9uc1wiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vdXRpbHMvQ250bnJcIjtcclxuaW1wb3J0IHtHcmFwaHZpek5vZGV9IGZyb20gXCIuLi91dGlscy9HcmFwaHZpek5vZGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFeHBOb2RlIGV4dGVuZHMgT3Age1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsZjogT3A7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJ0OiBPcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsZjogT3AsIHJ0OiBPcCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5sZiA9IGxmO1xyXG4gICAgICAgIHRoaXMucnQgPSBydDtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCk6IG9iamVjdCB7XHJcbiAgICAgICAgcmV0dXJuIFBvdGVuY2lhKCh0aGlzLmxmLkV4ZShlbnYpIGFzIENudG5yKSwgKHRoaXMucnQuRXhlKGVudikgYXMgQ250bnIpKTtcclxuICAgIH1cclxuXHJcbiAgICBHZXRHcmFwaChlbnY6IEVudm1udCk6IEdyYXBodml6Tm9kZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHcmFwaHZpek5vZGUoJ0VYUCcsIFt0aGlzLmxmLkdldEdyYXBoKGVudiksIHRoaXMucnQuR2V0R3JhcGgoZW52KV0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge1JlZmVyZW5jZX0gZnJvbSBcIi4uL3V0aWxzL1JlZmVyZW5jZVwiO1xyXG5pbXBvcnQge0FSUkFZLCBOVU1CRVIsIFNUUklOR30gZnJvbSBcIi4uL3V0aWxzL1ByaW1pdGl2ZVR5cG9Db250YWluZXJcIjtcclxuaW1wb3J0IHtGaW5kVmFyLCBTZW1hbnRpY0V4Y2VwdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCI7XHJcbmltcG9ydCB7R3JhcGh2aXpOb2RlfSBmcm9tIFwiLi4vdXRpbHMvR3JhcGh2aXpOb2RlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRm9ySW5Ob2RlIGV4dGVuZHMgT3Age1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb250cm9sVmFyOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IG5ld0NvbnRyb2xWYXI6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGFycmF5OiBPcDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc2VudGVuY2VzOiBBcnJheTxPcD47XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29udHJvbFZhcjogc3RyaW5nLCBuZXdDb250cm9sVmFyOiBib29sZWFuLCBhcnJheTogT3AsIHNlbnRlbmNlczogQXJyYXk8T3A+KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xWYXIgPSBjb250cm9sVmFyO1xyXG4gICAgICAgIHRoaXMubmV3Q29udHJvbFZhciA9IG5ld0NvbnRyb2xWYXI7XHJcbiAgICAgICAgdGhpcy5hcnJheSA9IGFycmF5O1xyXG4gICAgICAgIHRoaXMuc2VudGVuY2VzID0gc2VudGVuY2VzO1xyXG4gICAgfVxyXG5cclxuICAgIEdPKGVudjogRW52bW50KTogb2JqZWN0IHtcclxuICAgICAgICBsZXQgYXJyYXkgPSB0aGlzLmFycmF5LkV4ZShlbnYpO1xyXG4gICAgICAgIGlmIChhcnJheSBpbnN0YW5jZW9mIFJlZmVyZW5jZSkge1xyXG4gICAgICAgICAgICBhcnJheSA9IChhcnJheSBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghKGFycmF5IGluc3RhbmNlb2YgQVJSQVkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBTZW1hbnRpY0V4Y2VwdGlvbihcIlNlIGVzcGVyYWJhIHVuYSByZWZlcmVuY2lhIGEgdW4gYXJyZWdsbyBlbiBjaWNsbyBGb3IgSW5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBlbnYwID0gbmV3IEVudm1udChlbnYsIHRoaXMuc2VudGVuY2VzKTtcclxuICAgICAgICBpZiAodGhpcy5uZXdDb250cm9sVmFyKSB7XHJcbiAgICAgICAgICAgIGVudjAuQWRkUHJvcGVydHkodGhpcy5jb250cm9sVmFyLCBuZXcgUmVmZXJlbmNlKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKGxldCBpbmRleCBpbiAoYXJyYXkgYXMgQVJSQVkpLmdldFZhbHVlTGlzdCgpKXtcclxuICAgICAgICAgICAgKEZpbmRWYXIoZW52MCwgdGhpcy5jb250cm9sVmFyKSBhcyBSZWZlcmVuY2UpLnNldFZhbHVlKG5ldyBTVFJJTkcoaW5kZXgpKTtcclxuICAgICAgICAgICAgZW52MC5HT19BTEwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBHZXRHcmFwaChlbnY6IEVudm1udCk6IEdyYXBodml6Tm9kZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHcmFwaHZpek5vZGUoJ0ZPUl9JTicsIFtuZXcgR3JhcGh2aXpOb2RlKHRoaXMuY29udHJvbFZhciksIG5ldyBHcmFwaHZpek5vZGUoJ0ZPUl9JTl9CT0RZJywgdGhpcy5zZW50ZW5jZXMubWFwKHNlbnRlbmNlID0+IHNlbnRlbmNlLkdldEdyYXBoKGVudikpKV0pO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge0xvZ2ljV2hpbGV9IGZyb20gXCIuLi91dGlscy9VdGlsc1wiO1xyXG5pbXBvcnQge0dyYXBodml6Tm9kZX0gZnJvbSBcIi4uL3V0aWxzL0dyYXBodml6Tm9kZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZvck5vZGUgZXh0ZW5kcyBPcCB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbmRpdGlvbjA6IE9wO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb25kaXRpb24xOiBPcDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29uZGl0aW9uMjogT3A7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzZW50ZW5jZXM6IEFycmF5PE9wPjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25kaXRpb24wOiBPcCwgY29uZGl0aW9uMTogT3AsIGNvbmRpdGlvbjI6IE9wLCBzZW50ZW5jZXM6IEFycmF5PE9wPikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5jb25kaXRpb24wID0gY29uZGl0aW9uMDtcclxuICAgICAgICB0aGlzLmNvbmRpdGlvbjEgPSBjb25kaXRpb24xO1xyXG4gICAgICAgIHRoaXMuY29uZGl0aW9uMiA9IGNvbmRpdGlvbjI7XHJcbiAgICAgICAgdGhpcy5zZW50ZW5jZXMgPSBzZW50ZW5jZXM7XHJcbiAgICB9XHJcblxyXG4gICAgR08oZW52OiBFbnZtbnQpOiBvYmplY3Qge1xyXG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbkVudiA9IG5ldyBFbnZtbnQoZW52LCBbdGhpcy5jb25kaXRpb24wXSk7XHJcbiAgICAgICAgY29uZGl0aW9uRW52LkdPX0FMTCgpO1xyXG5cclxuICAgICAgICBMb2dpY1doaWxlKGNvbmRpdGlvbkVudiwgdGhpcy5jb25kaXRpb24xLCB0aGlzLnNlbnRlbmNlcywgdGhpcy5jb25kaXRpb24yKTtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIEdldEdyYXBoKGVudjogRW52bW50KTogR3JhcGh2aXpOb2RlIHtcclxuICAgICAgICByZXR1cm4gbmV3IEdyYXBodml6Tm9kZSgnRk9SJywgW1xyXG4gICAgICAgICAgICB0aGlzLmNvbmRpdGlvbjAuR2V0R3JhcGgoZW52KSxcclxuICAgICAgICAgICAgdGhpcy5jb25kaXRpb24xLkdldEdyYXBoKGVudiksXHJcbiAgICAgICAgICAgIHRoaXMuY29uZGl0aW9uMi5HZXRHcmFwaChlbnYpLFxyXG4gICAgICAgICAgICBuZXcgR3JhcGh2aXpOb2RlKCdGT1JfQk9EWScsIHRoaXMuc2VudGVuY2VzLm1hcChzZW50ZW5jZSA9PiBzZW50ZW5jZS5HZXRHcmFwaChlbnYpKSldKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge09wfSBmcm9tIFwiLi4vdXRpbHMvT3BcIjtcclxuaW1wb3J0IHtFbnZtbnR9IGZyb20gXCIuLi91dGlscy9FbnZtbnRcIjtcclxuaW1wb3J0IHtSZWZlcmVuY2V9IGZyb20gXCIuLi91dGlscy9SZWZlcmVuY2VcIjtcclxuaW1wb3J0IHtBUlJBWX0gZnJvbSBcIi4uL3V0aWxzL1ByaW1pdGl2ZVR5cG9Db250YWluZXJcIjtcclxuaW1wb3J0IHtGaW5kVmFyLCBTZW1hbnRpY0V4Y2VwdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCI7XHJcbmltcG9ydCB7R3JhcGh2aXpOb2RlfSBmcm9tIFwiLi4vdXRpbHMvR3JhcGh2aXpOb2RlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRm9yT2ZOb2RlIGV4dGVuZHMgT3Age1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb250cm9sVmFyOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IG5ld0NvbnRyb2xWYXI6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGFycmF5OiBPcDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc2VudGVuY2VzOiBBcnJheTxPcD47XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29udHJvbFZhcjogc3RyaW5nLCBuZXdDb250cm9sVmFyOiBib29sZWFuLCBhcnJheTogT3AsIHNlbnRlbmNlczogQXJyYXk8T3A+KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xWYXIgPSBjb250cm9sVmFyO1xyXG4gICAgICAgIHRoaXMubmV3Q29udHJvbFZhciA9IG5ld0NvbnRyb2xWYXI7XHJcbiAgICAgICAgdGhpcy5hcnJheSA9IGFycmF5O1xyXG4gICAgICAgIHRoaXMuc2VudGVuY2VzID0gc2VudGVuY2VzO1xyXG4gICAgfVxyXG5cclxuICAgIEdPKGVudjogRW52bW50KTogb2JqZWN0IHtcclxuICAgICAgICBsZXQgYXJyYXkgPSB0aGlzLmFycmF5LkV4ZShlbnYpO1xyXG4gICAgICAgIGlmIChhcnJheSBpbnN0YW5jZW9mIFJlZmVyZW5jZSkge1xyXG4gICAgICAgICAgICBhcnJheSA9IChhcnJheSBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghKGFycmF5IGluc3RhbmNlb2YgQVJSQVkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBTZW1hbnRpY0V4Y2VwdGlvbihcIlNlIGVzcGVyYWJhIHVuYSByZWZlcm5jaWEgYSB1biBhcnJlZ2xvIGVuIGNpY2xvIEZvciBPZlwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZW52MCA9IG5ldyBFbnZtbnQoZW52LCB0aGlzLnNlbnRlbmNlcyk7XHJcbiAgICAgICAgaWYgKHRoaXMubmV3Q29udHJvbFZhcikge1xyXG4gICAgICAgICAgICBlbnYwLkFkZFByb3BlcnR5KHRoaXMuY29udHJvbFZhciwgbmV3IFJlZmVyZW5jZSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGVsZW1lbnQgb2YgKGFycmF5IGFzIEFSUkFZKS5nZXRWYWx1ZUxpc3QoKSkge1xyXG4gICAgICAgICAgICBsZXQgdmFsID0gZWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKHZhbCBpbnN0YW5jZW9mIFJlZmVyZW5jZSkge1xyXG4gICAgICAgICAgICAgICAgdmFsID0gKHZhbCBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKEZpbmRWYXIoZW52MCwgdGhpcy5jb250cm9sVmFyKSBhcyBSZWZlcmVuY2UpLnNldFZhbHVlKHZhbCk7XHJcbiAgICAgICAgICAgIGVudjAuR09fQUxMKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0R3JhcGgoZW52OiBFbnZtbnQpOiBHcmFwaHZpek5vZGUge1xyXG4gICAgICAgIHJldHVybiBuZXcgR3JhcGh2aXpOb2RlKCdGT1JfT0YnLCBbbmV3IEdyYXBodml6Tm9kZSh0aGlzLmNvbnRyb2xWYXIpLCBuZXcgR3JhcGh2aXpOb2RlKCdGT1JfT0ZfQk9EWScsIHRoaXMuc2VudGVuY2VzLm1hcChzZW50ZW5jZSA9PiBzZW50ZW5jZS5HZXRHcmFwaChlbnYpKSldKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vdXRpbHMvQ250bnJcIjtcclxuaW1wb3J0IHtSZWZlcmVuY2V9IGZyb20gXCIuLi91dGlscy9SZWZlcmVuY2VcIjtcclxuaW1wb3J0IHtGdW5jdGlvblJlcHJlc2VudH0gZnJvbSBcIi4uL3V0aWxzL2Z1bmN0aW9ucy9GdW5jdGlvblJlcHJlc2VudFwiO1xyXG5pbXBvcnQge1JldHVybk9ian0gZnJvbSBcIi4vUmV0dXJuT2JqXCI7XHJcbmltcG9ydCB7VU5ERUZJTkVEfSBmcm9tIFwiLi4vdXRpbHMvUHJpbWl0aXZlVHlwb0NvbnRhaW5lclwiO1xyXG5pbXBvcnQge0lzUHJpbWl0aXZlVHlwbywgU2VtYW50aWNFeGNlcHRpb259IGZyb20gXCIuLi91dGlscy9VdGlsc1wiO1xyXG5pbXBvcnQge1VzZXJEZWZpbmVkfSBmcm9tIFwiLi4vdXRpbHMvZnVuY3Rpb25zL1VzZXJEZWZpbmVkXCI7XHJcbmltcG9ydCB7R3JhcGh2aXpOb2RlfSBmcm9tIFwiLi4vdXRpbHMvR3JhcGh2aXpOb2RlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRnVuY3Rpb25DYWxsTm9kZSBleHRlbmRzIE9we1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBuYW1lOiBPcDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgYXJnczogQXJyYXk8T3A+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IE9wLCBhcmdzOiBBcnJheTxPcD4pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5hcmdzID0gYXJncztcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCk6IG9iamVjdCB7XHJcbiAgICAgICAgbGV0IGlkID0gdGhpcy5uYW1lLkV4ZShlbnYpO1xyXG4gICAgICAgIGlmIChpZCBpbnN0YW5jZW9mIFJlZmVyZW5jZSkge1xyXG4gICAgICAgICAgICBpZCA9IChpZCBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhcmdzVmFsdWVzID0gbmV3IEFycmF5PENudG5yPigpO1xyXG4gICAgICAgIGZvciAobGV0IGFyZyBvZiB0aGlzLmFyZ3MpIHtcclxuICAgICAgICAgICAgbGV0IGFucyA9IGFyZy5FeGUoZW52KTtcclxuICAgICAgICAgICAgaWYgKGFucyBpbnN0YW5jZW9mIFJlZmVyZW5jZSkge1xyXG4gICAgICAgICAgICAgICAgYW5zID0gKGFucyBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXJnc1ZhbHVlcy5wdXNoKGFucyBhcyBDbnRucik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaWQgaW5zdGFuY2VvZiBGdW5jdGlvblJlcHJlc2VudCkge1xyXG4gICAgICAgICAgICBsZXQgZnVuY3QgPSAoaWQgYXMgVXNlckRlZmluZWQpO1xyXG4gICAgICAgICAgICBsZXQgYW5zID0gZnVuY3QuRVhFKGVudiwgYXJnc1ZhbHVlcyk7XHJcbiAgICAgICAgICAgIGlmIChhbnMgaW5zdGFuY2VvZiBSZXR1cm5PYmopIHtcclxuICAgICAgICAgICAgICAgIGxldCByZXQgPSAoYW5zIGFzIFJldHVybk9iaikuZ2V0VmFsdWUoKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXQgaW5zdGFuY2VvZiBSZWZlcmVuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXQgPSAocmV0IGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGZ1bmN0LmdldFR5cGUoKSAhPT0gcmV0LnR5cG9cclxuICAgICAgICAgICAgICAgICAgICAmJiBmdW5jdC5nZXRUeXBlKCkgIT09ICdBTlknXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgcmV0LnR5cG8gIT09ICdOVUxMJ1xyXG4gICAgICAgICAgICAgICAgICAgICYmIHJldC50eXBvICE9PSAnVU5ERUZJTkVEJ1xyXG4gICAgICAgICAgICAgICAgICAgICYmIHJldC50eXBvICE9PSAnT0JKRUNUJ1xyXG4gICAgICAgICAgICAgICAgICAgIHx8IChJc1ByaW1pdGl2ZVR5cG8oZnVuY3QuZ2V0VHlwZSgpKSAmJiByZXQudHlwbyA9PT0gJ09CSkVDVCcpXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgU2VtYW50aWNFeGNlcHRpb24oYFNlIGVzcGVyYWJhIHJldG9ybm8gZGUgdGlwbyAke2Z1bmN0LmdldFR5cGUoKX0sIHNlIHJldG9ybm8gdGlwbyAke3JldC50eXBvfWApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGFucyBhcyBSZXR1cm5PYmopLmdldFZhbHVlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBVTkRFRklORUQoKTtcclxuICAgIH1cclxuXHJcbiAgICBHZXRHcmFwaChlbnY6IEVudm1udCk6IEdyYXBodml6Tm9kZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHcmFwaHZpek5vZGUoJ0ZVTkNUSU9OX0NBTEwnLCBbdGhpcy5uYW1lLkdldEdyYXBoKGVudiksIG5ldyBHcmFwaHZpek5vZGUoJ0FSR1MnLCB0aGlzLmFyZ3MubWFwKGFyZyA9PiBhcmcuR2V0R3JhcGgoZW52KSkpXSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge09wfSBmcm9tIFwiLi4vdXRpbHMvT3BcIjtcclxuaW1wb3J0IHtFbnZtbnR9IGZyb20gXCIuLi91dGlscy9FbnZtbnRcIjtcclxuaW1wb3J0IHtNYXlvckVxfSBmcm9tIFwiLi4vdXRpbHMvUmVsYXRpb25hbE9wZXJhdGlvbnNGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHtDbnRucn0gZnJvbSBcIi4uL3V0aWxzL0NudG5yXCI7XHJcbmltcG9ydCB7R3JhcGh2aXpOb2RlfSBmcm9tIFwiLi4vdXRpbHMvR3JhcGh2aXpOb2RlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGlnaGVyRXFOb2RlIGV4dGVuZHMgT3Age1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsZjogT3A7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJ0OiBPcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsZjogT3AsIHJ0OiBPcCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5sZiA9IGxmO1xyXG4gICAgICAgIHRoaXMucnQgPSBydDtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCk6IG9iamVjdCB7XHJcbiAgICAgICAgcmV0dXJuIE1heW9yRXEodGhpcy5sZi5FeGUoZW52KSBhcyBDbnRuciwgdGhpcy5ydC5FeGUoZW52KSBhcyBDbnRucik7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0R3JhcGgoZW52OiBFbnZtbnQpOiBHcmFwaHZpek5vZGUge1xyXG4gICAgICAgIHJldHVybiBuZXcgR3JhcGh2aXpOb2RlKCdNQVlfRVEnLCBbdGhpcy5sZi5HZXRHcmFwaChlbnYpLCB0aGlzLnJ0LkdldEdyYXBoKGVudildKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge01heW9yfSBmcm9tIFwiLi4vdXRpbHMvUmVsYXRpb25hbE9wZXJhdGlvbnNGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHtDbnRucn0gZnJvbSBcIi4uL3V0aWxzL0NudG5yXCI7XHJcbmltcG9ydCB7R3JhcGh2aXpOb2RlfSBmcm9tIFwiLi4vdXRpbHMvR3JhcGh2aXpOb2RlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGlnaGVyTm9kZSBleHRlbmRzIE9wIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGY6IE9wO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBydDogT3A7XHJcblxyXG4gICAgY29uc3RydWN0b3IobGY6IE9wLCBydDogT3ApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubGYgPSBsZjtcclxuICAgICAgICB0aGlzLnJ0ID0gcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgR08oZW52OiBFbnZtbnQpOiBvYmplY3Qge1xyXG4gICAgICAgIHJldHVybiBNYXlvcih0aGlzLmxmLkV4ZShlbnYpIGFzIENudG5yLCB0aGlzLnJ0LkV4ZShlbnYpIGFzIENudG5yKTtcclxuICAgIH1cclxuXHJcbiAgICBHZXRHcmFwaChlbnY6IEVudm1udCk6IEdyYXBodml6Tm9kZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHcmFwaHZpek5vZGUoJ01BWScsIFt0aGlzLmxmLkdldEdyYXBoKGVudiksIHRoaXMucnQuR2V0R3JhcGgoZW52KV0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7Qk9PTEVBTn0gZnJvbSBcIi4uL3V0aWxzL1ByaW1pdGl2ZVR5cG9Db250YWluZXJcIjtcclxuaW1wb3J0IHtSZWZlcmVuY2V9IGZyb20gXCIuLi91dGlscy9SZWZlcmVuY2VcIjtcclxuaW1wb3J0IHtQYXNzUHJvcHNBbmRGdW5jcywgU2VtYW50aWNFeGNlcHRpb259IGZyb20gXCIuLi91dGlscy9VdGlsc1wiO1xyXG5pbXBvcnQge0dyYXBodml6Tm9kZX0gZnJvbSBcIi4uL3V0aWxzL0dyYXBodml6Tm9kZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIElmTm9kZSBleHRlbmRzIE9we1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb25kaXRpb246IE9wO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBvcGVyYXRpb25zVHJ1ZTogQXJyYXk8T3A+O1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBvcGVyYXRpb25zRmFsc2U6IEFycmF5PE9wPjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25kaXRpb246IE9wLCBvcGVyYXRpb25zVHJ1ZTogQXJyYXk8T3A+LCBvcGVyYXRpb25zRmFsc2U6IEFycmF5PE9wPikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XHJcbiAgICAgICAgdGhpcy5vcGVyYXRpb25zVHJ1ZSA9IG9wZXJhdGlvbnNUcnVlO1xyXG4gICAgICAgIHRoaXMub3BlcmF0aW9uc0ZhbHNlID0gb3BlcmF0aW9uc0ZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIEdPKGVudjogRW52bW50KTogb2JqZWN0IHtcclxuICAgICAgICBsZXQgY29uZGl0aW9uID0gdGhpcy5jb25kaXRpb24uRXhlKGVudik7XHJcbiAgICAgICAgaWYgKGNvbmRpdGlvbiBpbnN0YW5jZW9mIFJlZmVyZW5jZSkge1xyXG4gICAgICAgICAgICBjb25kaXRpb24gPSAoY29uZGl0aW9uIGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIShjb25kaXRpb24gaW5zdGFuY2VvZiBCT09MRUFOKSl7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBTZW1hbnRpY0V4Y2VwdGlvbihcIkNvbmRpY2lvbiB1dGlsaXphZGEgY29tbyBwYXJhbWV0cm8gbm8gc29wb3J0YWRhIHBvciBzZW50ZW5jaWEgSWZcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29uZGl0aW9uLmdldFZhbHVlKCkpIHtcclxuICAgICAgICAgICAgY29uc3QgZW52VHJ1ZSA9IG5ldyBFbnZtbnQoZW52LCB0aGlzLm9wZXJhdGlvbnNUcnVlKTtcclxuICAgICAgICAgICAgUGFzc1Byb3BzQW5kRnVuY3MoZW52LCBlbnZUcnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGVudlRydWUuR09fQUxMKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBlbnZGYWxzZSA9IG5ldyBFbnZtbnQoZW52LCB0aGlzLm9wZXJhdGlvbnNGYWxzZSk7XHJcbiAgICAgICAgUGFzc1Byb3BzQW5kRnVuY3MoZW52LCBlbnZGYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuIGVudkZhbHNlLkdPX0FMTCgpO1xyXG4gICAgfVxyXG5cclxuICAgIEdldEdyYXBoKGVudjogRW52bW50KTogR3JhcGh2aXpOb2RlIHtcclxuICAgICAgICByZXR1cm4gbmV3IEdyYXBodml6Tm9kZSgnSUYnLCBbXHJcbiAgICAgICAgICAgIHRoaXMuY29uZGl0aW9uLkdldEdyYXBoKGVudiksXHJcbiAgICAgICAgICAgIG5ldyBHcmFwaHZpek5vZGUoJ0lGX0JPRFlfVFJVRScsIHRoaXMub3BlcmF0aW9uc1RydWUubWFwKHNlbnRlbmNlID0+IHNlbnRlbmNlLkdldEdyYXBoKGVudikpKSxcclxuICAgICAgICAgICAgbmV3IEdyYXBodml6Tm9kZSgnSUZfQk9EWV9GQUxTRScsIHRoaXMub3BlcmF0aW9uc0ZhbHNlLm1hcChzZW50ZW5jZSA9PiBzZW50ZW5jZS5HZXRHcmFwaChlbnYpKSlcclxuICAgICAgICBdKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge01lbm9yRXF9IGZyb20gXCIuLi91dGlscy9SZWxhdGlvbmFsT3BlcmF0aW9uc0Z1bmN0aW9uc1wiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vdXRpbHMvQ250bnJcIjtcclxuaW1wb3J0IHtHcmFwaHZpek5vZGV9IGZyb20gXCIuLi91dGlscy9HcmFwaHZpek5vZGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNaW5vckVxTm9kZSBleHRlbmRzIE9wIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGY6IE9wO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBydDogT3A7XHJcblxyXG4gICAgY29uc3RydWN0b3IobGY6IE9wLCBydDogT3ApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubGYgPSBsZjtcclxuICAgICAgICB0aGlzLnJ0ID0gcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgR08oZW52OiBFbnZtbnQpOiBvYmplY3Qge1xyXG4gICAgICAgIHJldHVybiBNZW5vckVxKHRoaXMubGYuRXhlKGVudikgYXMgQ250bnIsIHRoaXMucnQuRXhlKGVudikgYXMgQ250bnIpO1xyXG4gICAgfVxyXG5cclxuICAgIEdldEdyYXBoKGVudjogRW52bW50KTogR3JhcGh2aXpOb2RlIHtcclxuICAgICAgICByZXR1cm4gbmV3IEdyYXBodml6Tm9kZSgnTUlOX0VRJywgW3RoaXMubGYuR2V0R3JhcGgoZW52KSwgdGhpcy5ydC5HZXRHcmFwaChlbnYpXSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7IEVudm1udCB9IGZyb20gXCIuLi91dGlscy9FbnZtbnRcIjtcclxuaW1wb3J0IHtNZW5vcn0gZnJvbSBcIi4uL3V0aWxzL1JlbGF0aW9uYWxPcGVyYXRpb25zRnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7Q250bnJ9IGZyb20gXCIuLi91dGlscy9DbnRuclwiO1xyXG5pbXBvcnQge0dyYXBodml6Tm9kZX0gZnJvbSBcIi4uL3V0aWxzL0dyYXBodml6Tm9kZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1pbm9yTm9kZSBleHRlbmRzIE9wIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGY6IE9wO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBydDogT3A7XHJcblxyXG4gICAgY29uc3RydWN0b3IobGY6IE9wLCBydDogT3ApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubGYgPSBsZjtcclxuICAgICAgICB0aGlzLnJ0ID0gcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgR08oZW52OiBFbnZtbnQpOiBvYmplY3Qge1xyXG4gICAgICAgIHJldHVybiBNZW5vcih0aGlzLmxmLkV4ZShlbnYpIGFzIENudG5yLCB0aGlzLnJ0LkV4ZShlbnYpIGFzIENudG5yKTtcclxuICAgIH1cclxuXHJcbiAgICBHZXRHcmFwaChlbnY6IEVudm1udCk6IEdyYXBodml6Tm9kZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHcmFwaHZpek5vZGUoJ01JTicsIFt0aGlzLmxmLkdldEdyYXBoKGVudiksIHRoaXMucnQuR2V0R3JhcGgoZW52KV0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7TW9kdWxvfSBmcm9tIFwiLi4vdXRpbHMvQWxnZWJyYWljT3BlcmF0aW9uc0Z1bmN0aW9uc1wiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vdXRpbHMvQ250bnJcIjtcclxuaW1wb3J0IHtHcmFwaHZpek5vZGV9IGZyb20gXCIuLi91dGlscy9HcmFwaHZpek5vZGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNb2ROb2RlIGV4dGVuZHMgT3B7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxmOiBPcDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcnQ6IE9wO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxmOiBPcCwgcnQ6IE9wKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmxmID0gbGY7XHJcbiAgICAgICAgdGhpcy5ydCA9IHJ0O1xyXG4gICAgfVxyXG5cclxuICAgIEdPKGVudjogRW52bW50KTogb2JqZWN0IHtcclxuICAgICAgICByZXR1cm4gTW9kdWxvKCh0aGlzLmxmLkV4ZShlbnYpIGFzIENudG5yKSwgKHRoaXMucnQuRXhlKGVudikgYXMgQ250bnIpKTtcclxuICAgIH1cclxuXHJcbiAgICBHZXRHcmFwaChlbnY6IEVudm1udCk6IEdyYXBodml6Tm9kZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHcmFwaHZpek5vZGUoJ01PRCcsIFt0aGlzLmxmLkdldEdyYXBoKGVudiksIHRoaXMucnQuR2V0R3JhcGgoZW52KV0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7TXVsdGlwbGljYWNpb259IGZyb20gXCIuLi91dGlscy9BbGdlYnJhaWNPcGVyYXRpb25zRnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7Q250bnJ9IGZyb20gXCIuLi91dGlscy9DbnRuclwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge0dyYXBodml6Tm9kZX0gZnJvbSBcIi4uL3V0aWxzL0dyYXBodml6Tm9kZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE11bE5vZGUgZXh0ZW5kcyBPcHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGY6IE9wO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBydDogT3A7XHJcblxyXG4gICAgY29uc3RydWN0b3IobGY6IE9wLCBydDogT3ApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubGYgPSBsZjtcclxuICAgICAgICB0aGlzLnJ0ID0gcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgR08oZW52OiBFbnZtbnQpOiBvYmplY3Qge1xyXG4gICAgICAgIHJldHVybiBNdWx0aXBsaWNhY2lvbih0aGlzLmxmLkV4ZShlbnYpIGFzIENudG5yLCB0aGlzLnJ0LkV4ZShlbnYpIGFzIENudG5yKTtcclxuICAgIH1cclxuXHJcbiAgICBHZXRHcmFwaChlbnY6IEVudm1udCk6IEdyYXBodml6Tm9kZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHcmFwaHZpek5vZGUoJ01VTCcsIFt0aGlzLmxmLkdldEdyYXBoKGVudiksIHRoaXMucnQuR2V0R3JhcGgoZW52KV0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7Tm90fSBmcm9tIFwiLi4vdXRpbHMvTG9naWNhbE9wZXJhdGlvbnNGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHtDbnRucn0gZnJvbSBcIi4uL3V0aWxzL0NudG5yXCI7XHJcbmltcG9ydCB7R3JhcGh2aXpOb2RlfSBmcm9tIFwiLi4vdXRpbHMvR3JhcGh2aXpOb2RlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTm90Tm9kZSBleHRlbmRzIE9wIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGY6IE9wO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxmOiBPcCwgcnQ6IE9wKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmxmID0gbGY7XHJcbiAgICB9XHJcblxyXG4gICAgR08oZW52OiBFbnZtbnQpOiBvYmplY3Qge1xyXG4gICAgICAgIHJldHVybiBOb3QodGhpcy5sZi5FeGUoZW52KSBhcyBDbnRucik7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0R3JhcGgoZW52OiBFbnZtbnQpOiBHcmFwaHZpek5vZGUge1xyXG4gICAgICAgIHJldHVybiBuZXcgR3JhcGh2aXpOb2RlKCdOT1QnLCBbdGhpcy5sZi5HZXRHcmFwaChlbnYpXSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7TlVMTH0gZnJvbSBcIi4uL3V0aWxzL1ByaW1pdGl2ZVR5cG9Db250YWluZXJcIjtcclxuaW1wb3J0IHtHcmFwaHZpek5vZGV9IGZyb20gXCIuLi91dGlscy9HcmFwaHZpek5vZGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBOdWxsTm9kZSBleHRlbmRzIE9we1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgTlVMTCgpO1xyXG4gICAgfVxyXG5cclxuICAgIEdldEdyYXBoKGVudjogRW52bW50KTogR3JhcGh2aXpOb2RlIHtcclxuICAgICAgICByZXR1cm4gbmV3IEdyYXBodml6Tm9kZSgnTlVMTCcsIFtuZXcgR3JhcGh2aXpOb2RlKCdudWxsJyldKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge05VTUJFUn0gZnJvbSBcIi4uL3V0aWxzL1ByaW1pdGl2ZVR5cG9Db250YWluZXJcIjtcclxuaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7R3JhcGh2aXpOb2RlfSBmcm9tIFwiLi4vdXRpbHMvR3JhcGh2aXpOb2RlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTnVtYmVyTm9kZSBleHRlbmRzIE9we1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSB2YWw6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWw6IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy52YWwgPSB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgR08oZW52OiBFbnZtbnQpe1xyXG4gICAgICAgIHJldHVybiBuZXcgTlVNQkVSKHRoaXMudmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBHZXRHcmFwaChlbnY6IEVudm1udCk6IEdyYXBodml6Tm9kZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHcmFwaHZpek5vZGUoJ05VTUJFUicsIFtuZXcgR3JhcGh2aXpOb2RlKHRoaXMudmFsICsgJycpXSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge09wfSBmcm9tIFwiLi4vdXRpbHMvT3BcIjtcclxuaW1wb3J0IHtFbnZtbnR9IGZyb20gXCIuLi91dGlscy9FbnZtbnRcIjtcclxuaW1wb3J0IHtPcn0gZnJvbSBcIi4uL3V0aWxzL0xvZ2ljYWxPcGVyYXRpb25zRnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7Q250bnJ9IGZyb20gXCIuLi91dGlscy9DbnRuclwiO1xyXG5pbXBvcnQge0dyYXBodml6Tm9kZX0gZnJvbSBcIi4uL3V0aWxzL0dyYXBodml6Tm9kZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9yTm9kZSBleHRlbmRzIE9wIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGY6IE9wO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBydDogT3A7XHJcblxyXG4gICAgY29uc3RydWN0b3IobGY6IE9wLCBydDogT3ApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubGYgPSBsZjtcclxuICAgICAgICB0aGlzLnJ0ID0gcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgR08oZW52OiBFbnZtbnQpOiBvYmplY3Qge1xyXG4gICAgICAgIHJldHVybiBPcih0aGlzLmxmLkV4ZShlbnYpIGFzIENudG5yLCB0aGlzLnJ0LkV4ZShlbnYpIGFzIENudG5yKTtcclxuICAgIH1cclxuXHJcbiAgICBHZXRHcmFwaChlbnY6IEVudm1udCk6IEdyYXBodml6Tm9kZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHcmFwaHZpek5vZGUoJ09SJywgW3RoaXMubGYuR2V0R3JhcGgoZW52KSwgdGhpcy5ydC5HZXRHcmFwaChlbnYpXSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7QWRkfSBmcm9tIFwiLi4vdXRpbHMvQWxnZWJyYWljT3BlcmF0aW9uc0Z1bmN0aW9uc1wiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vdXRpbHMvQ250bnJcIjtcclxuaW1wb3J0IHtHcmFwaHZpek5vZGV9IGZyb20gXCIuLi91dGlscy9HcmFwaHZpek5vZGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZUFkZE5vZGUgZXh0ZW5kcyBPcCB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxmOiBPcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsZjogT3ApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubGYgPSBsZjtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCk6IG9iamVjdCB7XHJcbiAgICAgICAgcmV0dXJuIEFkZCh0aGlzLmxmLkV4ZShlbnYpIGFzIENudG5yKTtcclxuICAgIH1cclxuXHJcbiAgICBHZXRHcmFwaChlbnY6IEVudm1udCk6IEdyYXBodml6Tm9kZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHcmFwaHZpek5vZGUoJ1JFX0FERCcsIFt0aGlzLmxmLkdldEdyYXBoKGVudildKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0NudG5yLCBFbnZtbnQsIE9wLCBSZWZlcmVuY2V9IGZyb20gXCIuLi9pbmRleFwiO1xyXG5pbXBvcnQge1NlbWFudGljRXhjZXB0aW9ufSBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IHtTdW1hfSBmcm9tIFwiLi4vdXRpbHMvQWxnZWJyYWljT3BlcmF0aW9uc0Z1bmN0aW9uc1wiO1xyXG5pbXBvcnQge0dyYXBodml6Tm9kZX0gZnJvbSBcIi4uL3V0aWxzL0dyYXBodml6Tm9kZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlQXNpZ25BZGROb2RlIGV4dGVuZHMgT3Age1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsZjogT3A7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJ0OiBPcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsZjogT3AsIHJ0OiBPcCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5sZiA9IGxmO1xyXG4gICAgICAgIHRoaXMucnQgPSBydDtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCk6IG9iamVjdCB7XHJcbiAgICAgICAgY29uc3QgbGYgPSB0aGlzLmxmLkV4ZShlbnYpO1xyXG4gICAgICAgIGNvbnN0IHJ0ID0gdGhpcy5ydC5FeGUoZW52KTtcclxuXHJcbiAgICAgICAgaWYgKCEobGYgaW5zdGFuY2VvZiBSZWZlcmVuY2UpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBTZW1hbnRpY0V4Y2VwdGlvbihgTm8gc2UgcHVlZGUgYXNpZ2FuciBhICR7bGZ9LCBsYXMgYXNpZ25hY2lvbmVzIHNvbG8gcHVlZGVuIHNlciBzb2JyZSB1bmEgcmVmZXJlbmNpYWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKGxmIGFzIFJlZmVyZW5jZSkuUHV0VmFsdWVPblJlZmVyZW5jZShcclxuICAgICAgICAgICAgU3VtYSgobGYgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpLCBydCBhcyBDbnRucilcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiAobGYgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIEdldEdyYXBoKGVudjogRW52bW50KTogR3JhcGh2aXpOb2RlIHtcclxuICAgICAgICByZXR1cm4gbmV3IEdyYXBodml6Tm9kZSgnUkVfQVNJR05fQUREJywgW3RoaXMubGYuR2V0R3JhcGgoZW52KSwgdGhpcy5ydC5HZXRHcmFwaChlbnYpXSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7UmVmZXJlbmNlfSBmcm9tIFwiLi4vdXRpbHMvUmVmZXJlbmNlXCI7XHJcbmltcG9ydCB7U2VtYW50aWNFeGNlcHRpb259IGZyb20gXCIuLi91dGlscy9VdGlsc1wiO1xyXG5pbXBvcnQge0RpdmlzaW9ufSBmcm9tIFwiLi4vdXRpbHMvQWxnZWJyYWljT3BlcmF0aW9uc0Z1bmN0aW9uc1wiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vdXRpbHMvQ250bnJcIjtcclxuaW1wb3J0IHtHcmFwaHZpek5vZGV9IGZyb20gXCIuLi91dGlscy9HcmFwaHZpek5vZGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZUFzaWduRGl2Tm9kZSBleHRlbmRzIE9wIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGY6IE9wO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBydDogT3A7XHJcblxyXG4gICAgY29uc3RydWN0b3IobGY6IE9wLCBydDogT3ApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubGYgPSBsZjtcclxuICAgICAgICB0aGlzLnJ0ID0gcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgR08oZW52OiBFbnZtbnQpOiBvYmplY3Qge1xyXG4gICAgICAgIGNvbnN0IGxmID0gdGhpcy5sZi5FeGUoZW52KTtcclxuICAgICAgICBjb25zdCBydCA9IHRoaXMucnQuRXhlKGVudik7XHJcblxyXG4gICAgICAgIGlmICghKGxmIGluc3RhbmNlb2YgUmVmZXJlbmNlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgU2VtYW50aWNFeGNlcHRpb24oYE5vIHNlIHB1ZWRlIGFzaWdhbnIgYSAke2xmfSwgbGFzIGFzaWduYWNpb25lcyBzb2xvIHB1ZWRlbiBzZXIgc29icmUgdW5hIHJlZmVyZW5jaWFgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIChsZiBhcyBSZWZlcmVuY2UpLlB1dFZhbHVlT25SZWZlcmVuY2UoXHJcbiAgICAgICAgICAgIERpdmlzaW9uKChsZiBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCksIHJ0IGFzIENudG5yKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIChsZiBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0R3JhcGgoZW52OiBFbnZtbnQpOiBHcmFwaHZpek5vZGUge1xyXG4gICAgICAgIHJldHVybiBuZXcgR3JhcGh2aXpOb2RlKCdSRV9BU0lHTl9ESVYnLCBbdGhpcy5sZi5HZXRHcmFwaChlbnYpLCB0aGlzLnJ0LkdldEdyYXBoKGVudildKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge09wfSBmcm9tIFwiLi4vdXRpbHMvT3BcIjtcclxuaW1wb3J0IHtFbnZtbnR9IGZyb20gXCIuLi91dGlscy9FbnZtbnRcIjtcclxuaW1wb3J0IHtSZWZlcmVuY2V9IGZyb20gXCIuLi91dGlscy9SZWZlcmVuY2VcIjtcclxuaW1wb3J0IHtTZW1hbnRpY0V4Y2VwdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCI7XHJcbmltcG9ydCB7TW9kdWxvfSBmcm9tIFwiLi4vdXRpbHMvQWxnZWJyYWljT3BlcmF0aW9uc0Z1bmN0aW9uc1wiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vdXRpbHMvQ250bnJcIjtcclxuaW1wb3J0IHtHcmFwaHZpek5vZGV9IGZyb20gXCIuLi91dGlscy9HcmFwaHZpek5vZGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZUFzaWduTW9kTm9kZSBleHRlbmRzIE9wIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGY6IE9wO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBydDogT3A7XHJcblxyXG4gICAgY29uc3RydWN0b3IobGY6IE9wLCBydDogT3ApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubGYgPSBsZjtcclxuICAgICAgICB0aGlzLnJ0ID0gcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgR08oZW52OiBFbnZtbnQpOiBvYmplY3Qge1xyXG4gICAgICAgIGNvbnN0IGxmID0gdGhpcy5sZi5FeGUoZW52KTtcclxuICAgICAgICBjb25zdCBydCA9IHRoaXMucnQuRXhlKGVudik7XHJcblxyXG4gICAgICAgIGlmICghKGxmIGluc3RhbmNlb2YgUmVmZXJlbmNlKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgU2VtYW50aWNFeGNlcHRpb24oYE5vIHNlIHB1ZWRlIGFzaWdhbnIgYSAke2xmfSwgbGFzIGFzaWduYWNpb25lcyBzb2xvIHB1ZWRlbiBzZXIgc29icmUgdW5hIHJlZmVyZW5jaWFgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIChsZiBhcyBSZWZlcmVuY2UpLlB1dFZhbHVlT25SZWZlcmVuY2UoXHJcbiAgICAgICAgICAgIE1vZHVsbygobGYgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpLCBydCBhcyBDbnRucilcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiAobGYgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIEdldEdyYXBoKGVudjogRW52bW50KTogR3JhcGh2aXpOb2RlIHtcclxuICAgICAgICByZXR1cm4gbmV3IEdyYXBodml6Tm9kZSgnUkVfQVNJR05fTU9EJywgW3RoaXMubGYuR2V0R3JhcGgoZW52KSwgdGhpcy5ydC5HZXRHcmFwaChlbnYpXSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge1JlZmVyZW5jZX0gZnJvbSBcIi4uL3V0aWxzL1JlZmVyZW5jZVwiO1xyXG5pbXBvcnQge1NlbWFudGljRXhjZXB0aW9ufSBmcm9tIFwiLi4vdXRpbHMvVXRpbHNcIjtcclxuaW1wb3J0IHtNdWx0aXBsaWNhY2lvbn0gZnJvbSBcIi4uL3V0aWxzL0FsZ2VicmFpY09wZXJhdGlvbnNGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHtDbnRucn0gZnJvbSBcIi4uL3V0aWxzL0NudG5yXCI7XHJcbmltcG9ydCB7R3JhcGh2aXpOb2RlfSBmcm9tIFwiLi4vdXRpbHMvR3JhcGh2aXpOb2RlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVBc2lnbk11bE5vZGUgZXh0ZW5kcyBPcCB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxmOiBPcDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcnQ6IE9wO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxmOiBPcCwgcnQ6IE9wKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmxmID0gbGY7XHJcbiAgICAgICAgdGhpcy5ydCA9IHJ0O1xyXG4gICAgfVxyXG5cclxuICAgIEdPKGVudjogRW52bW50KTogb2JqZWN0IHtcclxuICAgICAgICBjb25zdCBsZiA9IHRoaXMubGYuRXhlKGVudik7XHJcbiAgICAgICAgY29uc3QgcnQgPSB0aGlzLnJ0LkV4ZShlbnYpO1xyXG5cclxuICAgICAgICBpZiAoIShsZiBpbnN0YW5jZW9mIFJlZmVyZW5jZSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFNlbWFudGljRXhjZXB0aW9uKGBObyBzZSBwdWVkZSBhc2lnYW5yIGEgJHtsZn0sIGxhcyBhc2lnbmFjaW9uZXMgc29sbyBwdWVkZW4gc2VyIHNvYnJlIHVuYSByZWZlcmVuY2lhYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAobGYgYXMgUmVmZXJlbmNlKS5QdXRWYWx1ZU9uUmVmZXJlbmNlKFxyXG4gICAgICAgICAgICBNdWx0aXBsaWNhY2lvbigobGYgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpLCBydCBhcyBDbnRucilcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiAobGYgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIEdldEdyYXBoKGVudjogRW52bW50KTogR3JhcGh2aXpOb2RlIHtcclxuICAgICAgICByZXR1cm4gbmV3IEdyYXBodml6Tm9kZSgnUkVfQVNJR05fTVVMLScsIFt0aGlzLmxmLkdldEdyYXBoKGVudiksIHRoaXMucnQuR2V0R3JhcGgoZW52KV0pO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQge09wfSBmcm9tIFwiLi4vdXRpbHMvT3BcIjtcclxuaW1wb3J0IHtFbnZtbnR9IGZyb20gXCIuLi91dGlscy9FbnZtbnRcIjtcclxuaW1wb3J0IHtSZWZlcmVuY2V9IGZyb20gXCIuLi91dGlscy9SZWZlcmVuY2VcIjtcclxuaW1wb3J0IHtTZW1hbnRpY0V4Y2VwdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCI7XHJcbmltcG9ydCB7UmVzdGF9IGZyb20gXCIuLi91dGlscy9BbGdlYnJhaWNPcGVyYXRpb25zRnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7Q250bnJ9IGZyb20gXCIuLi91dGlscy9DbnRuclwiO1xyXG5pbXBvcnQge0dyYXBodml6Tm9kZX0gZnJvbSBcIi4uL3V0aWxzL0dyYXBodml6Tm9kZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlQXNpZ25TdWJOb2RlIGV4dGVuZHMgT3Age1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsZjogT3A7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJ0OiBPcDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsZjogT3AsIHJ0OiBPcCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5sZiA9IGxmO1xyXG4gICAgICAgIHRoaXMucnQgPSBydDtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCk6IG9iamVjdCB7XHJcbiAgICAgICAgY29uc3QgbGYgPSB0aGlzLmxmLkV4ZShlbnYpO1xyXG4gICAgICAgIGNvbnN0IHJ0ID0gdGhpcy5ydC5FeGUoZW52KTtcclxuXHJcbiAgICAgICAgaWYgKCEobGYgaW5zdGFuY2VvZiBSZWZlcmVuY2UpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBTZW1hbnRpY0V4Y2VwdGlvbihgTm8gc2UgcHVlZGUgYXNpZ2FuciBhICR7bGZ9LCBsYXMgYXNpZ25hY2lvbmVzIHNvbG8gcHVlZGVuIHNlciBzb2JyZSB1bmEgcmVmZXJlbmNpYWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKGxmIGFzIFJlZmVyZW5jZSkuUHV0VmFsdWVPblJlZmVyZW5jZShcclxuICAgICAgICAgICAgUmVzdGEoKGxmIGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKSwgcnQgYXMgQ250bnIpXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gKGxmIGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBHZXRHcmFwaChlbnY6IEVudm1udCk6IEdyYXBodml6Tm9kZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHcmFwaHZpek5vZGUoJ1JFX0FTSUdOX1NVQicsIFt0aGlzLmxmLkdldEdyYXBoKGVudiksIHRoaXMucnQuR2V0R3JhcGgoZW52KV0pO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQge09wfSBmcm9tIFwiLi4vdXRpbHMvT3BcIjtcclxuaW1wb3J0IHtFbnZtbnR9IGZyb20gXCIuLi91dGlscy9FbnZtbnRcIjtcclxuaW1wb3J0IHtTdWJ9IGZyb20gXCIuLi91dGlscy9BbGdlYnJhaWNPcGVyYXRpb25zRnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7Q250bnJ9IGZyb20gXCIuLi91dGlscy9DbnRuclwiO1xyXG5pbXBvcnQge0dyYXBodml6Tm9kZX0gZnJvbSBcIi4uL3V0aWxzL0dyYXBodml6Tm9kZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlU3ViTm9kZSBleHRlbmRzIE9wIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGY6IE9wO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxmOiBPcCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5sZiA9IGxmO1xyXG4gICAgfVxyXG5cclxuICAgIEdPKGVudjogRW52bW50KTogb2JqZWN0IHtcclxuICAgICAgICByZXR1cm4gU3ViKHRoaXMubGYuRXhlKGVudikgYXMgQ250bnIpO1xyXG4gICAgfVxyXG5cclxuICAgIEdldEdyYXBoKGVudjogRW52bW50KTogR3JhcGh2aXpOb2RlIHtcclxuICAgICAgICByZXR1cm4gbmV3IEdyYXBodml6Tm9kZSgnUkVfU1VCJywgW3RoaXMubGYuR2V0R3JhcGgoZW52KV0pO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQge09wfSBmcm9tIFwiLi4vdXRpbHMvT3BcIjtcclxuaW1wb3J0IHtFbnZtbnR9IGZyb20gXCIuLi91dGlscy9FbnZtbnRcIjtcclxuaW1wb3J0IHtSZXR1cm5PYmp9IGZyb20gXCIuL1JldHVybk9ialwiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vdXRpbHMvQ250bnJcIjtcclxuaW1wb3J0IHtVTkRFRklORUR9IGZyb20gXCIuLi91dGlscy9QcmltaXRpdmVUeXBvQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7R3JhcGh2aXpOb2RlfSBmcm9tIFwiLi4vdXRpbHMvR3JhcGh2aXpOb2RlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmV0dXJuTm9kZSBleHRlbmRzIE9we1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSB2YWx1ZTogT3A7XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsdWU6IE9wKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgR08oZW52OiBFbnZtbnQpOiBvYmplY3Qge1xyXG4gICAgICAgIGlmKHRoaXMudmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlLkV4ZShlbnYpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFJldHVybk9iaih2YWx1ZSBhcyBDbnRucik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgUmV0dXJuT2JqKG5ldyBVTkRFRklORUQoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0R3JhcGgoZW52OiBFbnZtbnQpOiBHcmFwaHZpek5vZGUge1xyXG4gICAgICAgIHJldHVybiBuZXcgR3JhcGh2aXpOb2RlKCdSRVRVUk4nLCBbdGhpcy52YWx1ZS5HZXRHcmFwaChlbnYpXSk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtDbnRucn0gZnJvbSBcIi4uL3V0aWxzL0NudG5yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmV0dXJuT2JqIGV4dGVuZHMgQ250bnIge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSByZXR1cm5uOiBDbnRucjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihyZXR1cm5uOiBDbnRucikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5yZXR1cm5uID0gcmV0dXJubjtcclxuICAgIH1cclxuXHJcbiAgICB0b1N0cmluZyA9ICgpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIHJldHVybiBcIm1pIG9iamV0byByZXR1cm4gKFJldHVybk9iailcIjtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIGdldFZhbHVlKCk6IENudG5yIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXR1cm5uO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7UmVmZXJlbmNlfSBmcm9tIFwiLi4vdXRpbHMvUmVmZXJlbmNlXCI7XHJcbmltcG9ydCB7Qk9PTEVBTn0gZnJvbSBcIi4uL3V0aWxzL1ByaW1pdGl2ZVR5cG9Db250YWluZXJcIjtcclxuaW1wb3J0IHtTZW1hbnRpY0V4Y2VwdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCI7XHJcbmltcG9ydCB7R3JhcGh2aXpOb2RlfSBmcm9tIFwiLi4vdXRpbHMvR3JhcGh2aXpOb2RlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VudGVuY2VUZXJuYXJ5Tm9kZSBleHRlbmRzIE9we1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb25kaWNpb246IE9wO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSB0cnVlU2VudGVuY2U6IE9wO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBmYWxzZVNlbnRlbmNlOiBPcDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25kaXRpb246IE9wLCB0cnVlU2VudGVuY2U6IE9wLCBmYWxzZVNlbnRlbmNlOiBPcCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5jb25kaWNpb24gPSBjb25kaXRpb247XHJcbiAgICAgICAgdGhpcy50cnVlU2VudGVuY2UgPSB0cnVlU2VudGVuY2U7XHJcbiAgICAgICAgdGhpcy5mYWxzZVNlbnRlbmNlID0gZmFsc2VTZW50ZW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCk6IG9iamVjdCB7XHJcbiAgICAgICAgbGV0IGFucyA9IHRoaXMuY29uZGljaW9uLkV4ZShlbnYpO1xyXG4gICAgICAgIGlmIChhbnMgaW5zdGFuY2VvZiBSZWZlcmVuY2UpIHtcclxuICAgICAgICAgICAgYW5zID0gKGFucyBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIShhbnMgaW5zdGFuY2VvZiBCT09MRUFOKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgU2VtYW50aWNFeGNlcHRpb24oXCJDb25kaWNpb24gdXRpbGl6YWRhIGNvbiBwYXJhbWV0cm8gbm8gc29wb3J0YWRhIHBvciBvcGVyYWRvciB0ZXJuYXJpb1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgoYW5zIGFzIEJPT0xFQU4pLmdldFZhbHVlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJ1ZVNlbnRlbmNlLkV4ZShlbnYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5mYWxzZVNlbnRlbmNlLkV4ZShlbnYpO1xyXG4gICAgfVxyXG5cclxuICAgIEdldEdyYXBoKGVudjogRW52bW50KTogR3JhcGh2aXpOb2RlIHtcclxuICAgICAgICByZXR1cm4gbmV3IEdyYXBodml6Tm9kZSgnVEVSTkFSWScsIFt0aGlzLmNvbmRpY2lvbi5HZXRHcmFwaChlbnYpLCB0aGlzLnRydWVTZW50ZW5jZS5HZXRHcmFwaChlbnYpLCB0aGlzLmZhbHNlU2VudGVuY2UuR2V0R3JhcGgoZW52KV0pO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge1NUUklOR30gZnJvbSBcIi4uL3V0aWxzL1ByaW1pdGl2ZVR5cG9Db250YWluZXJcIjtcclxuaW1wb3J0IHtHcmFwaHZpek5vZGV9IGZyb20gXCIuLi91dGlscy9HcmFwaHZpek5vZGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdHJpbmdOb2RlIGV4dGVuZHMgT3B7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHZhbDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbDogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnZhbCA9IHZhbC5yZXBsYWNlKC9cXFxcbi9nLCBcIiYjMTM7JiMxMDsgICAgICAgXCIpLnJlcGxhY2UoL1xcXFx0L2csIFwiJiM5O1wiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgR08oZW52OiBFbnZtbnQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFNUUklORyh0aGlzLnZhbC5zdWJzdHJpbmcoMSwgdGhpcy52YWwubGVuZ3RoIC0gMSkpO1xyXG4gICAgfVxyXG5cclxuICAgIEdldEdyYXBoKGVudjogRW52bW50KTogR3JhcGh2aXpOb2RlIHtcclxuICAgICAgICByZXR1cm4gbmV3IEdyYXBodml6Tm9kZSgnU1RSSU5HJywgW25ldyBHcmFwaHZpek5vZGUodGhpcy52YWwuc3Vic3RyaW5nKDEsIHRoaXMudmFsLmxlbmd0aCAtIDEpKV0pO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQge09wfSBmcm9tIFwiLi4vdXRpbHMvT3BcIjtcclxuaW1wb3J0IHtFbnZtbnR9IGZyb20gXCIuLi91dGlscy9FbnZtbnRcIjtcclxuaW1wb3J0IHtSZXN0YX0gZnJvbSBcIi4uL3V0aWxzL0FsZ2VicmFpY09wZXJhdGlvbnNGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHtDbnRucn0gZnJvbSBcIi4uL3V0aWxzL0NudG5yXCI7XHJcbmltcG9ydCB7R3JhcGh2aXpOb2RlfSBmcm9tIFwiLi4vdXRpbHMvR3JhcGh2aXpOb2RlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3ViTm9kZSBleHRlbmRzIE9wIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGY6IE9wO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBydDogT3A7XHJcblxyXG4gICAgY29uc3RydWN0b3IobGY6IE9wLCBydDogT3ApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubGYgPSBsZjtcclxuICAgICAgICB0aGlzLnJ0ID0gcnQ7XHJcbiAgICB9XHJcblxyXG4gICAgR08oZW52OiBFbnZtbnQpOiBvYmplY3Qge1xyXG4gICAgICAgIHJldHVybiBSZXN0YSgodGhpcy5sZi5FeGUoZW52KSBhcyBDbnRuciksICh0aGlzLnJ0LkV4ZShlbnYpIGFzIENudG5yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0R3JhcGgoZW52OiBFbnZtbnQpOiBHcmFwaHZpek5vZGUge1xyXG4gICAgICAgIHJldHVybiBuZXcgR3JhcGh2aXpOb2RlKCdTVUInLCBbdGhpcy5sZi5HZXRHcmFwaChlbnYpLCB0aGlzLnJ0LkdldEdyYXBoKGVudildKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7T3B9IGZyb20gXCIuLi91dGlscy9PcFwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL3V0aWxzL0Vudm1udFwiO1xyXG5pbXBvcnQge1N1bWF9IGZyb20gXCIuLi91dGlscy9BbGdlYnJhaWNPcGVyYXRpb25zRnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7Q250bnJ9IGZyb20gXCIuLi91dGlscy9DbnRuclwiO1xyXG5pbXBvcnQge0dyYXBodml6Tm9kZX0gZnJvbSBcIi4uL3V0aWxzL0dyYXBodml6Tm9kZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN1bU5vZGUgZXh0ZW5kcyBPcCB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxmOiBPcDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcnQ6IE9wO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxmOiBPcCwgcnQ6IE9wKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmxmID0gbGY7XHJcbiAgICAgICAgdGhpcy5ydCA9IHJ0O1xyXG4gICAgfVxyXG5cclxuICAgIEdPKGVudjogRW52bW50KTogb2JqZWN0IHtcclxuICAgICAgICByZXR1cm4gU3VtYSgodGhpcy5sZi5FeGUoZW52KSBhcyBDbnRuciksICh0aGlzLnJ0LkV4ZShlbnYpIGFzIENudG5yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0R3JhcGgoZW52OiBFbnZtbnQpOiBHcmFwaHZpek5vZGUge1xyXG4gICAgICAgIHJldHVybiBuZXcgR3JhcGh2aXpOb2RlKCdTVU0nLCBbdGhpcy5sZi5HZXRHcmFwaChlbnYpLCB0aGlzLnJ0LkdldEdyYXBoKGVudildKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7SWd1YWx9IGZyb20gXCIuLi91dGlscy9SZWxhdGlvbmFsT3BlcmF0aW9uc0Z1bmN0aW9uc1wiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vdXRpbHMvQ250bnJcIjtcclxuaW1wb3J0IHtCT09MRUFOfSBmcm9tIFwiLi4vdXRpbHMvUHJpbWl0aXZlVHlwb0NvbnRhaW5lclwiO1xyXG5pbXBvcnQge0JyZWFrTm9kZX0gZnJvbSBcIi4vQnJlYWtOb2RlXCI7XHJcbmltcG9ydCB7QnJlYWtPYmp9IGZyb20gXCIuL0JyZWFrT2JqXCI7XHJcbmltcG9ydCB7UmV0dXJuT2JqfSBmcm9tIFwiLi9SZXR1cm5PYmpcIjtcclxuaW1wb3J0IHtDb250aW51ZU9ian0gZnJvbSBcIi4vQ29udGludWVPYmpcIjtcclxuaW1wb3J0IHtDYXNlTm9kZX0gZnJvbSBcIi4vQ2FzZU5vZGVcIjtcclxuaW1wb3J0IHtTZW1hbnRpY0V4Y2VwdGlvbn0gZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCI7XHJcbmltcG9ydCB7R3JhcGh2aXpOb2RlfSBmcm9tIFwiLi4vdXRpbHMvR3JhcGh2aXpOb2RlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3dpdGNoTm9kZSBleHRlbmRzIE9wIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29uZGl0aW9uOiBPcDtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2FzZXM6IEFycmF5PENhc2VOb2RlPjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25kaXRpb246IE9wLCBjYXNlczogQXJyYXk8Q2FzZU5vZGU+KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcclxuICAgICAgICB0aGlzLmNhc2VzID0gY2FzZXM7XHJcbiAgICB9XHJcblxyXG4gICAgR08oZW52OiBFbnZtbnQpOiBvYmplY3Qge1xyXG4gICAgICAgIGxldCBjb25kaXRpb24gPSB0aGlzLmNvbmRpdGlvbi5FeGUoZW52KTtcclxuICAgICAgICBsZXQgcmV0OiBDbnRuciA9IHVuZGVmaW5lZDtcclxuICAgICAgICBsZXQgaGFzRW50ZXIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgbGV0IGRlZmF1bHRDb3VudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgQ2FzZSBvZiB0aGlzLmNhc2VzKSB7XHJcbiAgICAgICAgICAgIGlmIChDYXNlLmdldENvbmRpdGlvblZhbHVlKCkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRDb3VudCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGVmYXVsdENvdW50ID4gMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgU2VtYW50aWNFeGNlcHRpb24oXCJObyBwdWVkZW4gZXhpc2lzdGlyIG1hcyBkZSB1bmEgc2VudGVuY2lhICdkZWZhdWx0JyBkZW50cm8gZGUgdW4gY2ljbG8gc3dpdGNoXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgQ2FzZSBvZiB0aGlzLmNhc2VzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXQgaW5zdGFuY2VvZiBCcmVha09iaikge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJldCBpbnN0YW5jZW9mIFJldHVybk9iaikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmV0IGluc3RhbmNlb2YgQ29udGludWVPYmopIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihDYXNlLmdldENvbmRpdGlvblZhbHVlKCkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjYXNlVmFsdWUgPSBDYXNlLmdldENvbmRpdGlvblZhbHVlKCkuRXhlKGVudik7XHJcbiAgICAgICAgICAgICAgICBpZiAoIShJZ3VhbChjb25kaXRpb24gYXMgQ250bnIsIGNhc2VWYWx1ZSBhcyBDbnRucikgYXMgQk9PTEVBTikuZ2V0VmFsdWUoKSAmJiAhaGFzRW50ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZW52MCA9IG5ldyBFbnZtbnQoZW52LCBDYXNlLmdldFNlbnRlbmNlcygpKTtcclxuICAgICAgICAgICAgcmV0ID0gZW52MC5HT19BTEwoKTtcclxuICAgICAgICAgICAgaGFzRW50ZXIgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJldCBpbnN0YW5jZW9mIEJyZWFrT2JqKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmV0IGluc3RhbmNlb2YgUmV0dXJuT2JqKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0R3JhcGgoZW52OiBFbnZtbnQpOiBHcmFwaHZpek5vZGUge1xyXG4gICAgICAgIHJldHVybiBuZXcgR3JhcGh2aXpOb2RlKCdTV1RJQ0gnLCBbXHJcbiAgICAgICAgICAgIHRoaXMuY29uZGl0aW9uLkdldEdyYXBoKGVudiksXHJcbiAgICAgICAgICAgIG5ldyBHcmFwaHZpek5vZGUoJ1NXSVRDSF9CT0RZJywgdGhpcy5jYXNlcy5tYXAoY2FzZWUgPT5cclxuICAgICAgICAgICAgICAgIG5ldyBHcmFwaHZpek5vZGUoJ0NBU0UnLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZWUuZ2V0Q29uZGl0aW9uVmFsdWUoKSA/IGNhc2VlLmdldENvbmRpdGlvblZhbHVlKCkuR2V0R3JhcGgoZW52KSA6IG5ldyBHcmFwaHZpek5vZGUoJ1VOREVGSU5FRCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBHcmFwaHZpek5vZGUoJ1NFTlRFTkNFUycsIGNhc2VlLmdldFNlbnRlbmNlcygpLm1hcChzZW50ZW5jZSA9PiBzZW50ZW5jZS5HZXRHcmFwaChlbnYpKSlcclxuICAgICAgICAgICAgICAgIF0pKSlcclxuICAgICAgICBdKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge09wfSBmcm9tIFwiLi4vdXRpbHMvT3BcIjtcclxuaW1wb3J0IHtFbnZtbnR9IGZyb20gXCIuLi91dGlscy9FbnZtbnRcIjtcclxuaW1wb3J0IHtVTkRFRklORUR9IGZyb20gXCIuLi91dGlscy9QcmltaXRpdmVUeXBvQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7R3JhcGh2aXpOb2RlfSBmcm9tIFwiLi4vdXRpbHMvR3JhcGh2aXpOb2RlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVW5kZWZpbmVkTm9kZSBleHRlbmRzIE9we1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBHTyhlbnY6IEVudm1udCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVU5ERUZJTkVEKCk7XHJcbiAgICB9XHJcblxyXG4gICAgR2V0R3JhcGgoZW52OiBFbnZtbnQpOiBHcmFwaHZpek5vZGUge1xyXG4gICAgICAgIHJldHVybiBuZXcgR3JhcGh2aXpOb2RlKCdVTkRFRklORUQnLCBbbmV3IEdyYXBodml6Tm9kZSgndW5kZWZpbmVkJyldKTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IHtPcH0gZnJvbSBcIi4uL3V0aWxzL09wXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vdXRpbHMvRW52bW50XCI7XHJcbmltcG9ydCB7TG9naWNXaGlsZX0gZnJvbSBcIi4uL3V0aWxzL1V0aWxzXCI7XHJcbmltcG9ydCB7R3JhcGh2aXpOb2RlfSBmcm9tIFwiLi4vdXRpbHMvR3JhcGh2aXpOb2RlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgV2hpbGVOb2RlIGV4dGVuZHMgT3Age1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb25kaXRpb246IE9wO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzZW50ZW5jZXM6IEFycmF5PE9wPjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25kaXRpb246IE9wLCBzZW50ZW5jZXM6IEFycmF5PE9wPikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XHJcbiAgICAgICAgdGhpcy5zZW50ZW5jZXMgPSBzZW50ZW5jZXM7XHJcbiAgICB9XHJcblxyXG4gICAgR08oZW52OiBFbnZtbnQpOiBvYmplY3Qge1xyXG4gICAgICAgIHJldHVybiBMb2dpY1doaWxlKGVudiwgdGhpcy5jb25kaXRpb24sIHRoaXMuc2VudGVuY2VzLCBudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBHZXRHcmFwaChlbnY6IEVudm1udCk6IEdyYXBodml6Tm9kZSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHcmFwaHZpek5vZGUoJ1dISUxFJywgW3RoaXMuY29uZGl0aW9uLkdldEdyYXBoKGVudiksIG5ldyBHcmFwaHZpek5vZGUoJ1dISUxFX0JPRFknLCB0aGlzLnNlbnRlbmNlcy5tYXAoc2VudGVuY2UgPT4gc2VudGVuY2UuR2V0R3JhcGgoZW52KSkpXSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDbnRucn0gZnJvbSBcIi4vQ250bnJcIjtcclxuaW1wb3J0IHtSZWZlcmVuY2V9IGZyb20gXCIuL1JlZmVyZW5jZVwiO1xyXG5pbXBvcnQge1NlbWFudGljRXhjZXB0aW9ufSBmcm9tIFwiLi9VdGlsc1wiO1xyXG5pbXBvcnQge0JPT0xFQU4sIE5BTiwgTlVMTCwgTlVNQkVSLCBTVFJJTkcsIFVOREVGSU5FRH0gZnJvbSBcIi4vUHJpbWl0aXZlVHlwb0NvbnRhaW5lclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFN1bWEobGY6IENudG5yLCBydDogQ250bnIpOiBDbnRuciB7XHJcbiAgICBsZiBpbnN0YW5jZW9mIFJlZmVyZW5jZSA/IGxmID0gKGxmIGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKSA6IGxmO1xyXG4gICAgcnQgaW5zdGFuY2VvZiBSZWZlcmVuY2UgPyBydCA9IChydCBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCkgOiBydDtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBTdW1hcihsZiwgcnQpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBTZW1hbnRpY0V4Y2VwdGlvbihgT3BlcmFjaW9uIGVudHJlIHRpcG9zICggJHtsZi50eXBvfSArICR7cnQudHlwb30gKSBubyBwZXJtaXRpZGEuYClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBTdW1hcihsZjogYW55LCBydDogYW55KTogQ250bnIge1xyXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5VTUJFUjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOVU1CRVIoKGxmIGFzIE5VTUJFUikuZ2V0VmFsdWUoKSArIChydCBhcyBOVU1CRVIpLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5VTUJFUigobGYgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpICsgKHJ0IGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBTVFJJTkc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU1RSSU5HKChsZiBhcyBOVU1CRVIpLmdldFZhbHVlKCkgKyAocnQgYXMgU1RSSU5HKS5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBsZiBpbnN0YW5jZW9mIEJPT0xFQU46XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5VTUJFUigobGYgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSArIChydCBhcyBOVU1CRVIpLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5VTUJFUigobGYgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSArIChydCBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgU1RSSU5HOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNUUklORygobGYgYXMgQk9PTEVBTikuZ2V0VmFsdWUoKSArIChydCBhcyBTVFJJTkcpLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgU1RSSU5HOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5VTUJFUjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTVFJJTkcoKGxmIGFzIFNUUklORykuZ2V0VmFsdWUoKSArIChydCBhcyBOVU1CRVIpLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNUUklORygobGYgYXMgU1RSSU5HKS5nZXRWYWx1ZSgpICsgKHJ0IGFzIEJPT0xFQU4pLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBTVFJJTkc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU1RSSU5HKChsZiBhcyBTVFJJTkcpLmdldFZhbHVlKCkgKyAocnQgYXMgU1RSSU5HKS5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgVU5ERUZJTkVEOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNUUklORygobGYgYXMgU1RSSU5HKS5nZXRWYWx1ZSgpICsgKHJ0IGFzIFVOREVGSU5FRCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOVUxMOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNUUklORygobGYgYXMgU1RSSU5HKS5nZXRWYWx1ZSgpICsgKHJ0IGFzIE5VTEwpKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBsZiBpbnN0YW5jZW9mIFVOREVGSU5FRDpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBTVFJJTkc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU1RSSU5HKChsZiBhcyBVTkRFRklORUQpICsgKHJ0IGFzIFNUUklORykuZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBOVUxMOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIFNUUklORzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTVFJJTkcoKGxmIGFzIE5VTEwpICsgKHJ0IGFzIFNUUklORykuZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZXN0YShsZjogQ250bnIsIHJ0OiBDbnRucik6IENudG5yIHtcclxuICAgIGxmIGluc3RhbmNlb2YgUmVmZXJlbmNlID8gbGYgPSAobGYgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpIDogbGY7XHJcbiAgICBydCBpbnN0YW5jZW9mIFJlZmVyZW5jZSA/IHJ0ID0gKHJ0IGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKSA6IHJ0O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIFJlc3RhcihsZiwgcnQpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBTZW1hbnRpY0V4Y2VwdGlvbihgT3BlcmFjaW9uIGVudHJlIHRpcG9zICggJHtsZi50eXBvfSAtICR7cnQudHlwb30gKSBubyBwZXJtaXRpZGEuYClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBSZXN0YXIobGY6IGFueSwgcnQ6IGFueSk6IENudG5yIHtcclxuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgY2FzZSBsZiBpbnN0YW5jZW9mIE5VTUJFUjpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOVU1CRVI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTlVNQkVSKChsZiBhcyBOVU1CRVIpLmdldFZhbHVlKCkgLSAocnQgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOVU1CRVIoKGxmIGFzIE5VTUJFUikuZ2V0VmFsdWUoKSAtIChydCBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBsZiBpbnN0YW5jZW9mIEJPT0xFQU46XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5VTUJFUigobGYgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSAtIChydCBhcyBOVU1CRVIpLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5VTUJFUigobGYgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSAtIChydCBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE11bHRpcGxpY2FjaW9uKGxmOiBDbnRuciwgcnQ6IENudG5yKTogQ250bnIge1xyXG4gICAgbGYgaW5zdGFuY2VvZiBSZWZlcmVuY2UgPyBsZiA9IChsZiBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCkgOiBsZjtcclxuICAgIHJ0IGluc3RhbmNlb2YgUmVmZXJlbmNlID8gcnQgPSAocnQgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpIDogcnQ7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gTXVsdGlwbGljYXIobGYsIHJ0KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgU2VtYW50aWNFeGNlcHRpb24oYE9wZXJhY2lvbiBlbnRyZSB0aXBvcyAoICR7bGYudHlwb30gKiAke3J0LnR5cG99ICkgbm8gcGVybWl0aWRhLmApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gTXVsdGlwbGljYXIobGY6IGFueSwgcnQ6IGFueSk6IENudG5yIHtcclxuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgY2FzZSBsZiBpbnN0YW5jZW9mIE5VTUJFUjpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOVU1CRVI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTlVNQkVSKChsZiBhcyBOVU1CRVIpLmdldFZhbHVlKCkgKiAocnQgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOVU1CRVIoKGxmIGFzIE5VTUJFUikuZ2V0VmFsdWUoKSAqIChydCBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBsZiBpbnN0YW5jZW9mIEJPT0xFQU46XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5VTUJFUigobGYgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSAqIChydCBhcyBOVU1CRVIpLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5VTUJFUigobGYgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSAqIChydCBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIERpdmlzaW9uKGxmOiBDbnRuciwgcnQ6IENudG5yKTogQ250bnIge1xyXG4gICAgbGYgaW5zdGFuY2VvZiBSZWZlcmVuY2UgPyBsZiA9IChsZiBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCkgOiBsZjtcclxuICAgIHJ0IGluc3RhbmNlb2YgUmVmZXJlbmNlID8gcnQgPSAocnQgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpIDogcnQ7XHJcblxyXG4gICAgaWYocnQgaW5zdGFuY2VvZiBOVU1CRVIpe1xyXG4gICAgICAgIGlmKChydCBhcyBOVU1CRVIpLmdldFZhbHVlKCkgPT09IDApe1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgU2VtYW50aWNFeGNlcHRpb24oJ09wZXJhY2nDs24gbm8gdsOhbGlkYSwgbm8gc2UgcHVlZGUgZGl2aWRpciBlbnRyZSAwJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIGlmKHJ0IGluc3RhbmNlb2YgQk9PTEVBTil7XHJcbiAgICAgICAgaWYoKHJ0IGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkgPT09IDApe1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgU2VtYW50aWNFeGNlcHRpb24oJ09wZXJhY2nDs24gbm8gdsOhbGlkYSwgbm8gc2UgcHVlZGUgZGl2aWRpciBlbnRyZSAwJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gRGl2aWRpcihsZiwgcnQpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBTZW1hbnRpY0V4Y2VwdGlvbihgT3BlcmFjaW9uIGVudHJlIHRpcG9zICggJHtsZi50eXBvfSAvICR7cnQudHlwb30gKSBubyBwZXJtaXRpZGEuYClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBEaXZpZGlyKGxmOiBhbnksIHJ0OiBhbnkpOiBDbnRuciB7XHJcbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBOVU1CRVI6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5VTUJFUigobGYgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpIC8gKHJ0IGFzIE5VTUJFUikuZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIEJPT0xFQU46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTlVNQkVSKChsZiBhcyBOVU1CRVIpLmdldFZhbHVlKCkgLyAocnQgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5VTUJFUjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOVU1CRVIoKGxmIGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkgLyAocnQgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOVU1CRVIoKGxmIGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkgLyAocnQgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNb2R1bG8obGY6IENudG5yLCBydDogQ250bnIpOiBDbnRuciB7XHJcbiAgICBsZiBpbnN0YW5jZW9mIFJlZmVyZW5jZSA/IGxmID0gKGxmIGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKSA6IGxmO1xyXG4gICAgcnQgaW5zdGFuY2VvZiBSZWZlcmVuY2UgPyBydCA9IChydCBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCkgOiBydDtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBNb2QobGYsIHJ0KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgU2VtYW50aWNFeGNlcHRpb24oYE9wZXJhY2lvbiBlbnRyZSB0aXBvcyAoICR7bGYudHlwb30gJSAke3J0LnR5cG99ICkgbm8gcGVybWl0aWRhLmApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gTW9kKGxmOiBhbnksIHJ0OiBhbnkpOiBDbnRuciB7XHJcbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBOVU1CRVI6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5VTUJFUigobGYgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpICUgKHJ0IGFzIE5VTUJFUikuZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIEJPT0xFQU46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTlVNQkVSKChsZiBhcyBOVU1CRVIpLmdldFZhbHVlKCkgJSAocnQgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5VTUJFUjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOVU1CRVIoKGxmIGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkgJSAocnQgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOVU1CRVIoKGxmIGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkgJSAocnQgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQb3RlbmNpYShsZjogQ250bnIsIHJ0OiBDbnRucik6IENudG5yIHtcclxuICAgIGxmIGluc3RhbmNlb2YgUmVmZXJlbmNlID8gbGYgPSAobGYgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpIDogbGY7XHJcbiAgICBydCBpbnN0YW5jZW9mIFJlZmVyZW5jZSA/IHJ0ID0gKHJ0IGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKSA6IHJ0O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIFBvdChsZiwgcnQpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBTZW1hbnRpY0V4Y2VwdGlvbihgT3BlcmFjaW9uIGVudHJlIHRpcG9zICggJHtsZi50eXBvfSAqKiAke3J0LnR5cG99ICkgbm8gcGVybWl0aWRhLmApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gUG90KGxmOiBhbnksIHJ0OiBhbnkpOiBDbnRuciB7XHJcbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBOVU1CRVI6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5VTUJFUigobGYgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpICoqIChydCBhcyBOVU1CRVIpLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE5VTUJFUigobGYgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpICoqICAocnQgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5VTUJFUjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBOVU1CRVIoKGxmIGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkgKiogKHJ0IGFzIE5VTUJFUikuZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIEJPT0xFQU46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTlVNQkVSKChsZiBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpICoqIChydCBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFkZChsZjogQ250bnIpOiBDbnRuciB7XHJcbiAgICBpZiAoIShsZiBpbnN0YW5jZW9mIFJlZmVyZW5jZSkpIHtcclxuICAgICAgICB0aHJvdyBuZXcgU2VtYW50aWNFeGNlcHRpb24oXCJPcGVyYWNpb24ge3JlZisrfSBwZXJtaXRpZGEgc29sYW1lbnRlIHNvYnJlIHJlZmVyZW5jYXNcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdmFsID0gKGxmIGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKTtcclxuICAgIGlmICh2YWwgaW5zdGFuY2VvZiBOVU1CRVIpIHtcclxuICAgICAgICAobGYgYXMgUmVmZXJlbmNlKS5zZXRWYWx1ZShuZXcgTlVNQkVSKCh2YWwgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpICsgMSkpO1xyXG4gICAgICAgIHJldHVybiB2YWwgYXMgTlVNQkVSO1xyXG4gICAgfVxyXG5cclxuICAgIHRocm93IG5ldyBTZW1hbnRpY0V4Y2VwdGlvbihcIk9wZXJhY2lvbiB7cmVmKyt9IE5vIHNlIHB1ZWRlIHJlYWxpemFyIHNvYnJlIHZhcmlhYmxlcyBkaXN0aW50YXMgZGUgdGlwbyBudW1iZXJcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTdWIobGY6IENudG5yKTogQ250bnIge1xyXG4gICAgaWYgKCEobGYgaW5zdGFuY2VvZiBSZWZlcmVuY2UpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFNlbWFudGljRXhjZXB0aW9uKFwiT3BlcmFjaW9uIHtyZWYtLX0gcGVybWl0aWRhIHNvbGFtZW50ZSBzb2JyZSByZWZlcmVuY2FzXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHZhbCA9IChsZiBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCk7XHJcbiAgICBpZiAodmFsIGluc3RhbmNlb2YgTlVNQkVSKSB7XHJcbiAgICAgICAgKGxmIGFzIFJlZmVyZW5jZSkuc2V0VmFsdWUobmV3IE5VTUJFUigodmFsIGFzIE5VTUJFUikuZ2V0VmFsdWUoKSAtIDEpKTtcclxuICAgICAgICByZXR1cm4gdmFsIGFzIE5VTUJFUjtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyBuZXcgU2VtYW50aWNFeGNlcHRpb24oXCJPcGVyYWNpb24ge3JlZi0tfSBObyBzZSBwdWVkZSByZWFsaXphciBzb2JyZSB2YXJpYWJsZXMgZGlzdGludGFzIGRlIHRpcG8gbnVtYmVyXCIpO1xyXG59XHJcbiIsImltcG9ydCB7UmVmZXJlbmNlfSBmcm9tIFwiLi9SZWZlcmVuY2VcIjtcclxuaW1wb3J0IHtVTkRFRklORUR9IGZyb20gXCIuL1ByaW1pdGl2ZVR5cG9Db250YWluZXJcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDbnRuciB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IG93bmVyOiBDbnRucjtcclxuICAgIHB1YmxpYyByZWFkb25seSBwcm9wcyA9IG5ldyBNYXA8c3RyaW5nLCBDbnRucj4oKTtcclxuICAgIHB1YmxpYyB0eXBvOiBzdHJpbmc7XHJcblxyXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKG93bmVyPzogQ250bnIpIHtcclxuICAgICAgICB0aGlzLm93bmVyID0gb3duZXIgfHwgbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgQXNPYmplY3RQcm9wcygpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBhbnMgPSBcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuXCI7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5mb3JFYWNoKCh2LCBrKSA9PiB7XHJcbiAgICAgICAgICAgIGFucyArPSBrICsgJyA9PiAnICsgdiArICdcXG4nO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFucyArPSBcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXFxuXCI7XHJcbiAgICAgICAgcmV0dXJuIGFucztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgQWRkUHJvcGVydHkoaWQ6IHN0cmluZywgY250bnI6IENudG5yKTogdm9pZCB7XHJcbiAgICAgICAgaWQgPSBpZC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIHRoaXMucHJvcHMuc2V0KGlkLCBjbnRucik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldFByb3BlcnR5KGlkOiBzdHJpbmcpOiBDbnRuciB7XHJcbiAgICAgICAgaWQgPSBpZC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IHZhbCA9IHRoaXMucHJvcHMuZ2V0KGlkKTtcclxuICAgICAgICBpZiAodmFsICE9PSBudWxsICYmIHZhbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3RoaXMucHJvcHMuc2V0KGlkLCBuZXcgUmVmZXJlbmNlKCkpO1xyXG4gICAgICAgIC8vcmV0dXJuIHRoaXMucHJvcHMuZ2V0KGlkKTtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBEZWNsYXJlKGlkOiBzdHJpbmcsIGNudG5yOiBDbnRucik6IHZvaWQge1xyXG4gICAgICAgIGlkID0gaWQudG9VcHBlckNhc2UoKTtcclxuICAgICAgICB0aGlzLnByb3BzLnNldChpZCwgY250bnIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRUeXBvKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwb1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBTZXRUeXBvKHR5cG86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudHlwbyA9IHR5cG87XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldE93bmVyKCk6IENudG5yIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vd25lcjtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgQ29uc29sZSB7XHJcbiAgICBwdWJsaWMgc3RhdGljIGxvZzogc3RyaW5nID0gJyc7XHJcbn0iLCJpbXBvcnQge0NudG5yfSBmcm9tIFwiLi9DbnRuclwiO1xyXG5pbXBvcnQge09wfSBmcm9tIFwiLi9PcFwiO1xyXG5pbXBvcnQge0JyZWFrT2JqfSBmcm9tIFwiLi4vbm9kZXMvQnJlYWtPYmpcIjtcclxuaW1wb3J0IHtSZXR1cm5PYmp9IGZyb20gXCIuLi9ub2Rlcy9SZXR1cm5PYmpcIjtcclxuaW1wb3J0IHtDb250aW51ZU9ian0gZnJvbSBcIi4uL25vZGVzL0NvbnRpbnVlT2JqXCI7XHJcbmltcG9ydCB7RGVjbGFyZUZ1bk5vZGV9IGZyb20gXCIuLi9ub2Rlcy9EZWNsYXJlRnVuTm9kZVwiO1xyXG5pbXBvcnQge0RlY2xhcmVUeXBlU3RydWN0dXJlTm9kZX0gZnJvbSBcIi4uL25vZGVzL0RlY2xhcmVUeXBlU3RydWN0dXJlTm9kZVwiO1xyXG5pbXBvcnQge0dyYXBodml6Tm9kZX0gZnJvbSBcIi4vR3JhcGh2aXpOb2RlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRW52bW50IGV4dGVuZHMgQ250bnIge1xyXG4gICAgcHVibGljIHJlYWRvbmx5IEV4dHJhID0gbmV3IE1hcDxzdHJpbmcsIGFueT4oKTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgb3BlcmF0aW9uczogQXJyYXk8T3A+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG93bmVyOiBDbnRuciwgb3BlcmF0aW9uczogQXJyYXk8T3A+KSB7XHJcbiAgICAgICAgc3VwZXIob3duZXIpO1xyXG4gICAgICAgIHRoaXMub3BlcmF0aW9ucyA9IG9wZXJhdGlvbnM7XHJcbiAgICAgICAgdGhpcy50eXBvID0gXCJBbWJpdG9cIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR09fQUxMKCk6IENudG5yIHtcclxuICAgICAgICBmb3IgKGxldCBvcCBvZiB0aGlzLm9wZXJhdGlvbnMpIHtcclxuICAgICAgICAgICAgaWYgKG9wIGluc3RhbmNlb2YgRGVjbGFyZUZ1bk5vZGUgfHwgb3AgaW5zdGFuY2VvZiBEZWNsYXJlVHlwZVN0cnVjdHVyZU5vZGUpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3AuRXhlKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBvcCBvZiB0aGlzLm9wZXJhdGlvbnMpIHtcclxuICAgICAgICAgICAgaWYgKCEob3AgaW5zdGFuY2VvZiBEZWNsYXJlRnVuTm9kZSB8fCBvcCBpbnN0YW5jZW9mIERlY2xhcmVUeXBlU3RydWN0dXJlTm9kZSkpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IG9wLkV4ZSh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgQnJlYWtPYmogfHwgcmVzdWx0IGluc3RhbmNlb2YgUmV0dXJuT2JqIHx8IHJlc3VsdCBpbnN0YW5jZW9mIENvbnRpbnVlT2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQgYXMgQ250bnI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0R3JhcGgoKTogR3JhcGh2aXpOb2RlIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnYXZlcicpO1xyXG4gICAgICAgIHJldHVybiBuZXcgR3JhcGh2aXpOb2RlKCdST09UJywgdGhpcy5vcGVyYXRpb25zLm1hcChvcGVyYXRpb24gPT4gb3BlcmF0aW9uLkdldEdyYXBoKHRoaXMpKSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge05vZGVzQ29udHJvbH0gZnJvbSBcIi4vTm9kZXNDb250cm9sXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR3JhcGh2aXpOb2RlIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbGFiZWw6IHN0cmluZztcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2hpbGRzOiBHcmFwaHZpek5vZGVbXTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgaWQ6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihsYWJlbDogc3RyaW5nLCBjaGlsZHM6IEdyYXBodml6Tm9kZVtdID0gW10pIHtcclxuICAgICAgICB0aGlzLmxhYmVsID0gbGFiZWw7XHJcbiAgICAgICAgdGhpcy5jaGlsZHMgPSBjaGlsZHM7XHJcbiAgICAgICAgdGhpcy5pZCA9IGBuJHtOb2Rlc0NvbnRyb2wuR2V0Tm9kZUlkKCl9YDtcclxuICAgIH1cclxuXHJcbiAgICBHZXRJZCA9ICgpOiBzdHJpbmcgPT4gdGhpcy5pZDtcclxuXHJcbiAgICB0b1N0cmluZyA9ICgpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IGAke3RoaXMuaWR9IFtsYWJlbD1cIiR7dGhpcy5sYWJlbH1cIl07XFxuYDtcclxuICAgICAgICB0aGlzLmNoaWxkcy5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgdmFsdWUgKz0gYCR7dGhpcy5pZH0gLT4gJHtjaGlsZC5HZXRJZCgpfTtcXG5gO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY2hpbGRzLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICB2YWx1ZSArPSBjaGlsZDtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9O1xyXG59IiwiaW1wb3J0IHtDbnRucn0gZnJvbSBcIi4vQ250bnJcIjtcclxuaW1wb3J0IHtSZWZlcmVuY2V9IGZyb20gXCIuL1JlZmVyZW5jZVwiO1xyXG5pbXBvcnQge1NlbWFudGljRXhjZXB0aW9ufSBmcm9tIFwiLi9VdGlsc1wiO1xyXG5pbXBvcnQge0JPT0xFQU4sIE5BTiwgTlVMTCwgTlVNQkVSLCBTVFJJTkcsIFVOREVGSU5FRH0gZnJvbSBcIi4vUHJpbWl0aXZlVHlwb0NvbnRhaW5lclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE9yKGxmOiBDbnRuciwgcnQ6IENudG5yKTogQ250bnIge1xyXG4gICAgbGYgaW5zdGFuY2VvZiBSZWZlcmVuY2UgPyBsZiA9IChsZiBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCkgOiBsZjtcclxuICAgIHJ0IGluc3RhbmNlb2YgUmVmZXJlbmNlID8gcnQgPSAocnQgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpIDogcnQ7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gb3IobGYsIHJ0KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgU2VtYW50aWNFeGNlcHRpb24oYE9wZXJhY2lvbiBlbnRyZSB0aXBvcyAoICR7bGYudHlwb30gfHwgJHtydC50eXBvfSApIG5vIHBlcm1pdGlkYS5gKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvcihsZjogYW55LCBydDogYW55KTogQ250bnIge1xyXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oKGxmIGFzIEJPT0xFQU4pLmdldFZhbHVlKCkgfHwgKHJ0IGFzIEJPT0xFQU4pLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQW5kKGxmOiBDbnRuciwgcnQ6IENudG5yKTogQ250bnIge1xyXG4gICAgbGYgaW5zdGFuY2VvZiBSZWZlcmVuY2UgPyBsZiA9IChsZiBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCkgOiBsZjtcclxuICAgIHJ0IGluc3RhbmNlb2YgUmVmZXJlbmNlID8gcnQgPSAocnQgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpIDogcnQ7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gYW5kKGxmLCBydCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFNlbWFudGljRXhjZXB0aW9uKGBPcGVyYWNpb24gZW50cmUgdGlwb3MgKCAke2xmLnR5cG99ICYmICR7cnQudHlwb30gKSBubyBwZXJtaXRpZGEuYCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYW5kKGxmOiBhbnksIHJ0OiBhbnkpOiBDbnRuciB7XHJcbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIEJPT0xFQU46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTigobGYgYXMgQk9PTEVBTikuZ2V0VmFsdWUoKSAmJiAocnQgYXMgQk9PTEVBTikuZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOb3QobGY6IENudG5yKTogQ250bnIge1xyXG4gICAgbGYgaW5zdGFuY2VvZiBSZWZlcmVuY2UgPyBsZiA9IChsZiBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCkgOiBsZjtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBub3QobGYpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBTZW1hbnRpY0V4Y2VwdGlvbihgT3BlcmFjaW9uIGVudHJlIHRpcG9zICggISAke2xmLnR5cG99ICkgbm8gcGVybWl0aWRhLmApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG5vdChsZjogYW55KTogQ250bnIge1xyXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTighKGxmIGFzIEJPT0xFQU4pLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBOb2Rlc0NvbnRyb2wge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbm9kZUlkQ291bnQgPSAwO1xyXG4gICAgcHVibGljIHN0YXRpYyBHZXROb2RlSWQgPSAoKSA9PiBOb2Rlc0NvbnRyb2wubm9kZUlkQ291bnQrKztcclxufSIsImltcG9ydCB7RW52bW50fSBmcm9tIFwiLi9FbnZtbnRcIjtcclxuaW1wb3J0IHtFcnJvckNvbXBvfSBmcm9tIFwiLi9VdGlsc1wiO1xyXG5pbXBvcnQge0dyYXBodml6Tm9kZX0gZnJvbSBcIi4vR3JhcGh2aXpOb2RlXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgT3Age1xyXG4gICAgcHVibGljIEV4ZShlbnY6IEVudm1udCk6IG9iamVjdHtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkdPKGVudik7XHJcbiAgICAgICAgfWNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvckNvbXBvKGUubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBHTyhlbnY6IEVudm1udCk6IG9iamVjdDtcclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgR2V0R3JhcGgoZW52OiBFbnZtbnQpOiBHcmFwaHZpek5vZGU7XHJcbn0iLCJpbXBvcnQge0NudG5yfSBmcm9tIFwiLi9DbnRuclwiO1xyXG5pbXBvcnQge1JlZmVyZW5jZX0gZnJvbSBcIi4vUmVmZXJlbmNlXCI7XHJcbmltcG9ydCB7TGVuZ3RofSBmcm9tIFwiLi9uYXRpdmVGdW5jdGlvbnMvbGVuZ3RoXCI7XHJcbmltcG9ydCB7UHVzaH0gZnJvbSBcIi4vbmF0aXZlRnVuY3Rpb25zL3B1c2hcIjtcclxuaW1wb3J0IHtQb3B9IGZyb20gXCIuL25hdGl2ZUZ1bmN0aW9ucy9wb3BcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCT09MRUFOIGV4dGVuZHMgQ250bnIge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSB2YWx1ZTogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZT86IGJvb2xlYW4pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnR5cG8gPSBcIkJPT0xFQU5cIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcgPSAoKTogc3RyaW5nID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0VmFsdWVOdW1iZXIgPSAoKTogbnVtYmVyID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSA/IDEgOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRWYWx1ZSA9ICgpOiBib29sZWFuID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTVFJJTkcgZXh0ZW5kcyBDbnRuciB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsdWU/OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZSB8fCAnJztcclxuICAgICAgICB0aGlzLnR5cG8gPSBcIlNUUklOR1wiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZyA9ICgpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0VmFsdWUgPSAoKTogc3RyaW5nID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOVU1CRVIgZXh0ZW5kcyBDbnRuciB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHZhbHVlOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsdWU/OiBudW1iZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZSB8fCAwO1xyXG4gICAgICAgIHRoaXMudHlwbyA9IFwiTlVNQkVSXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nID0gKCk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgKyAnJztcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIGdldFZhbHVlID0gKCk6IG51bWJlciA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVU5ERUZJTkVEIGV4dGVuZHMgQ250bnIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnR5cG8gPSBcIlVOREVGSU5FRFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZyA9ICgpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIHJldHVybiBcInVuZGVmaW5lZFwiO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5BTiBleHRlbmRzIENudG5yIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy50eXBvID0gXCJOQU5cIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcgPSAoKTogc3RyaW5nID0+IHtcclxuICAgICAgICByZXR1cm4gXCJOYU5cIjtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5VTEwgZXh0ZW5kcyBDbnRuciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudHlwbyA9IFwiTlVMTFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZyA9ICgpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0VmFsdWUgPSAoKTogb2JqZWN0ID0+IHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBUlJBWSBleHRlbmRzIENudG5yIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgdmFsdWU6IEFycmF5PENudG5yPjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29udGVudFR5cGU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZT86IEFycmF5PENudG5yPiwgY29udGVudFR5cGU6IHN0cmluZyA9ICdBTlknKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWUgfHwgbmV3IEFycmF5PENudG5yPigpO1xyXG4gICAgICAgIHRoaXMudHlwbyA9IGBBUlJBWWA7XHJcbiAgICAgICAgdGhpcy5jb250ZW50VHlwZSA9IGNvbnRlbnRUeXBlO1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgdGhpcy5EZWNsYXJlKFwibGVuZ3RoXCIsIG5ldyBMZW5ndGgodGhpcykpO1xyXG4gICAgICAgICAgICB0aGlzLkRlY2xhcmUoXCJwdXNoXCIsIG5ldyBQdXNoKHRoaXMpKTtcclxuICAgICAgICAgICAgdGhpcy5EZWNsYXJlKFwicG9wXCIsIG5ldyBQb3AodGhpcykpO1xyXG4gICAgICAgIH1jYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nID0gKCk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMudmFsdWUubGVuZ3RoO1xyXG4gICAgICAgIGxldCBsb2cgPSBgQXJyYXkgKCR7c2l6ZX0pIFtgO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxvZyArPSBgJHsodGhpcy52YWx1ZVtpXSBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCl9YDtcclxuICAgICAgICAgICAgaWYgKHNpemUgLSAxICE9PSBpKSB7XHJcbiAgICAgICAgICAgICAgICBsb2cgKz0gJywgJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsb2cgKz0gJ10nO1xyXG4gICAgICAgIHJldHVybiBsb2c7XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBnZXRWYWx1ZSA9IChpbmRleDogbnVtYmVyKTogb2JqZWN0ID0+IHtcclxuICAgICAgICBsZXQgdmFsID0gdGhpcy52YWx1ZVtpbmRleF07XHJcbiAgICAgICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzaXplID0gdGhpcy52YWx1ZS5sZW5ndGg7XHJcbiAgICAgICAgd2hpbGUgKHNpemUgPD0gaW5kZXgpIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZS5wdXNoKG5ldyBSZWZlcmVuY2UoKSk7XHJcbiAgICAgICAgICAgIHNpemUrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVbaW5kZXhdO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgYWRkVmFsdWUodmFsdWU6IENudG5yKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZS5wdXNoKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VmFsdWVMaXN0ID0gKCk6IEFycmF5PENudG5yPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgT0JKRUNUIGV4dGVuZHMgQ250bnIge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBhdHRyaWJ1dGVzOiBNYXA8c3RyaW5nLCBDbnRucj47XHJcblxyXG4gICAgY29uc3RydWN0b3IoYXR0cmlidXRlcz86IE1hcDxzdHJpbmcsIENudG5yPikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzID0gYXR0cmlidXRlcyB8fCBuZXcgTWFwPHN0cmluZywgQ250bnI+KCk7XHJcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goKHYsIGspID0+IHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlID0gdjtcclxuICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgUmVmZXJlbmNlKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9ICh2YWx1ZSBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgcmVmZXJlbmNlID0gbmV3IFJlZmVyZW5jZSgpO1xyXG4gICAgICAgICAgICByZWZlcmVuY2UuUHV0VmFsdWVPblJlZmVyZW5jZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuRGVjbGFyZShrLCByZWZlcmVuY2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudHlwbyA9IFwiT0JKRUNUXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nID0gKCk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgbGV0IGxvZyA9ICd7JztcclxuICAgICAgICBsZXQgY291bnQgPSAxO1xyXG4gICAgICAgIHRoaXMucHJvcHMuZm9yRWFjaCgodiwgaykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB2O1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBSZWZlcmVuY2UpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gKHZhbHVlIGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsb2cgKz0gYFwiJHtrfVwiIDogJHt2YWx1ZX1gO1xyXG4gICAgICAgICAgICBpZiAoY291bnQgPCB0aGlzLnByb3BzLnNpemUpIHtcclxuICAgICAgICAgICAgICAgIGxvZyArPSAnLCAnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbG9nICs9ICd9JztcclxuICAgICAgICByZXR1cm4gbG9nO1xyXG4gICAgfTtcclxufSIsImltcG9ydCB7Q250bnJ9IGZyb20gXCIuL0NudG5yXCI7XHJcbmltcG9ydCB7RGVmYXVsdFZhbHVlLCBJc1ByaW1pdGl2ZVR5cG8sIFNlbWFudGljRXhjZXB0aW9ufSBmcm9tIFwiLi9VdGlsc1wiO1xyXG5pbXBvcnQge1VOREVGSU5FRH0gZnJvbSBcIi4vUHJpbWl0aXZlVHlwb0NvbnRhaW5lclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlZmVyZW5jZSBleHRlbmRzIENudG5yIHtcclxuICAgIHByaXZhdGUgdmFsdWU6IENudG5yO1xyXG4gICAgcHJpdmF0ZSBpc0NvbnN0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHRpcG9Ob21icmU6IHN0cmluZyA9ICdhbnknO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRpcG9Ob21icmU6IHN0cmluZyA9ICdBTlknLCBpc0NvbnN0OiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudHlwbyA9IFwiUkVGRVJFTkNFXCI7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IERlZmF1bHRWYWx1ZSh0aXBvTm9tYnJlKTtcclxuICAgICAgICB0aGlzLnRpcG9Ob21icmUgPSB0aXBvTm9tYnJlO1xyXG4gICAgICAgIHRoaXMuaXNDb25zdCA9IGlzQ29uc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFJlZmVyZW5jZVZhbHVlID0gKCkgOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpcG9Ob21icmUudG9VcHBlckNhc2UoKTtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nID0gKCk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUudG9TdHJpbmcoKTtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIFB1dFZhbHVlT25SZWZlcmVuY2UodmFsdWU6IENudG5yKTogdm9pZCB7XHJcbiAgICAgICAgaWYodGhpcy5pc0NvbnN0ICYmICEodGhpcy52YWx1ZSBpbnN0YW5jZW9mIFVOREVGSU5FRCkpe1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgU2VtYW50aWNFeGNlcHRpb24oJ05vIHNlIHB1ZWRlIGNhbWJpYXIgZWwgdmFsb3IgZGUgdW5hIGNvbnN0YW50ZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHY6IENudG5yO1xyXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFJlZmVyZW5jZSkge1xyXG4gICAgICAgICAgICB2ID0gKHZhbHVlIGFzIFJlZmVyZW5jZSkudmFsdWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdiA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnRpcG9Ob21icmUgIT09IHYudHlwb1xyXG4gICAgICAgICAgICAmJiB0aGlzLnRpcG9Ob21icmUgIT09ICdBTlknXHJcbiAgICAgICAgICAgICYmIHYudHlwbyAhPT0gJ05VTEwnXHJcbiAgICAgICAgICAgICYmIHYudHlwbyAhPT0gJ1VOREVGSU5FRCdcclxuICAgICAgICAgICAgJiYgdi50eXBvICE9PSAnT0JKRUNUJ1xyXG4gICAgICAgICAgICB8fCAoSXNQcmltaXRpdmVUeXBvKHRoaXMudGlwb05vbWJyZSkgJiYgdi50eXBvID09PSAnT0JKRUNUJyAmJiB0aGlzLnRpcG9Ob21icmUgIT0gXCJBTllcIilcclxuICAgICAgICApe1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgU2VtYW50aWNFeGNlcHRpb24oYFRpcG8gJHt2LnR5cG99IG5vIHB1ZWRlIHNlciBhc2lnbmFkbyBhIFZhcmlhYmxlIGRlIHRpcG8gJHt0aGlzLnRpcG9Ob21icmV9YClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHY7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFZhbHVlID0gKCk6IENudG5yID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIHNldFZhbHVlID0gKHZhbHVlOiBDbnRucik6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIENhbGwgPSAoYXJnczogQXJyYXk8Q250bnI+KTogb2JqZWN0ID0+IHtcclxuICAgICAgICBmb3IgKGxldCBhcmcgb2YgYXJncykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcbn1cclxuIiwiaW1wb3J0IHtDbnRucn0gZnJvbSBcIi4vQ250bnJcIjtcclxuaW1wb3J0IHtSZWZlcmVuY2V9IGZyb20gXCIuL1JlZmVyZW5jZVwiO1xyXG5pbXBvcnQge1NlbWFudGljRXhjZXB0aW9ufSBmcm9tIFwiLi9VdGlsc1wiO1xyXG5pbXBvcnQge0FSUkFZLCBCT09MRUFOLCBOQU4sIE5VTEwsIE5VTUJFUiwgT0JKRUNULCBTVFJJTkcsIFVOREVGSU5FRH0gZnJvbSBcIi4vUHJpbWl0aXZlVHlwb0NvbnRhaW5lclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIElndWFsKGxmOiBDbnRuciwgcnQ6IENudG5yKTogQ250bnIge1xyXG4gICAgbGYgaW5zdGFuY2VvZiBSZWZlcmVuY2UgPyBsZiA9IChsZiBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCkgOiBsZjtcclxuICAgIHJ0IGluc3RhbmNlb2YgUmVmZXJlbmNlID8gcnQgPSAocnQgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpIDogcnQ7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gRXEobGYsIHJ0KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgU2VtYW50aWNFeGNlcHRpb24oYE9wZXJhY2lvbiBlbnRyZSB0aXBvcyAoICR7bGYudHlwb30gPT0gJHtydC50eXBvfSApIG5vIHBlcm1pdGlkYS5gKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEVxKGxmOiBhbnksIHJ0OiBhbnkpOiBDbnRuciB7XHJcbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBOVU1CRVI6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oKGxmIGFzIE5VTUJFUikuZ2V0VmFsdWUoKSA9PT0gKHJ0IGFzIE5VTUJFUikuZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIEJPT0xFQU46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTigobGYgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpID09PSAocnQgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5VTEw6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIFVOREVGSU5FRDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTkFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOVU1CRVI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTigobGYgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSA9PSAocnQgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKChsZiBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpID09IChydCBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTlVMTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgVU5ERUZJTkVEOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOQU46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBTVFJJTkc6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgU1RSSU5HOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oKGxmIGFzIFNUUklORykuZ2V0VmFsdWUoKSA9PT0gKHJ0IGFzIFNUUklORykuZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5VTEw6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIFVOREVGSU5FRDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTkFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgVU5ERUZJTkVEOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIFVOREVGSU5FRDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBOVUxMOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5VTEw6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgTkFOOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5BTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBPQkpFQ1Q6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oZmFsc2UpO1xyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgQVJSQVk6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4odHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRGlmZXJlbnRlKGxmOiBDbnRuciwgcnQ6IENudG5yKTogQ250bnIge1xyXG4gICAgbGYgaW5zdGFuY2VvZiBSZWZlcmVuY2UgPyBsZiA9IChsZiBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCkgOiBsZjtcclxuICAgIHJ0IGluc3RhbmNlb2YgUmVmZXJlbmNlID8gcnQgPSAocnQgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpIDogcnQ7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gRGlmKGxmLCBydCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFNlbWFudGljRXhjZXB0aW9uKGBPcGVyYWNpb24gZW50cmUgdGlwb3MgKCAke2xmLnR5cG99ICE9ICR7cnQudHlwb30gKSBubyBwZXJtaXRpZGEuYClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBEaWYobGY6IGFueSwgcnQ6IGFueSk6IENudG5yIHtcclxuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgY2FzZSBsZiBpbnN0YW5jZW9mIE5VTUJFUjpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOVU1CRVI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTigobGYgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpICE9PSAocnQgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKChsZiBhcyBOVU1CRVIpLmdldFZhbHVlKCkgIT09IChydCBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTlVMTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBVTkRFRklORUQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTkFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5VTUJFUjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKChsZiBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpICE9IChydCBhcyBOVU1CRVIpLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oKGxmIGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkgIT0gKHJ0IGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOVUxMOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIFVOREVGSU5FRDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOQU46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBsZiBpbnN0YW5jZW9mIFNUUklORzpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBTVFJJTkc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTigobGYgYXMgU1RSSU5HKS5nZXRWYWx1ZSgpICE9PSAocnQgYXMgU1RSSU5HKS5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTlVMTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBVTkRFRklORUQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBsZiBpbnN0YW5jZW9mIFVOREVGSU5FRDpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBVTkRFRklORUQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgTlVMTDpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOVUxMOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBCT09MRUFOKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgTkFOOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5BTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgQk9PTEVBTih0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBsZiBpbnN0YW5jZW9mIE9CSkVDVDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTih0cnVlKTtcclxuICAgICAgICAgICAgY2FzZSBsZiBpbnN0YW5jZW9mIEFSUkFZOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKHRydWUpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTWF5b3IobGY6IENudG5yLCBydDogQ250bnIpOiBDbnRuciB7XHJcbiAgICBsZiBpbnN0YW5jZW9mIFJlZmVyZW5jZSA/IGxmID0gKGxmIGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKSA6IGxmO1xyXG4gICAgcnQgaW5zdGFuY2VvZiBSZWZlcmVuY2UgPyBydCA9IChydCBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCkgOiBydDtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBNYXkobGYsIHJ0KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgU2VtYW50aWNFeGNlcHRpb24oYE9wZXJhY2lvbiBlbnRyZSB0aXBvcyAoICR7bGYudHlwb30gPiAke3J0LnR5cG99ICkgbm8gcGVybWl0aWRhLmApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gTWF5KGxmOiBhbnksIHJ0OiBhbnkpOiBDbnRuciB7XHJcbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBOVU1CRVI6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oKGxmIGFzIE5VTUJFUikuZ2V0VmFsdWUoKSA+IChydCBhcyBOVU1CRVIpLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oKGxmIGFzIE5VTUJFUikuZ2V0VmFsdWUoKSA+IChydCBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTkFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOVU1CRVI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTigobGYgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSA+IChydCBhcyBOVU1CRVIpLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oKGxmIGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkgPiAocnQgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBTVFJJTkc6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgU1RSSU5HOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oKGxmIGFzIFNUUklORykuZ2V0VmFsdWUoKSA+IChydCBhcyBTVFJJTkcpLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgTkFOOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5VTUJFUjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1lbm9yKGxmOiBDbnRuciwgcnQ6IENudG5yKTogQ250bnIge1xyXG4gICAgbGYgaW5zdGFuY2VvZiBSZWZlcmVuY2UgPyBsZiA9IChsZiBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCkgOiBsZjtcclxuICAgIHJ0IGluc3RhbmNlb2YgUmVmZXJlbmNlID8gcnQgPSAocnQgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpIDogcnQ7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gTWluKGxmLCBydCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFNlbWFudGljRXhjZXB0aW9uKGBPcGVyYWNpb24gZW50cmUgdGlwb3MgKCAke2xmLnR5cG99IDwgJHtydC50eXBvfSApIG5vIHBlcm1pdGlkYS5gKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIE1pbihsZjogYW55LCBydDogYW55KTogQ250bnIge1xyXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5VTUJFUjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKChsZiBhcyBOVU1CRVIpLmdldFZhbHVlKCkgPCAocnQgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKChsZiBhcyBOVU1CRVIpLmdldFZhbHVlKCkgPCAocnQgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5BTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBsZiBpbnN0YW5jZW9mIEJPT0xFQU46XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oKGxmIGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkgPCAocnQgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKChsZiBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpIDwgKHJ0IGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgU1RSSU5HOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIFNUUklORzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKChsZiBhcyBTVFJJTkcpLmdldFZhbHVlKCkgPCAocnQgYXMgU1RSSU5HKS5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBsZiBpbnN0YW5jZW9mIE5BTjpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOVU1CRVI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBNYXlvckVxKGxmOiBDbnRuciwgcnQ6IENudG5yKTogQ250bnIge1xyXG4gICAgbGYgaW5zdGFuY2VvZiBSZWZlcmVuY2UgPyBsZiA9IChsZiBhcyBSZWZlcmVuY2UpLmdldFZhbHVlKCkgOiBsZjtcclxuICAgIHJ0IGluc3RhbmNlb2YgUmVmZXJlbmNlID8gcnQgPSAocnQgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpIDogcnQ7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gTWF5RXEobGYsIHJ0KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgU2VtYW50aWNFeGNlcHRpb24oYE9wZXJhY2lvbiBlbnRyZSB0aXBvcyAoICR7bGYudHlwb30gPj0gJHtydC50eXBvfSApIG5vIHBlcm1pdGlkYS5gKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIE1heUVxKGxmOiBhbnksIHJ0OiBhbnkpOiBDbnRuciB7XHJcbiAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBOVU1CRVI6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oKGxmIGFzIE5VTUJFUikuZ2V0VmFsdWUoKSA+PSAocnQgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKChsZiBhcyBOVU1CRVIpLmdldFZhbHVlKCkgPj0gKHJ0IGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOQU46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5VTUJFUjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKChsZiBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpID49IChydCBhcyBOVU1CRVIpLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBCT09MRUFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oKGxmIGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkgPj0gKHJ0IGFzIEJPT0xFQU4pLmdldFZhbHVlTnVtYmVyKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgU1RSSU5HOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIFNUUklORzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKChsZiBhcyBTVFJJTkcpLmdldFZhbHVlKCkgPj0gKHJ0IGFzIFNUUklORykuZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgbGYgaW5zdGFuY2VvZiBOQU46XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTWVub3JFcShsZjogQ250bnIsIHJ0OiBDbnRucik6IENudG5yIHtcclxuICAgIGxmIGluc3RhbmNlb2YgUmVmZXJlbmNlID8gbGYgPSAobGYgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpIDogbGY7XHJcbiAgICBydCBpbnN0YW5jZW9mIFJlZmVyZW5jZSA/IHJ0ID0gKHJ0IGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKSA6IHJ0O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIE1pbkVxKGxmLCBydCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFNlbWFudGljRXhjZXB0aW9uKGBPcGVyYWNpb24gZW50cmUgdGlwb3MgKCAke2xmLnR5cG99ID49ICR7cnQudHlwb30gKSBubyBwZXJtaXRpZGEuYClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBNaW5FcShsZjogYW55LCBydDogYW55KTogQ250bnIge1xyXG4gICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5VTUJFUjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKChsZiBhcyBOVU1CRVIpLmdldFZhbHVlKCkgPD0gKHJ0IGFzIE5VTUJFUikuZ2V0VmFsdWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIEJPT0xFQU46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTigobGYgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpIDw9IChydCBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgTkFOOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJPT0xFQU4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBOVU1CRVI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTigobGYgYXMgQk9PTEVBTikuZ2V0VmFsdWVOdW1iZXIoKSA8PSAocnQgYXMgTlVNQkVSKS5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHJ0IGluc3RhbmNlb2YgQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKChsZiBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpIDw9IChydCBhcyBCT09MRUFOKS5nZXRWYWx1ZU51bWJlcigpKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBsZiBpbnN0YW5jZW9mIFNUUklORzpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgcnQgaW5zdGFuY2VvZiBTVFJJTkc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQk9PTEVBTigobGYgYXMgU1RSSU5HKS5nZXRWYWx1ZSgpIDw9IChydCBhcyBTVFJJTkcpLmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGxmIGluc3RhbmNlb2YgTkFOOlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBydCBpbnN0YW5jZW9mIE5VTUJFUjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCT09MRUFOKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0JPT0xFQU4sIE5VTEwsIE9CSkVDVCwgVU5ERUZJTkVEfSBmcm9tIFwiLi9QcmltaXRpdmVUeXBvQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7Q250bnJ9IGZyb20gXCIuL0NudG5yXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi9FbnZtbnRcIjtcclxuaW1wb3J0IHtPcH0gZnJvbSBcIi4vT3BcIjtcclxuaW1wb3J0IHtSZWZlcmVuY2V9IGZyb20gXCIuL1JlZmVyZW5jZVwiO1xyXG5pbXBvcnQge0JyZWFrT2JqfSBmcm9tIFwiLi4vbm9kZXMvQnJlYWtPYmpcIjtcclxuaW1wb3J0IHtSZXR1cm5PYmp9IGZyb20gXCIuLi9ub2Rlcy9SZXR1cm5PYmpcIjtcclxuaW1wb3J0IHtDb250aW51ZU9ian0gZnJvbSBcIi4uL25vZGVzL0NvbnRpbnVlT2JqXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VtYW50aWNFeGNlcHRpb24gZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlPzogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFcnJvckNvbXBvIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IobWVzc2FnZT86IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRGVmYXVsdFZhbHVlKHR5cG86IHN0cmluZyk6IENudG5yIHtcclxuICAgIGlmIChJc1ByaW1pdGl2ZVR5cG8odHlwbykpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFVOREVGSU5FRCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEdldE9iamVjdFZhbHVlKHR5cG8pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSXNQcmltaXRpdmVUeXBvKHR5cG86IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgdHlwbyA9IHR5cG8udG9VcHBlckNhc2UoKTtcclxuICAgIHN3aXRjaCAodHlwbykge1xyXG4gICAgICAgIGNhc2UgXCJTVFJJTkdcIjpcclxuICAgICAgICBjYXNlIFwiTlVNQkVSXCI6XHJcbiAgICAgICAgY2FzZSBcIkJPT0xFQU5cIjpcclxuICAgICAgICBjYXNlIFwiQU5ZXCI6XHJcbiAgICAgICAgY2FzZSBcIkFSUkFZXCI6XHJcbiAgICAgICAgY2FzZSBcIk5VTExcIjpcclxuICAgICAgICBjYXNlIFwiVU5ERUZJTkVEXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldE9iamVjdFZhbHVlKHR5cG86IHN0cmluZyk6IENudG5yIHtcclxuICAgIHR5cG8gPSB0eXBvLnRvVXBwZXJDYXNlKCk7XHJcbiAgICBsZXQgc3RydWN0dXJlOiBPYmplY3RTdHJ1Y3R1cmUgPSBPYmplY3RzU3RydWN0dXJlcy5vYmplY3RzLmdldCh0eXBvKTtcclxuICAgIGlmIChzdHJ1Y3R1cmUgPT09IG51bGwgfHwgc3RydWN0dXJlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgU2VtYW50aWNFeGNlcHRpb24oYE5vIGV4aXN0ZSB1bmEgZGVmaW5pY2lvbiBwYXJhIGVsIHRpcG8gJHt0eXBvfWApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0cnVjdHVyZS5HZXREZWZhdWx0VmFsdWUoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEZpbmRWYXIoY29udDogQ250bnIsIGlkZW50aWZpZXI6IHN0cmluZyk6IENudG5yIHtcclxuICAgIGxldCBvd25lckNudG5yID0gY29udDtcclxuXHJcbiAgICB3aGlsZSAob3duZXJDbnRuciAhPSBudWxsKXtcclxuICAgICAgICBpZihvd25lckNudG5yLkdldFByb3BlcnR5KGlkZW50aWZpZXIpICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICByZXR1cm4gb3duZXJDbnRuci5HZXRQcm9wZXJ0eShpZGVudGlmaWVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb3duZXJDbnRuciA9IG93bmVyQ250bnIuR2V0T3duZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyAgbmV3IFNlbWFudGljRXhjZXB0aW9uKGBpZGVudGlmaWNhZG9yICR7aWRlbnRpZmllcn0gbm8gZW5jb250cmFkb2ApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUGFzc1Byb3BzQW5kRnVuY3MoZmF0aGVyOiBFbnZtbnQsIHNvbjogRW52bW50KSB7XHJcbiAgICAvLyBmYXRoZXIucHJvcHMuZm9yRWFjaCgodiwgaykgPT4ge1xyXG4gICAgLy8gICAgIHNvbi5EZWNsYXJlKGssIHYpO1xyXG4gICAgLy8gfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2dpY1doaWxlKGVudjogRW52bW50LCBjb25kaXRpb246IE9wLCBzZW50ZW5jZXM6IEFycmF5PE9wPiwgZXh0cmE6IE9wKSB7XHJcbiAgICBsZXQgYW5zID0gY29uZGl0aW9uLkV4ZShlbnYpO1xyXG4gICAgaWYgKGFucyBpbnN0YW5jZW9mIFJlZmVyZW5jZSkge1xyXG4gICAgICAgIGFucyA9IChhbnMgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghKGFucyBpbnN0YW5jZW9mIEJPT0xFQU4pKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFNlbWFudGljRXhjZXB0aW9uKFwiQ29uZGljaW9uIHV0aWxpemFkYSBlbiBjaWNsbyB3aGlsZSBubyBzb3BvcnRhZGFcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHRtcCA9IGFucyBhcyBCT09MRUFOO1xyXG4gICAgd2hpbGUgKHRtcC5nZXRWYWx1ZSgpKSB7XHJcbiAgICAgICAgY29uc3QgZW52MCA9IG5ldyBFbnZtbnQoZW52LCBzZW50ZW5jZXMpO1xyXG4gICAgICAgIFBhc3NQcm9wc0FuZEZ1bmNzKGVudiwgZW52MCk7XHJcbiAgICAgICAgY29uc3QgcmV0ID0gZW52MC5HT19BTEwoKTtcclxuXHJcbiAgICAgICAgaWYgKHJldCBpbnN0YW5jZW9mIEJyZWFrT2JqKSB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmV0IGluc3RhbmNlb2YgUmV0dXJuT2JqKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHJldCBpbnN0YW5jZW9mIENvbnRpbnVlT2JqKXtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZXh0cmEgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgZXh0cmEuRXhlKGVudik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYW5zMCA9IGNvbmRpdGlvbi5FeGUoZW52KTtcclxuICAgICAgICBpZiAoYW5zMCBpbnN0YW5jZW9mIFJlZmVyZW5jZSkge1xyXG4gICAgICAgICAgICBhbnMwID0gKGFuczAgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0bXAgPSBhbnMwIGFzIEJPT0xFQU47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExvZ2ljRG9XaGlsZShlbnY6IEVudm1udCwgY29uZGl0aW9uOiBPcCwgc2VudGVuY2VzOiBBcnJheTxPcD4sIGV4dHJhOiBPcCkge1xyXG4gICAgbGV0IGFucyA9IGNvbmRpdGlvbi5FeGUoZW52KTtcclxuICAgIGlmIChhbnMgaW5zdGFuY2VvZiBSZWZlcmVuY2UpIHtcclxuICAgICAgICBhbnMgPSAoYW5zIGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIShhbnMgaW5zdGFuY2VvZiBCT09MRUFOKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBTZW1hbnRpY0V4Y2VwdGlvbihcIkNvbmRpY2lvbiB1dGlsaXphZGEgZW4gY2ljbG8gd2hpbGUgbm8gc29wb3J0YWRhXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBlbnYwID0gbmV3IEVudm1udChlbnYsIHNlbnRlbmNlcyk7XHJcbiAgICBQYXNzUHJvcHNBbmRGdW5jcyhlbnYsIGVudjApO1xyXG4gICAgZW52MC5HT19BTEwoKTtcclxuXHJcbiAgICBsZXQgYW5zMCA9IGNvbmRpdGlvbi5FeGUoZW52KTtcclxuICAgIGlmIChhbnMwIGluc3RhbmNlb2YgUmVmZXJlbmNlKSB7XHJcbiAgICAgICAgYW5zMCA9IChhbnMwIGFzIFJlZmVyZW5jZSkuZ2V0VmFsdWUoKTtcclxuICAgIH1cclxuICAgIGxldCB0bXAgPSBhbnMwIGFzIEJPT0xFQU47XHJcblxyXG4gICAgd2hpbGUgKHRtcC5nZXRWYWx1ZSgpKSB7XHJcbiAgICAgICAgY29uc3QgZW52MCA9IG5ldyBFbnZtbnQoZW52LCBzZW50ZW5jZXMpO1xyXG4gICAgICAgIFBhc3NQcm9wc0FuZEZ1bmNzKGVudiwgZW52MCk7XHJcbiAgICAgICAgY29uc3QgcmV0ID0gZW52MC5HT19BTEwoKTtcclxuXHJcbiAgICAgICAgaWYgKHJldCBpbnN0YW5jZW9mIEJyZWFrT2JqKSB7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmV0IGluc3RhbmNlb2YgUmV0dXJuT2JqKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHJldCBpbnN0YW5jZW9mIENvbnRpbnVlT2JqKXtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZXh0cmEgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgZXh0cmEuRXhlKGVudik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgYW5zMCA9IGNvbmRpdGlvbi5FeGUoZW52KTtcclxuICAgICAgICBpZiAoYW5zMCBpbnN0YW5jZW9mIFJlZmVyZW5jZSkge1xyXG4gICAgICAgICAgICBhbnMwID0gKGFuczAgYXMgUmVmZXJlbmNlKS5nZXRWYWx1ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0bXAgPSBhbnMwIGFzIEJPT0xFQU47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE15TWFwIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgbWFwOiBNYXA8YW55LCBhbnk+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubWFwID0gbmV3IE1hcDxhbnksIGFueT4oKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRNYXAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEVudHJ5KGtleTogYW55LCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5tYXAuc2V0KGtleSwgdmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgT2JqZWN0U3RydWN0dXJlIHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcHJvcGVydGllczogTWFwPHN0cmluZywgc3RyaW5nPjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzOiBNYXA8c3RyaW5nLCBzdHJpbmc+KSB7XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcclxuICAgIH1cclxuXHJcbiAgICBHZXREZWZhdWx0VmFsdWUoKTogQ250bnJ7XHJcbiAgICAgICAgY29uc3QgYXR0cmlidXRlczogTWFwPHN0cmluZywgQ250bnI+ID0gbmV3IE1hcDxzdHJpbmcsIENudG5yPigpO1xyXG4gICAgICAgIHRoaXMucHJvcGVydGllcy5mb3JFYWNoKCh2LCBrKSA9PiB7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMuc2V0KGssIG5ldyBVTkRFRklORUQoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBPQkpFQ1QoYXR0cmlidXRlcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBPYmplY3RzU3RydWN0dXJlc3tcclxuICAgIHB1YmxpYyBzdGF0aWMgb2JqZWN0czogTWFwPHN0cmluZywgT2JqZWN0U3RydWN0dXJlPiA9IG5ldyBNYXA8c3RyaW5nLCBPYmplY3RTdHJ1Y3R1cmU+KCk7XHJcbn0iLCJpbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL0Vudm1udFwiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vQ250bnJcIjtcclxuXHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRnVuY3Rpb25SZXByZXNlbnQgZXh0ZW5kcyBDbnRucntcclxuICAgIHB1YmxpYyBhYnN0cmFjdCBFWEUoZW52MDogRW52bW50LCBhcmdzOiBBcnJheTxDbnRucj4pOiBDbnRucjtcclxufSIsImltcG9ydCB7RnVuY3Rpb25SZXByZXNlbnR9IGZyb20gXCIuL0Z1bmN0aW9uUmVwcmVzZW50XCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTmF0aXZlIGV4dGVuZHMgRnVuY3Rpb25SZXByZXNlbnR7XHJcblxyXG59IiwiaW1wb3J0IHtGdW5jdGlvblJlcHJlc2VudH0gZnJvbSBcIi4vRnVuY3Rpb25SZXByZXNlbnRcIjtcclxuaW1wb3J0IHtPcH0gZnJvbSBcIi4uL09wXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vRW52bW50XCI7XHJcbmltcG9ydCB7Q250bnJ9IGZyb20gXCIuLi9DbnRuclwiO1xyXG5pbXBvcnQge1JlZmVyZW5jZX0gZnJvbSBcIi4uL1JlZmVyZW5jZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJEZWZpbmVkIGV4dGVuZHMgRnVuY3Rpb25SZXByZXNlbnQge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzcmM6IEFycmF5PE9wPjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcGFyYW1zOiBBcnJheTxPcD47XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHR5cGU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzcmM6IEFycmF5PE9wPiwgcGFyYW1zOiBBcnJheTxPcD4sIHR5cGU6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zcmMgPSBzcmM7XHJcbiAgICAgICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRUeXBlKCk6IHN0cmluZ3tcclxuICAgICAgICByZXR1cm4gdGhpcy50eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTcmMoKTogQXJyYXk8T3A+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zcmM7XHJcbiAgICB9XHJcblxyXG4gICAgRVhFKGVudjA6IEVudm1udCwgYXJnczogQXJyYXk8Q250bnI+KTogQ250bnIge1xyXG4gICAgICAgIGxldCBlbnYgPSBuZXcgRW52bW50KGVudjAsIHRoaXMuc3JjKTtcclxuICAgICAgICBjb25zdCByZWZlcmVuY2VzOiBBcnJheTxSZWZlcmVuY2U+ID0gbmV3IEFycmF5PFJlZmVyZW5jZT4oKTtcclxuICAgICAgICBmb3IgKGxldCBwYXJhbSBvZiB0aGlzLnBhcmFtcykge1xyXG4gICAgICAgICAgICByZWZlcmVuY2VzLnB1c2gocGFyYW0uRXhlKGVudikgYXMgUmVmZXJlbmNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aCAmJiBpIDwgcmVmZXJlbmNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICByZWZlcmVuY2VzW2ldLlB1dFZhbHVlT25SZWZlcmVuY2UoYXJnc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBlbnYuR09fQUxMKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge05hdGl2ZX0gZnJvbSBcIi4uL2Z1bmN0aW9ucy9OYXRpdmVcIjtcclxuaW1wb3J0IHtBUlJBWSwgTlVNQkVSfSBmcm9tIFwiLi4vUHJpbWl0aXZlVHlwb0NvbnRhaW5lclwiO1xyXG5pbXBvcnQge0Vudm1udH0gZnJvbSBcIi4uL0Vudm1udFwiO1xyXG5pbXBvcnQge0NudG5yfSBmcm9tIFwiLi4vQ250bnJcIjtcclxuaW1wb3J0IHtSZXR1cm5PYmp9IGZyb20gXCIuLi8uLi9ub2Rlcy9SZXR1cm5PYmpcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMZW5ndGggZXh0ZW5kcyBOYXRpdmV7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGFycmF5OiBBUlJBWTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihhcnJheTogQVJSQVkpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBFWEUoZW52MDogRW52bW50LCBhcmdzOiBBcnJheTxDbnRucj4pOiBDbnRuciB7XHJcbiAgICAgICAgbGV0IHNpemUgPSB0aGlzLmFycmF5LmdldFZhbHVlTGlzdCgpLmxlbmd0aDtcclxuICAgICAgICByZXR1cm4gbmV3IFJldHVybk9iaihuZXcgTlVNQkVSKHNpemUpKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7TmF0aXZlfSBmcm9tIFwiLi4vZnVuY3Rpb25zL05hdGl2ZVwiO1xyXG5pbXBvcnQge0FSUkFZLCBVTkRFRklORUR9IGZyb20gXCIuLi9QcmltaXRpdmVUeXBvQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vRW52bW50XCI7XHJcbmltcG9ydCB7Q250bnJ9IGZyb20gXCIuLi9DbnRuclwiO1xyXG5pbXBvcnQge1JldHVybk9ian0gZnJvbSBcIi4uLy4uL25vZGVzL1JldHVybk9ialwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvcCBleHRlbmRzIE5hdGl2ZXtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgYXJyYXk6IEFSUkFZO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGFycmF5OiBBUlJBWSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5hcnJheSA9IGFycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIEVYRShlbnYwOiBFbnZtbnQsIGFyZ3M6IEFycmF5PENudG5yPik6IENudG5yIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLmFycmF5LmdldFZhbHVlTGlzdCgpLnBvcCgpO1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmV0dXJuT2JqKG5ldyBVTkRFRklORUQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgUmV0dXJuT2JqKHZhbHVlKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7TmF0aXZlfSBmcm9tIFwiLi4vZnVuY3Rpb25zL05hdGl2ZVwiO1xyXG5pbXBvcnQge0FSUkFZLCBOVU1CRVJ9IGZyb20gXCIuLi9QcmltaXRpdmVUeXBvQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7RW52bW50fSBmcm9tIFwiLi4vRW52bW50XCI7XHJcbmltcG9ydCB7Q250bnJ9IGZyb20gXCIuLi9DbnRuclwiO1xyXG5pbXBvcnQge1JldHVybk9ian0gZnJvbSBcIi4uLy4uL25vZGVzL1JldHVybk9ialwiO1xyXG5pbXBvcnQge1JlZmVyZW5jZX0gZnJvbSBcIi4uL1JlZmVyZW5jZVwiO1xyXG5pbXBvcnQge1NlbWFudGljRXhjZXB0aW9ufSBmcm9tIFwiLi4vVXRpbHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQdXNoIGV4dGVuZHMgTmF0aXZle1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBhcnJheTogQVJSQVk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYXJyYXk6IEFSUkFZKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmFycmF5ID0gYXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgRVhFKGVudjA6IEVudm1udCwgYXJnczogQXJyYXk8Q250bnI+KTogQ250bnIge1xyXG4gICAgICAgIGxldCBzaXplID0gdGhpcy5hcnJheS5nZXRWYWx1ZUxpc3QoKS5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgaSBpbiBhcmdzKSB7XHJcbiAgICAgICAgICAgIGxldCByZWYgPSBuZXcgUmVmZXJlbmNlKCk7XHJcbiAgICAgICAgICAgIHJlZi5zZXRWYWx1ZShhcmdzW2ldKTtcclxuICAgICAgICAgICAgdGhpcy5hcnJheS5hZGRWYWx1ZShyZWYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IFJldHVybk9iaihuZXcgTlVNQkVSKHNpemUpKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=