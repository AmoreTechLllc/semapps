import {jsxDEV as $lL6sH$jsxDEV, Fragment as $lL6sH$Fragment} from "react/jsx-dev-runtime";
import $lL6sH$react, {useMemo as $lL6sH$useMemo, useState as $lL6sH$useState} from "react";
import {useRecordContext as $lL6sH$useRecordContext, required as $lL6sH$required, useInput as $lL6sH$useInput, Labeled as $lL6sH$Labeled, InputHelperText as $lL6sH$InputHelperText, useDataProvider as $lL6sH$useDataProvider, useTranslate as $lL6sH$useTranslate} from "react-admin";
import $lL6sH$markdowntojsx from "markdown-to-jsx";
import $lL6sH$lodashget from "lodash/get";
import $lL6sH$reactmde from "react-mde";
import {FormControl as $lL6sH$FormControl, FormHelperText as $lL6sH$FormHelperText} from "@mui/material";
import {styled as $lL6sH$styled} from "@mui/system";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $cf6ed0ef7f5d4af7$exports = {};

$parcel$export($cf6ed0ef7f5d4af7$exports, "default", () => $cf6ed0ef7f5d4af7$export$2e2bcd8739ae039);





const $cf6ed0ef7f5d4af7$var$MarkdownField = ({ source: source, LabelComponent: LabelComponent, overrides: overrides = {}, ...rest })=>{
    const record = (0, $lL6sH$useRecordContext)();
    if (!record || !(0, $lL6sH$lodashget)(record, source)) return null;
    return /*#__PURE__*/ (0, $lL6sH$jsxDEV)((0, $lL6sH$markdowntojsx), {
        options: {
            createElement (type, props, children) {
                if (props.label) return /*#__PURE__*/ (0, $lL6sH$jsxDEV)((0, $lL6sH$Fragment), {
                    children: [
                        /*#__PURE__*/ (0, $lL6sH$jsxDEV)(LabelComponent, {
                            children: props.label
                        }, void 0, false, void 0, void 0),
                        /*#__PURE__*/ (0, $lL6sH$react).createElement(type, props, children)
                    ]
                }, void 0, true);
                return /*#__PURE__*/ (0, $lL6sH$react).createElement(type, props, children);
            },
            overrides: {
                h1: LabelComponent,
                ...overrides
            },
            ...rest
        },
        children: (0, $lL6sH$lodashget)(record, source)
    }, void 0, false, {
        fileName: "packages/markdown-components/src/MarkdownField.js",
        lineNumber: 11,
        columnNumber: 5
    }, undefined);
};
$cf6ed0ef7f5d4af7$var$MarkdownField.defaultProps = {
    LabelComponent: "h2"
};
var $cf6ed0ef7f5d4af7$export$2e2bcd8739ae039 = $cf6ed0ef7f5d4af7$var$MarkdownField;


var $ccc6163e3bb48ca3$exports = {};

$parcel$export($ccc6163e3bb48ca3$exports, "default", () => $ccc6163e3bb48ca3$export$2e2bcd8739ae039);







const $ccc6163e3bb48ca3$var$StyledFormControl = (0, $lL6sH$styled)((0, $lL6sH$FormControl))(({ theme: theme })=>({
        "&.validationError": {
            "& p": {
                color: theme.palette.error.main
            },
            "& .mde-text": {
                outline: "-webkit-focus-ring-color auto 1px",
                outlineOffset: 0,
                outlineColor: theme.palette.error.main,
                outlineStyle: "auto",
                outlineWidth: 1
            },
            "& p.MuiFormHelperText-root": {
                color: theme.palette.error.main
            }
        }
    }));
