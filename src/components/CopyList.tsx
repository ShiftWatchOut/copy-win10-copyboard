import dots from "../assets/dots-horizontal.svg"
import pin from "../assets/pin.svg"
import React from "react";

const CopyList = () => {
  const items = [
    {
      value: 'hello',
      type: 'string',
    },
    {
      value: 'clip board',
      type: 'string',
    },
    {
      value: 'testing',
      type: 'string',
    },
    {
      value: 'https://gist.github.com/laispace/666dd7b27e9116faece6',
      type: 'string',
    },
    {
      value: 'S8P4SUD7J4-eyJsaWNlbnNlSWQiOiJTOFA0U1VEN0o0IiwibGljZW5zZWVOYW1lIjoiaHlwb3MgdGltYnJlcyIsImFzc2lnbmVlTmFtZSI6IiIsImFzc2lnbmVlRW1haWwiOiIiLCJsaWNlbnNlUmVzdHJpY3Rpb24iOiIiLCJjaGVja0NvbmN1cnJlbnRVc2UiOmZhbHNlLCJwcm9kdWN0cyI6W3siY29kZSI6IkdPIiwiZmFsbGJhY2tEYXRlIjoiMjAyMy0wNC0xMyIsInBhaWRVcFRvIjoiMjAyMy0wNC0xMyIsImV4dGVuZGVkIjpmYWxzZX0seyJjb2RlIjoiUEdPIiwiZmFsbGJhY2tEYXRlIjoiMjAyMy0wNC0xMyIsInBhaWRVcFRvIjoiMjAyMy0wNC0xMyIsImV4dGVuZGVkIjp0cnVlfSx7ImNvZGUiOiJQV1MiLCJmYWxsYmFja0RhdGUiOiIyMDIzLTA0LTEzIiwicGFpZFVwVG8iOiIyMDIzLTA0LTEzIiwiZXh0ZW5kZWQiOnRydWV9LHsiY29kZSI6IlBTSSIsImZhbGxiYWNrRGF0ZSI6IjIwMjMtMDQtMTMiLCJwYWlkVXBUbyI6IjIwMjMtMDQtMTMiLCJleHRlbmRlZCI6dHJ1ZX0seyJjb2RlIjoiUENXTVAiLCJmYWxsYmFja0RhdGUiOiIyMDIzLTA0LTEzIiwicGFpZFVwVG8iOiIyMDIzLTA0LTEzIiwiZXh0ZW5kZWQiOnRydWV9XSwibWV0YWRhdGEiOiIwMTIwMjIwNDE1UFNBTjAwMDAwNSIsImhhc2giOiJUUklBTDotNDYyNzkwODUiLCJncmFjZVBlcmlvZERheXMiOjcsImF1dG9Qcm9sb25nYXRlZCI6ZmFsc2UsImlzQXV0b1Byb2xvbmdhdGVkIjpmYWxzZX0=-I26VzSeW3jLAq9xaTRk+cmYITRqvn/HG4hp6eGyjZB14OF5khZFVhvKvpjQeO/Kyo9NT8Ei9MoMw2WlM1bNDrcMa+UFGnl66QIAD3w/P5bDgb7VWgMLri0e7BU7vmGPVL3v3gd7/Ru4QHesupIY+n6DDphD206tn/jbSfyy4n5bP9EDqSp4Ern0uRP9CGB0qgqUAROFRP8H+hOEts7XM7rjRabZgnf4339zICAGj1lEEhlxVcqEAoF+GhNl5nN7i802Q4aHxJUt0cYaMDc2ZXDQRqq5k66qjCyfTSyZG5o7Oue7zRZ5WAV9T8XSbW1EJkl3fI31B65JKqODwva+4JQ==-MIIETDCCAjSgAwIBAgIBDTANBgkqhkiG9w0BAQsFADAYMRYwFAYDVQQDDA1KZXRQcm9maWxlIENBMB4XDTIwMTAxOTA5MDU1M1oXDTIyMTAyMTA5MDU1M1owHzEdMBsGA1UEAwwUcHJvZDJ5LWZyb20tMjAyMDEwMTkwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCUlaUFc1wf+CfY9wzFWEL2euKQ5nswqb57V8QZG7d7RoR6rwYUIXseTOAFq210oMEe++LCjzKDuqwDfsyhgDNTgZBPAaC4vUU2oy+XR+Fq8nBixWIsH668HeOnRK6RRhsr0rJzRB95aZ3EAPzBuQ2qPaNGm17pAX0Rd6MPRgjp75IWwI9eA6aMEdPQEVN7uyOtM5zSsjoj79Lbu1fjShOnQZuJcsV8tqnayeFkNzv2LTOlofU/Tbx502Ro073gGjoeRzNvrynAP03pL486P3KCAyiNPhDs2z8/COMrxRlZW5mfzo0xsK0dQGNH3UoG/9RVwHG4eS8LFpMTR9oetHZBAgMBAAGjgZkwgZYwCQYDVR0TBAIwADAdBgNVHQ4EFgQUJNoRIpb1hUHAk0foMSNM9MCEAv8wSAYDVR0jBEEwP4AUo562SGdCEjZBvW3gubSgUouX8bOhHKQaMBgxFjAUBgNVBAMMDUpldFByb2ZpbGUgQ0GCCQDSbLGDsoN54TATBgNVHSUEDDAKBggrBgEFBQcDATALBgNVHQ8EBAMCBaAwDQYJKoZIhvcNAQELBQADggIBAB2J1ysRudbkqmkUFK8xqhiZaYPd30TlmCmSAaGJ0eBpvkVeqA2jGYhAQRqFiAlFC63JKvWvRZO1iRuWCEfUMkdqQ9VQPXziE/BlsOIgrL6RlJfuFcEZ8TK3syIfIGQZNCxYhLLUuet2HE6LJYPQ5c0jH4kDooRpcVZ4rBxNwddpctUO2te9UU5/FjhioZQsPvd92qOTsV+8Cyl2fvNhNKD1Uu9ff5AkVIQn4JU23ozdB/R5oUlebwaTE6WZNBs+TA/qPj+5/we9NH71WRB0hqUoLI2AKKyiPw++FtN4Su1vsdDlrAzDj9ILjpjJKA1ImuVcG329/WTYIKysZ1CWK3zATg9BeCUPAV1pQy8ToXOq+RSYen6winZ2OO93eyHv2Iw5kbn1dqfBw1BuTE29V2FJKicJSu8iEOpfoafwJISXmz1wnnWL3V/0NxTulfWsXugOoLfv0ZIBP1xH9kmf22jjQ2JiHhQZP7ZDsreRrOeIQ/c4yR8IQvMLfC0WKQqrHu5ZzXTH4NO3CwGWSlTY74kE91zXB5mwWAx1jig+UXYc2w4RkVhy0//lOmVya/PEepuuTTI4+UJwC7qbVlh5zfhj8oTNUXgN0AOc+Q0/WFPl1aw5VV/VrO8FCoB15lFVlpKaQ1Yh+DVU8ke+rt9Th0BCHXe0uZOEmH0nOnH/0onD',
      type: 'string',
    },
    {
      value: `
    {
      value: 'hello',
      type: 'string',
    },`,
      type: 'string',
    },
  ]
  const handlePaste = (value: string) => {
    console.log('try to paste', value)
  }
  const handleMore = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation()
    console.log('try to more',)
  }
  const handlePin = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation()
    console.log('try to pin',)
  }
  return <div className='copy-list'>
    <div className='function-bar'>
      {/* TODO: 留作清除按钮和 tab 页 */}
    </div>
    {
      items.map((item, idx) => {
        return <div
          key={idx}
          className='copy-item'
          tabIndex={idx + 2}
          onClick={() => {
            handlePaste(item.value)
          }}
          onKeyDown={event => {
            if (event.code === 'Enter') {
              handlePaste(item.value)
            }
          }}
        >
          <div className='value'>{item.value}</div>
          <div className='action'>
            <div className='more btn' title='查看更多信息' onClickCapture={handleMore}>
              <img src={dots} alt=''/>
            </div>
            <div className='pin btn' title='固定项目' onClickCapture={handlePin}>
              <img src={pin} alt=''/>
            </div>
          </div>
        </div>;
      },)
    }
  </div>
}

export default CopyList;