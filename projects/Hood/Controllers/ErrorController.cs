﻿using Hood.Models;
using Microsoft.ApplicationInsights;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Text;

namespace Hood.Controllers
{
    [Route("error")]
    public class ErrorController : BaseController
    {
        private readonly TelemetryClient _telemetryClient;

        public ErrorController(TelemetryClient telemetryClient) : base()
        {
            _telemetryClient = telemetryClient;
        }

        [Route("500")]
        public async System.Threading.Tasks.Task<IActionResult> AppErrorAsync()
        {
            ErrorModel model = GetErrorInformation();

            await _logService.AddExceptionAsync<ErrorController>($"Page not found: {model.OriginalUrl}", model.Error);

            _telemetryClient.TrackException(model.Error);
            _telemetryClient.TrackEvent("Error.ServerError", new Dictionary<string, string>
            {
                ["error"] = model.ErrorMessage
            });

            return View("Index", model);
        }

        [Route("404")]
        public async System.Threading.Tasks.Task<IActionResult> PageNotFoundAsync()
        {
            ErrorModel model = new ErrorModel
            {
                OriginalUrl = "unknown"
            };

            if (HttpContext.Items.ContainsKey("originalPath"))
            {
                model.OriginalUrl = HttpContext.Items["originalPath"] as string;
            }

            await _logService.AddLogAsync<ErrorController>($"Page not found: {model.OriginalUrl}", type: LogType.Error404);

            _telemetryClient.TrackEvent("Error.PageNotFound", new Dictionary<string, string>
            {
                ["originalPath"] = model.OriginalUrl
            });

            return View("Index", model);
        }

        private ErrorModel GetErrorInformation()
        {
            var model = new ErrorModel();
            var feature = HttpContext.Features.Get<IExceptionHandlerFeature>();
            model.Error = feature?.Error;
            model.RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            model.ErrorMessage = feature.Error.Message;
            return model;
        }
    }
}