const $ccc6163e3bb48ca3$var$MarkdownInput = (props)=>{
    const { validate: validate } = props;
    const isRequired = (0, $lL6sH$useMemo)(()=>!!validate && !![].concat(validate).find((v)=>v.toString() === (0, $lL6sH$required)().toString()), [
        validate
    ]);
    const [tab, setTab] = (0, $lL6sH$useState)("write");
    const { field: { value: value, onChange: onChange }, fieldState: { isDirty: isDirty, invalid: invalid, error: error, isTouched: isTouched } } = (0, $lL6sH$useInput)(props);
    return /*#__PURE__*/ (0, $lL6sH$jsxDEV)($ccc6163e3bb48ca3$var$StyledFormControl, {
        fullWidth: true,
        className: `ra-input-mde ${invalid ? "validationError" : ""}`,
        children: [
            /*#__PURE__*/ (0, $lL6sH$jsxDEV)((0, $lL6sH$Labeled), {
                ...props,
                isRequired: isRequired,
                children: /*#__PURE__*/ (0, $lL6sH$jsxDEV)((0, $lL6sH$reactmde), {
                    value: value,
                    onChange: (value)=>onChange(value),
                    onTabChange: (tab)=>setTab(tab),
                    generateMarkdownPreview: async (markdown)=>/*#__PURE__*/ (0, $lL6sH$jsxDEV)((0, $lL6sH$markdowntojsx), {
                            children: markdown
                        }, void 0, false, void 0, void 0),
                    selectedTab: tab,
                    ...props
                }, void 0, false, {
                    fileName: "packages/markdown-components/src/MarkdownInput.js",
                    lineNumber: 41,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "packages/markdown-components/src/MarkdownInput.js",
                lineNumber: 40,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0, $lL6sH$jsxDEV)((0, $lL6sH$FormHelperText), {
                error: isDirty && invalid,
                margin: "dense",
                variant: "outlined",
                children: /*#__PURE__*/ (0, $lL6sH$jsxDEV)((0, $lL6sH$InputHelperText), {
                    error: isDirty && invalid && error,
                    helperText: props.helperText,
                    touched: error || isTouched
                }, void 0, false, {
                    fileName: "packages/markdown-components/src/MarkdownInput.js",
                    lineNumber: 51,
                    columnNumber: 9
                }, undefined)
            }, void 0, false, {
                fileName: "packages/markdown-components/src/MarkdownInput.js",
                lineNumber: 50,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "packages/markdown-components/src/MarkdownInput.js",
        lineNumber: 39,
        columnNumber: 5
    }, undefined);
};
var $ccc6163e3bb48ca3$export$2e2bcd8739ae039 = $ccc6163e3bb48ca3$var$MarkdownInput;



const $c57f5824f8ba8f82$var$useLoadLinks = (resourceType, labelProp)=>{
    const dataProvider = (0, $lL6sH$useDataProvider)();
    const translate = (0, $lL6sH$useTranslate)();
    return async (keyword)=>{
        if (keyword) {
            const results = await dataProvider.getList(resourceType, {
                pagination: {
                    page: 1,
                    perPage: 5
                },
                filter: {
                    q: keyword
                }
            });
            if (results.total > 0) return results.data.map((record)=>({
                    preview: record[labelProp],
                    value: `[${record[labelProp]}](/${resourceType}/${encodeURIComponent(record.id)}/show)`
                }));
            return [
                {
                    preview: translate("ra.navigation.no_results"),
                    value: `[${keyword}`
                }
            ];
        }
        return [
            {
                preview: translate("ra.action.search"),
                value: `[${keyword}`
            }
        ];
    };
};
var $c57f5824f8ba8f82$export$2e2bcd8739ae039 = $c57f5824f8ba8f82$var$useLoadLinks;




export {$cf6ed0ef7f5d4af7$export$2e2bcd8739ae039 as MarkdownField, $ccc6163e3bb48ca3$export$2e2bcd8739ae039 as MarkdownInput, $c57f5824f8ba8f82$export$2e2bcd8739ae039 as useLoadLinks};
//# sourceMappingURL=index.es.js.map
